import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import {commercialTitle, commercialDescription, commercialUrl, commercialSchema} from './src/commercial-content';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), {
      name: 'commercial-static-metadata',
      enforce: 'post',
      generateBundle(_options, bundle) {
        const entry = bundle['index.html'];
        if (!entry || entry.type !== 'asset') throw new Error('HTML principal não encontrado');
        const html = String(entry.source)
          .replace(/<title>.*?<\/title>/, `<title>${commercialTitle}</title>`)
          .replace(/(<meta name="description" content=")[^"]*/, `$1${commercialDescription}`)
          .replace(/(<link rel="canonical" href=")[^"]*/, `$1${commercialUrl}`)
          .replace(/(<meta property="og:title" content=")[^"]*/, `$1${commercialTitle}`)
          .replace(/(<meta property="og:description" content=")[^"]*/, `$1${commercialDescription}`)
          .replace(/(<meta property="og:url" content=")[^"]*/, `$1${commercialUrl}`)
          .replace(/(<meta property="og:image" content=")[^"]*/, '$1https://lsassistenciatech.com.br/assets/commercial/comercial.webp')
          .replace(/<meta name="keywords"[^>]*>/, '')
          .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${JSON.stringify(commercialSchema)}</script>`)
          .replace('<link rel="preload" as="image" href="/assets/sessao1.png"', '<link rel="preload" as="image" href="/assets/commercial/comercial.webp"');
        this.emitFile({type:'asset',fileName:'refrigeracao-comercial/index.html',source:html});
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
