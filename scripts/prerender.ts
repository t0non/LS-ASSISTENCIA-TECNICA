import {createServer} from 'vite';
import react from '@vitejs/plugin-react';
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {getSitePages} from '../src/site-pages';
const server=await createServer({configFile:false,plugins:[react()],server:{middlewareMode:true,hmr:false},appType:'custom',optimizeDeps:{noDiscovery:true,include:[]}});
try {
 const {renderPage}=await server.ssrLoadModule('/src/prerender.tsx');
 for(const page of getSitePages().filter(p=>!p.html)) {
  const file=resolve('dist','.'+page.path,'index.html');
  const html=readFileSync(file,'utf8');
  const content=renderPage(page.path);
  if(!content.includes('<h1'))throw new Error(`Conteúdo incompleto: ${page.path}`);
  writeFileSync(file,html.replace('<div id="root"></div>',()=>`<div id="root">${content}</div>`),'utf8');
 }
 console.log('Pré-renderização: conteúdo completo nos HTMLs das 17 páginas.');
} finally {await server.close();}
