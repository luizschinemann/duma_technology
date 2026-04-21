"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, Bot, ServerCog, Workflow, MonitorSmartphone } from "lucide-react";

const WHATSAPP_DISPLAY = "+55 41 8850-3782";

/** Monta UTM dentro da própria mensagem do WhatsApp */
function withUTM(
  msg: string,
  opts: { source?: string; medium?: string; campaign?: string; content?: string } = {}
) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { source = "site", medium = "whatsapp", campaign = "geral", content } = opts;
  return `${msg}\n\n`;
}

/** Cria link wa.me com a mensagem (com UTM) já codificada */
function buildWa(
  msg: string,
  opts?: { source?: string; medium?: string; campaign?: string; content?: string }
) {
  return `https://wa.me/554188503782?text=${encodeURIComponent(withUTM(msg, opts))}`;
}

const DEFAULT_MSG = "Olá! Vim pelo site da Duma e gostaria de conversar.";

// ====== Conteúdo ====== e
const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Atendimento no WhatsApp",
    desc: "Bots que respondem de imediato, organizam filas e passam para um humano quando precisa.",
    chips: ["WhatsApp e Web", "Bot + humano"],
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Automação de Tarefas",
    desc: "Robôs que fazem o trabalho chato em sites e sistemas. Menos erros, mais rapidez.",
    chips: ["Preenchimento automático", "Relatórios"],
  },
  {
    icon: <ServerCog className="h-6 w-6" />,
    title: "Integração de Sistemas",
    desc: "Conectamos seu site, planilhas e softwares para que tudo trabalhe junto.",
    chips: ["APIs e webhooks", "Confiável"],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Assistentes com IA",
    desc: "Respostas rápidas a clientes, leitura de documentos e organização de informações.",
    chips: ["Perguntas frequentes", "IA"],
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Desenvolvimento de Sites",
    desc: "Sites institucionais, landing pages e sistemas web com foco em performance e conversão.",
    chips: ["Responsivo", "SEO"],
  },
  {
    icon: <ServerCog className="h-6 w-6" />,
    title: "Plugins para Navegador",
    desc: "Extensões personalizadas para Chrome e Edge que automatizam tarefas direto no browser.",
    chips: ["Chrome / Edge", "Automação web"],
  },
];

const stats = [
  { kpi: "Até 70%", label: "menos tempo de atendimento" },
  { kpi: "+80 mil", label: "tarefas feitas por robôs/ano" },
  { kpi: "Em 3 meses", label: "retorno do investimento" },
];

const projects = [
  {
    title: "Site Institucional e Sistemas",
    summary: "Layout responsivo, SEO e performance.",
    image: "/img/blog/1.jpg",
    message: "Oi! Quero um projeto de Desenvolvimento de Site/Sistema.",
    utm: { campaign: "projeto_desenvolvimento" },
  },
  {
    title: "Automação de Atendimento",
    summary: "Bot 24/7 com inteligência e handoff humano.",
    image: "/img/blog/2.jpg",
    message: "Oi! Tenho interesse em Automação de Atendimento no WhatsApp.",
    utm: { campaign: "projeto_automacao_atendimento" },
  },
];

export default function Page() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth <= 768) {
        setScrolled(false);
        return;
      }
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mil-wrapper" id="top">
      {/* skip link */}
      <a href="#conteudo-principal" className="mil-skip-link">Pular para o conteúdo</a>
      {/* cursor */}
      <div className="mil-ball">
        <span className="mil-icon-1" aria-hidden="true">
          <svg viewBox="0 0 128 128" aria-hidden="true">
            <path d="M106.1,41.9c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2L116.8,61H11.2l14.9-14.9c1.2-1.2,1.2-3.1,0-4.2	c-1.2-1.2-3.1-1.2-4.2,0l-20,20c-1.2,1.2-1.2,3.1,0,4.2l20,20c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9c1.2-1.2,1.2-3.1,0-4.2	L11.2,67h105.5l-14.9,14.9c-1.2,1.2-1.2,3.1,0,4.2c0.6,0.6,1.4,0.9,2.1,0.9s1.5-0.3,2.1-0.9l20-20c1.2-1.2,1.2-3.1,0-4.2L106.1,41.9	z" />
          </svg>
        </span>
        <div className="mil-more-text">More</div>
        <div className="mil-choose-text">Сhoose</div>
      </div>

      {/* preloader */}
      <div className="mil-preloader">
        <div className="mil-preloader-animation">
          <div className="mil-pos-abs mil-animation-1">
            <p className="mil-h3 mil-muted mil-thin">Automação</p>
            <p className="mil-h3 mil-muted">Software</p>
            <p className="mil-h3 mil-muted mil-thin">Evolução</p>
          </div>
          <div className="mil-pos-abs mil-animation-2">
            <div className="mil-reveal-frame">
              <p className="mil-reveal-box"></p>
              <p className="mil-h3 mil-muted mil-thin">duma.tech</p>
            </div>
          </div>
        </div>
      </div>

      {/* progress bar */}
      <div className="mil-progress-track">
        <div className="mil-progress"></div>
      </div>

      {/* menu */}
      <div className="mil-menu-frame">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            <Image src="/logo.png" alt="Duma Technology" title="Duma Technology — Página inicial" width={150} height={60} sizes="150px" className={`mil-logo-img${scrolled ? " hidden" : ""}`} style={{ height: '60px', width: 'auto' }} priority />
          </a>
          <div className="mil-menu-btn" role="button" aria-label="Abrir menu" tabIndex={0}>
            <span></span>
          </div>
        </div>
        <div className="mil-menu">
          <div className="container">
            <div className="mil-menu-content">
              <div className="row">
                <div className="col-xl-5">
                  <nav className="mil-main-menu" id="swupMenu">
                    <ul>
                      <li className="mil-active"><a href="#top">Início</a></li>
                      <li><a href="#servicos">Serviços</a></li>
                      <li><a href="#sobre">Sobre</a></li>
                      <li><a href="#projetos">Projetos</a></li>
                      <li><a href="#contato">Contato</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="col-xl-7">
                  <div className="mil-menu-right-frame">
                    <div className="mil-animation-in">
                      <div className="mil-animation-frame">
                        <div className="mil-animation mil-position-1 mil-scale" data-value-1="2" data-value-2="2"></div>
                      </div>
                    </div>
                    <div className="mil-menu-right">
                      <p className="mil-h6 mil-muted mil-mb-30">Vamos conversar?</p>
                      <p className="mil-light-soft mil-up mil-mb-30">Especialistas em automação de processos e desenvolvimento de software sob medida.</p>
                      <a href={buildWa(DEFAULT_MSG, { campaign: "menu" })} className="mil-button mil-arrow-place mil-mb-60" target="_blank" rel="noopener noreferrer">
                        <span>WhatsApp {WHATSAPP_DISPLAY}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* curtain */}
      <div className="mil-curtain"></div>

      {/* frame */}
      <header className="mil-frame" aria-label="Cabeçalho do site">
        <div className="mil-frame-top">
          <a href="/" className="mil-logo">
            <Image src="/logo.png" alt="Duma Technology" title="Duma Technology — Página inicial" width={150} height={60} sizes="150px" className={`mil-logo-img${scrolled ? " hidden" : ""}`} style={{ height: '60px', width: 'auto' }} priority />
          </a>
          <div className="mil-menu-btn" role="button" aria-label="Abrir menu" tabIndex={0}>
            <span></span>
          </div>
        </div>
        <div className="mil-frame-bottom">
          <div className="mil-current-page"></div>
          <div className="mil-back-to-top">
            <a href="#top" className="mil-link mil-dark mil-arrow-place">
              <span>Voltar ao topo</span>
            </a>
          </div>
        </div>
      </header>

      {/* content */}
      <main id="conteudo-principal" className="mil-content">
        <div id="swupMain" className="mil-main-transition">
          {/* banner */}
          <section className="mil-banner mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="7" data-value-2="1.6"></div>
                <div className="mil-animation mil-position-2 mil-scale" data-value-1="4" data-value-2="1"></div>
                <div className="mil-animation mil-position-3 mil-scale" data-value-1="1.2" data-value-2=".1"></div>
              </div>
              <div className="mil-gradient"></div>
              <div className="container">
                <div className="mil-banner-content mil-up">
                  <h1 className="mil-muted mil-mb-60">Automação <span className="mil-thin">e sites que</span><br /> trazem <span className="mil-thin">resultado</span></h1>
                  <div className="row">
                    <div className="col-md-7 col-lg-5">
                      <p className="mil-light-soft mil-mb-60">Cuidamos das tarefas repetitivas e do seu atendimento — e também criamos sistemas sob medida para você focar no que importa.</p>
                    </div>
                  </div>
                  <a href={buildWa(DEFAULT_MSG, { campaign: "hero" })} target="_blank" rel="noopener noreferrer" className="mil-button mil-arrow-place mil-btn-space">
                    <span>Chamar no WhatsApp</span>
                  </a>
                  <a href="#servicos" className="mil-link mil-muted mil-arrow-place">
                    <span>Ver serviços</span>
                  </a>
                  <div className="mil-circle-text">
                    <svg viewBox="0 0 300 300" className="mil-ct-svg mil-rotate" data-value="360" aria-hidden="true">
                      <defs>
                        <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                      </defs>
                      <circle cx="150" cy="100" r="75" fill="none" />
                      <g>
                        <use xlinkHref="#circlePath" fill="none" />
                        <text style={{ letterSpacing: '3.5px' }}>
                          <textPath xlinkHref="#circlePath">Role para baixo - Role para baixo - </textPath>
                        </text>
                      </g>
                    </svg>
                    <a href="#servicos" className="mil-button mil-arrow-place mil-icon-button mil-arrow-down"></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* stats simplified */}
          <section className="mil-p-120-0">
            <div className="container">
              <div className="mil-up mil-center mil-mb-60">
                <p className="mil-upper" style={{ fontSize: '11px', letterSpacing: '1.5px', opacity: 0.5 }}>
                  * Valores estimados — resultados variam conforme a realidade e o escopo de cada projeto.
                </p>
              </div>
              <div className="row justify-content-between">
                {stats.map((s, i) => (
                  <div key={i} className="col-lg-3 mil-mb-60">
                    <div className="mil-up mil-center">
                      <p className="mil-h2 mil-mb-15">{s.kpi}*</p>
                      <p className="mil-upper mil-mb-30">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* services */}
          <section id="servicos" className="mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="mil-animation-frame">
                <div className="mil-animation mil-position-1 mil-scale" data-value-1="2.4" data-value-2="1.4" style={{ top: '300px', right: '-100px' }}></div>
              </div>
              <div className="container mil-p-120-0">
                <div className="mil-mb-120">
                  <div className="row">
                    <div className="col-lg-10">
                      <span className="mil-suptitle mil-light-soft mil-suptitle-right mil-up">Focados em ajudar sua marca<br /> a crescer e evoluir através da tecnologia.</span>
                    </div>
                  </div>
                  <div className="mil-complex-text justify-content-center mil-up mil-mb-15">
                    <h2 className="mil-h1 mil-muted mil-center">Nossos <span className="mil-thin">Serviços</span></h2>
                  </div>
                </div>
                <div className="row mil-services-grid m-0">
                  {features.map((f, i) => (
                    <div key={i} className="col-6 col-md-4 col-lg-2 mil-services-grid-item p-0">
                      <a href={buildWa(`Olá! Gostaria de saber mais sobre ${f.title}`, { campaign: "servicos" })} target="_blank" rel="noopener noreferrer" className="mil-service-card-sm mil-up">
                        <h3 className="mil-h5 mil-muted mil-mb-30">{f.title}</h3>
                        <p className="mil-light-soft mil-mb-30">{f.desc}</p>
                        <div className="mil-button mil-icon-button-sm mil-arrow-place"></div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* about / process */}
          <section id="sobre">
            <div className="container mil-p-120-30">
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-6 col-xl-5">
                  <div className="mil-mb-90">
                    <h2 className="mil-up mil-mb-60">Como <br />Trabalhamos <span className="mil-thin">Duma</span></h2>
                    <p className="mil-up mil-mb-30">Começamos pelo que dá mais retorno rápido. Projeto leve, entrega ágil e sem complicação. Transparência do início ao fim, você acompanha tudo e vê resultado real.</p>
                    <p className="mil-up mil-mb-60">Sempre com documentação, versão dos códigos e acompanhamento por métricas claras para o seu negócio.</p>
                    <div className="mil-about-quote">
                      <p className="mil-h6 mil-quote mil-up">Tecnologia de ponta <span className="mil-thin">transformada em</span> resultados <span className="mil-thin">tangíveis para sua empresa.</span></p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mil-about-photo mil-mb-90">
                    <div className="mil-lines-place"></div>
                    <div className="mil-up mil-img-frame" style={{ paddingBottom: '160%' }}>
                      <Image src="/img/photo/image.png" alt="Equipe Duma Technology trabalhando em projetos de automação e software" title="Como a Duma Technology trabalha" fill sizes="(max-width: 992px) 100vw, 41vw" className="mil-scale" style={{ objectFit: 'cover' }} data-value-1="1" data-value-2="1.2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* projects / case studies */}
          <section id="projetos">
            <div className="container mil-p-120-60">
              <div className="row align-items-center mil-mb-30">
                <div className="col-lg-6 mil-mb-30">
                  <h3 className="mil-up">Projetos que são especialidades:</h3>
                </div>
              </div>
              <div className="row">
                {projects.map((p, i) => (
                  <div key={i} className="col-lg-6">
                    <a href={buildWa(p.message, { campaign: p.utm.campaign })} target="_blank" rel="noopener noreferrer" className="mil-blog-card mil-mb-60">
                      <div className="mil-post-descr">
                        <div className="mil-labels mil-up mil-mb-30">
                          <div className="mil-label mil-upper mil-accent">PROJETO</div>
                        </div>
                        <h4 className="mil-up mil-mb-30">{p.title}</h4>
                        <p className="mil-post-text mil-up mil-mb-30">{p.summary}</p>
                        <div className="mil-link mil-dark mil-arrow-place mil-up">
                          <span>Conversar sobre este projeto</span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* contact */}
          <section id="contato" className="mil-soft-bg">
            <div className="container mil-p-120-120">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <h2 className="mil-center mil-up mil-mb-60">Vamos transformar <span className="mil-thin">seu negócio</span> através da <span className="mil-thin">tecnologia?</span></h2>
                  <div className="mil-center mil-up">
                    <a href={buildWa(DEFAULT_MSG, { campaign: "contato" })} target="_blank" rel="noopener noreferrer" className="mil-button mil-arrow-place mil-btn-space">
                      <span>Falar no WhatsApp</span>
                    </a>
                    <a href="mailto:contato@dumatechnology.com" className="mil-link mil-dark mil-arrow-place">
                      <span>Enviar Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* footer */}
          <footer className="mil-dark-bg">
            <div className="mi-invert-fix">
              <div className="container mil-p-120-60">
                <div className="row justify-content-between">
                  <div className="col-md-4 col-lg-4 mil-mb-60">
                    <div className="mil-logo mil-up mil-mb-30">
                      <Image src="/logo.png" alt="Duma Technology" width={125} height={50} sizes="125px" style={{ height: '50px', width: 'auto' }} />
                    </div>
                    <p className="mil-light-soft mil-up mil-mb-30">Especialistas em automação e desenvolvimento de software.</p>
                  </div>
                  <div className="col-md-7 col-lg-6">
                    <div className="row justify-content-end">
                      <div className="col-md-6 col-lg-7">
                        <nav className="mil-footer-menu mil-mb-60">
                          <ul>
                            <li className="mil-up"><a href="#top">Home</a></li>
                            <li className="mil-up"><a href="#servicos">Serviços</a></li>
                            <li className="mil-up"><a href="#sobre">Sobre</a></li>
                            <li className="mil-up"><a href="#projetos">Projetos</a></li>
                            <li className="mil-up"><a href="#contato">Contato</a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between flex-sm-row-reverse">
                  <div className="col-md-7 col-lg-6">
                    <div className="row justify-content-between">
                      <div className="col-md-6 col-lg-5 mil-mb-60">
                        <p className="mil-muted mil-up mil-mb-30"><strong>Brasil</strong></p>
                        <p className="mil-light-soft mil-up">Curitiba - PR <br /> <span className="mil-no-wrap">{WHATSAPP_DISPLAY}</span></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-6 mil-mb-60">
                    <div className="mil-vert-between">
                      <p className="mil-light-soft mil-up">© {new Date().getFullYear()} Duma Technology. Todos os direitos reservados.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          {/* hidden elements for GSAP cloning */}
          <div className="mil-hidden-elements">
            <div className="mil-dodecahedron">
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
              <div className="mil-pentagon"><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="mil-arrow">
              <path d="M 14 5.3417969 C 13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188 L 13.207031 5.7226562 C 12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188 L 17.070312 11 L 4 11 C 3.448 11 3 11.448 3 12 C 3 12.552 3.448 13 4 13 L 17.070312 13 L 13.207031 16.863281 C 12.816031 17.254281 12.816031 17.887344 13.207031 18.277344 L 13.292969 18.363281 C 13.683969 18.754281 14.317031 18.754281 14.707031 18.363281 L 20.363281 12.707031 C 20.754281 12.316031 20.754281 11.682969 20.363281 11.292969 L 14.707031 5.6367188 C 14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" />
            </svg>
            <svg width="250" viewBox="0 0 300 1404" fill="none" xmlns="http://www.w3.org/2000/svg" className="mil-lines">
              <path fillRule="evenodd" clipRule="evenodd" d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z" className="mil-move" />
              <path fillRule="evenodd" clipRule="evenodd" d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z" className="mil-move" />
              <path fillRule="evenodd" clipRule="evenodd" d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z" />
              <path fillRule="evenodd" clipRule="evenodd" d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z" className="mil-move" />
              <path fillRule="evenodd" clipRule="evenodd" d="M300 1175H0V1174H300V1175Z" className="mil-move" />
              <path fillRule="evenodd" clipRule="evenodd" d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z" className="mil-move" />
              <path fillRule="evenodd" clipRule="evenodd" d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z" className="mil-move" />
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
