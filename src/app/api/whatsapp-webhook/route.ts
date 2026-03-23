import { NextRequest, NextResponse } from 'next/server';

// Simulated WhatsApp Business API webhook handler
// In production: use Meta WhatsApp Business API + Twilio

const KEYWORD_RESPONSES: Record<string, string> = {
  RESCHEDULE:
    'We\'d be happy to reschedule your appointment! Please visit https://maxxsalon.in/book to choose a new slot, or reply with your preferred date and time.',
  CANCEL:
    'Your appointment has been cancelled. We\'re sorry to see you go! If you\'d like to rebook, visit https://maxxsalon.in/book. Use code MAXXBACK for 15% off your next visit!',
  HELP:
    'Welcome to Maxx Salon! Here\'s what I can help with:\n\n📅 RESCHEDULE — Change your appointment\n❌ CANCEL — Cancel your booking\n⭐ REVIEW — Share your feedback\n📞 Call us: +91-9999999999\n🌐 Book online: maxxsalon.in',
  REVIEW:
    'We\'d love to hear about your Maxx experience! ⭐\n\n📝 Google: https://g.page/maxxsalon/review\n📸 Instagram: @MaxxSalon\n\nThank you for being part of the Maxx family!',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message, phone, bookingId } = body;

    // Extract keyword from message
    const keyword = message?.trim().toUpperCase();
    const response = KEYWORD_RESPONSES[keyword];

    if (response) {
      // In production, this would send via WhatsApp Business API
      return NextResponse.json({
        success: true,
        action: keyword.toLowerCase(),
        reply: response,
        phone,
        bookingId,
      });
    }

    // Unrecognized message — default response
    return NextResponse.json({
      success: true,
      action: 'default',
      reply:
        'Thanks for reaching out to Maxx Salon! Our team will reply shortly.\n\nFor quick help, try: RESCHEDULE, CANCEL, HELP, or REVIEW.\n\nOr call us: +91-9999999999',
      phone,
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

// Verification endpoint for Meta webhook setup
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'maxx_salon_verify';

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
}
