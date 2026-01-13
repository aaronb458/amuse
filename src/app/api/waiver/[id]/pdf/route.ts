import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

type GuestSignature = {
  name: string;
  signature: string;
  date: string;
};

type WaiverData = {
  id: string;
  contactName: string;
  email: string;
  phone: string | null;
  tourDate: string;
  guestCount: number;
  guests: GuestSignature[];
  submittedAt: Date;
};

// Generate PDF of the signed waiver
async function generateWaiverPDF(waiver: WaiverData): Promise<Uint8Array> {
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

  const formattedDate = waiver.submittedAt.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  drawText(`Document ID: ${waiver.id}`, { size: 10 });
  drawText(`Submitted: ${formattedDate}`, { size: 10 });
  drawText(`Tour Date: ${waiver.tourDate}`, { size: 10 });
  drawText(`Total Guests: ${waiver.guestCount}`, { size: 10 });

  drawLine();

  // Main Contact
  drawText('PRIMARY CONTACT', { font: helveticaBold, size: 12 });
  yPosition -= 5;
  drawText(`Name: ${waiver.contactName}`, { size: 10 });
  drawText(`Email: ${waiver.email}`, { size: 10 });
  drawText(`Phone: ${waiver.phone || 'Not provided'}`, { size: 10 });

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

  waiver.guests.forEach((guest, index) => {
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
  drawText(`Document ID: ${waiver.id}`, {
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

  return await pdfDoc.save();
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    // Fetch waiver from database
    const waiver = await prisma.waiver.findUnique({
      where: { id },
    });

    if (!waiver) {
      return NextResponse.json({ error: 'Waiver not found' }, { status: 404 });
    }

    // Generate PDF
    const pdfBytes = await generateWaiverPDF({
      ...waiver,
      guests: waiver.guests as GuestSignature[],
    });

    // Return PDF as downloadable file
    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="waiver-${waiver.id}.pdf"`,
        'Content-Length': pdfBytes.length.toString(),
      },
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 });
  }
}
