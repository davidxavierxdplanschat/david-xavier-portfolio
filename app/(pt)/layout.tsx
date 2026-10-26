import type { Metadata } from 'next';
import GoogleTag from '../google-tag';
import '../style.css';
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://david-xavier-portfolio.vercel.app'
).replace(/\/$/, '');

const title =
  'David Xavier | Desenvolvedor Full Stack, React, Node.js e IA';
const description =
  'Portfólio de David Xavier, desenvolvedor full stack em São Paulo. Projetos com React, Next.js, Node.js, TypeScript, APIs, automação e inteligência artificial.';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  applicationName: 'Portfólio de David Xavier',
  title,
  description,
  keywords: [
    'David Xavier',
    'desenvolvedor full stack',
    'programador JavaScript',
    'desenvolvedor React',
    'desenvolvedor Node.js',
    'Next.js',
    'TypeScript',
    'APIs REST',
    'inteligência artificial',
    'automação',
    'São Paulo',
    'XD Plans',
  ],
  authors: [{ name: 'David Xavier', url: `${origin}/` }],
  creator: 'David Xavier',
  publisher: 'XD Plans',
  category: 'technology',
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', en: '/en/', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'David Xavier — Desenvolvedor Full Stack',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
    title,
    description,
    images: [
      {
        url: '/opengraph-image.svg',
        width: 1200,
        height: 630,
        alt: 'David Xavier — Desenvolvedor Full Stack, React, Node.js e IA',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/opengraph-image.svg'],
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
    <html lang="pt-BR">
      <body>
        {children}
        <GoogleTag />
      </body>
    </html>
  );
}

