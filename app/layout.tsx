export const metadata = {
  title: 'Ryan Hermes',
  description: "Ryan Hermes's Personal Website",
  metadataBase: new URL('https://ryanhermes.com'),
  icons: {
    icon: '/rh.ico',
  },
};

import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased selection:bg-sky/30 selection:text-ink`}>
        {children}
      </body>
    </html>
  );
}


