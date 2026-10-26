import type { Metadata } from 'next';
import GoogleTag from '../google-tag';
import '../style.css';
const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://david-xavier-portfolio.vercel.app';
export const metadata: Metadata = { metadataBase: new URL(origin), title: 'David Xavier | Full Stack Developer, Node.js & AI — XD Plans', description: 'David Xavier, founder of XD Plans. Full stack development with JavaScript, React, Next.js, Node.js, APIs and applied AI. Explore projects, experience and résumé.', keywords:['David Xavier','XD Plans','full stack developer','Node.js','React','Next.js','artificial intelligence','São Paulo'], authors:[{name:'David Xavier',url:'https://xdplans.space'}], creator:'David Xavier · XD Plans', alternates:{canonical:'/en/',languages:{'pt-BR':'/','en':'/en/','x-default':'/'}}, openGraph:{type:'website',locale:'en_US',alternateLocale:['pt_BR'],title:'David Xavier — Code for what comes next.',description:'Full Stack Developer · JavaScript · Node.js · Applied AI. Projects and experience by David Xavier, founder of XD Plans.',images:[{url:'/opengraph-image-en.svg',width:1200,height:630}]},twitter:{card:'summary_large_image'}, verification:{google:'9cSgvdZK5WQdnGJJpLFOxNJCVsBgwfFYbDnmUYbpvJI'}, robots:{index:true,follow:true}};
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
