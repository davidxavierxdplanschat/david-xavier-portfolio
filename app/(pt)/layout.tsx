import type { Metadata } from 'next';
import GoogleTag from '../google-tag';
import '../style.css';
const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://david-xavier-portfolio.vercel.app';
export const metadata: Metadata = { metadataBase: new URL(origin), title: 'David Xavier | Desenvolvedor Full Stack, Node.js e IA — XD Plans', description: 'David Xavier, fundador da XD Plans. Desenvolvimento full stack com JavaScript, React, Next.js, Node.js, APIs e IA aplicada. Conheça projetos, experiência e currículo.', keywords:['David Xavier','XD Plans','desenvolvedor full stack','Node.js','React','Next.js','inteligência artificial','São Paulo'], authors:[{name:'David Xavier',url:'https://xdplans.space'}], creator:'David Xavier · XD Plans', alternates:{canonical:'/',languages:{'pt-BR':'/','en':'/en/','x-default':'/'}}, openGraph:{type:'website',locale:'pt_BR',title:'David Xavier — Código para o que vem depois.',description:'Full Stack Developer · JavaScript · Node.js · IA aplicada. Projetos e trajetória de David Xavier, fundador da XD Plans.',images:[{url:'/opengraph-image.svg',width:1200,height:630}]},twitter:{card:'summary_large_image'}, robots:{index:true,follow:true}};
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
