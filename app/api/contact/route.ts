import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value.replace(/[&<>"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

export async function POST(req: Request) {
  try {
    console.log("📧 Contact form received");

    const body: Record<string, unknown> = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const company = typeof body.company === "string" ? body.company.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const service = typeof body.service === "string" ? body.service.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
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
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "Not provided")}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
        <p><strong>Needed Service:</strong> ${escapeHtml(service || "Not provided")}</p>
        <p><strong>Message:</strong> ${escapeHtml(message)}</p>
      `,
    });

    console.log("✅ Email sent successfully:", result);

    // ✅ Always return clean success response
    return Response.json({ ok: true }, { status: 200 });

  } catch (error: unknown) {
    console.error("❌ EMAIL ERROR:", error);

    return Response.json(
      { ok: false, error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 }
    );
  }
}
