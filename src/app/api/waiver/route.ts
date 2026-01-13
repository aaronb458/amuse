import { NextResponse } from 'next/server';

type GuestSignature = {
  name: string;
  date: string;
};

type WaiverSubmission = {
  signatures: GuestSignature[];
  email: string;
  phone?: string;
  tourDate: string;
  submittedAt: string;
};

export async function POST(request: Request) {
  try {
    const data: WaiverSubmission = await request.json();

    // Validate required fields
    if (!data.signatures || data.signatures.length === 0) {
      return NextResponse.json({ error: 'At least one signature is required' }, { status: 400 });
    }

    if (!data.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!data.tourDate) {
      return NextResponse.json({ error: 'Tour date is required' }, { status: 400 });
    }

    // Format the guest names for the webhook
    const guestNames = data.signatures.map((sig) => sig.name).join(', ');

    // Send to webhook if configured
    const webhookUrl = process.env.WAIVER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'waiver_submission',
            data: {
              email: data.email,
              phone: data.phone || 'Not provided',
              tourDate: data.tourDate,
              guestCount: data.signatures.length,
              guestNames: guestNames,
              signatures: data.signatures,
              submittedAt: data.submittedAt,
            },
          }),
        });
      } catch (webhookError) {
        // Log webhook error but don't fail the request
        console.error('Webhook error:', webhookError);
      }
    }

    // Log the submission (you can replace this with database storage)
    console.log('Waiver submission received:', {
      email: data.email,
      phone: data.phone,
      tourDate: data.tourDate,
      guestCount: data.signatures.length,
      guestNames: guestNames,
      submittedAt: data.submittedAt,
    });

    return NextResponse.json({
      success: true,
      message: 'Waiver submitted successfully',
    });
  } catch (error) {
    console.error('Waiver submission error:', error);
    return NextResponse.json({ error: 'Failed to process waiver submission' }, { status: 500 });
  }
}
