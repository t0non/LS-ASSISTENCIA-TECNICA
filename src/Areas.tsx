import {useEffect, useState, type ReactNode} from 'react';
import {Menu, X, ChevronDown, Phone, Mail} from 'lucide-react';
import {areasTitle,areasDescription,areasUrl,areasSchema,neighborhoods,nearbyCities,areaWhatsApp} from './areas-content';
import './cold-room.css';
import './areas.css';

function trackContact(area='geral') {
 const w=window as Window & {dataLayer?:Record<string,unknown>[]};
 w.dataLayer=w.dataLayer||[];
 w.dataLayer.push({event:'whatsapp_click',page_type:'onde_atendemos',page_path:window.location.pathname,service_area:area,link_url:areaWhatsApp(area==='geral'?undefined:area)});
}
function Button({children='Solicite Já'}:{children?:ReactNode}) {
 return <a className="cr-button" href={areaWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/>{children}</a>;
}
export default function Areas() {
 const [menu,setMenu]=useState(false);
 useEffect(()=>{
  document.title=areasTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content',areasDescription);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',areasUrl);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',areasTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',areasDescription);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content',areasUrl);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content','https://lsassistenciatech.com.br/assets/logo.webp');
  document.querySelector('script[type="application/ld+json"]')?.replaceChildren(document.createTextNode(JSON.stringify(areasSchema)));
 },[]);
 return <div className="cold-room areas-page">
  <header className="cr-nav"><a href="/" aria-label="Página inicial da LS"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><button className="cr-menu-button" aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} aria-controls="areas-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav id="areas-menu" className={menu?'cr-links cr-open':'cr-links'} aria-label="Navegação principal"><a href="/conserto-de-geladeira/">Serviços <ChevronDown size={15}/></a><a href="/refrigeracao-comercial/">Assistência <ChevronDown size={15}/></a><a href="/onde-atendemos/" aria-current="page">Onde atendemos</a><a href="/sobre/">Sobre</a><a href="/contato/" onClick={()=>setMenu(false)}>Contato</a></nav><div className="cr-nav-cta"><Button/></div></header>
  <main>
   <section className="areas-intro">
    <h1>Onde Atendemos em Belo Horizonte-MG</h1>
    <p>Procurando <a href="/conserto-de-geladeira/"><strong>conserto de geladeira perto de você em BH</strong></a>? A LS Assistência Técnica recebe solicitações dos principais bairros de Belo Horizonte e das cidades da região.</p>
    <p>Informe seu bairro, o equipamento e o problema para consultar a disponibilidade de atendimento no endereço.</p>
    <p>Além de geladeiras, conheça os serviços para <a href="/freezer/">freezer</a>, <a href="/camara-fria/">câmara fria</a> e <a href="/refrigeracao-comercial/">refrigeração comercial</a>.</p>
    <p>Fale com a LS e consulte sua visita técnica pelo telefone <a href="tel:+5531982593186">(31) 98259-3186</a> ou <a href={areaWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}>pelo WhatsApp</a>.</p>
   </section>
   <section className="areas-list" aria-label="Bairros de Belo Horizonte">
    {neighborhoods.map((name,index)=><article className="areas-card" key={name}><h2><a href={areaWhatsApp(name+', Belo Horizonte')} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact(name+', Belo Horizonte')}>Conserto de Geladeira em {name} | Assistência em Belo Horizonte-MG</a></h2><p>{['Precisa avaliar sua geladeira? Informe o modelo e o problema à LS para consultar o atendimento em','A LS recebe solicitações para conserto de geladeira em','Solicite orientações para uma visita técnica em'][index%3]} {name}. {index%3===0?'Combine a disponibilidade para o seu endereço.':index%3===1?'Descreva os sintomas e confirme o agendamento com a equipe.':'Entre em contato com a marca e o modelo do equipamento.'}</p></article>)}
   </section>
   <section className="areas-region"><h2>Atendimento em cidades próximas de Belo Horizonte</h2><p>Também recebemos solicitações das cidades abaixo. Consulte a disponibilidade e o deslocamento antes de agendar.</p></section>
   <section className="areas-list areas-cities" aria-label="Cidades da região metropolitana">{nearbyCities.map(name=><article className="areas-card" key={name}><h2><a href={areaWhatsApp(name)} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact(name)}>Assistência técnica para geladeira em {name}</a></h2><p>Informe o bairro e o problema do equipamento para consultar o atendimento da LS em {name}. A equipe orienta a avaliação e confirma a disponibilidade no seu endereço.</p></article>)}</section>
   <section id="contato" className="cr-contact"><div className="cr-wrap"><h2>Consulte o atendimento no seu bairro</h2><p>Não encontrou sua região? Fale com a LS Assistência Técnica.</p><a className="cr-phone" href="tel:+5531982593186"><Phone/> (31) 98259-3186</a><Button>Consultar pelo WhatsApp</Button></div></section>
  </main>
  <footer className="cr-footer"><div className="cr-wrap"><a href="/"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><div><h3>Links úteis</h3><a href="/blog/">Blog da LS</a><a href="/">Página inicial</a><a href="/conserto-de-geladeira/">Conserto de geladeira</a><a href="/refrigeracao-comercial/">Refrigeração comercial</a></div><div><h3>Fale conosco</h3><a href="tel:+5531982593186"><Phone size={18}/> (31) 98259-3186</a><a href="mailto:ls.assistenciatech1@gmail.com"><Mail size={18}/> ls.assistenciatech1@gmail.com</a></div></div><p>LS Assistência Técnica | © {new Date().getFullYear()}</p></footer>
  <a className="cr-floating" href={areaWhatsApp()} aria-label="Conversar no WhatsApp" target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/></a>
 </div>;
}
