import { Resend } from "resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (statusCode, body) => ({
  statusCode,
  headers: { ...corsHeaders, "Content-Type": "application/json" },
  body: JSON.stringify(body),
});

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return json(500, { error: "Email service is not configured" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Invalid JSON body" });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const message = String(payload.message || "").trim();

  if (!name || !email || !message) {
    return json(400, { error: "Name, email, and message are required" });
  }

  if (!isValidEmail(email)) {
    return json(400, { error: "Invalid email address" });
  }

  if (message.length > 5000) {
    return json(400, { error: "Message is too long" });
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "info@jbacademy.ltd";
  const toEmail =
    process.env.CONTACT_TO_EMAIL || "info@jbacademy.ltd";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `JB Academy <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Website inquiry from ${name}`,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return json(500, { error: "Failed to send email" });
    }

    return json(200, { success: true });
  } catch (err) {
    console.error("Send email error:", err);
    return json(500, { error: "Failed to send email" });
  }
};

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
