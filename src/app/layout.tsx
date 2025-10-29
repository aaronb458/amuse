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
    "The Bahamas' first high-end food tour. An intimate culinary journey through Nassau's finest restaurants.",
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
