import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const font = Montserrat({ subsets: ['latin'] });

import { ToastProvider } from './providers/toastProvider';

export const metadata: Metadata = {
  title: 'JS FURNITURE',
  description:
    'Explore a world of exquisite design and unparalleled comfort at JS Furniture. Discover a curated collection of high-quality furniture that seamlessly blends style with functionality. From modern and minimalist to classic and timeless pieces, our store caters to diverse tastes and preferences.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/logo-metadata.svg"
        type="image/svg+xml"
        sizes="any"
      />
      <body className={font.className}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
