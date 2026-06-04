import { Resend } from "resend";

/** One-off test: sends a verification email to a fixed address. */
export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "RESEND_API_KEY is not set" }),
    };
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "info@jbacademy.ltd";
  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `JB Academy <${fromEmail}>`,
      to: ["brightchibue@gmail.com"],
      subject: "JB Academy — Resend test email",
      html: `
        <h2>Test email</h2>
        <p>This message confirms your JB Academy site can send email through Resend.</p>
        <p>If you received this at <strong>brightchibue@gmail.com</strong>, everything is working.</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message || "Send failed" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        sentTo: "brightchibue@gmail.com",
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Send failed" }),
    };
  }
};
