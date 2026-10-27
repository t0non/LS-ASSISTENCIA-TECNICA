export const contactTitle='Contato | LS Assistência Técnica em Belo Horizonte';
export const contactDescription='Fale com a LS Assistência Técnica pelo WhatsApp, telefone ou e-mail. Consulte atendimento para geladeiras e refrigeração em Belo Horizonte e região.';
export const contactUrl='https://lsassistenciatech.com.br/contato/';
export const contactSchema={
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Organization','@id':'https://lsassistenciatech.com.br/#organization',name:'LS Assistência Técnica',url:'https://lsassistenciatech.com.br/',telephone:'+5531982593186',email:'ls.assistenciatech1@gmail.com',logo:'https://lsassistenciatech.com.br/assets/logo.webp',contactPoint:{'@type':'ContactPoint',telephone:'+5531982593186',email:'ls.assistenciatech1@gmail.com',contactType:'Atendimento ao cliente',availableLanguage:'Portuguese',areaServed:'Belo Horizonte e região'}},
  {'@type':'ContactPage','@id':contactUrl+'#webpage',url:contactUrl,name:contactTitle,description:contactDescription,inLanguage:'pt-BR',mainEntity:{'@id':'https://lsassistenciatech.com.br/#organization'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:'https://lsassistenciatech.com.br/'},{'@type':'ListItem',position:2,name:'Contato',item:contactUrl}]},
 ],
};
