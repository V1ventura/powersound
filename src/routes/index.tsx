import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Award,
  CarFront,
  Check,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Instagram,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import redCar from "@/assets/powersound-red-car.png.asset.json";
import storeSuv from "@/assets/powersound-store-suv.png.asset.json";
import vwDetail from "@/assets/powersound-vw-detail.png.asset.json";
import logo from "@/assets/powersound-logo.png.asset.json";
import honda from "@/assets/powersound-honda.png.asset.json";

const WHATSAPP = "https://wa.me/551132971139?text=Olá%20PowerSound!%20Gostaria%20de%20agendar%20um%20serviço.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PowerSound | Estética Automotiva Premium" },
      { name: "description", content: "Estética automotiva, proteção, som, acessórios e personalização com alto padrão de acabamento." },
      { property: "og:title", content: "PowerSound | Estética Automotiva Premium" },
      { property: "og:description", content: "Seu carro merece mais. Agende seu atendimento na PowerSound." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["Higienização Automotiva", "Limpeza técnica profunda para recuperar conforto e frescor."],
  ["Polimento Técnico", "Correção precisa da pintura para devolver brilho e profundidade."],
  ["Cristalização", "Proteção e brilho intenso com acabamento uniforme."],
  ["Vitrificação", "Barreira duradoura contra agentes externos e contaminações."],
  ["Envelopamento", "Personalização visual com aplicação limpa e acabamento preciso."],
  ["Insulfilm", "Conforto térmico, privacidade e proteção com instalação profissional."],
  ["Estética Interna", "Cuidado minucioso de bancos, painéis e todos os revestimentos."],
  ["Som Automotivo", "Projetos equilibrados para potência, fidelidade e integração."],
  ["Acessórios", "Soluções selecionadas para elevar funcionalidade e estilo."],
  ["Customização", "Detalhes exclusivos para deixar o veículo com a sua identidade."],
];

const portfolio = [
  { src: storeSuv.url, title: "SUV • ACABAMENTO COMPLETO", span: "md:col-span-7 md:row-span-2" },
  { src: redCar.url, title: "PINTURA • BRILHO TÉCNICO", span: "md:col-span-5" },
  { src: vwDetail.url, title: "DETALHES • PERSONALIZAÇÃO", span: "md:col-span-5" },
  { src: honda.url, title: "PROTEÇÃO • ESTÉTICA", span: "md:col-span-12" },
];

function SectionTitle({ eyebrow, children, center = false }: { eyebrow: string; children: React.ReactNode; center?: boolean }) {
  return <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}><p className="section-kicker">{eyebrow}</p><h2 className="section-title">{children}</h2></div>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compare, setCompare] = useState(52);
  const [testimonial, setTestimonial] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("revealed")), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const nav = [["INÍCIO", "#inicio"], ["SERVIÇOS", "#servicos"], ["PROJETOS", "#projetos"], ["SOBRE NÓS", "#sobre"], ["CONTATO", "#contato"]];
  const testimonials = [
    { text: "Seu relato sobre o atendimento, o cuidado com o carro e o resultado final pode aparecer aqui.", service: "DEPOIMENTO DE CLIENTE", name: "AVALIAÇÃO VERIFICADA" },
    { text: "Este espaço foi pensado para destacar experiências reais e ajudar novos clientes a escolherem com confiança.", service: "EXPERIÊNCIA POWERSOUND", name: "AVALIAÇÃO VERIFICADA" },
    { text: "Adicione aqui uma avaliação recebida no Google ou Instagram, sempre com autorização do cliente.", service: "RESULTADO REAL", name: "AVALIAÇÃO VERIFICADA" },
  ];

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" aria-label="PowerSound - início" className="min-w-0"><img src={logo.url} alt="PowerSound Som e Acessórios" className="h-10 w-auto max-w-[190px] object-contain object-left" /></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">{nav.map(([label, href]) => <a key={href} href={href} className="nav-link">{label}</a>)}<Button asChild variant="power" size="lg"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle />FALE NO WHATSAPP</a></Button></nav>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen(true)}><Menu /></Button>
        </div>
      </header>

      {menuOpen && <div className="fixed inset-0 z-[60] bg-background p-6 lg:hidden"><div className="flex items-center justify-between"><img src={logo.url} alt="PowerSound" className="h-9 w-auto max-w-[180px] object-contain"/><Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setMenuOpen(false)}><X /></Button></div><nav className="mt-16 flex flex-col gap-2">{nav.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-border py-5 font-display text-3xl font-bold">{label}</a>)}<Button asChild variant="power" size="hero" className="mt-6"><a href={WHATSAPP}><MessageCircle />WHATSAPP</a></Button></nav></div>}

      <section id="inicio" className="hero-section">
        <img src={redCar.url} alt="Automóvel vermelho com acabamento brilhante na PowerSound" className="hero-image" />
        <div className="hero-shade" /><div className="soundwave" aria-hidden="true">{Array.from({ length: 34 }).map((_, i) => <span key={i} style={{ height: `${12 + ((i * 19) % 68)}%` }} />)}</div>
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-4xl animate-fade-in"><p className="section-kicker">SOM • ESTÉTICA • ACESSÓRIOS</p><h1 className="hero-title">SEU CARRO<br/><span>MERECE MAIS.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-xl">Estética automotiva, proteção, personalização e acessórios para transformar seu veículo.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Button asChild variant="power" size="hero"><a href={WHATSAPP} target="_blank" rel="noreferrer">AGENDAR SERVIÇO <ArrowRight /></a></Button><Button asChild variant="powerOutline" size="hero"><a href="#servicos">CONHECER SERVIÇOS <ArrowDownRight /></a></Button></div></div>
        </div>
        <a href="#servicos" aria-label="Ir para serviços" className="scroll-cue"><span>EXPLORE</span><ArrowDownRight /></a>
      </section>

      <section id="servicos" className="section-shell carbon-bg">
        <div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="EXPERTISE POWERSOUND">CUIDADO EM CADA <span>DETALHE.</span></SectionTitle><p className="max-w-md text-muted-foreground">Mais do que estética. Entregamos acabamento, proteção e personalidade para o seu veículo.</p></div>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{services.map(([title, desc], i) => <article key={title} className="service-card reveal"><div className="mb-8 flex items-start justify-between"><span className="font-display text-xs text-primary">0{i + 1}</span>{i % 3 === 0 ? <Sparkles /> : i % 3 === 1 ? <ShieldCheck /> : <Wrench />}</div><h3>{title}</h3><p>{desc}</p><a href={WHATSAPP} target="_blank" rel="noreferrer">SAIBA MAIS <ArrowRight /></a></article>)}</div>
        </div>
      </section>

      <section className="section-shell bg-surface"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="reveal grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"><SectionTitle eyebrow="RESULTADO VISÍVEL">OLHE A <span>DIFERENÇA.</span></SectionTitle><p className="max-w-lg text-muted-foreground lg:justify-self-end">Arraste o controle e perceba como técnica, cuidado e acabamento transformam cada detalhe.</p></div>
        <div className="compare reveal mt-12" style={{ "--compare": `${compare}%` } as React.CSSProperties}><img src={honda.url} alt="Veículo antes do acabamento" className="compare-img compare-before"/><div className="compare-after"><img src={honda.url} alt="Veículo após acabamento PowerSound" className="compare-img after-treatment"/></div><div className="compare-line"><div><ChevronLeft/><ChevronRight/></div></div><span className="compare-label left">ANTES</span><span className="compare-label right">DEPOIS</span><input aria-label="Comparar antes e depois" type="range" min="5" max="95" value={compare} onChange={(e) => setCompare(Number(e.target.value))}/></div></div></section>

      <section id="projetos" className="section-shell"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="PORTFÓLIO">PROJETOS QUE FALAM <span>POR SI.</span></SectionTitle><div className="portfolio-grid mt-12">{portfolio.map((item, i) => <article key={item.title} className={`project reveal ${item.span}`}><img src={item.src} loading={i > 1 ? "lazy" : undefined} alt={item.title}/><div className="project-overlay"><p>{item.title}</p><span>VER PROJETO <ArrowRight /></span></div></article>)}</div></div></section>

      <section className="feature-band"><img src={storeSuv.url} loading="lazy" alt="SUV atendido na entrada da PowerSound"/><div className="feature-shade"/><div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-5 lg:px-8"><div className="reveal max-w-xl"><p className="section-kicker">PADRÃO POWERSOUND</p><h2 className="feature-title">SEU CARRO.<br/><span>NOSSO PADRÃO.</span></h2><p className="mt-6 max-w-lg text-lg text-muted-foreground">Cada veículo recebe atenção aos mínimos detalhes para entregar um resultado que você percebe no primeiro olhar.</p><Button asChild variant="power" size="hero" className="mt-8"><a href={WHATSAPP}>AGENDAR MEU SERVIÇO <ArrowRight /></a></Button></div></div></section>

      <section className="section-shell carbon-bg"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="POR QUE ESCOLHER A POWERSOUND">EXIGÊNCIA EM TODO <span>PROCESSO.</span></SectionTitle><div className="mt-12 grid gap-px border-y border-border bg-border sm:grid-cols-2 lg:grid-cols-5">{[[Award,"ACABAMENTO PREMIUM"],[Wrench,"PROFISSIONAIS ESPECIALIZADOS"],[ShieldCheck,"PRODUTOS DE ALTA QUALIDADE"],[Gauge,"ATENDIMENTO PERSONALIZADO"],[CarFront,"PAIXÃO POR AUTOMÓVEIS"]].map(([Icon,label]) => { const IconComponent = Icon as typeof Award; return <div key={label as string} className="quality-item reveal"><IconComponent/><Check/><p>{label as string}</p></div>})}</div></div></section>

      <section id="sobre" className="section-shell bg-surface"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8"><div className="about-images reveal"><img src={storeSuv.url} loading="lazy" alt="Fachada da PowerSound"/><img src={vwDetail.url} loading="lazy" alt="Detalhe de personalização automotiva"/></div><div className="reveal"><SectionTitle eyebrow="NOSSA HISTÓRIA">PAIXÃO POR CARROS. <span>COMPROMISSO COM RESULTADOS.</span></SectionTitle><div className="mt-7 space-y-4 text-muted-foreground"><p>A PowerSound nasceu da paixão por automóveis e da certeza de que cada veículo pode expressar ainda mais personalidade.</p><p>Unimos experiência, atenção genuína e soluções sob medida para entregar som, estética e acessórios com um padrão de acabamento que se percebe nos detalhes.</p></div><div className="mt-8 flex items-center gap-4 border-l-2 border-primary pl-5"><Zap className="text-primary"/><p className="font-display text-lg font-bold">POTÊNCIA NO SOM.<br/>PRECISÃO NO ACABAMENTO.</p></div></div></div></section>

      <section className="section-shell"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex items-end justify-between gap-6"><SectionTitle eyebrow="DEPOIMENTOS">QUEM CONHECE, <span>RECOMENDA.</span></SectionTitle><div className="hidden gap-2 sm:flex"><Button variant="outline" size="icon" aria-label="Depoimento anterior" onClick={() => setTestimonial((testimonial + 2) % 3)}><ChevronLeft/></Button><Button variant="outline" size="icon" aria-label="Próximo depoimento" onClick={() => setTestimonial((testimonial + 1) % 3)}><ChevronRight/></Button></div></div><article className="testimonial reveal mt-12"><div className="flex gap-1 text-primary">{Array.from({length:5}).map((_,i)=><Star key={i} fill="currentColor"/>)}</div><blockquote>“{testimonials[testimonial].text}”</blockquote><div><p>{testimonials[testimonial].name}</p><span>{testimonials[testimonial].service}</span></div></article><p className="mt-4 text-xs text-muted-foreground">Espaços reservados para avaliações reais confirmadas pela PowerSound.</p></div></section>

      <section id="contato" className="cta-final"><div className="soundwave bottom-wave" aria-hidden="true">{Array.from({ length: 40 }).map((_, i) => <span key={i} style={{ height: `${10 + ((i * 23) % 78)}%` }} />)}</div><div className="relative z-10 mx-auto max-w-5xl px-5 text-center"><p className="section-kicker">O PRÓXIMO NÍVEL COMEÇA AQUI</p><h2>PRONTO PARA TRANSFORMAR <span>SEU CARRO?</span></h2><p>Agende seu atendimento e descubra o padrão PowerSound.</p><Button asChild variant="power" size="hero" className="mt-8"><a href={WHATSAPP} target="_blank" rel="noreferrer"><MessageCircle/> AGENDAR PELO WHATSAPP</a></Button><small>Resposta rápida <b>•</b> Atendimento personalizado</small></div></section>

      <footer className="border-t border-border bg-background"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8"><div><img src={logo.url} alt="PowerSound Som e Acessórios" className="h-12 w-auto max-w-[240px] object-contain object-left"/><p className="mt-4 max-w-xs text-sm text-muted-foreground">Som, acessórios, estética e personalização automotiva com alto padrão.</p></div><div><p className="footer-heading">NAVEGAÇÃO</p><div className="mt-4 grid grid-cols-2 gap-3">{nav.map(([label,href])=><a key={href} href={href} className="text-sm text-muted-foreground hover:text-foreground">{label}</a>)}</div></div><div><p className="footer-heading">FALE CONOSCO</p><div className="mt-4 space-y-2 text-sm text-muted-foreground"><p>WhatsApp: (11) 3297-1139</p><p>Loja nº 990 • São Paulo, SP</p><div className="flex gap-3 pt-3"><a href="https://www.instagram.com/powersoundoficial/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a></div></div></div></div><div className="border-t border-border px-5 py-5 text-center text-xs text-muted-foreground">© 2026 POWERSOUND — SOM E ACESSÓRIOS. TODOS OS DIREITOS RESERVADOS.</div></footer>
    </main>
  );
}