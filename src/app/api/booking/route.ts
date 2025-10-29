import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date } = body;

    // Validate required fields
    if (!name || !email || !phone || !date) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Get webhook URL from environment variable
    const webhookUrl = process.env.GOHIGHLEVEL_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('GOHIGHLEVEL_WEBHOOK_URL is not configured');
      return NextResponse.json({ error: 'Webhook configuration missing' }, { status: 500 });
    }

    // Send data to GoHighLevel webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        preferred_date: date,
        source: 'Amuse-Bouche Website',
        timestamp: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook submission failed:', await webhookResponse.text());
      return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Booking submitted successfully' });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
