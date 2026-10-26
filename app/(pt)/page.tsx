import Portfolio from '../portfolio';

export default function Page() {
  const origin = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://david-xavier-portfolio.vercel.app'
  ).replace(/\/$/, '');
  const personId = origin + '/#person';
  const websiteId = origin + '/#website';
  const profileId = origin + '/#profile';
  const organizationId = 'https://xdplans.space/#organization';
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: origin + '/',
        name: 'Portfólio de David Xavier',
        alternateName: 'David Xavier — Desenvolvedor Full Stack',
        inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': profileId,
        url: origin + '/',
        name: 'David Xavier — Desenvolvedor Full Stack',
        description:
          'Perfil profissional, projetos, experiência e competências de David Xavier em desenvolvimento full stack, APIs, automação e inteligência artificial.',
        inLanguage: 'pt-BR',
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
        url: origin + '/',
        jobTitle: 'Desenvolvedor Full Stack',
        description:
          'Desenvolvedor full stack e fundador da XD Plans, especializado em JavaScript, TypeScript, React, Next.js, Node.js, APIs REST, automação e IA aplicada.',
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
          'APIs REST',
          'MongoDB',
          'MySQL',
          'WordPress',
          'WooCommerce',
          'Automação de processos',
          'Inteligência artificial aplicada',
        ],
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Desenvolvedor Full Stack',
          occupationLocation: {
            '@type': 'City',
            name: 'São Paulo',
          },
          skills:
            'JavaScript, TypeScript, React, Next.js, Node.js, APIs REST, bancos de dados, automação e inteligência artificial',
        },
        homeLocation: {
          '@type': 'City',
          name: 'São Paulo',
          containedInPlace: { '@type': 'Country', name: 'Brasil' },
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

