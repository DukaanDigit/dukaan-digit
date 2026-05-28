import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  returnUrl?: string;
};

function getSafeReturnUrl(value?: string) {
  if (value && value.startsWith("/")) {
    return value;
  }

  return "/contact?submitted=1";
}

function formatText(payload: ContactPayload) {
  return [
    `Name: ${payload.name ?? ""}`,
    `Company: ${payload.company ?? ""}`,
    `Email: ${payload.email ?? ""}`,
    `Phone: ${payload.phone ?? ""}`,
    "",
    "Message:",
    payload.message ?? "",
  ].join("\n");
}

function formatHtml(payload: ContactPayload) {
  return `
    <h2>New Contact Inquiry</h2>
    <p><strong>Name:</strong> ${payload.name ?? ""}</p>
    <p><strong>Company:</strong> ${payload.company ?? ""}</p>
    <p><strong>Email:</strong> ${payload.email ?? ""}</p>
    <p><strong>Phone:</strong> ${payload.phone ?? ""}</p>
    <p><strong>Message:</strong></p>
    <p>${(payload.message ?? "").replace(/\n/g, "<br />")}</p>
  `;
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "RESEND_API_KEY is not set" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let payload: ContactPayload = {};
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    payload = await request.json();
  } else {
    const formData = await request.formData();
    for (const [key, value] of formData.entries()) {
      if (typeof value === "string") {
        payload[key as keyof ContactPayload] = value;
      }
    }
  }

  const toAddress = process.env.CONTACT_TO ?? "dukaandigit@gmail.com";
  const fromAddress = process.env.CONTACT_FROM ?? "DukaanDigit <no-reply@dukandigit.com>";
  const subject = `New inquiry${payload.company ? ` - ${payload.company}` : ""}`;

  try {
    await resend.emails.send({
      from: fromAddress,
      to: toAddress,
      subject,
      text: formatText(payload),
      html: formatHtml(payload),
      replyTo: payload.email,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  const returnUrl = getSafeReturnUrl(payload.returnUrl);
  const redirectTo = new URL(returnUrl, request.url);

  return NextResponse.redirect(redirectTo, 303);
}
