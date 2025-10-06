// app/api/send-email/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const body = await req.json();

  const {
    fullName,
    email,
    schoolCategory,
    schoolName,
    features,
    country,
    city,
  } = body;

  // Create a transporter using Gmail (or use any SMTP service)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER!, // your Gmail address
      pass: process.env.EMAIL_PASS!, // your Gmail App password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email, // send to user or to your own email
    subject: `🎓 Wekoya Waitlist Confirmation`,
    html: `
      <h2>Hi ${fullName},</h2>
      <p>Thanks for joining the Wekoya waitlist!</p>
      <p><strong>Details:</strong></p>
      <ul>
        <li><b>School Category:</b> ${schoolCategory}</li>
        <li><b>School Name:</b> ${schoolName}</li>
        <li><b>Expected Features:</b> ${features}</li>
        <li><b>Country:</b> ${country}</li>
        <li><b>City:</b> ${city}</li>
      </ul>
      <p>We’ll reach out once your spot is live 🚀</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
  }
}
