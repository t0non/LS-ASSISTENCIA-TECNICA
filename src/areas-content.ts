import {allNeighborhoods} from './area-neighborhoods';
export const areasTitle = 'Onde Atendemos em BH e Região | LS Assistência Técnica';
export const areasDescription = 'Consulte o atendimento da LS Assistência Técnica nos bairros de Belo Horizonte e região. Conserto de geladeira e outros equipamentos. Fale pelo WhatsApp.';
export const areasUrl = 'https://lsassistenciatech.com.br/onde-atendemos/';
export const neighborhoods = allNeighborhoods;
export const nearbyCities = ['Contagem','Betim','Nova Lima','Vespasiano','Lagoa Santa','Sabará','Ribeirão das Neves'];
export const areaWhatsApp = (area?: string) => 'https://wa.me/5531982593186?text='+encodeURIComponent(area ? `Olá! Gostaria de consultar atendimento para conserto de geladeira em ${area}.` : 'Olá! Gostaria de consultar atendimento da LS Assistência Técnica no meu endereço.');
export const areasSchema = {
 '@context':'https://schema.org',
 '@graph':[
  {'@type':'Organization','@id':'https://lsassistenciatech.com.br/#organization',name:'LS Assistência Técnica',url:'https://lsassistenciatech.com.br/',telephone:'+5531982593186',logo:'https://lsassistenciatech.com.br/assets/logo.webp'},
  {'@type':'WebPage','@id':areasUrl+'#webpage',url:areasUrl,name:areasTitle,description:areasDescription,inLanguage:'pt-BR',about:{'@id':'https://lsassistenciatech.com.br/#organization'},mainEntity:{'@id':areasUrl+'#areas'}},
  {'@type':'ItemList','@id':areasUrl+'#areas',name:'Regiões para consulta de atendimento da LS',itemListElement:['Belo Horizonte',...nearbyCities].map((name,index)=>({'@type':'ListItem',position:index+1,item:{'@type':'City',name}}))},
  {'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:'https://lsassistenciatech.com.br/'},{'@type':'ListItem',position:2,name:'Onde atendemos',item:areasUrl}]},
 ],
};
