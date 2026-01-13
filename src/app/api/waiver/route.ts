import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

type GuestSignature = {
  name: string;
  signature: string;
  date: string;
};

type WaiverSubmission = {
  contactName: string;
  email: string;
  phone?: string;
  tourDate: string;
  guests: GuestSignature[];
  guestCount: number;
  submittedAt: string;
};

// Flatten guests array into individual fields for GHL
function flattenGuestsForGHL(guests: GuestSignature[]): Record<string, string> {
  const flattened: Record<string, string> = {};

  guests.forEach((guest, index) => {
    const num = index + 1;
    flattened[`guest${num}_name`] = guest.name || '';
    flattened[`guest${num}_signature`] = guest.signature || '';
    flattened[`guest${num}_date`] = guest.date || '';
  });

  // Fill in empty fields for remaining slots (up to 20)
  for (let i = guests.length + 1; i <= 20; i++) {
    flattened[`guest${i}_name`] = '';
    flattened[`guest${i}_signature`] = '';
    flattened[`guest${i}_date`] = '';
  }

  return flattened;
}

export async function POST(request: Request) {
  try {
    const data: WaiverSubmission = await request.json();

    // Validate required fields
    if (!data.contactName) {
      return NextResponse.json({ error: 'Contact name is required' }, { status: 400 });
    }

    if (!data.email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    if (!data.tourDate) {
      return NextResponse.json({ error: 'Tour date is required' }, { status: 400 });
    }

    if (!data.guests || data.guests.length === 0) {
      return NextResponse.json(
        { error: 'At least one guest signature is required' },
        { status: 400 }
      );
    }

    // Save to database
    const waiver = await prisma.waiver.create({
      data: {
        contactName: data.contactName,
        email: data.email,
        phone: data.phone || null,
        tourDate: data.tourDate,
        guestCount: data.guestCount,
        guests: data.guests,
        submittedAt: new Date(data.submittedAt),
      },
    });

    // Generate PDF URL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://amusebouchetours.com';
    const pdfUrl = `${baseUrl}/api/waiver/${waiver.id}/pdf`;

    // Flatten guests for GHL
    const flattenedGuests = flattenGuestsForGHL(data.guests);

    // Build the webhook payload with flat structure for GHL
    const webhookPayload = {
      // Main contact info
      contact_name: data.contactName,
      email: data.email,
      phone: data.phone || '',
      tour_date: data.tourDate,
      guest_count: data.guestCount.toString(),
      submitted_at: data.submittedAt,

      // Waiver ID and PDF URL
      waiver_id: waiver.id,
      waiver_pdf_url: pdfUrl,

      // Individual guest fields
      ...flattenedGuests,
    };

    // Send to webhook if configured
    const webhookUrl = process.env.WAIVER_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(webhookPayload),
        });

        if (!webhookResponse.ok) {
          console.error('Webhook returned non-OK status:', webhookResponse.status);
        }
      } catch (webhookError) {
        console.error('Webhook error:', webhookError);
      }
    }

    // Log the submission
    console.log('Waiver submission saved:', {
      id: waiver.id,
      contactName: data.contactName,
      email: data.email,
      tourDate: data.tourDate,
      guestCount: data.guestCount,
      pdfUrl,
    });

    return NextResponse.json({
      success: true,
      message: 'Waiver submitted successfully',
      waiverId: waiver.id,
      pdfUrl,
    });
  } catch (error) {
    console.error('Waiver submission error:', error);
    return NextResponse.json({ error: 'Failed to process waiver submission' }, { status: 500 });
  }
}
