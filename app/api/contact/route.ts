import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactRequest;
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const receiver = process.env.EMAIL_RECEIVER || process.env.SMTP_USER;

  if (!host || !user || !pass || !receiver) {
    return NextResponse.json({ error: "SMTP configuration is not available." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: receiver,
      subject: `Portfolio Contact: ${subject}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${message}</p><p><strong>From:</strong> ${name} &lt;${email}&gt;</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Email service failed. Please check your SMTP settings." }, { status: 500 });
  }
}
