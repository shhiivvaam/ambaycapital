import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, phone, email, city, interest, message } = await req.json();

    if (!firstName || !phone || !interest) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Connect to SMTP using dummy values or environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // Fallback to dummy values until user provides real credentials 
        user: process.env.EMAIL_USER || "ambaycapital8@gmail.com",
        pass: process.env.EMAIL_APP_PASSWORD || "dummy-app-password",
      },
    });

    const mailOptions = {
      from: `"Ambay Capital Leads" <${process.env.EMAIL_USER || "ambaycapital8@gmail.com"}>`,
      to: "ambaycapital8@gmail.com", // The destination where you want to receive leads
      subject: `New Lead: ${interest} - ${firstName} ${lastName}`,
      text: `
        New Lead Details:
        
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email || "Not Provided"}
        City: ${city || "Not Provided"}
        Requirement: ${interest}
        
        Message:
        ${message || "No message provided."}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #0a1628; border-bottom: 2px solid #c9a84c; padding-bottom: 10px;">New Consultation Request</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">
                <a href="tel:${phone}" style="color: #c9a84c; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">City:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${city || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Requirement:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #c9a84c; font-weight: bold;">${interest}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Message:</p>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; font-style: italic; color: #555;">
              ${message || "No message provided."}
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ error: "Failed to send lead email" }, { status: 500 });
  }
}
