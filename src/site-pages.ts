import {commercialTitle,commercialDescription,commercialUrl,commercialSchema} from './commercial-content';
import {fridgeTitle,fridgeDescription,fridgeUrl,fridgeSchema} from './fridge-content';
import {areasTitle,areasDescription,areasUrl,areasSchema} from './areas-content';
import {aboutTitle,aboutDescription,aboutUrl,aboutSchema} from './about-content';
import {contactTitle,contactDescription,contactUrl,contactSchema} from './contact-content';
import {coldRoomSeo,freezerSeo} from './service-seo';
import {blogPosts,blogDate} from './blog-posts';
import {getBlogMetadata,renderBlogDocument} from './blog-render';

export const siteOrigin='https://lsassistenciatech.com.br';
export type SitePage={path:string;title:string;description:string;url:string;image:string;schema?:unknown;lastmod?:string;preloadImage?:string;html?:string;article?:boolean};
const logo=siteOrigin+'/assets/logo.webp';
// Data da última alteração significativa. Não substituir pela data do build.
const staticPages:SitePage[]=[
 {path:'/',title:'LS Assistência Técnica | Conserto de Geladeira e Máquina de Lavar BH',description:'Conserto de geladeiras, máquinas de lavar e lava-louças em Belo Horizonte. Sem taxa de visita em BH! Avaliação em domicílio com garantia total.',url:siteOrigin+'/',image:siteOrigin+'/assets/sessao1.png',preloadImage:'/assets/sessao1.png',lastmod:'2026-10-27'},
 {...coldRoomSeo,lastmod:'2026-10-27'},
 {...freezerSeo,lastmod:'2026-10-27'},
 {path:'/refrigeracao-comercial/',title:commercialTitle,description:commercialDescription,url:commercialUrl,image:siteOrigin+'/assets/commercial/comercial.webp',schema:commercialSchema,preloadImage:'/assets/commercial/comercial.webp',lastmod:'2026-10-27'},
 {path:'/conserto-de-geladeira/',title:fridgeTitle,description:fridgeDescription,url:fridgeUrl,image:siteOrigin+'/assets/geladeiras.png',schema:fridgeSchema,lastmod:'2026-10-27'},
 {path:'/onde-atendemos/',title:areasTitle,description:areasDescription,url:areasUrl,image:logo,schema:areasSchema,lastmod:'2026-10-27'},
 {path:'/sobre/',title:aboutTitle,description:aboutDescription,url:aboutUrl,image:logo,schema:aboutSchema,lastmod:'2026-10-27'},
 {path:'/contato/',title:contactTitle,description:contactDescription,url:contactUrl,image:logo,schema:contactSchema,lastmod:'2026-10-27'},
];
export function getSitePages():SitePage[] {
 const index=getBlogMetadata();
 return [...staticPages,
  {path:'/blog/',...index,image:logo,lastmod:blogPosts.reduce((date,p)=>{const modified=p.updatedAt||p.publishedAt||blogDate;return modified>date?modified:date;},blogDate),html:renderBlogDocument()},
  ...blogPosts.map(post=>({path:`/blog/${post.slug}/`,...getBlogMetadata(post.slug),image:logo,lastmod:post.updatedAt||post.publishedAt||blogDate,html:renderBlogDocument(post.slug),article:true})),
 ];
}
function escapeXml(text:string){return text.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]!));}
export function generateSitemap(pages:SitePage[]) {
 const seen=new Set<string>();
 for(const page of pages){
  const url=new URL(page.url);
  if(url.origin!==siteOrigin||url.search||url.hash||page.url!==siteOrigin+page.path||!page.path.endsWith('/'))throw new Error(`URL não canônica no sitemap: ${page.url}`);
  if(seen.has(page.url))throw new Error(`URL duplicada no sitemap: ${page.url}`);
  if(page.lastmod&&(!/^\d{4}-\d{2}-\d{2}$/.test(page.lastmod)||!Number.isFinite(Date.parse(page.lastmod))||page.lastmod>new Date().toISOString().slice(0,10)))throw new Error(`lastmod inválido: ${page.url}`);
  seen.add(page.url);
 }
 return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(page=>`  <url>\n    <loc>${escapeXml(page.url)}</loc>${page.lastmod?`\n    <lastmod>${page.lastmod}</lastmod>`:''}\n  </url>`).join('\n')+'\n</urlset>\n';
}
