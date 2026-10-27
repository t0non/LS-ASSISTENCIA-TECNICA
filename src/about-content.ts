export const aboutTitle = 'Sobre a LS Assistência Técnica | Belo Horizonte e Região';
export const aboutDescription = 'Conheça a LS Assistência Técnica: conserto de geladeiras, eletrodomésticos e refrigeração comercial em Belo Horizonte e região. Fale com nossa equipe.';
export const aboutUrl = 'https://lsassistenciatech.com.br/sobre/';
export const aboutSchema = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Organization','@id':'https://lsassistenciatech.com.br/#organization',name:'LS Assistência Técnica',url:'https://lsassistenciatech.com.br/',logo:'https://lsassistenciatech.com.br/assets/logo.webp',telephone:'+5531982593186',email:'ls.assistenciatech1@gmail.com',areaServed:['Belo Horizonte','Contagem','Betim','Nova Lima'].map(name=>({'@type':'City',name}))},
  {'@type':'AboutPage','@id':aboutUrl+'#webpage',url:aboutUrl,name:aboutTitle,description:aboutDescription,inLanguage:'pt-BR',mainEntity:{'@id':'https://lsassistenciatech.com.br/#organization'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:'https://lsassistenciatech.com.br/'},{'@type':'ListItem',position:2,name:'Sobre',item:aboutUrl}]},
 ],
};
