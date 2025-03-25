import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("Received Data:", body);

    if (!body.name || !body.email || !body.message) {
      console.error("❌ Missing required fields:", body);
      return new Response(JSON.stringify({ success: false, message: "All fields are required." }), { status: 400 });
    }

    console.log("✅ Environment Variables:");
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    console.log("📤 Sending email...");

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "ranjithramasamy53.gmail",
      subject: "New Contact Form Submission",
      text: `Name: ${body.name}\nEmail: ${body.email}\nMessage: ${body.message}`,
    });

    console.log("✅ Email sent successfully:", info.response);

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });

  } catch (error) {
    console.error("❌ Error sending email:", error);
    return new Response(JSON.stringify({ success: false, message: "Email sending failed.", error: error.message }), { status: 500 });
  }
}
