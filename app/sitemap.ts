import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return[{url:process.env.NEXT_PUBLIC_SITE_URL||'https://david-xavier-neon-portfolio.keenbead17.chatgpt.site',lastModified:'2026-10-15',changeFrequency:'monthly',priority:1}]}
