import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

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

// Generate PDF of the signed waiver
async function generateWaiverPDF(data: WaiverSubmission): Promise<string> {
  const pdfDoc = await PDFDocument.create();
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const pageWidth = 612; // Letter size
  const pageHeight = 792;
  const margin = 50;
  const lineHeight = 14;

  let page = pdfDoc.addPage([pageWidth, pageHeight]);
  let yPosition = pageHeight - margin;

  const drawText = (
    text: string,
    options: {
      font?: typeof helvetica;
      size?: number;
      color?: ReturnType<typeof rgb>;
      indent?: number;
    } = {}
  ) => {
    const { font = helvetica, size = 10, color = rgb(0, 0, 0), indent = 0 } = options;

    // Check if we need a new page
    if (yPosition < margin + 50) {
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      yPosition = pageHeight - margin;
    }

    page.drawText(text, {
      x: margin + indent,
      y: yPosition,
      size,
      font,
      color,
    });
    yPosition -= lineHeight * (size / 10);
  };

  const drawLine = () => {
    yPosition -= 5;
    page.drawLine({
      start: { x: margin, y: yPosition },
      end: { x: pageWidth - margin, y: yPosition },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
    yPosition -= 10;
  };

  // Header
  drawText('AMUSE-BOUCHE FOOD TOUR', { font: helveticaBold, size: 18 });
  yPosition -= 5;
  drawText('LIABILITY WAIVER & RELEASE AGREEMENT', { font: helveticaBold, size: 14 });
  yPosition -= 5;
  drawText('Signed Document', {
    font: helveticaOblique,
    size: 10,
    color: rgb(0.7, 0.55, 0),
  });

  drawLine();

  // Submission Info
  drawText('SUBMISSION DETAILS', { font: helveticaBold, size: 12 });
  yPosition -= 5;

  const submittedDate = new Date(data.submittedAt);
  const formattedDate = submittedDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  drawText(`Submitted: ${formattedDate}`, { size: 10 });
  drawText(`Tour Date: ${data.tourDate}`, { size: 10 });
  drawText(`Total Guests: ${data.guestCount}`, { size: 10 });

  drawLine();

  // Main Contact
  drawText('PRIMARY CONTACT', { font: helveticaBold, size: 12 });
  yPosition -= 5;
  drawText(`Name: ${data.contactName}`, { size: 10 });
  drawText(`Email: ${data.email}`, { size: 10 });
  drawText(`Phone: ${data.phone || 'Not provided'}`, { size: 10 });

  drawLine();

  // Waiver Text Summary
  drawText('AGREEMENT SUMMARY', { font: helveticaBold, size: 12 });
  yPosition -= 5;
  drawText(
    'By signing below, each guest acknowledges that they have read, understood, and agree to:',
    { size: 9 }
  );
  yPosition -= 3;
  drawText('• The Liability Waiver & Release Agreement', { size: 9, indent: 10 });
  drawText('• The Terms & Conditions', { size: 9, indent: 10 });
  drawText('• All policies regarding cancellation, conduct, and participation', {
    size: 9,
    indent: 10,
  });
  drawText('• Voluntary assumption of all risks associated with the tour', { size: 9, indent: 10 });
  drawText('• Release of liability for Amuse-Bouche and affiliated parties', {
    size: 9,
    indent: 10,
  });

  drawLine();

  // Guest Signatures
  drawText('GUEST SIGNATURES', { font: helveticaBold, size: 12 });
  yPosition -= 10;

  data.guests.forEach((guest, index) => {
    // Check if we need a new page
    if (yPosition < margin + 80) {
      page = pdfDoc.addPage([pageWidth, pageHeight]);
      yPosition = pageHeight - margin;
      drawText('GUEST SIGNATURES (continued)', { font: helveticaBold, size: 12 });
      yPosition -= 10;
    }

    drawText(`Guest ${index + 1}`, { font: helveticaBold, size: 10 });
    yPosition -= 3;
    drawText(`Full Name: ${guest.name}`, { size: 10, indent: 10 });

    // Signature in italic to look like a signature
    page.drawText(`Signature: ${guest.signature}`, {
      x: margin + 10,
      y: yPosition,
      size: 12,
      font: helveticaOblique,
      color: rgb(0, 0, 0.5),
    });
    yPosition -= lineHeight * 1.2;

    drawText(`Date Signed: ${guest.date}`, { size: 10, indent: 10 });
    yPosition -= 15;
  });

  drawLine();

  // Footer
  drawText('DOCUMENT VERIFICATION', { font: helveticaBold, size: 10 });
  yPosition -= 3;
  drawText(
    'This document was electronically signed and submitted through the official Amuse-Bouche website.',
    { size: 8, color: rgb(0.4, 0.4, 0.4) }
  );
  drawText(`Document ID: WAIVER-${Date.now()}`, {
    size: 8,
    color: rgb(0.4, 0.4, 0.4),
  });
  drawText('This PDF serves as legal proof of agreement to the terms and conditions.', {
    size: 8,
    color: rgb(0.4, 0.4, 0.4),
  });

  yPosition -= 20;
  drawText('Amuse-Bouche Food Tours | Nassau, The Bahamas', {
    size: 8,
    color: rgb(0.5, 0.5, 0.5),
  });
  drawText('+1 (242) 815-8687 | amusebouchetours@gmail.com', {
    size: 8,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Save and return as base64
  const pdfBytes = await pdfDoc.save();
  const base64 = Buffer.from(pdfBytes).toString('base64');
  return base64;
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

    // Generate PDF
    const pdfBase64 = await generateWaiverPDF(data);

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

      // PDF as base64 (can be decoded and saved in GHL or other systems)
      waiver_pdf_base64: pdfBase64,

      // Data URL that can be used directly (for smaller payloads, you might want to skip this)
      waiver_pdf_data_url: `data:application/pdf;base64,${pdfBase64}`,

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
    console.log('Waiver submission received:', {
      contactName: data.contactName,
      email: data.email,
      phone: data.phone,
      tourDate: data.tourDate,
      guestCount: data.guestCount,
      submittedAt: data.submittedAt,
      pdfGenerated: true,
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
