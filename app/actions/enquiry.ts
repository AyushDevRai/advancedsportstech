"use server";

import { company } from "@/content/ast";
import { enquirySchema, type EnquiryResult } from "@/lib/enquiry";

export async function prepareEnquiry(input: unknown): Promise<EnquiryResult> {
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) return { status: "error", message: "Please check your details and try again." };
  const { name, email, mobile, subject, message } = parsed.data;
  const text = `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nSubject: ${subject}\n\n${message}`;
  const emailHref = `mailto:${company.contact.email}?subject=${encodeURIComponent(`AST enquiry: ${subject}`)}&body=${encodeURIComponent(text)}`;
  const whatsappHref = `${company.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  // A working email/WhatsApp handoff is available before mail-service configuration.
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL) return { status: "draft", message: "Your enquiry is ready. Choose email or WhatsApp below to send it to AST.", emailHref, whatsappHref };
  try {
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [company.contact.email], reply_to: email, subject: `AST enquiry: ${subject.replace(/[\r\n]/g, " ")}`, text }), signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error("Delivery unavailable");
    return { status: "sent", message: "Thank you. Your enquiry has been sent to AST." };
  } catch {
    return { status: "error", message: "We couldn’t send this enquiry directly. You can send it by email or WhatsApp below.", emailHref, whatsappHref };
  }
}
