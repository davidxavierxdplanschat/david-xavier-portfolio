import Portfolio from '../../portfolio-en';

export default function Page() {
  const origin = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://david-xavier-portfolio.vercel.app'
  ).replace(/\/$/, '');
  const personId = origin + '/#person';
  const websiteId = origin + '/#website';
  const profileId = origin + '/en/#profile';
  const organizationId = 'https://xdplans.space/#organization';
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: origin + '/',
        name: 'David Xavier Portfolio',
        alternateName: 'David Xavier — Full Stack Developer',
        inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': profileId,
        url: origin + '/en/',
        name: 'David Xavier — Full Stack Developer',
        description:
          'Professional profile, projects, experience and skills of David Xavier in full stack development, APIs, automation and applied AI.',
        inLanguage: 'en',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': personId },
        dateModified: '2026-10-26',
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: 'David Amorim Xavier',
        givenName: 'David',
        familyName: 'Xavier',
        alternateName: 'David Xavier',
        url: origin + '/en/',
        jobTitle: 'Full Stack Developer',
        description:
          'Full stack developer and founder of XD Plans, specializing in JavaScript, TypeScript, React, Next.js, Node.js, REST APIs, automation and applied AI.',
        sameAs: [
          'https://github.com/davidxavierxdplanschat',
          'https://www.linkedin.com/in/david-a-xavier-2a101a208/',
          'https://xdplans.space',
        ],
        knowsAbout: [
          'JavaScript',
          'TypeScript',
          'React',
          'Next.js',
          'Node.js',
          'REST APIs',
          'MongoDB',
          'MySQL',
          'WordPress',
          'WooCommerce',
          'Process automation',
          'Applied artificial intelligence',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Full Stack Developer',
          occupationLocation: {
            '@type': 'City',
            name: 'São Paulo',
          },
          skills:
            'JavaScript, TypeScript, React, Next.js, Node.js, REST APIs, databases, automation and artificial intelligence',
        },
        homeLocation: {
          '@type': 'City',
          name: 'São Paulo',
          containedInPlace: { '@type': 'Country', name: 'Brazil' },
        },
        worksFor: { '@id': organizationId },
      },
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: 'XD Plans',
        url: 'https://xdplans.space',
        founder: { '@id': personId },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(data).replace(/</g, '\\u003c'),
        }}
      />
      <Portfolio />
    </>
  );
}

