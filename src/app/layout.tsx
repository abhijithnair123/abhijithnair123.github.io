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
  title: 'Abhijith H Nair — Senior Fullstack Developer',
  description: 'Senior Fullstack Developer with 7+ years of experience architecting high-concurrency Angular, Next.js, React, and Node.js platforms. Proven track record engineering enterprise SaaS and scalable distributed systems.',
  keywords: [
    'Abhijith H Nair',
    'Senior Fullstack Developer',
    'Angular',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Carwash SaaS',
    'Microservices',
    'Cloud Architecture',
    'Web Performance',
  ],
  authors: [{ name: 'Abhijith H Nair' }],
  openGraph: {
    title: 'Abhijith H Nair — Senior Fullstack Developer',
    description: 'Senior Fullstack Developer with 7+ years of experience engineering high-concurrency Angular, Next.js, and Node.js platforms.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Abhijith H Nair Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhijith H Nair — Senior Fullstack Developer',
    description: 'Senior Fullstack Developer with 7+ years of experience engineering high-concurrency Angular, Next.js, and Node.js platforms.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var saved = localStorage.getItem('theme-preference') || 'light';
                document.documentElement.setAttribute('data-theme', saved);
              } catch (e) {}

              // Prevent autofill/password-manager extensions (e.g. fdprocessedid) from triggering React hydration mismatch
              try {
                var origSetAttr = Element.prototype.setAttribute;
                Element.prototype.setAttribute = function(name, val) {
                  if (name === 'fdprocessedid') return;
                  return origSetAttr.apply(this, arguments);
                };
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
