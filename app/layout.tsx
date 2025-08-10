export const metadata = {
  title: 'Ryan Hermes',
  description: "Ryan Hermes's Personal Website",
  metadataBase: new URL('https://ryanhermes.com')
};

import './globals.css';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


