import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { auth } from '@/auth';
import { AuthSessionProvider } from '@/components/providers/session-provider';
import { TRPCProvider } from '@/components/providers/trpc-provider';
import { Header } from '@/components/navigation/header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Amuse-Bouche | A Tease in Every Bite',
  description:
    "The Bahamas' premier luxury food tour experience. Join us for an intimate 5-hour culinary journey through Nassau's finest restaurants. Four restaurants, twelve guests, endless flavor. $175 per person.",
  keywords: [
    'Bahamas food tour',
    'Nassau culinary experience',
    'luxury food tour',
    'Bahamas dining',
    'Nassau restaurants',
    'culinary journey',
    'Bahamian cuisine',
    'food tour Nassau',
    'gourmet tour Bahamas',
  ],
  authors: [{ name: 'Amuse-Bouche Tours' }],
  openGraph: {
    title: 'Amuse-Bouche | A Tease in Every Bite',
    description:
      "The Bahamas' premier luxury food tour. An intimate 5-hour culinary journey through Nassau's finest restaurants. Four restaurants, twelve guests, endless flavor.",
    url: 'https://amusebouchetours.com',
    siteName: 'Amuse-Bouche Tours',
    images: [
      {
        url: '/images/Background-Amuse-Bouche.jpg',
        width: 1200,
        height: 630,
        alt: 'Amuse-Bouche - Luxury Food Tour in Nassau, Bahamas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amuse-Bouche | A Tease in Every Bite',
    description:
      "The Bahamas' premier luxury food tour. Four restaurants, twelve guests, endless flavor.",
    images: ['/images/Background-Amuse-Bouche.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthSessionProvider session={session}>
          <TRPCProvider>
            <Header />
            {children}
          </TRPCProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
