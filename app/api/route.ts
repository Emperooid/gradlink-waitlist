import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;
const WHATSAPP_INVITE_LINK = "https://chat.whatsapp.com/Kl5Fq8mYkYJ3k7v1";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      category,
      schoolName,
      level,
      features,
      country,
      city,
      whyJoining,
    } = body;

    if (
      !fullName ||
      !email ||
      !category ||
      !schoolName ||
      !level ||
      !features ||
      !country ||
      !city
    ) {
      return NextResponse.json(
        { message: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingUser } = await supabaseAdmin
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered on waitlist." },
        { status: 409 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabaseAdmin
      .from("waitlist")
      .insert([
        {
          full_name: fullName,
          email,
          category,
          school_name: schoolName,
          level,
          features,
          country,
          city,
          why_joining: whyJoining || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase Insert Error:", error);
      return NextResponse.json(
        { message: "Failed to save data to database." },
        { status: 500 }
      );
    }

    // Send confirmation email via Resend (only if API key is available)
    if (resend && RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "GradLink AI <noreply@gradlink.app>",
          to: email,
          subject: "🎓 Welcome to GradLink AI — Your Journey Starts Here!",
          html: `
            <h2>Hi ${fullName},</h2>
            <p>You're officially part of the first wave of students joining GradLink AI, Africa's campus-to-career platform built by students, for students.</p>
            
            <h3>✅ Here's what's next:</h3>
            <ul>
              <li>Join our exclusive WhatsApp community of early users</li>
              <li>Get access to mentorship and beta features</li>
              <li>Earn your Founding Member badge</li>
            </ul>
            
            <p><strong>👉 <a href="${WHATSAPP_INVITE_LINK}">Join the WhatsApp Group</a></strong></p>
            
            <p>Keep an eye out for updates — your personalized GradLink dashboard is coming soon!</p>
            
            <p>Best regards,<br>The GradLink AI Team</p>
          `,
        });
      } catch (emailError) {
        console.error("Email sending failed:", emailError);
        // Don't fail the request if email fails, user is still registered
      }
    } else {
      console.log("Resend API key not configured, skipping email send");
    }

    return NextResponse.json({
      message: "Successfully added to waitlist!",
      whatsappLink: WHATSAPP_INVITE_LINK,
      data,
    });
  } catch (error) {
    console.error("Error in POST /api:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

