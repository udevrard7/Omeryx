import { NextRequest, NextResponse } from "next/server";
import { contactSchema, SUBJECT_LABELS } from "@/types/contact";
import { db } from "@/lib/db";
import { Resend } from "resend";

/* ──────────────────── Rate Limiting ──────────────────── */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 3_600_000; // 1 hour
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return true;
  }
  if (record.count >= RATE_LIMIT_MAX) return false;
  record.count++;
  return true;
}

// Cleanup old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) rateLimitMap.delete(ip);
  }
}, 600_000);

/* ──────────────────── Resend Client ──────────────────── */

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey || apiKey === "re_your_resend_api_key") return null;
  return new Resend(apiKey);
}

/* ──────────────── Email HTML Template ──────────────── */

function buildEmailHtml(data: {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): string {
  const subjectLabel =
    SUBJECT_LABELS[data.subject as keyof typeof SUBJECT_LABELS] || data.subject;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f9fafb; margin: 0; padding: 40px 20px; }
    .container { max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .header { background: #1B3A5C; padding: 28px 32px; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 700; }
    .header p { color: rgba(255,255,255,0.7); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #6B7280; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #1B3A5C; line-height: 1.5; }
    .field-value a { color: #2563EB; }
    .divider { height: 1px; background: #E5E7EB; margin: 20px 0; }
    .badge { display: inline-block; background: #EFF6FF; color: #1B3A5C; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 6px; }
    .footer { padding: 20px 32px; background: #F9FAFB; border-top: 1px solid #E5E7EB; }
    .footer p { margin: 0; font-size: 12px; color: #9CA3AF; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Nouveau message de contact</h1>
      <p>OMERYX Group — Formulaire de contact</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="field-label">Nom complet</div>
        <div class="field-value">${escapeHtml(data.fullName)}</div>
      </div>
      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
      </div>
      ${data.phone ? `
      <div class="field">
        <div class="field-label">Téléphone</div>
        <div class="field-value">${escapeHtml(data.phone)}</div>
      </div>` : ""}
      <div class="field">
        <div class="field-label">Sujet</div>
        <div class="field-value"><span class="badge">${escapeHtml(subjectLabel)}</span></div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <div class="field-label">Message</div>
        <div class="field-value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
      </div>
    </div>
    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} OMERYX Group — Songon Adiopodoumé Km17, Abidjan, CI</p>
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ──────────────────── POST Handler ──────────────────── */

export async function POST(request: NextRequest) {
  try {
    /* 1. Rate limiting */
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error:
            "Trop de requêtes. Vous pouvez envoyer au maximum 3 messages par heure.",
        },
        { status: 429 }
      );
    }

    /* 2. Validate with Zod */
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          error: "Données invalides",
          details: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    /* 3. Save to Supabase via Prisma (contact_leads table) */
    await db.contactSubmission.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject,
        message: data.message,
      },
    });

    /* 4. Send email via Resend (non-blocking) */
    try {
      const resend = getResendClient();
      if (resend) {
        const subjectLabel =
          SUBJECT_LABELS[data.subject as keyof typeof SUBJECT_LABELS] ||
          data.subject;

        await resend.emails.send({
          from: "OMERYX Group <onboarding@resend.dev>",
          to: "contact@omeryxgroup.com",
          subject: `[OMERYX] Nouveau message - ${subjectLabel}`,
          html: buildEmailHtml(data),
          replyTo: data.email,
        });
      }
    } catch (emailErr) {
      console.error("[Resend] Email error (non-blocking):", emailErr);
    }

    /* 5. Success response */
    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Contact API] Unexpected error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
