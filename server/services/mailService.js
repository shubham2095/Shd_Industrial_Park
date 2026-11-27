import nodemailer from "nodemailer";

let transporter;

// Created on first use so the .env values are loaded by then.
// For Gmail: use an App Password (not your normal password).
function getTransporter() {
  const port = Number(process.env.SMTP_PORT) || 587;

  transporter ??= nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465, // true for 465, false for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transporter;
}

// Submitted text goes into an HTML email, so it must be escaped first.
function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Keep user input out of subject lines as a single clean line.
const singleLine = (value) => value.replace(/[\r\n]+/g, " ");

export async function sendLeadEmail({ name, mobile, email }) {
  await getTransporter().sendMail({
    from: `"SHD Industrial Park Website" <${process.env.SMTP_USER}>`,
    to: process.env.TO_EMAIL || process.env.SMTP_USER,
    replyTo: email || undefined,
    subject: `New Site Visit Enquiry — ${singleLine(name)}`,
    text: [
      "New enquiry from the SHD Industrial Park website:",
      "",
      `Name: ${name}`,
      `Mobile: ${mobile}`,
      `Email: ${email || "Not provided"}`,
    ].join("\n"),
    html: `
      <h2>New Site Visit Enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Mobile:</strong> ${escapeHtml(mobile)}</p>
      <p><strong>Email:</strong> ${email ? escapeHtml(email) : "Not provided"}</p>
    `,
  });
}
