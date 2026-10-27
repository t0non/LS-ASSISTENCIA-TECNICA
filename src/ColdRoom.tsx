import {applyPageMetadata} from './page-metadata';
import {coldRoomSeo} from './service-seo';
import {useEffect, useState, type ReactNode} from 'react';
import {Menu, X, ChevronDown, Phone, Mail, MapPin, Check} from 'lucide-react';
import './cold-room.css';

const base = 'https://geladeiraconsertoembh.com.br/wp-content/uploads/';
const image = (name: string) => `${base}2025/06/${name}`;
const whatsapp = 'https://wa.me/5531982593186?text=' + encodeURIComponent('Olá! Quero um orçamento para manutenção de câmara fria.');
const services = [
  ['Refrigeração insuficiente', 'Avaliação do circuito de refrigeração para recuperar o desempenho do equipamento.', 'camara-fria-nao-resfria-corretamente-768x402.jpg'],
  ['Defeitos no painel eletrônico', 'Diagnóstico de comandos, alimentação elétrica e componentes do painel.', 'painel-de-controle-com-falhas-ou-apagado-1024x537.jpg'],
  ['Oscilação de temperatura', 'Verificação dos sensores e ajustes do controlador para estabilizar a conservação.', 'temperatura-desregulada-ou-fora-do-padrao-1024x537.jpg'],
  ['Umidade e vazamentos', 'Inspeção dos drenos e da vedação para identificar a origem da água acumulada.', 'vazamento-de-agua-ou-condensacao-excessiva-1024x537.jpg'],
  ['Ruídos durante a operação', 'Análise do conjunto de ventilação, fixações e compressor da câmara.', 'barulhos-incomuns-ou-vibracao-intensa-1024x537.jpg'],
  ['Acúmulo excessivo de gelo', 'Revisão do degelo e dos evaporadores para restabelecer a circulação de ar.', 'formacao-de-gelo-nas-paredes-ou-evaporador-1024x537.jpg'],
];
const questions = [
  ['Quando solicitar uma avaliação técnica?', 'Procure atendimento quando houver perda de refrigeração, variações de temperatura, gelo acumulado ou ruídos diferentes do habitual. Informe os sintomas ao agendar a visita.'],
  ['Como é definido o orçamento?', 'O técnico avalia o modelo, a capacidade e a causa da falha. O orçamento apresenta o serviço necessário e as peças indicadas, para sua aprovação antes do reparo.'],
  ['É possível fazer o reparo na primeira visita?', 'O prazo depende do diagnóstico e da disponibilidade dos componentes. Nossa equipe informa a previsão após verificar o equipamento.'],
  ['O atendimento é realizado no estabelecimento?', 'Sim. Agendamos a avaliação no local de instalação da câmara fria em Belo Horizonte e nas cidades atendidas pela LS.'],
  ['Vocês avaliam o compressor?', 'Sim. Verificamos as condições de funcionamento do conjunto e explicamos as opções de reparo ou substituição quando necessárias.'],
  ['Como consultar pagamento e garantia?', 'Fale com a equipe pelo WhatsApp para confirmar as condições de pagamento e a garantia aplicável ao seu orçamento.'],
];
function ContactButton({children = 'Solicitar atendimento', blue = false}: {children?: ReactNode; blue?: boolean}) {
  return <a className={`cr-button ${blue ? 'cr-blue' : ''}`} href={whatsapp} target="_blank" rel="noopener noreferrer"><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/>{children}</a>;
}
function ContactBand() {
  return <section className="cr-band"><div className="cr-wrap cr-band-inner"><img src="/assets/mascote.png" alt="Mascote da LS Assistência Técnica" loading="lazy"/><div><h2>Precisa de ajuda com sua câmara fria?</h2><p>Conte com a LS para avaliar seu equipamento em Belo Horizonte.<br/>Agende uma visita e receba um orçamento para o serviço.</p><ContactButton>Conversar com a equipe</ContactButton></div></div></section>;
}
export default function ColdRoom() {
  const [menu, setMenu] = useState(false);
  useEffect(() => applyPageMetadata(coldRoomSeo), []);
  return <div className="cold-room">
    <header className="cr-nav"><a href="/" aria-label="Página inicial da LS"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><button className="cr-menu-button" onClick={()=>setMenu(!menu)} aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu}>{menu ? <X/> : <Menu/>}</button><nav className={menu ? 'cr-links cr-open' : 'cr-links'} aria-label="Navegação principal"><a href="#servicos" onClick={()=>setMenu(false)}>Serviços <ChevronDown size={15}/></a><a href="#assistencia" onClick={()=>setMenu(false)}>Assistência <ChevronDown size={15}/></a><a href="/onde-atendemos/" onClick={()=>setMenu(false)}>Onde atendemos</a><a href="/sobre/" onClick={()=>setMenu(false)}>Sobre</a><a href="/contato/" onClick={()=>setMenu(false)}>Contato</a></nav><div className="cr-nav-cta"><ContactButton blue>Solicite Já</ContactButton></div></header>
    <main>
      <section className="cr-hero"><div><h1>Precisando de<br/>Conserto de Câmara Fria<br/>em Belo Horizonte?</h1><p>Seu equipamento precisa de reparo? A LS Assistência Técnica ajuda você a encontrar a solução para sua câmara fria. Fale com nossa equipe.</p><ContactButton>Solicite Já</ContactButton></div></section>
      <section id="servicos" className="cr-wrap cr-services"><h2>Serviço especializado em câmaras frias<br/>em Belo Horizonte e região</h2><p className="cr-lead">Diagnóstico cuidadoso e soluções para a refrigeração do seu negócio.</p><div className="cr-grid">{services.map(([title, text, src])=><article className="cr-card" key={title}><img src={image(src)} alt={title} loading="lazy"/><div><h3>{title}</h3><p>{text}</p><ContactButton blue>Consultar serviço »</ContactButton></div></article>)}</div></section>
      <section id="assistencia" className="cr-wrap cr-text"><h2>Cuidados com a refrigeração comercial</h2><p>A conservação dos produtos depende de um sistema de refrigeração funcionando adequadamente. A LS Assistência Técnica atende estabelecimentos que precisam identificar falhas e recuperar o funcionamento de suas câmaras frias.</p><p>Avaliamos as condições do equipamento, explicamos o diagnóstico e apresentamos uma proposta de manutenção. Restaurantes, mercados, açougues e outros negócios podem consultar nossa disponibilidade de atendimento.</p><p>Entre em contato para informar o modelo e os sintomas apresentados.</p></section>
      <ContactBand/>
      <section className="cr-wrap cr-text"><h2>Sinais que merecem atenção</h2><ul className="cr-problems">{['Refrigeração abaixo da capacidade esperada', 'Variações frequentes na leitura de temperatura', 'Gelo bloqueando a passagem de ar', 'Água acumulada no interior do equipamento', 'Vibrações e sons fora do padrão', 'Erros no controlador e nas sondas'].map(t=><li key={t}>{t}</li>)}</ul><h2>Equipamentos e fabricantes</h2><p>Consulte nossa equipe para câmaras de resfriamento ou congelamento, sistemas modulares e instalações comerciais. Informe a marca e o modelo ao solicitar atendimento.</p><div className="cr-brands">{['eletrofrio', 'fricon', 'tecnofrio', 'metalfrio', 'gelopar-1'].map(b=><img key={b} src={image(`${b}.jpg`)} alt={b.replace('-1','')} loading="lazy"/>)}</div><p>A indicação do serviço e dos componentes depende da avaliação técnica de cada instalação.</p></section>
      <section id="sobre" className="cr-wrap cr-text"><h2>Atendimento LS para o seu negócio</h2><p>Sabemos como uma falha na refrigeração interfere na rotina do estabelecimento. Por isso, nosso atendimento começa com a escuta do problema e um agendamento conforme a disponibilidade da equipe.</p><p>Você acompanha o diagnóstico e conhece o orçamento antes de autorizar o trabalho.</p><ul className="cr-checks">{['Visita no endereço do equipamento', 'Explicação clara do diagnóstico', 'Orçamento antes da execução', 'Atenção às necessidades da sua operação', 'Contato direto com nossa equipe'].map(t=><li key={t}><Check size={20}/>{t}</li>)}</ul></section>
      <ContactBand/>
      <section className="cr-wrap cr-faq"><h2>Dúvidas sobre o atendimento</h2>{questions.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</section>
      <ContactBand/>
      <section className="cr-wrap cr-text"><h2>Como funciona a visita técnica</h2><div className="cr-process">{[['1','Entre em contato','Informe o endereço, a marca e o problema que você percebeu.'],['2','Agende a avaliação','Combine com nossa equipe um horário disponível para a visita.'],['3','Receba o orçamento','Conheça o diagnóstico e os serviços recomendados para sua câmara.']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>
      <section id="regiao" className="cr-wrap cr-text"><h2>Atendimento em BH e cidades próximas</h2><p>Solicite uma consulta de disponibilidade para Belo Horizonte, Contagem, Betim, Nova Lima, Sabará, Vespasiano, Lagoa Santa e Ribeirão das Neves.</p><p>Informe seu bairro pelo WhatsApp para combinar o deslocamento e o agendamento.</p></section>
      <section id="contato" className="cr-contact"><div className="cr-wrap"><h2>Agende uma avaliação</h2><p>Fale diretamente com a LS Assistência Técnica.</p><a className="cr-phone" href="tel:+5531982593186"><Phone/> (31) 98259-3186</a><ContactButton>Pedir orçamento pelo WhatsApp</ContactButton><p><MapPin size={18}/> Belo Horizonte – MG</p></div></section>
    </main>
    <footer className="cr-footer"><div className="cr-wrap"><a href="/"><img src="/assets/logo.webp" alt="LS Assistência Técnica"/></a><div><h3>Navegação</h3><a href="/blog/">Blog da LS</a><a href="/">Página inicial</a><a href="#servicos">Nossos serviços</a><a href="#regiao">Área de atendimento</a></div><div><h3>Fale com a LS</h3><a href="tel:+5531982593186"><Phone size={18}/> (31) 98259-3186</a><a href="mailto:ls.assistenciatech1@gmail.com"><Mail size={18}/> ls.assistenciatech1@gmail.com</a></div></div><p>LS Assistência Técnica | © {new Date().getFullYear()}</p></footer>
    <a href={whatsapp} className="cr-floating" aria-label="Conversar no WhatsApp" target="_blank" rel="noopener noreferrer"><img className="cr-whatsapp-icon" src="/assets/chame no whatsapp.png" alt="" aria-hidden="true"/></a>
  </div>;
}
