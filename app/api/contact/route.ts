import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("📧 Contact form received");
    
    const { name, email, message } = await req.json();
    console.log("✓ Form data parsed:", { name, email });

    // Validate required fields
    if (!name || !email || !message) {
      console.warn("❌ Missing required fields");
      return Response.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("📤 Sending email via Resend...");
    
    const result = await resend.emails.send({
      from: process.env.APPOINTMENT_FROM_EMAIL!,
      to: process.env.APPOINTMENT_TO_EMAIL!,
      subject: `Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("✅ Email sent successfully:", result);

    // ✅ Always return clean success response
    return Response.json({ ok: true }, { status: 200 });

  } catch (error: any) {
    console.error("❌ EMAIL ERROR:", error);
    
    return Response.json(
      { ok: false, error: error?.message || "Failed to send email" },
      { status: 500 }
    );
  }
}