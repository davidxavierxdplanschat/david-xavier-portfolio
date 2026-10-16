import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{const origin=process.env.NEXT_PUBLIC_SITE_URL||'https://david-xavier-portfolio.vercel.app';return ['','/en/'].map(path=>({url:origin+path,lastModified:'2026-10-16',changeFrequency:'monthly' as const,priority:1,alternates:{languages:{'pt-BR':origin+'/',en:origin+'/en/'}}}))}
