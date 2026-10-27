import {useEffect, useState, type ReactNode} from 'react';
import {Menu, X, ChevronDown, Phone, Mail, MapPin} from 'lucide-react';
import {aboutTitle,aboutDescription,aboutUrl,aboutSchema} from './about-content';
const areaWhatsApp = () => 'https://wa.me/5531982593186?text='+encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da LS Assistência Técnica.');
import './cold-room.css';
import './about.css';

function trackContact() {
 const w=window as Window & {dataLayer?:Record<string,unknown>[]};
 w.dataLayer=w.dataLayer||[];
 w.dataLayer.push({event:'whatsapp_click',page_type:'sobre',page_path:window.location.pathname,link_url:areaWhatsApp()});
}
function Button({children='Solicite Já'}:{children?:ReactNode}) {
 return <a className="cr-button" href={areaWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/>{children}</a>;
}
export default function About() {
 const [menu,setMenu]=useState(false);
 useEffect(()=>{
  document.title=aboutTitle;
  document.querySelector('meta[name="description"]')?.setAttribute('content',aboutDescription);
  document.querySelector('link[rel="canonical"]')?.setAttribute('href',aboutUrl);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content',aboutTitle);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content',aboutDescription);
  document.querySelector('meta[property="og:url"]')?.setAttribute('content',aboutUrl);
  document.querySelector('meta[property="og:image"]')?.setAttribute('content','https://lsassistenciatech.com.br/assets/logo.webp');
  document.querySelector('script[type="application/ld+json"]')?.replaceChildren(document.createTextNode(JSON.stringify(aboutSchema)));
 },[]);
 return <div className="cold-room about-page">
  <header className="cr-nav"><a href="/" aria-label="Página inicial da LS"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><button className="cr-menu-button" aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} aria-controls="about-menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button><nav id="about-menu" className={menu?'cr-links cr-open':'cr-links'} aria-label="Navegação principal"><a href="/conserto-de-geladeira/">Serviços <ChevronDown size={15}/></a><a href="/refrigeracao-comercial/">Assistência <ChevronDown size={15}/></a><a href="/onde-atendemos/">Onde atendemos</a><a href="/sobre/" aria-current="page">Sobre</a><a href="/contato/" onClick={()=>setMenu(false)}>Contato</a></nav><div className="cr-nav-cta"><Button/></div></header>
  <main>
   <article className="about-content">
    <h1>Sobre</h1>
    <p>A <a href="/"><strong>LS Assistência Técnica</strong></a> atua com conserto e manutenção de eletrodomésticos e equipamentos de refrigeração em Belo Horizonte e região, atendendo solicitações de residências e estabelecimentos comerciais.</p>
    <p>Entre os serviços apresentados pela LS estão o <a href="/conserto-de-geladeira/">conserto de geladeiras</a>, <a href="/freezer/">freezers</a>, máquinas de lavar, lava-louças e <a href="/refrigeracao-comercial/">refrigeração comercial</a>, incluindo câmaras frias, balcões, ilhas e expositores refrigerados.</p>
    <h2>Nossa missão</h2>
    <p>Facilitar o atendimento de quem precisa resolver um problema em seu equipamento. Nosso compromisso é ouvir o cliente, entender os sintomas e orientar a avaliação com informações claras sobre o serviço necessário.</p>
    <h2>Nossa atuação</h2>
    <p>A LS atende solicitações de Belo Horizonte e cidades da região, como Contagem, Betim e Nova Lima. Ao entrar em contato, informe o equipamento, a marca, o modelo e o endereço para consultar a disponibilidade de atendimento.</p>
    <p>Para residências, a avaliação considera as características do eletrodoméstico e a falha relatada. Para comércios, o contato também leva em conta o tipo de equipamento e as necessidades do estabelecimento.</p>
    <h2>Nossos valores</h2>
    <p>Valorizamos o respeito ao cliente, a comunicação direta e a transparência. Entender o problema é o primeiro passo para explicar o diagnóstico e apresentar as opções de serviço.</p>
    <p>O orçamento, o prazo previsto e as condições aplicáveis ao atendimento devem ser esclarecidos antes da autorização do reparo. Assim, o cliente pode avaliar as informações e decidir como prosseguir.</p>
    <h2>Informações de contato</h2>
    <p>Quer conhecer os serviços da LS ou solicitar uma avaliação? Fale com nossa equipe pelo <a href={areaWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}>WhatsApp</a>, pelo telefone <a href="tel:+5531982593186">(31) 98259-3186</a> ou pelo e-mail <a href="mailto:ls.assistenciatech1@gmail.com">ls.assistenciatech1@gmail.com</a>.</p>
   </article>
   <section id="contato" className="about-contact"><div className="cr-wrap"><h2>Atendemos em Belo Horizonte e região</h2><p>Consulte os <a className="underline" href="/onde-atendemos/">bairros e cidades atendidos pela LS</a>. Envie o endereço e descreva o problema do equipamento para receber as orientações da equipe.</p><h2>Contato para serviços</h2><dl><div><dt>Telefone</dt><dd><a href="tel:+5531982593186">(31) 98259-3186</a></dd></div><div><dt>WhatsApp</dt><dd><a href={areaWhatsApp()} target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}>(31) 98259-3186</a></dd></div></dl><Button>Solicitar meu orçamento</Button><p className="about-location"><MapPin size={18}/> Belo Horizonte – MG</p></div></section>
  </main>
  <footer className="cr-footer"><div className="cr-wrap"><a href="/"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><div><h3>Links úteis</h3><a href="/blog/">Blog da LS</a><a href="/">Página inicial</a><a href="/conserto-de-geladeira/">Conserto de geladeira</a><a href="/refrigeracao-comercial/">Refrigeração comercial</a></div><div><h3>Fale conosco</h3><a href="tel:+5531982593186"><Phone size={18}/> (31) 98259-3186</a><a href="mailto:ls.assistenciatech1@gmail.com"><Mail size={18}/> ls.assistenciatech1@gmail.com</a></div></div><p>LS Assistência Técnica | © {new Date().getFullYear()}</p></footer>
  <a className="cr-floating" href={areaWhatsApp()} aria-label="Conversar no WhatsApp" target="_blank" rel="noopener noreferrer" onClick={()=>trackContact()}><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/></a>
 </div>;
}
