const origin='https://lsassistenciatech.com.br';
function serviceSchema(path:string,name:string,description:string) {
 const url=origin+path;
 return {'@context':'https://schema.org','@graph':[
  {'@type':'Organization','@id':origin+'/#organization',name:'LS Assistência Técnica',url:origin+'/',telephone:'+5531982593186',logo:origin+'/assets/logo.webp'},
  {'@type':'Service','@id':url+'#service',url,name,description,provider:{'@id':origin+'/#organization'},areaServed:['Belo Horizonte','Contagem','Betim','Nova Lima'].map(name=>({'@type':'City',name}))},
  {'@type':'WebPage',url,name,description,inLanguage:'pt-BR',mainEntity:{'@id':url+'#service'}},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:origin+'/'},{'@type':'ListItem',position:2,name,item:url}]},
 ]};
}
const coldDescription='Conserto e manutenção de câmaras frias em Belo Horizonte e região. Consulte a avaliação do seu equipamento com a LS Assistência Técnica.';
const freezerDescription='Conserto de freezers horizontais e verticais em Belo Horizonte e região. Solicite uma avaliação com a LS Assistência Técnica.';
export const coldRoomSeo={path:'/camara-fria/',title:'Câmara Fria em Belo Horizonte | LS Assistência Técnica',description:coldDescription,url:origin+'/camara-fria/',image:origin+'/assets/mascote.png',schema:serviceSchema('/camara-fria/','Manutenção de câmara fria em Belo Horizonte',coldDescription)};
export const freezerSeo={path:'/freezer/',title:'Conserto de Freezer em Belo Horizonte | LS Assistência Técnica',description:freezerDescription,url:origin+'/freezer/',image:origin+'/assets/geladeiras.png',schema:serviceSchema('/freezer/','Conserto de freezer em Belo Horizonte',freezerDescription)};
