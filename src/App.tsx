/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  Menu, 
  X,
  Refrigerator,
  WashingMachine,
  Wine,
  UtensilsCrossed,
  ArrowRight,
  Star,
  Zap,
  ThumbsUp,
  Wrench
} from 'lucide-react';
import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const WHATSAPP_NUMBER = "5531982593186";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de solicitar um orçamento para conserto de eletrodoméstico.`;

const brands = [
  { name: "Samsung", logo: "https://files.catbox.moe/iaa1xk.png" },
  { name: "LG", logo: "https://files.catbox.moe/9rgs36.png" },
  { name: "Panasonic", logo: "https://files.catbox.moe/06mgnk.png" },
  { name: "Consul", logo: "https://files.catbox.moe/oif82e.png" },
  { name: "Midea", logo: "https://files.catbox.moe/8utqc5.png" },
  { name: "Electrolux", logo: "https://files.catbox.moe/3nub56.png" },
  { name: "Brastemp", logo: "https://files.catbox.moe/h6q929.png" },
  { name: "Esmaltec", logo: "https://files.catbox.moe/ddkyct.png" }
];

const testimonials = [
  { name: "Dona Maria Silva", text: "O técnico chegou rápido e consertou minha geladeira na hora. Muito educado e preço justo!", city: "Belo Horizonte" },
  { name: "João Pedro", text: "Minha máquina de lavar parou e eles resolveram no mesmo dia. Recomendo muito!", city: "Contagem" },
  { name: "Sra. Helena", text: "Excelente atendimento. Não cobraram a visita e o desconto de 10% ajudou muito.", city: "Nova Lima" },
  { name: "Ricardo Oliveira", text: "Serviço de primeira. Consertaram meu frigobar que ninguém queria mexer. Nota 10!", city: "Belo Horizonte" },
  { name: "Carla Mendes", text: "Muito atenciosos desde o primeiro contato no WhatsApp. O técnico foi pontual e resolveu tudo.", city: "Betim" },
  { name: "Seu Antônio", text: "Honestidade é tudo. O técnico explicou o problema e o valor ficou dentro do esperado. Recomendo.", city: "Belo Horizonte" },
  { name: "Patrícia Lima", text: "Minha lava-louças voltou a funcionar perfeitamente. Atendimento nota mil!", city: "Nova Lima" },
  { name: "Marcos Souza", text: "Rápido e eficiente. Agendei de manhã e à tarde já estava tudo resolvido.", city: "Contagem" },
  { name: "Fernanda Costa", text: "Já é a segunda vez que chamo e sempre resolvem de primeira. Confiança total!", city: "Belo Horizonte" },
  { name: "Lucas Almeida", text: "O freezer tava vazando e o técnico trocou a borracha rapidinho. Ficou perfeito!", city: "Sabará" },
  { name: "Dona Aparecida", text: "Achei que ia ter que comprar outra geladeira, mas eles consertaram e ficou como nova.", city: "Vespasiano" },
  { name: "Roberto Dias", text: "Preço justo e trabalho bem feito. Minha máquina de lavar tá funcionando melhor que antes.", city: "Betim" },
  { name: "Juliana Santos", text: "Atendimento pelo WhatsApp super rápido. Em menos de 2 horas o técnico já estava aqui.", city: "Contagem" },
  { name: "Seu José Carlos", text: "Consertaram minha geladeira duplex que já tinha 10 anos. Profissionais de verdade!", city: "Lagoa Santa" },
  { name: "Amanda Rocha", text: "Minha lava-louças Brastemp voltou a funcionar perfeitamente. Super indico!", city: "Nova Lima" },
  { name: "Paulo Henrique", text: "O melhor custo-benefício de BH. Sem taxa de visita e desconto real. Nota 10!", city: "Belo Horizonte" }
];

const avatarColors = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-orange-500',
  'bg-teal-500', 'bg-cyan-500'
];

const services = [
  {
    title: "Geladeiras e Freezers",
    description: "Conserto de geladeiras duplex, side-by-side, frost free e freezers.",
    image: "https://files.catbox.moe/aic6ep.png"
  },
  {
    title: "Máquinas de Lavar",
    description: "Manutenção de lavadoras de roupas e lava-louças de todas as marcas.",
    image: "https://files.catbox.moe/vks8sm.png"
  },
  {
    title: "Frigobares e Adegas",
    description: "Especialistas em refrigeração de pequeno porte e climatização.",
    image: "https://files.catbox.moe/10v07p.png"
  },
  {
    title: "Lava-Louças",
    description: "Reparo completo em lava-louças de embutir ou piso.",
    image: "https://files.catbox.moe/450d06.png"
  }
];

const steps = [
  {
    number: "01",
    title: "Chame no WhatsApp",
    description: "Clique no botão verde e fale com um técnico agora mesmo.",
    icon: "https://files.catbox.moe/o8hv0e.png",
    iconClass: "h-12 w-12",
    iconStyle: { filter: "brightness(0) saturate(100%) invert(32%) sepia(87%) saturate(3015%) hue-rotate(212deg) brightness(97%) contrast(93%)" }
  },
  {
    number: "02",
    title: "Receba o Técnico",
    description: "Agendamos a visita no mesmo dia. Sem taxa de visita em BH!",
    icon: "https://files.catbox.moe/trxbfm.png"
  },
  {
    number: "03",
    title: "Aparelho Consertado",
    description: "Serviço rápido, com peças originais e garantia total.",
    icon: "https://files.catbox.moe/18yvne.png"
  }
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <img 
    src="https://files.catbox.moe/o8hv0e.png" 
    alt="WhatsApp" 
    className={className} 
    referrerPolicy="no-referrer"
  />
);

const FadeIn: React.FC<{ 
  children: React.ReactNode; 
  delay?: number; 
  direction?: "up" | "down" | "left" | "right" | "none"; 
  className?: string; 
}> = ({ children, delay = 0, direction = "up", className = "" }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0
    },
    visible: { opacity: 1, y: 0, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const CTAButton = ({ className = "", children, animate = false, onClick }: { className?: string, children: React.ReactNode, animate?: boolean, onClick?: () => void }) => (
  <a 
    href={WHATSAPP_LINK} 
    target="_blank" 
    rel="noopener noreferrer"
    className={`cta-button cta-whatsapp ${animate ? 'animate-pulse-green' : ''} ${className}`}
    onClick={onClick}
  >
    {children}
  </a>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-green-100 font-body">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b' : 'bg-transparent'}`}>
        {/* Top Promo Bar - More Subtle and Premium */}
        <div className="sticky-promo font-accent py-2">
          SEM TAXA DE VISITA EM BH + 10% OFF NO PRIMEIRO SERVIÇO!
        </div>
        
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 relative z-[60]">
            <img 
              src="https://files.catbox.moe/8yqi8a.webp" 
              alt="LS Assistência Técnica Logo" 
              className={`${scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'} w-auto transition-all duration-500`} 
              referrerPolicy="no-referrer" 
            />
          </a>

          {/* Desktop Nav - Balanced and Symmetrical */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#servicos" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium tracking-wide">Serviços</a>
            <a href="#como-funciona" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium tracking-wide">Como Funciona</a>
            <a href="#contato" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium tracking-wide">Contato</a>
            <CTAButton className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200">
              ORÇAMENTO GRÁTIS
            </CTAButton>
          </div>

          <button 
            className="md:hidden relative z-[60] p-2 bg-white/50 backdrop-blur-md rounded-xl border" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
            title={isMenuOpen ? "Fechar" : "Menu"}
          >
            {isMenuOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-2xl px-6 pt-32 pb-10 md:hidden flex flex-col items-center justify-between text-center"
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-slate-100 rounded-xl" 
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar Menu"
            >
              <X size={24} className="text-slate-900" />
            </button>
            <div className="flex flex-col gap-8 text-2xl font-bold text-slate-900">
              <a href="#servicos" onClick={() => setIsMenuOpen(false)}>O que consertamos</a>
              <a href="#como-funciona" onClick={() => setIsMenuOpen(false)}>Como funciona</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a>
            </div>

            <div className="flex-1 flex items-center justify-center py-6">
              <img 
                src="https://files.catbox.moe/8yqi8a.webp" 
                alt="LS Assistência Técnica" 
                className="h-24 w-auto drop-shadow-md" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="w-full flex flex-col gap-4">
              <p className="text-slate-500 text-sm font-medium">Fale conosco agora:</p>
              <CTAButton animate className="w-full py-5 rounded-2xl flex items-center justify-center gap-3 text-lg" onClick={() => setIsMenuOpen(false)}>
                <WhatsAppIcon className="w-6 h-6 brightness-0 invert" />
                WHATSAPP AGORA
              </CTAButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header className="relative pt-20 pb-12 md:pt-0 md:pb-24 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-pulse-slow"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/20 to-transparent"></div>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:items-stretch group/hero">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 px-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] py-12 md:py-32 flex flex-col justify-center relative z-20"
          >
            <div className="w-fit inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold mb-4 shadow-sm uppercase tracking-wider">
              Atendimento Hoje em BH
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-slate-900 mb-6 text-balance">
              Conserto de <span className="text-blue-600">Geladeira</span> e <span className="text-blue-600">Máquina</span> de Lavar em BH.
            </h1>
            
            <p className="text-base md:text-lg text-slate-700 mb-8 leading-relaxed">
              Não cobramos <strong className="text-blue-600 font-bold font-accent">TAXA DE VISITA</strong> em Belo Horizonte. Orçamento rápido pelo WhatsApp com <strong className="text-green-600 font-bold font-accent">10% de DESCONTO</strong>.
            </p>

            <div className="flex flex-col gap-3">
              <CTAButton animate className="w-full md:w-fit mt-4">
                FALAR COM TÉCNICO AGORA
              </CTAButton>
              
              <div className="flex flex-wrap items-center gap-3 text-slate-700 text-sm">
                <div className="flex items-center gap-2">
                  Peças Originais
                </div>
                <div className="flex items-center gap-2">
                  Garantia Total
                </div>
                <div className="flex items-center gap-2">
                  Preço Justo
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 relative bg-slate-100"
          >
            <div className="relative h-full w-full overflow-hidden md:rounded-l-[3rem] shadow-l-2xl group">
              {/* Glow Effect Layer */}
              <div className="absolute inset-0 bg-blue-400/20 blur-[100px] -z-10 animate-glow"></div>
              
              {/* Image with Gradient Fade (Mask) */}
              <div className="relative" style={{ maskImage: 'radial-gradient(circle, black 65%, transparent 100%)', WebkitMaskImage: 'radial-gradient(circle, black 65%, transparent 100%)' }}>
                <img 
                  src="https://files.catbox.moe/mgqsis.jpg" 
                  alt="Técnicos Especialistas LS Assistência" 
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-[4/5]"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                />
              </div>
              
              {/* White Gradient Overlays for smooth blending */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none z-20 opacity-80"></div>
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none z-20"></div>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-20 opacity-60"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none z-20 opacity-60"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-4 md:-top-8 md:-right-8 bg-yellow-400 text-slate-900 p-4 md:p-6 rounded-full shadow-2xl border-2 border-white rotate-12 flex flex-col items-center justify-center text-center animate-bounce-slow font-accent z-20">
              <span className="text-xl md:text-2xl font-black">ZERO</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-tighter">Taxa de Visita</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Trust Bar - Brands */}
      <section className="bg-white py-12 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn direction="none" delay={0.2}>
            <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">ESPECIALISTAS NAS MELHORES MARCAS</p>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20">
            {brands.map((brand, idx) => (
              <FadeIn key={brand.name} delay={idx * 0.1}>
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-6 md:h-8 w-auto object-contain hover:scale-110 transition-all duration-300 cursor-pointer" 
                  referrerPolicy="no-referrer" 
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Symmetry */}
      <section className="section-padding bg-slate-50/50">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          <FadeIn delay={0.1} className="group p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
            <div className="h-24 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
              <img src="https://files.catbox.moe/5oaq5g.png" alt="Garantia Total" className="h-full w-auto object-contain drop-shadow-sm" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900">Garantia Total</h4>
            <p className="text-slate-600 leading-relaxed text-sm">Todos os nossos serviços têm garantia por escrito. Segurança e tranquilidade para sua família.</p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="group p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
            <div className="h-24 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
              <img src="https://files.catbox.moe/rxb0zf.png" alt="Atendimento Rápido" className="h-full w-auto object-contain drop-shadow-sm" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900">Atendimento Rápido</h4>
            <p className="text-slate-600 leading-relaxed text-sm">Técnicos distribuídos em toda BH e região. Chegamos no mesmo dia para resolver seu problema.</p>
          </FadeIn>

          <FadeIn delay={0.3} className="group p-8 rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
            <div className="h-24 mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform flex justify-center md:justify-start">
              <img src="https://files.catbox.moe/e8mxca.png" alt="Preço Justo" className="h-full w-auto object-contain drop-shadow-sm" referrerPolicy="no-referrer" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-slate-900">Preço Justo</h4>
            <p className="text-slate-600 leading-relaxed text-sm">Sem taxas escondidas. Orçamento transparente pelo WhatsApp com 10% de desconto real.</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mt-16 text-center">
          <CTAButton animate className="inline-flex shadow-xl px-12 py-6">
            <WhatsAppIcon className="w-7 h-7 brightness-0 invert mr-3" />
            FALAR COM TÉCNICO AGORA
          </CTAButton>
        </FadeIn>
      </section>

      {/* How it Works - Simple for Everyone */}
      <section id="como-funciona" className="section-padding bg-white relative overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10 -mr-48 -mt-48 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-50 rounded-full blur-3xl -z-10 -ml-48 -mb-48 opacity-50"></div>

        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Como funciona?</h2>
            <p className="text-slate-600 text-lg">É simples, rápido e seguro. Resolva tudo em 3 passos:</p>
          </FadeIn>

          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            {steps.map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="group relative p-10 rounded-3xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center hover:bg-white hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                {step.icon ? (
                  <div className="h-24 mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform flex items-center justify-center">
                    <img 
                      src={step.icon} 
                      alt={step.title} 
                      className={`${step.iconClass || 'h-full w-auto'} object-contain drop-shadow-sm`} 
                      style={step.iconStyle}
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg shadow-blue-200 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {step.number}
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.6} className="mt-16 text-center">
            <CTAButton animate className="inline-flex shadow-blue-200">
              QUERO CONSERTAR AGORA
            </CTAButton>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid - Symmetrical & Premium */}
      <section id="servicos" className="section-padding bg-gradient-to-b from-white to-slate-50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-slate-900">
              O que nós <span className="text-blue-600 font-accent">consertamos?</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nossa equipe é altamente treinada para resolver qualquer defeito nos seus eletrodomésticos de marcas nacionais e importadas. Usamos apenas peças originais para garantir a vida útil do seu aparelho.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} direction="up" className="group flex flex-col relative overflow-hidden rounded-[2rem] bg-white border border-slate-100 hover:border-blue-400 transition-all duration-500 shadow-sm hover:shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed mb-8 flex-1">{service.description}</p>
                  <div className="mt-auto pt-4">
                    <CTAButton animate className="w-full h-14 text-xs font-black flex items-center justify-center gap-2 rounded-2xl shadow-lg hover:shadow-green-500/20 px-4 group/btn">
                      <WhatsAppIcon className="w-5 h-5 brightness-0 invert flex-shrink-0 group-hover/btn:scale-110 transition-transform" />
                      <span>FALAR COM TÉCNICO</span>
                    </CTAButton>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn direction="none" delay={0.3} className="mt-20 bg-blue-600 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white">Chamou, resolvemos!</h3>
              <p className="text-xl text-blue-100 mb-10 leading-relaxed">
                A LS Assistência Técnica é referência em BH pela agilidade, honestidade e excelência técnica. Seu aparelho funcionando hoje!
              </p>
              <CTAButton animate className="bg-white text-blue-600 hover:bg-blue-50 shadow-xl px-12 py-5 rounded-2xl text-lg">
                PEDIR ORÇAMENTO GRÁTIS
              </CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Quem já usou, aprova!</h2>
            <p className="text-slate-600 text-lg">Mais de 500 famílias atendidas com excelência em BH e região.</p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Gradient Masks - full screen edges */}
          <div className="absolute inset-y-0 -left-6 w-16 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 -right-6 w-16 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          <div className="flex overflow-hidden marquee-container py-10">
            <div className="flex gap-8 px-4 animate-marquee">
              {testimonials.map((t, i) => (
                <div key={i} className="inline-flex flex-col w-[380px] h-[300px] whitespace-normal p-10 rounded-[2.5rem] bg-white border border-slate-100 italic leading-relaxed text-slate-700 shrink-0 justify-between shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                  <div>
                    <div className="flex items-center gap-1.5 mb-6">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={`s1-${i}-${starIdx}`} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <img 
                        src="https://files.catbox.moe/ejplhw.png" 
                        alt="Google" 
                        className="w-5 h-5 ml-3 opacity-70" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-base line-clamp-4">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 not-italic mt-6 pt-6 border-t border-slate-200">
                    <div className={`w-12 h-12 rounded-2xl ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold shadow-lg shadow-black/5`}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 tracking-tight">{t.name}</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold font-accent">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Clone of the first list for the infinite loop effect */}
            <div className="flex gap-8 px-4 animate-marquee" aria-hidden="true">
              {testimonials.map((t, i) => (
                <div key={`clone-${i}`} className="inline-flex flex-col w-[380px] h-[300px] whitespace-normal p-10 rounded-[2.5rem] bg-white border border-slate-100 italic leading-relaxed text-slate-700 shrink-0 justify-between shadow-premium hover:shadow-2xl hover:-translate-y-2 transition-all duration-700">
                  <div>
                    <div className="flex items-center gap-1.5 mb-6">
                      {[...Array(5)].map((_, starIdx) => (
                        <Star key={`s2-${i}-${starIdx}`} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                      <img 
                        src="https://files.catbox.moe/ejplhw.png" 
                        alt="Google" 
                        className="w-5 h-5 ml-3 opacity-70" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-base line-clamp-4">"{t.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 not-italic mt-6 pt-6 border-t border-slate-200">
                    <div className={`w-12 h-12 rounded-2xl ${avatarColors[i % avatarColors.length]} flex items-center justify-center text-white font-bold shadow-lg shadow-black/5`}>
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 tracking-tight">{t.name}</p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-bold font-accent">{t.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <FadeIn delay={0.4} className="mt-6 md:mt-12 text-center pb-4 relative z-20">
            <CTAButton animate className="inline-flex shadow-xl px-10 py-5">
              <WhatsAppIcon className="w-6 h-6 brightness-0 invert mr-3" />
              CHAMAR NO WHATSAPP
            </CTAButton>
          </FadeIn>
        </div>
      </section>

      {/* Coverage Cities */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn direction="none">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">CIDADES QUE ATENDEMOS EM MG</h3>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["Belo Horizonte", "Contagem", "Betim", "Nova Lima", "Vespasiano", "Lagoa Santa", "Sabará", "Ribeirão das Neves"].map((city, idx) => (
              <FadeIn key={city} delay={idx * 0.05} direction="up">
                <span className="bg-white px-6 py-3 rounded-2xl border border-slate-200 text-slate-700 shadow-sm text-sm font-semibold hover:border-blue-500 hover:text-blue-600 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default">
                  {city}
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Fale Conosco */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <FadeIn delay={0.1} direction="right" className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold mb-6 uppercase tracking-wider">
                Atendimento Personalizado
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
                Fale <span className="text-blue-600 font-accent">Conosco</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 excerpt">
                Tem alguma dúvida ou quer solicitar um orçamento?
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Fale direto conosco pelo WhatsApp. Resposta rápida e atendimento personalizado.
              </p>
              <div className="flex flex-col gap-8">
                <p className="text-xl font-bold text-blue-600">Estamos prontos para ajudar!</p>
                <CTAButton animate className="w-full sm:w-auto px-12 py-5 text-lg rounded-2xl shadow-xl shadow-green-500/20 flex items-center justify-center gap-3">
                  <WhatsAppIcon className="w-7 h-7 brightness-0 invert" />
                  <span>CONVERSAR NO WHATSAPP</span>
                </CTAButton>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="left" className="w-full md:w-1/2 flex items-center justify-center">
              <img 
                src="https://files.catbox.moe/cmdgvn.png" 
                alt="Atendimento Especializado LS Assistência" 
                className="w-full h-auto max-w-[500px] object-contain transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer - Final Contact */}
      <footer id="contato" className="bg-slate-900 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <img 
              src="https://files.catbox.moe/8yqi8a.webp" 
              alt="LS Assistência Técnica Logo" 
              className="h-12 w-auto mb-8 brightness-0 invert" 
              referrerPolicy="no-referrer" 
            />
            <p className="text-lg text-slate-400 leading-relaxed max-w-md">
              Sua melhor escolha para conserto de eletrodomésticos em BH. Agilidade, qualidade técnica e transparência total em cada serviço.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold mb-8 text-blue-500 uppercase tracking-widest">Fale Conosco</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:5531982593186" className="flex items-center gap-4 group">
                  <div className="bg-blue-600/20 text-blue-500 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">(31) 98259-3186</span>
                </a>
              </li>
              <li>
                <a href="mailto:ls.assistenciatech1@gmail.com" className="flex items-center gap-4 group">
                  <div className="bg-blue-600/20 text-blue-500 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-slate-200 group-hover:text-white transition-colors truncate">ls.assistenciatech1@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-8 text-blue-500 uppercase tracking-widest">Atendimento</h4>
            <div className="space-y-6 text-slate-300">
              <div>
                <p className="font-bold text-white mb-1">Segunda a Sexta</p>
                <p className="text-sm">08:00 às 18:00</p>
              </div>
              <div>
                <p className="font-bold text-white mb-1">Sábado</p>
                <p className="text-sm">08:00 às 12:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-4">
            <p>&copy; {new Date().getFullYear()} LS Assistência Técnica. Todos os direitos reservados.</p>
            <div className="hidden md:flex items-center gap-2 px-2 py-0.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase font-bold tracking-tighter text-slate-400">
              <CheckCircle2 size={10} className="text-blue-500" />
              Empresa Verificada
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA - Practical for conversion */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 px-6 z-50">
        <CTAButton animate className="w-full shadow-2xl py-5 rounded-2xl flex items-center justify-center gap-3">
          <WhatsAppIcon className="w-6 h-6 brightness-0 invert" />
          <span className="text-lg">CHAMAR NO WHATSAPP</span>
        </CTAButton>
      </div>

    </div>
  );
}
