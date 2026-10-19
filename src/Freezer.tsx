import {useEffect, useState, type ReactNode} from 'react';
import {Menu, X, ChevronDown, Phone, Mail, MapPin} from 'lucide-react';
import './cold-room.css';

const uploads = 'https://geladeiraconsertoembh.com.br/wp-content/uploads/2025/05/';
const whatsapp = 'https://wa.me/5531982593186?text=' + encodeURIComponent('Olá! Quero solicitar um orçamento para conserto de freezer.');
const services = [
  ['Reparo do motor', 'Inspeção do compressor e dos componentes de partida para identificar a falha do freezer.', 'manutencao-de-motor-1-768x402.jpg'],
  ['Revisão do gás refrigerante', 'Diagnóstico do circuito, verificação de vazamentos e carga de fluido quando indicada.', 'recarga-de-gas-1-1024x537.jpg'],
  ['Reparo eletrônico', 'Avaliação da placa e dos comandos quando o equipamento não responde corretamente.', 'conserto-de-placa-eletronica-1-1024x537.jpg'],
  ['Correção de vazamentos', 'Localização da origem do vazamento e avaliação do reparo necessário no sistema.', 'retirada-de-vazamento-1-1024x537.jpg'],
  ['Ajuste da temperatura', 'Verificação do termostato e dos sensores para recuperar o controle do congelamento.', 'troca-de-termostato-1-1024x537.jpg'],
  ['Cuidados com dreno e ventilação', 'Inspeção e limpeza dos pontos que interferem na drenagem e na circulação de ar.', 'limpeza-de-dreno-e-sistema-de-ventilacao-1-1024x537.jpg'],
];
const questions = [
  ['Quais sinais indicam uma falha no freezer?', 'Alimentos descongelando, dificuldade para atingir a temperatura, ruídos diferentes e água acumulada são motivos para solicitar uma avaliação. Informe à equipe o que mudou no funcionamento.'],
  ['Meu freezer está ligado, mas não congela. O que fazer?', 'Confira se a porta fecha completamente e se a alimentação elétrica está normal. Se a falha continuar, solicite uma visita para investigar a causa antes de trocar peças ou adicionar gás.'],
  ['Como consultar o valor do reparo?', 'O orçamento depende do diagnóstico, do modelo e dos componentes necessários. Após avaliar o equipamento, o técnico explica o serviço e apresenta o valor para sua aprovação.'],
  ['Qual é o prazo para o conserto?', 'O prazo varia conforme o defeito e a disponibilidade das peças. A previsão é informada após a avaliação, considerando as condições do equipamento.'],
  ['A visita pode ser feita na minha casa?', 'Sim. Consulte o atendimento em domicílio em Belo Horizonte e nas cidades da região. Também é possível solicitar avaliação para equipamentos instalados em estabelecimentos comerciais.'],
  ['Vocês trabalham com freezers horizontais e verticais?', 'Avaliamos os dois tipos. Envie a marca, o modelo e uma descrição do problema para confirmar a disponibilidade do serviço.'],
  ['Como confirmar pagamento e garantia?', 'Nossa equipe informa as formas de pagamento e as condições de garantia aplicáveis ao orçamento antes da contratação. Fale conosco pelo WhatsApp.'],
];
function Button({children = 'Solicite Já', blue = false}: {children?: ReactNode; blue?: boolean}) {
  return <a className={`cr-button ${blue ? 'cr-blue' : ''}`} href={whatsapp} target="_blank" rel="noopener noreferrer"><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/>{children}</a>;
}
function ContactBand() {
  return <section className="cr-band"><div className="cr-wrap cr-band-inner"><img src="/assets/mascote.png" alt="Mascote da LS Assistência Técnica" loading="lazy"/><div><h2>Seu freezer precisa de atendimento?</h2><p>Agende uma avaliação com a LS em Belo Horizonte.<br/>Conte o que aconteceu e consulte nossa disponibilidade.</p><Button>Solicitar meu orçamento</Button></div></div></section>;
}
export default function Freezer() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const title = 'Conserto de Freezer em Belo Horizonte | LS Assistência Técnica';
    const description = 'Atendimento para freezers horizontais e verticais em Belo Horizonte e região. Solicite uma avaliação com a LS Assistência Técnica.';
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) {
      const url = new URL('/freezer/', canonical.href).href;
      canonical.href = url;
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    }
  }, []);
  return <div className="cold-room freezer-page">
    <header className="cr-nav"><a href="/" aria-label="Página inicial da LS"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><button className="cr-menu-button" onClick={()=>setMenu(!menu)} aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button><nav className={menu ? 'cr-links cr-open' : 'cr-links'} aria-label="Navegação principal"><a href="#servicos" onClick={()=>setMenu(false)}>Serviços <ChevronDown size={15}/></a><a href="#assistencia" onClick={()=>setMenu(false)}>Assistência <ChevronDown size={15}/></a><a href="#regiao" onClick={()=>setMenu(false)}>Onde atendemos</a><a href="#sobre" onClick={()=>setMenu(false)}>Sobre</a><a href="#contato" onClick={()=>setMenu(false)}>Contato</a></nav><div className="cr-nav-cta"><Button blue/></div></header>
    <main>
      <section className="cr-hero"><div><h1>Precisando de<br/>Conserto de Freezer<br/>em Belo Horizonte?</h1><p>O congelamento não está como deveria? Fale com a LS Assistência Técnica e agende uma avaliação do seu freezer em Belo Horizonte.</p><Button/></div></section>
      <section id="servicos" className="cr-wrap cr-services"><h2>Assistência LS para seu freezer<br/>em Belo Horizonte e região</h2><p className="cr-lead">Soluções para recuperar o funcionamento do seu equipamento, com diagnóstico e orçamento.</p><div className="cr-grid">{services.map(([title,text,src])=><article className="cr-card" key={title}><img src={uploads+src} alt={title} loading="lazy"/><div><h3>{title}</h3><p>{text}</p><Button blue>Consultar serviço »</Button></div></article>)}</div></section>
      <section id="assistencia" className="cr-wrap cr-text"><h2>Seu freezer em boas mãos</h2><p>A LS Assistência Técnica atende equipamentos usados em residências e comércios. Avaliamos a refrigeração, os componentes elétricos e as condições de funcionamento para indicar o serviço adequado.</p><p>Informe a marca e o modelo ao agendar. Nossa equipe explica o diagnóstico e apresenta o orçamento antes de iniciar qualquer reparo.</p><h2>O que podemos avaliar no equipamento</h2><ul className="cr-problems">{['Congelamento insuficiente mesmo com o motor funcionando', 'Acúmulo de gelo que dificulta o uso', 'Sons e vibrações fora do habitual', 'Vazamentos e falhas na drenagem', 'Mudanças no desempenho e no consumo', 'Comandos eletrônicos que não respondem'].map(t=><li key={t}>{t}</li>)}</ul></section>
      <ContactBand/>
      <section className="cr-wrap cr-text"><h2>Atendimento para modelos horizontais e verticais</h2><p>Do freezer da cozinha ao equipamento do estabelecimento, cada modelo exige uma avaliação própria. Consulte o atendimento para freezers de tampa superior, modelos verticais e equipamentos de exposição.</p><p>A capacidade, o tipo de controle e as condições de instalação são considerados no diagnóstico. Envie essas informações à equipe ao solicitar sua visita.</p><h2>Marcas atendidas pela LS</h2><p>Consulte o serviço disponível para a marca e o modelo do seu freezer.</p><div className="cr-brands">{[['Samsung','brand-samsung.png'],['Brastemp','brastemp.png'],['Consul','consuk.png'],['Electrolux','electrolux.png'],['Midea','midea.png']].map(([name,src])=><img key={name} src={'/assets/'+src} alt={name} loading="lazy"/>)}</div></section>
      <section id="sobre" className="cr-wrap cr-text">
        <h2>Por que escolher a LS para conserto de freezer em Belo Horizonte?</h2>
        <p>Se você procura <strong>assistência técnica para freezer em Belo Horizonte</strong>, a LS oferece avaliação no endereço do equipamento. Informe seu bairro para consultar a disponibilidade da visita, seja em uma residência ou em um estabelecimento comercial.</p>
        <p>O atendimento abrange <strong>freezers horizontais e verticais</strong>. Falhas no congelamento, ruídos, vazamentos e problemas no controle de temperatura são avaliados para identificar a causa e indicar o reparo adequado.</p>
        <p>Atendemos solicitações para equipamentos de marcas como Electrolux, Consul, Brastemp, Samsung e Midea. Ao entrar em contato, envie a marca e o modelo: essas informações ajudam a equipe a verificar o serviço disponível e preparar a avaliação.</p>
        <p>Você recebe <strong>diagnóstico explicado e orçamento antes de autorizar o conserto</strong>. Os componentes necessários, o prazo previsto e as condições de garantia são informados conforme o serviço proposto para o seu freezer.</p>
        <p>Também pode conhecer nossos serviços de <a className="underline text-sky-700" href="/">conserto de geladeiras e outros eletrodomésticos em BH</a> e de <a className="underline text-sky-700" href="/camara-fria/">manutenção de câmara fria</a>. Para agendar o atendimento ao seu freezer, <a className="underline text-sky-700" href={whatsapp} target="_blank" rel="noopener noreferrer">fale com a LS pelo WhatsApp</a>.</p>
      </section>
      <ContactBand/>
      <section className="cr-wrap cr-faq"><h2>Tire suas dúvidas sobre o serviço</h2>{questions.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</section>
      <ContactBand/>
      <section className="cr-wrap cr-text"><h2>Da solicitação ao reparo</h2><div className="cr-process">{[['1','Fale com a equipe','Descreva a falha e informe a marca do freezer.'],['2','Combine a visita','Consulte os horários para avaliação no seu endereço.'],['3','Avalie o orçamento','Receba a explicação do serviço antes de autorizar.']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>
      <section id="regiao" className="cr-wrap cr-text"><h2>Visitas em Belo Horizonte e região</h2><p>Consulte nossa disponibilidade para Savassi, Lourdes, Funcionários, Anchieta, Pampulha, Santa Efigênia e demais bairros de BH.</p><p>Também atendemos solicitações de Contagem, Betim, Nova Lima, Sabará, Vespasiano, Lagoa Santa e Ribeirão das Neves. Confirme o deslocamento e o agendamento pelo WhatsApp.</p></section>
      <section id="contato" className="cr-contact"><div className="cr-wrap"><h2>Solicite uma avaliação do seu freezer</h2><p>Atendimento direto com a LS Assistência Técnica.</p><a className="cr-phone" href="tel:+5531982593186"><Phone/> (31) 98259-3186</a><Button>Pedir orçamento pelo WhatsApp</Button><p><MapPin size={18}/> Belo Horizonte – MG</p></div></section>
    </main>
    <footer className="cr-footer"><div className="cr-wrap"><a href="/"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><div><h3>Navegação</h3><a href="/">Página inicial</a><a href="/camara-fria/">Câmara fria</a><a href="#servicos">Serviços para freezer</a></div><div><h3>Fale com a LS</h3><a href="tel:+5531982593186"><Phone size={18}/> (31) 98259-3186</a><a href="mailto:ls.assistenciatech1@gmail.com"><Mail size={18}/> ls.assistenciatech1@gmail.com</a></div></div><p>LS Assistência Técnica | © {new Date().getFullYear()}</p></footer>
    <a href={whatsapp} className="cr-floating" aria-label="Conversar no WhatsApp" target="_blank" rel="noopener noreferrer"><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/></a>
  </div>;
}
