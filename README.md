# David Xavier / XD Plans

Portfólio e currículo em Next.js, React e TypeScript. Visual cyberpunk com neon, núcleo CSS animado, parallax, projetos filtráveis, linha do tempo e experiência mobile. Créditos: **David Xavier · XD Plans**.

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

## GitHub e Vercel

Crie um repositório e envie os arquivos deste projeto. Importe o repositório na Vercel e selecione Next.js. A build é `npm run build`; o projeto gera exportação estática em `out/`. Não são necessárias chaves de API.

Configure `NEXT_PUBLIC_SITE_URL` com a origem final, sem barra no fim, antes de publicar. Essa variável atualiza canonical, sitemap, robots e dados estruturados. Selecione o domínio de produção na Vercel e gere uma nova build após mudar essa variável.

## SEO e conteúdo

HTML pré-renderizado com conteúdo acessível a mecanismos de busca, metadata, Open Graph, Twitter Card, canonical, sitemap.xml, robots.txt, idioma pt-BR e JSON-LD Person. A imagem social SVG pode ser substituída por PNG/JPEG para compatibilidade mais ampla entre redes.

Conteúdo profissional baseado no PDF fornecido por David Xavier e no perfil público github.com/davidxavierxdplanschat em 15/10/2026. Arquivos históricos de 2016 e 2017 foram incluídos como links fornecidos pelo autor; seu conteúdo não foi inspecionado. As imagens dos projetos são composições ilustrativas, identificadas no site. As particularidades das demonstrações estão visíveis em cada card.

Contato principal: webxddesign@gmail.com, conforme currículo. Os números de telefone divergiam entre as fontes; foram omitidos. O PDF para download é o arquivo original fornecido e conserva seus contatos originais.

Edite `app/portfolio.tsx` para atualizar projetos e texto; `app/style.css` para identidade visual. Substitua `public/curriculo-david-xavier.pdf` quando houver novo currículo. Os efeitos respeitam prefers-reduced-motion e podem ser pausados pelo botão FX. Não há rastreadores, formulário com envio ou chatbot fictício.

© 2026 David Xavier · XD Plans.

## Ávix
Seção e atalho flutuante para o chatbot Ávix, criado por David Xavier / XD Plans. Avatar fornecido pelo autor em public/avix.jpg. O botão abre https://wa.me/5511926265383; não envia mensagens automaticamente.
