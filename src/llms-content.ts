import {getSitePages,siteOrigin} from './site-pages';
export function generateLlms() {
 const pages=getSitePages();
 const link=(path:string)=>{const page=pages.find(p=>p.path===path);if(!page)throw new Error(`Página ausente no llms.txt: ${path}`);return `- [${page.title}](${page.url}): ${page.description}`;};
 return `# LS Assistência Técnica

> Assistência técnica para eletrodomésticos e refrigeração comercial em Belo Horizonte e região, Minas Gerais, Brasil.

Site oficial: ${siteOrigin}/
Telefone e WhatsApp: +55 (31) 98259-3186.
E-mail: ls.assistenciatech1@gmail.com.
A disponibilidade de atendimento no bairro ou cidade, os valores, os prazos, as peças e as condições de garantia devem ser confirmados diretamente com a equipe. As referências a fabricantes descrevem equipamentos atendidos e não indicam assistência autorizada ou vínculo com as marcas.

## Serviços
${['/conserto-de-geladeira/','/freezer/','/camara-fria/','/refrigeracao-comercial/'].map(link).join('\n')}

## Empresa e atendimento
${['/','/onde-atendemos/','/sobre/','/contato/'].map(path=>path==='/'?`- [Página inicial](${siteOrigin}/): Serviços de assistência para geladeiras, máquinas de lavar e outros eletrodomésticos.`:link(path)).join('\n')}

## Blog
${pages.filter(p=>p.path.startsWith('/blog/')).map(p=>`- [${p.title}](${p.url}): ${p.description}`).join('\n')}

## Optional
- [Sitemap XML](${siteOrigin}/sitemap.xml): Lista de URLs canônicas do site.
- [Robots.txt](${siteOrigin}/robots.txt): Regras de rastreamento do site.
`;
}
