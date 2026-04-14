import '@/css/globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Killian Grant',
  description:
    'Killian Grant is a husband, father, and engineering leader living in Denver, Colorado.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={'flex items-center justify-center min-h-full w-full'}>
      <body className={'shrink'}>{children}</body>
    </html>
  );
}
