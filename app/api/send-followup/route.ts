// app/api/send-followup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { generateFollowUpEmailTemplate, EmailTemplateData } from '@/lib/email-templates';

// This would be your waitlist database/storage
// For demo purposes, using a mock array
const waitlistMembers: EmailTemplateData[] = [
  // Add your actual waitlist members here
  // This would typically come from a database
];

export async function POST(req: NextRequest) {
  try {
    // Add authentication check here
    const authorization = req.headers.get('authorization');
    
    // Simple API key check (replace with your actual auth)
    if (authorization !== `Bearer ${process.env.ADMIN_API_KEY}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { emailType = 'followup', customMessage } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    // Send emails to all waitlist members
    const emailPromises = waitlistMembers.map(async (member) => {
      let htmlTemplate;
      let subject;

      switch (emailType) {
        case 'followup':
          htmlTemplate = generateFollowUpEmailTemplate(member);
          subject = '🚀 Gradlink Update - We\'re Making Progress!';
          break;
        case 'custom':
          htmlTemplate = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2>Hi ${member.fullName}! 👋</h2>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                ${customMessage}
              </div>
              <p>Best regards,<br><strong>The Gradlink Team</strong></p>
            </div>
          `;
          subject = '📢 Important Update from Gradlink';
          break;
        default:
          htmlTemplate = generateFollowUpEmailTemplate(member);
          subject = '🚀 Gradlink Update';
      }

      const mailOptions = {
        from: {
          name: 'Gradlink Team',
          address: process.env.EMAIL_USER!,
        },
        to: member.email,
        subject,
        html: htmlTemplate,
      };

      return transporter.sendMail(mailOptions);
    });

    // Send all emails
    await Promise.all(emailPromises);

    return NextResponse.json({
      success: true,
      message: `Successfully sent ${emailPromises.length} emails`,
      count: emailPromises.length,
    });

  } catch (error) {
    console.error('Bulk email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send bulk emails', details: error },
      { status: 500 }
    );
  }
}

// GET endpoint to fetch waitlist statistics
export async function GET() {
  try {
    return NextResponse.json({
      totalMembers: waitlistMembers.length,
      recentRegistrations: waitlistMembers.slice(-10), // Last 10 registrations
      summary: {
        categories: waitlistMembers.reduce((acc, member) => {
          acc[member.category] = (acc[member.category] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        countries: waitlistMembers.reduce((acc, member) => {
          acc[member.country] = (acc[member.country] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch waitlist data' },
      { status: 500 }
    );
  }
}
