import { NextResponse } from "next/server";

export const runtime = 'edge';

export async function POST(request: Request) {
  const body = await request.json();

  // In a real implementation, you could forward this to an email service,
  // CRM, or issue tracker. Here we simply acknowledge receipt.
  const { name, email, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  return NextResponse.json({ ok: true });
}

