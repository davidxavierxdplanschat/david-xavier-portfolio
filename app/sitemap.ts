import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://david-xavier-portfolio.vercel.app'
  ).replace(/\/$/, '');
  const lastModified = new Date();
  const languages = {
    'pt-BR': `${origin}/`,
    en: `${origin}/en/`,
    'x-default': `${origin}/`,
  };

  return [
    {
      url: `${origin}/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${origin}/en/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages },
    },
  ];
}

