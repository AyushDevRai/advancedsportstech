"use server";

import { enquirySchema, type EnquiryResult } from "@/lib/enquiry";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "developer1@pacecourt.com";
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "1-6S_xc--z4_qqBBDsDwpyGtZfE3pZ5pcLLTEjnDgxxA";

export async function prepareEnquiry(input: unknown): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Please check your details and try again."
    };
  }

  const { name, email, mobile, subject, message, website } = parsed.data;

  // Anti-spam honeypot verification: reject bot submissions silently
  if (website && website.trim() !== "") {
    return {
      status: "sent",
      message: "Thank you! Your enquiry has been submitted successfully."
    };
  }

  const payload = {
    timestamp: new Date().toISOString(),
    name,
    email,
    mobile,
    phone: mobile,
    subject,
    message,
    adminEmail: ADMIN_EMAIL,
    sheetId: GOOGLE_SHEET_ID
  };

  const scriptUrl = process.env.GOOGLE_SCRIPT_WEBAPP_URL || process.env.APPS_SCRIPT_URL;

  if (scriptUrl) {
    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload),
        redirect: "follow",
        signal: AbortSignal.timeout(15000)
      });

      if (!response.ok) {
        console.error(`[AST Enquiry] Google Apps Script responded with HTTP ${response.status}`);
        return {
          status: "error",
          message: "Something went wrong. Please try again."
        };
      }

      const text = await response.text();
      let resultJson: { success?: boolean; message?: string } = {};
      try {
        resultJson = JSON.parse(text);
      } catch {
        resultJson = { success: true };
      }

      if (resultJson && resultJson.success === false) {
        console.error("[AST Enquiry] Script returned failure:", resultJson.message);
        return {
          status: "error",
          message: "Something went wrong. Please try again."
        };
      }

      return {
        status: "sent",
        message: "Thank you! Your enquiry has been submitted successfully."
      };
    } catch (error) {
      console.error("[AST Enquiry] Error forwarding to Google Apps Script:", error);
      return {
        status: "error",
        message: "Something went wrong. Please try again."
      };
    }
  }

  // Diagnostic logging when script URL is not yet configured in environment
  console.log("[AST Enquiry] Received submission:", {
    name,
    email,
    mobile,
    subject,
    adminEmail: ADMIN_EMAIL,
    sheetId: GOOGLE_SHEET_ID
  });
  console.warn(
    "[AST Enquiry] GOOGLE_SCRIPT_WEBAPP_URL is not set in .env.local. Submission recorded in server logs. Once GOOGLE_SCRIPT_WEBAPP_URL is configured, submissions will sync to the private Google Sheet and email developer1@pacecourt.com."
  );

  return {
    status: "sent",
    message: "Thank you! Your enquiry has been submitted successfully."
  };
}
