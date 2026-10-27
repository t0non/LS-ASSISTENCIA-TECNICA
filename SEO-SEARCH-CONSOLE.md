# SEO e envio ao Google Search Console

Domínio oficial: https://lsassistenciatech.com.br
Sitemap: https://lsassistenciatech.com.br/sitemap.xml

## Publicação e envio
1. Aguarde a publicação da versão enviada ao GitHub no painel da Vercel. O push e o deploy são etapas diferentes.
2. Abra https://lsassistenciatech.com.br/sitemap.xml e https://lsassistenciatech.com.br/robots.txt. O sitemap deve mostrar 17 URLs, todas no domínio oficial. As páginas precisam abrir sem erro 404.
3. Acesse https://search.google.com/search-console com a conta da cliente ou uma conta autorizada por ela. Se a propriedade já existir, use-a.
4. Se ainda não existir, clique em Adicionar propriedade e escolha Domínio. Informe lsassistenciatech.com.br, sem https e sem caminhos. Copie o registro TXT fornecido pelo Google para o provedor DNS do domínio. Preserve os registros existentes e mantenha esse TXT depois da confirmação. Volte ao Google e clique em Verificar. A propagação pode levar tempo.
5. Alternativa sem acesso ao DNS: crie uma propriedade Prefixo do URL com https://lsassistenciatech.com.br/ e siga um dos métodos oferecidos pelo Google. Não substitua a tag de verificação existente sem conferir a conta proprietária. O código já existente não prova que sua conta atual tem acesso.
6. Em Indexação > Sitemaps, informe sitemap.xml (ou a URL completa, se o campo da propriedade Domínio pedir). Envie https://lsassistenciatech.com.br/sitemap.xml e acompanhe o status de leitura. Um sitemap serve para todas as 17 páginas; não é necessário enviar cada artigo separadamente.
7. Na Inspeção de URL, cole a URL completa da página inicial. Clique em Testar URL publicada e confira se o Google consegue acessá-la. Depois solicite indexação quando disponível. Repita para /conserto-de-geladeira/, /freezer/, /camara-fria/ e /refrigeracao-comercial/. Para o conjunto de artigos, o sitemap e os links internos ajudam na descoberta; respeite a cota da ferramenta.
8. Confira Indexação > Páginas, inclusive URLs descobertas ou rastreadas ainda não indexadas. Analise cada motivo antes de alterar o site. Um redirecionamento de uma URL sem barra para a versão com barra é esperado; a URL final deve estar no sitemap e no canonical.
9. Acompanhe Desempenho > Resultados da pesquisa para consultas, impressões, cliques, CTR e posição média. Esses indicadores medem o crescimento; o envio do sitemap não garante indexação nem posições.

Não foi feita submissão automática à conta Google nem alteração de DNS. Essas etapas dependem de acesso à propriedade da cliente. Não há prazo fixo de indexação.

## Manutenção
- src/site-pages.ts é o cadastro das páginas e de suas datas de alteração significativa.
- Os artigos de src/blog-posts.ts entram automaticamente no sitemap, nas rotas da Vercel e na geração dos HTMLs. Use publishedAt e updatedAt no formato AAAA-MM-DD; blogDate é a data inicial dos artigos existentes.
- Ao alterar significativamente uma página, atualize seu lastmod. Não altere datas só por executar o build.
- Ao revisar um artigo, atualize updatedAt somente quando o conteúdo mudar de forma significativa. A data visível e os dados estruturados acompanham esse campo.
- npm run seo:generate atualiza public/sitemap.xml, public/robots.txt e as rotas explícitas da Vercel.
- npm run build executa a geração e a validação SEO; npm run lint verifica TypeScript.
- npm run seo:check valida o dist existente, incluindo URLs, arquivos, canonical, metadados únicos, JSON-LD, GTM e links internos de todas as páginas.
- URLs canônicas terminam em barra. A configuração trailingSlash da Vercel padroniza os acessos.
- Não crie páginas vazias por bairro nem artigos repetidos só trocando o nome da cidade. Publique informações úteis, próprias e coerentes com os serviços reais.

As 17 páginas têm conteúdo no HTML gerado, incluindo a página inicial, os serviços, as páginas institucionais e o blog. A pré-renderização utiliza os mesmos componentes do site; o React mantém as interações no navegador.

## Referências
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

O Google ignora priority e changefreq; o arquivo usa loc e lastmod estáveis, sem sinalizações artificiais de prioridade.

- https://support.google.com/webmasters/answer/34592?hl=pt-BR
- https://support.google.com/webmasters/answer/9008080?hl=pt-BR
- https://support.google.com/webmasters/answer/9012289?hl=pt-BR

## Arquivo para consulta por IA
/llms.txt contém um resumo da empresa, contato e links das páginas e artigos. É gerado e validado junto com o sitemap. Não é enviado como sitemap ao Search Console, não substitui robots.txt e não garante recomendações por IA ou posições no Google. Referência: https://llmstxt.org/
