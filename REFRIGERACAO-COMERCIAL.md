# Landing page de refrigeração comercial

Preview: `http://localhost:3000/refrigeracao-comercial`

Envio ao GitHub autorizado pelo usuário após revisão do preview.

## Conteúdo e rotas

- Uma única landing page para os seis equipamentos comerciais.
- Componentes das páginas residencial e de câmara fria preservados.
- Identidade LS, logo, mascote e imagem branca de WhatsApp reutilizados.
- Arquivo HTML próprio gerado no build em `dist/refrigeracao-comercial/index.html`, com title, description, canonical, Open Graph e JSON-LD específicos já no HTML.
- O conteúdo visual é renderizado pelo React. O HTML estático contém os metadados, não uma renderização completa das seções.
- Rewrites da nova rota preparados em `vercel.json`, preservando as rotas existentes.
- Canonical da nova página: `https://lsassistenciatech.com.br/refrigeracao-comercial`, domínio utilizado no site em produção.
- Fotos reais ilustrativas do Wikimedia Commons convertidas para WebP, com licenças e autoria no rodapé e em `public/assets/commercial/credits.json`. Não representam trabalhos da LS. Derivações das fotos mantêm suas respectivas licenças.

## Cliques no WhatsApp

Número: `5531982593186`. Todos os CTAs usam a mensagem solicitada no briefing.

Cada clique envia **um evento** `whatsapp_click` à `dataLayer`, sem duplicar os scripts de GTM ou disparar uma conversão de venda/lead por conta própria.

Parâmetros:

- `page_type`: `refrigeracao_comercial`
- `page_path`: URL relativa atual
- `cta_location`: `header`, `hero`, `equipment_card`, `problems`, `final` ou `floating`
- `equipment`: identificador do card ou `geral`
- `link_url`: destino do WhatsApp

O GTM existente (`GTM-TR64WKS9`) e o GA4 carregado por ele são preservados.

**Verificação necessária no painel do GTM antes da campanha:** confirmar se há um acionador para `whatsapp_click` e uma tag GA4 correspondente. Se a medição atual já registra cliques em links `wa.me`, reutilizar essa regra ou excluir a nova rota dela ao configurar o evento personalizado, para não contabilizar o mesmo clique duas vezes. Conversões do Google Ads precisam do acionador e destino corretos; não foram inventados IDs nem labels de conversão. Nenhuma alteração no painel do GTM foi realizada.

## Validação

- `npm run lint`
- `npm run build`
- Conferir HTML gerado, metadados, JSON-LD, links, menus, FAQ e imagens.
- Novas publicações devem respeitar a autorização do usuário.
