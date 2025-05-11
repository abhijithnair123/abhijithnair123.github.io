import type React from 'react';
import type { Metadata } from 'next';
import { Analytics } from '@/components/analytics';
import ClientLayout from './client';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Abhijith H Nair | Senior Software Engineer',
  description:
    'Portfolio of Abhijith H Nair, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.',
  keywords: [
    'Abhijith H Nair',
    'Software Engineer',
    'Full Stack Developer',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'AWS',
  ],
  authors: [{ name: 'Abhijith H Nair' }],
  creator: 'Abhijith H Nair',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhijithhnair.in',
    title: 'Abhijith H Nair | Senior Software Engineer',
    description:
      'Portfolio of Abhijith H Nair, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.',
    siteName: 'Abhijith H Nair Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijith H Nair | Senior Software Engineer',
    description:
      'Portfolio of Abhijith H Nair, a Senior Software Engineer specializing in JavaScript, TypeScript, React.js, Node.js, Laravel, and AWS.',
    creator: '@abhijith',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  );
}

import './globals.css';
