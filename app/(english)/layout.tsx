import type { Metadata } from 'next';
import GoogleTag from '../google-tag';
import '../style.css';
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://david-xavier-portfolio.vercel.app'
).replace(/\/$/, '');

const title = 'David Xavier | Full Stack Developer, React, Node.js & AI';
const description =
  'Portfolio of David Xavier, a full stack developer in São Paulo. Projects built with React, Next.js, Node.js, TypeScript, APIs, automation and applied AI.';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  applicationName: 'David Xavier Portfolio',
  title,
  description,
  keywords: [
    'David Xavier',
    'full stack developer',
    'JavaScript developer',
    'React developer',
    'Node.js developer',
    'Next.js',
    'TypeScript',
    'REST APIs',
    'artificial intelligence',
    'automation',
    'São Paulo',
    'XD Plans',
  ],
  authors: [{ name: 'David Xavier', url: `${origin}/en/` }],
  creator: 'David Xavier',
  publisher: 'XD Plans',
  category: 'technology',
  alternates: {
    canonical: '/en/',
    languages: { 'pt-BR': '/', en: '/en/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    url: '/en/',
    siteName: 'David Xavier — Full Stack Developer',
    locale: 'en_US',
    alternateLocale: ['pt_BR'],
    title,
    description,
    images: [
      {
        url: '/opengraph-image-en.svg',
        width: 1200,
        height: 630,
        alt: 'David Xavier — Full Stack Developer, React, Node.js and AI',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image-en.svg'],
  },
  verification: {
    google: '9cSgvdZK5WQdnGJJpLFOxNJCVsBgwfFYbDnmUYbpvJI',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, address: false, telephone: false },
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        {children}
        <GoogleTag />
      </body>
    </html>
  );
}

