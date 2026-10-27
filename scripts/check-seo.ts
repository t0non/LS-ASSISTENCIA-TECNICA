import {readFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {getSitePages,generateSitemap,siteOrigin} from '../src/site-pages';
const pages=getSitePages();
const assert=(condition:unknown,message:string)=>{if(!condition)throw new Error(message);};
const sitemap=generateSitemap(pages);
for(const folder of ['public','dist']) {
 assert(readFileSync(resolve(folder,'sitemap.xml'),'utf8')===sitemap,`${folder}: sitemap desatualizado`);
 assert(readFileSync(resolve(folder,'robots.txt'),'utf8').includes(`Sitemap: ${siteOrigin}/sitemap.xml`),`${folder}: robots com domínio incorreto`);
}
const config=JSON.parse(readFileSync('vercel.json','utf8'));
assert(config.trailingSlash===true,'URLs devem terminar com barra');
const titles=new Set<string>();
const descriptions=new Set<string>();
const paths=new Set(pages.map(p=>p.path));
for(const page of pages) {
 const file=resolve('dist','.'+page.path,'index.html');
 assert(existsSync(file),`Página ausente: ${page.path}`);
 const html=readFileSync(file,'utf8');
 const canonicals=[...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)];
 assert(canonicals.length===1&&canonicals[0][1]===page.url,`Canonical incorreto: ${page.path}`);
 assert(!/<meta[^>]+(?:noindex|nofollow)/i.test(html),`Indexação bloqueada: ${page.path}`);
 assert(!html.includes('lsassistenciatecnicabh.com.br'),`Domínio antigo: ${page.path}`);
 assert((html.match(/gtm\.js\?id=/g)||[]).length===1,`GTM duplicado ou ausente: ${page.path}`);
 assert(!titles.has(page.title)&&!descriptions.has(page.description),`Metadados duplicados: ${page.path}`);
 titles.add(page.title);descriptions.add(page.description);
 for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g))JSON.parse(match[1]);
 {
  assert((html.match(/<h1[ >]/g)||[]).length===1,`H1 inválido: ${page.path}`);
  for(const match of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)(?:[?#][^"]*)?"/g))assert(paths.has(match[1]),`Link interno inválido: ${match[1]}`);
 }
 if(page.path!=='/')assert(config.rewrites.some((r:{source:string;destination:string})=>r.source===page.path&&r.destination===page.path+'index.html'),`Rota ausente: ${page.path}`);
}
console.log(`SEO validado: ${pages.length} páginas, URLs únicas, canonical, metadados, JSON-LD, GTM, links internos, robots e rotas.`);
