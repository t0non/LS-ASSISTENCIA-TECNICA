import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {getSitePages} from './src/site-pages';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), {
      name: 'site-static-metadata',
      enforce: 'post',
      generateBundle(_options, bundle) {
        const entry=bundle['index.html'];
        if(!entry||entry.type!=='asset')throw new Error('HTML principal não encontrado');
        const original=String(entry.source);
        const escape=(value:string)=>value.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
        for(const page of getSitePages()) {
          let html=original.replace(/<title>.*?<\/title>/,()=>`<title>${escape(page.title)}</title>`);
          for(const [attribute,key,value] of [['name','description',page.description],['property','og:title',page.title],['property','og:description',page.description],['property','og:url',page.url],['property','og:image',page.image],['property','og:type',page.article?'article':'website']]) {
            html=html.replace(new RegExp(`(<meta ${attribute}="${key}" content=")[^"]*`),(_match,prefix)=>prefix+escape(value));
          }
          html=html.replace(/(<link rel="canonical" href=")[^"]*/,(_match,prefix)=>prefix+page.url)
            .replace(/<meta name="keywords"[^>]*>/,'')
            .replace(/<link rel="preload" as="image" href="\/assets\/sessao1.png"[^>]*>/,'');
          if(page.preloadImage)html=html.replace('</head>',`<link rel="preload" as="image" href="${escape(page.preloadImage)}" /></head>`);
          if(page.schema)html=html.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/,()=>`<script type="application/ld+json">${JSON.stringify(page.schema).replace(/</g,'\\u003c')}</script>`);
          if(page.html)html=html.replace('<div id="root"></div>',()=>`<div id="root">${page.html}</div>`);
          if(page.path==='/')entry.source=html;
          else this.emitFile({type:'asset',fileName:page.path.slice(1)+'index.html',source:html});
        }
      },
    }],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
