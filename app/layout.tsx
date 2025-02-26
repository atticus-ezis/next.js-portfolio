import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

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
  title: "Atticus's Portfolio",
  description: 'Full-stack portfolio with AI chatbot',
  openGraph: {
    title: "Atticus's Portfolio",
    description: 'Full-stack portfolio with AI chatbot',
    images: [
      {
        url: '/og-image.png',
        width: 512,
        height: 512,
        alt: "Atticus's portfolio preview",
      },
    ],
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="relative z-0 overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
