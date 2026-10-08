/**
 * ============================================================================
 * AST WEBSITE INQUIRY INTEGRATION — GOOGLE APPS SCRIPT WEB APP
 * ============================================================================
 * 
 * Target Private Google Sheet:
 * https://docs.google.com/spreadsheets/d/1-6S_xc--z4_qqBBDsDwpyGtZfE3pZ5pcLLTEjnDgxxA/edit
 * 
 * Target Business / Admin Email:
 * developer1@pacecourt.com
 * 
 * INSTRUCTIONS TO DEPLOY:
 * 1. Open the Google Sheet above.
 * 2. Click "Extensions" > "Apps Script".
 * 3. Delete any default code in Code.gs and paste this entire script.
 * 4. Click the "Save" icon (or press Ctrl+S / Cmd+S).
 * 5. Click the blue "Deploy" button at the top right > "New deployment".
 * 6. Under "Select type", click the gear icon and select "Web app".
 * 7. Configure:
 *    - Description: "AST Website Inquiry Endpoint"
 *    - Execute as: "Me (your Google account)"
 *    - Who has access: "Anyone"
 * 8. Click "Deploy".
 * 9. Review and Grant permissions (click "Authorize access", choose your account,
 *    click "Advanced", then click "Go to Untitled project (unsafe)", and "Allow").
 * 10. Copy the resulting "Web app URL" (ends in `/exec`).
 * 11. Paste this URL into your website's `.env.local` file:
 *     GOOGLE_SCRIPT_WEBAPP_URL=https://script.google.com/macros/s/.../exec
 * ============================================================================
 */

// Configuration
const CONFIG = {
  ADMIN_EMAIL: "developer1@pacecourt.com",
  SHEET_ID: "1-6S_xc--z4_qqBBDsDwpyGtZfE3pZ5pcLLTEjnDgxxA",
  TIMEZONE: "Asia/Kolkata",
  HEADERS: ["Timestamp", "Name", "Email", "Phone", "Subject", "Message", "Status"]
};

/**
 * Handle incoming POST requests from the website backend.
 */
function doPost(e) {
  try {
    if (!e || (!e.postData && !e.parameter)) {
      return createJsonResponse({
        success: false,
        message: "No data received"
      }, 400);
    }

    // Parse submitted payload
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    // 1. Anti-spam honeypot verification
    // If the hidden 'website' field contains any value, reject quietly
    if (data.website && data.website.toString().trim() !== "") {
      return createJsonResponse({
        success: true,
        message: "Enquiry submitted successfully"
      });
    }

    // 2. Validate required fields
    const name = (data.name || "").toString().trim();
    const email = (data.email || "").toString().trim();
    const phone = (data.mobile || data.phone || "").toString().trim();
    const subject = (data.subject || "Website Enquiry").toString().trim();
    const message = (data.message || "").toString().trim();

    if (!name || !email || !message) {
      return createJsonResponse({
        success: false,
        message: "Missing required fields: name, email, and message are mandatory."
      }, 400);
    }

    // 3. Append to Private Google Sheet
    const sheet = getTargetSheet();
    ensureHeaderRow(sheet);

    const timestamp = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, "yyyy-MM-dd HH:mm:ss");

    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      subject,
      message,
      "New"
    ]);

    // 4. Send Email Notification to Admin
    sendAdminNotification({
      timestamp: timestamp,
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message
    });

    return createJsonResponse({
      success: true,
      message: "Enquiry submitted successfully"
    });

  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return createJsonResponse({
      success: false,
      message: "Unable to submit enquiry: " + error.toString()
    }, 500);
  }
}

/**
 * Health check endpoint for testing deployment via browser or curl.
 */
function doGet(e) {
  return createJsonResponse({
    success: true,
    status: "online",
    message: "AST Website Inquiry Endpoint is active and operational.",
    targetEmail: CONFIG.ADMIN_EMAIL,
    sheetConfigured: Boolean(CONFIG.SHEET_ID)
  });
}

/**
 * Helper to get the target Google Sheet.
 * Works whether the script is container-bound or standalone.
 */
function getTargetSheet() {
  let spreadsheet;
  try {
    spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  } catch (e) {
    spreadsheet = null;
  }

  if (!spreadsheet && CONFIG.SHEET_ID) {
    spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
  }

  if (!spreadsheet) {
    throw new Error("Unable to open Google Sheet. Check Sheet ID configuration.");
  }

  return spreadsheet.getActiveSheet();
}

/**
 * Initialize headers if sheet is empty.
 */
function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(CONFIG.HEADERS);
    const headerRange = sheet.getRange(1, 1, 1, CONFIG.HEADERS.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#d32628");
    headerRange.setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    
    // Auto-resize columns
    for (let i = 1; i <= CONFIG.HEADERS.length; i++) {
      sheet.autoResizeColumn(i);
    }
  }
}

/**
 * Send programmatic notification email to admin with visitor as Reply-To.
 */
function sendAdminNotification(entry) {
  const emailSubject = `New Website Enquiry — ${entry.name}`;
  
  const emailBody = `New enquiry received from the website.

Name: ${entry.name}
Email: ${entry.email}
Phone: ${entry.phone || "Not provided"}
Subject: ${entry.subject}

Message:
${entry.message}

---
Submitted at: ${entry.timestamp}
Notification sent automatically by AST Webhook Integration.`;

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px; background-color: #ffffff;">
      <div style="border-bottom: 2px solid #d32628; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="color: #111827; margin: 0; font-size: 20px; font-weight: 700;">New Website Enquiry</h2>
        <p style="color: #6b7280; font-size: 13px; margin: 4px 0 0 0;">Received from AST Official Website</p>
      </div>
      
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #6b7280; width: 100px; font-weight: 600;">Name:</td>
          <td style="padding: 8px 0; color: #111827; font-weight: 700;">${escapeHtml(entry.name)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Email:</td>
          <td style="padding: 8px 0; color: #111827;"><a href="mailto:${escapeHtml(entry.email)}" style="color: #d32628; text-decoration: none;">${escapeHtml(entry.email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Phone:</td>
          <td style="padding: 8px 0; color: #111827;">${escapeHtml(entry.phone || "Not provided")}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #6b7280; font-weight: 600;">Subject:</td>
          <td style="padding: 8px 0; color: #111827;">${escapeHtml(entry.subject)}</td>
        </tr>
      </table>
      
      <div style="background-color: #f9fafb; border-left: 4px solid #d32628; padding: 14px 16px; border-radius: 0 8px 8px 0; margin-bottom: 24px;">
        <h4 style="margin: 0 0 8px 0; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em;">Message:</h4>
        <p style="margin: 0; color: #1f2937; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${escapeHtml(entry.message)}</p>
      </div>

      <div style="border-top: 1px solid #f3f4f6; padding-top: 16px; font-size: 12px; color: #9ca3af; text-align: center;">
        <p style="margin: 0;">Submitted on ${entry.timestamp} | You can reply directly to this email to contact the visitor.</p>
      </div>
    </div>
  `;

  MailApp.sendEmail({
    to: CONFIG.ADMIN_EMAIL,
    replyTo: entry.email,
    subject: emailSubject,
    body: emailBody,
    htmlBody: htmlBody
  });
}

/**
 * JSON response helper with proper MIME type and CORS headers.
 */
function createJsonResponse(payload, statusCode) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Basic HTML escaping for safe email rendering.
 */
function escapeHtml(text) {
  if (!text) return "";
  return text
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
