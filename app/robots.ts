import type { MetadataRoute } from 'next';
export const dynamic='force-static';
export default function robots():MetadataRoute.Robots{const url=process.env.NEXT_PUBLIC_SITE_URL||'https://david-xavier-portfolio.vercel.app';return{rules:{userAgent:'*',allow:'/'},sitemap:`${url}/sitemap.xml`}}
