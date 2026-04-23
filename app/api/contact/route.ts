import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await resend.emails.send({
      from: "EMS Contact <onboarding@resend.dev>",
      to: "your-email@example.com",
      subject: `New Contact Form Message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Message from EMS Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}