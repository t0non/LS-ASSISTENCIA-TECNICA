export const commercialUrl = 'https://lsassistenciatech.com.br/refrigeracao-comercial/';
export const commercialTitle = 'Refrigeração Comercial em BH | LS Assistência Técnica';
export const commercialDescription = 'Conserto de freezer comercial, balcão refrigerado, ilha, geladeira comercial e câmara fria em BH. Solicite atendimento à LS Assistência Técnica.';
export const commercialMessage = 'Olá! Preciso de assistência técnica para um equipamento de refrigeração comercial. Gostaria de solicitar um atendimento.';
export const commercialWhatsApp = `https://wa.me/5531982593186?text=${encodeURIComponent(commercialMessage)}`;
export const equipment = [
 {name:'Freezer comercial',slug:'freezer-comercial',image:'freezer',alt:'Freezer de uso comercial em estabelecimento',text:'Conserto de freezers utilizados em mercados, bares, restaurantes e outros estabelecimentos.'},
 {name:'Balcão refrigerado',slug:'balcao-refrigerado',image:'balcao',alt:'Balcão refrigerado de atendimento em açougue',text:'Manutenção de balcões refrigerados de padarias, açougues e estabelecimentos comerciais.'},
 {name:'Ilha refrigerada',slug:'ilha-refrigerada',image:'ilha',alt:'Ilhas refrigeradas em supermercado',text:'Conserto de ilhas refrigeradas utilizadas na conservação e exposição de produtos.'},
 {name:'Geladeira comercial',slug:'geladeira-comercial',image:'comercial',alt:'Refrigeradores profissionais em área comercial',text:'Reparos em refrigeradores profissionais de cozinhas e estabelecimentos.'},
 {name:'Expositores refrigerados',slug:'expositores-refrigerados',image:'comercial',alt:'Expositores refrigerados para produtos em supermercado',text:'Manutenção de equipamentos comerciais de exposição refrigerada.'},
 {name:'Câmara fria',slug:'camara-fria',image:'camara-profissional',alt:'Câmaras frias comerciais com portas e painéis de controle',text:'Assistência técnica para câmaras frias utilizadas na operação do seu negócio.'},
];
export const commercialFaq = [
 ['Quais equipamentos vocês consertam?', 'Atendemos freezer comercial, balcão refrigerado, ilha refrigerada, geladeira comercial, expositores refrigerados e câmara fria. Informe a marca e o modelo para orientar a avaliação.'],
 ['Vocês atendem padarias e supermercados?', 'Sim. O atendimento de refrigeração comercial é voltado a padarias, supermercados, açougues, restaurantes, bares, lanchonetes, mercados e mercearias de BH e região.'],
 ['Como solicitar um orçamento?', 'Clique no botão de WhatsApp e informe o equipamento, o problema e o endereço do estabelecimento. Nossa equipe passa as orientações para avaliação e atendimento.'],
 ['Quais regiões de BH vocês atendem?', 'Atendemos Belo Horizonte e região, incluindo solicitações de Contagem, Betim e Nova Lima. Informe seu bairro ou cidade para confirmar a disponibilidade de atendimento no endereço do estabelecimento.'],
 ['Vocês realizam manutenção de câmaras frias?', 'Sim. A assistência para câmara fria está entre os serviços de refrigeração comercial. Descreva o problema e informe o modelo para receber as orientações da equipe.'],
 ['O que informar quando o equipamento comercial não está gelando?', 'Envie o tipo de equipamento, a marca, o modelo e uma descrição do que mudou no funcionamento. Informe também o endereço e, se houver, a indicação de erro no painel. A causa do problema depende de avaliação.'],
 ['Vocês atendem balcões, ilhas e expositores refrigerados?', 'Sim. A LS recebe solicitações de manutenção de balcão refrigerado, conserto de ilha refrigerada e assistência para expositores comerciais em Belo Horizonte e região. Consulte a avaliação para seu modelo pelo WhatsApp.'],
];
export const commercialSchema = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Organization','@id':'https://lsassistenciatech.com.br/#organization',name:'LS Assistência Técnica',url:'https://lsassistenciatech.com.br/',logo:'https://lsassistenciatech.com.br/assets/logo.webp',telephone:'+5531982593186'},
  {'@type':'Service','@id':commercialUrl+'#service',name:'Assistência técnica em refrigeração comercial em Belo Horizonte',serviceType:'Conserto e manutenção de refrigeração comercial',url:commercialUrl,description:commercialDescription,provider:{'@id':'https://lsassistenciatech.com.br/#organization'},areaServed:['Belo Horizonte','Contagem','Betim','Nova Lima'].map(name=>({'@type':'City',name})),hasOfferCatalog:{'@type':'OfferCatalog',name:'Equipamentos comerciais atendidos',itemListElement:equipment.map(e=>({'@type':'Offer',itemOffered:{'@type':'Service',name:e.name,description:e.text,serviceType:'Conserto e manutenção de '+e.name.toLowerCase(),url:commercialUrl+'#'+e.slug}}))}},
  {'@type':'WebPage','@id':commercialUrl+'#webpage',url:commercialUrl,name:commercialTitle,description:commercialDescription,inLanguage:'pt-BR',mainEntity:{'@id':commercialUrl+'#service'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:'https://lsassistenciatech.com.br/'},{'@type':'ListItem',position:2,name:'Refrigeração comercial',item:commercialUrl}]},
  {'@type':'FAQPage',mainEntity:commercialFaq.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))},
 ],
};
