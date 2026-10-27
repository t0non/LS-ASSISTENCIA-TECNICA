import {useEffect, useState, type ReactNode} from 'react';
import {Menu, X, ChevronDown, Phone, Mail, MapPin} from 'lucide-react';
import {contactTitle,contactDescription,contactUrl,contactSchema} from './contact-content';
const areaWhatsApp = () => 'https://wa.me/5531982593186?text='+encodeURIComponent('Olá! Gostaria de solicitar atendimento da LS Assistência Técnica. Posso informar meu equipamento e endereço?');
import './cold-room.css';
import './contact.css';

function trackContact() {
 const w=window as Window & {dataLayer?:Record<string,unknown>[]};
 w.dataLayer=w.dataLayer||[];
 w.dataLayer.push({event:'whatsapp_click',page_type:'contato',page_path:window.location.pathname,link_url:areaWhatsApp()});
}
function Button({children='Solicite Já'}:{children?:ReactNode}) {
 return <a className="cr-button" href={areaWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/>{children}</a>;
}
export default function Contact() {
 const [menu,setMenu]=useState(false);
 useEffect(()=>{
  document.title=contactTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content',contactDescription);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',contactUrl);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',contactTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',contactDescription);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content',contactUrl);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content','https://lsassistenciatech.com.br/assets/logo.webp');
  document.querySelector('script[type="application/ld+json"]')?.replaceChildren(document.createTextNode(JSON.stringify(contactSchema)));
 },[]);
 return <div className="cold-room contact-page">
  <header className="cr-nav"><a href="/" aria-label="Página inicial da LS"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><button className="cr-menu-button" aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} aria-controls="contact-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav id="contact-menu" className={menu?'cr-links cr-open':'cr-links'} aria-label="Navegação principal"><a href="/conserto-de-geladeira/">Serviços <ChevronDown size={15}/></a><a href="/refrigeracao-comercial/">Assistência <ChevronDown size={15}/></a><a href="/onde-atendemos/">Onde atendemos</a><a href="/sobre/">Sobre</a><a href="/contato/" aria-current="page">Contato</a></nav><div className="cr-nav-cta"><Button/></div></header>
  <main className="contact-main">
   <h1>Entre em contato</h1>
   <div className="contact-grid">
    <section className="contact-copy" aria-label="Canais de atendimento da LS">
     <p>Precisa de <a href="/conserto-de-geladeira/"><strong>conserto de geladeira em Belo Horizonte</strong></a>? Fale com a LS Assistência Técnica para consultar uma avaliação no seu endereço.</p>
     <p>Recebemos solicitações de residências e estabelecimentos comerciais em BH e região. Informe a marca, o modelo e o problema do equipamento para orientar o atendimento.</p>
     <p>Solicite seu orçamento pelo WhatsApp ou entre em contato pelos canais abaixo.</p>
     <h2>Atendimento para serviços</h2>
     <div className="contact-channels">
      <div className="contact-channel"><span><Phone size={34}/></span><div><strong>Telefone</strong><a href="tel:+5531982593186">(31) 98259-3186</a></div></div>
      <div className="contact-channel"><span><img src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/></span><div><strong>WhatsApp</strong><a href={areaWhatsApp()} onClick={()=>trackContact()} target="_blank" rel="noopener noreferrer">(31) 98259-3186</a></div></div>
      <div className="contact-channel"><span><Mail size={32}/></span><div><strong>E-mail</strong><a href="mailto:ls.assistenciatech1@gmail.com">ls.assistenciatech1@gmail.com</a></div></div>
     </div>
     <Button>Solicitar meu orçamento</Button>
     <p className="contact-location"><MapPin size={19}/> Belo Horizonte – MG</p>
    </section>
    <figure className="contact-map"><iframe title="Mapa de Belo Horizonte e região" src="https://maps.google.com/maps?q=Belo%20Horizonte%2C%20MG&amp;z=11&amp;output=embed" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/><figcaption>Mapa da região de atendimento. Consulte a disponibilidade para seu endereço e conheça os <a className="underline" href="/onde-atendemos/">bairros e cidades atendidos</a>.</figcaption></figure>
   </div>
  </main>
  <footer className="cr-footer"><div className="cr-wrap"><a href="/"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><div><h3>Links úteis</h3><a href="/blog/">Blog da LS</a><a href="/">Página inicial</a><a href="/conserto-de-geladeira/">Conserto de geladeira</a><a href="/refrigeracao-comercial/">Refrigeração comercial</a></div><div><h3>Fale conosco</h3><a href="tel:+5531982593186"><Phone size={18}/> (31) 98259-3186</a><a href="mailto:ls.assistenciatech1@gmail.com"><Mail size={18}/> ls.assistenciatech1@gmail.com</a></div></div><p>LS Assistência Técnica | © {new Date().getFullYear()}</p></footer>
  <a className="cr-floating" href={areaWhatsApp()} aria-label="Conversar no WhatsApp" target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/></a>
 </div>;
}
