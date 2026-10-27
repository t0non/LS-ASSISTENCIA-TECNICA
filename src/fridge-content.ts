export const fridgeTitle = 'Conserto de Geladeira em BH | LS Assistência Técnica';
export const fridgeDescription = 'Técnico de geladeira em Belo Horizonte e região. Conserto e manutenção de geladeiras convencionais, duplex e frost free. Solicite atendimento à LS.';
export const fridgeUrl = 'https://lsassistenciatech.com.br/conserto-de-geladeira/';
export const fridgeSchema = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Organization','@id':'https://lsassistenciatech.com.br/#organization',name:'LS Assistência Técnica',url:'https://lsassistenciatech.com.br/',telephone:'+5531982593186',logo:'https://lsassistenciatech.com.br/assets/logo.webp'},
  {'@type':'Service','@id':fridgeUrl+'#service',name:'Conserto de geladeira em Belo Horizonte',description:fridgeDescription,url:fridgeUrl,serviceType:'Conserto e manutenção de geladeiras',provider:{'@id':'https://lsassistenciatech.com.br/#organization'},areaServed:['Belo Horizonte','Contagem','Betim','Nova Lima'].map(name=>({'@type':'City',name}))},
  {'@type':'WebPage','@id':fridgeUrl+'#webpage',name:fridgeTitle,url:fridgeUrl,description:fridgeDescription,inLanguage:'pt-BR',mainEntity:{'@id':fridgeUrl+'#service'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:'https://lsassistenciatech.com.br/'},{'@type':'ListItem',position:2,name:'Conserto de geladeira',item:fridgeUrl}]},
 ],
};
