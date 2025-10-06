// app/api/mail/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateWelcomeEmailTemplate, EmailTemplateData } from '@/lib/email-templates';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      category,
      schoolName,
      features,
      country,
      city,
    } = body;

    // Validate required fields
    if (!fullName || !email || !category || !schoolName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    // Prepare email template data
    const templateData: EmailTemplateData = {
      fullName,
      email,
      category,
      schoolName,
      features,
      country,
      city,
    };

    // Send welcome email to user
    const userMailOptions = {
      from: {
        name: 'Gradlink Team',
        address: process.env.EMAIL_USER!,
      },
      to: email,
      subject: '🎉 Welcome to Gradlink Waitlist - You\'re In!',
      html: generateWelcomeEmailTemplate(templateData),
    };

    // Send notification email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER!,
      to: process.env.EMAIL_USER!, // Send to yourself
      subject: `🎯 New Waitlist Registration: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #667eea;">New Waitlist Registration 🎉</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
            <h3>Registration Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${fullName}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Category:</strong> ${category}</li>
              <li><strong>School:</strong> ${schoolName}</li>
              <li><strong>Interested In:</strong> ${features}</li>
              <li><strong>Location:</strong> ${city}, ${country}</li>
            </ul>
          </div>
          <p style="margin-top: 20px; color: #6c757d;">
            Registered at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json({ 
      success: true, 
      message: 'Emails sent successfully' 
    });

  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send emails', details: error },
      { status: 500 }
    );
  }
}
