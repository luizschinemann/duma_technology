"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  MessageCircle,
  ServerCog,
  Workflow,
  ShieldCheck,
  LineChart,
  Link2,
  MonitorSmartphone,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const LOGO_PATH = "/images/logo.png"; // coloque seu logo em /public/logo.png (ou .svg)
const WHATSAPP_DISPLAY = "+55 41 8850-3782";

/** Monta UTM dentro da própria mensagem do WhatsApp */
function withUTM(
  msg: string,
  opts: { source?: string; medium?: string; campaign?: string; content?: string } = {}
) {
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

// ====== Conteúdo ======

const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Atendimento no WhatsApp e chat",
    desc: "Bots que respondem de imediato, organizam filas e passam para um humano quando precisa.",
    chips: ["WhatsApp e Web", "Bot + humano"],
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "Automação de tarefas repetitivas",
    desc: "Robôs que fazem o trabalho chato em sites e sistemas. Menos erros, mais rapidez.",
    chips: ["Preenchimento automático", "Relatórios sem esforço"],
  },
  {
    icon: <ServerCog className="h-6 w-6" />,
    title: "Integração entre sistemas",
    desc: "Conectamos seu site, planilhas e softwares para que tudo trabalhe junto.",
    chips: ["APIs e webhooks", "Confiável e seguro"],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Assistentes com IA",
    desc: "Respostas rápidas a clientes, leitura de documentos e organização de informações.",
    chips: ["Perguntas frequentes", "Textos e documentos"],
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Desenvolvimento de sites e sistemas",
    desc: "Sites bonitos e rápidos, e sistemas sob medida para o seu dia a dia.",
    chips: ["Sites que vendem", "Sistemas sob medida"],
  },
];

const stats = [
  { kpi: "Até 70%", label: "menos tempo de atendimento" },
  { kpi: "+80 mil", label: "tarefas feitas por robôs/ano" },
  { kpi: "Em 3 meses", label: "retorno típico do investimento" },
];

const processSteps = [
  { title: "Entendimento", desc: "Conversamos sobre o que você precisa e onde dói mais." },
  { title: "Plano simples", desc: "Definimos o que fazer primeiro e como medir o resultado." },
  { title: "Primeira entrega", desc: "Algo funcionando em poucas semanas, já gerando ganho." },
  { title: "Evolução", desc: "Aprimoramos e escalamos o que deu certo." },
];

// PROJETOS (ordem solicitada) + UTM por projeto
const projects = [
  {
    icon: <MonitorSmartphone className="h-5 w-5 text-brand" />,
    title: "Desenvolvimento de site/sistema",
    summary: "Site rápido e bonito, contato pelo WhatsApp e pronto para ranquear no Google.",
    bullets: [
      "Layout responsivo e visual profissional",
      "Páginas: Home, Serviços, Sobre, Contato",
      "Blog/CMS simples, SEO e analytics",
      "Prazo típico: 2–4 semanas",
    ],
    message:
      "Oi! Quero um projeto de Desenvolvimento de Site/Sistema com a Duma. " +
      "Contexto: site institucional rápido e bonito, com contato via WhatsApp e blog. " +
      "Requisitos: layout responsivo, páginas (Home, Serviços, Sobre, Contato), CMS simples, SEO e analytics. " +
      "Prazo desejado: 2–4 semanas. Podemos conversar?",
    utm: { campaign: "projeto_desenvolvimento" },
  },
  {
    icon: <MessageCircle className="h-5 w-5 text-brand" />,
    title: "Automação de atendimento",
    summary:
      "Respostas imediatas no WhatsApp/site, triagem e encaminhamento para humano quando necessário.",
    bullets: [
      "Bot 24/7 com perguntas frequentes",
      "Triagem automática e handoff para equipe",
      "Integração com CRM / planilhas",
      "Meta: reduzir tempo de resposta",
    ],
    message:
      "Oi! Tenho interesse em Automação de Atendimento no WhatsApp. " +
      "Objetivo: reduzir tempo de resposta, fazer triagem automática e encaminhar para humano quando precisar. " +
      "Integração com CRM/planilhas. Indicador: reduzir TMA e ter disponibilidade 24/7. " +
      "Podemos avaliar juntos o fluxo ideal?",
    utm: { campaign: "projeto_automacao_atendimento" },
  },
  {
    icon: <Bot className="h-5 w-5 text-brand" />,
    title: "Automação de fluxo (RPA)",
    summary: "Robôs que executam tarefas repetitivas em portais e sistemas, com logs e reprocesso.",
    bullets: [
      "Preenchimento em portais e coleta de dados",
      "Geração/baixa de relatórios e conciliações",
      "Alertas, logs e reprocesso automático",
      "Ganho: menos erros e mais velocidade",
    ],
    message:
      "Oi! Preciso de Automação de Fluxo (RPA). " +
      "Tarefas: preencher portais/sistemas, baixar relatórios e conciliar dados, com logs e reprocesso. " +
      "Objetivo: reduzir erros e acelerar rotinas. " +
      "Podemos começar mapeando 1 processo piloto?",
    utm: { campaign: "projeto_rpa" },
  },
];

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen selection:bg-rust/20">
      {/* Top bar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-cream/85 border-b border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Image src={LOGO_PATH} alt="Duma Technology" width={36} height={36} className="rounded" />
              <span className="font-semibold tracking-tight">Duma Technology</span>
            </a>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-brand">
              <a href="#servicos" className="hover:opacity-80">Serviços</a>
              <a href="#como-trabalhamos" className="hover:opacity-80">Como trabalhamos</a>
              <a href="#projetos" className="hover:opacity-80">Projetos</a>
              <a href="#contato" className="hover:opacity-80">Contato</a>
            </nav>
            
            <div className="hidden md:flex items-center gap-3">
              <a
                href={buildWa(DEFAULT_MSG, { campaign: "header_button", content: "cta_header" })}
                className="inline-flex items-center rounded-md bg-rust text-white px-4 py-2 text-sm font-medium hover:bg-rust/90 transition"
                target="_blank"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-brand"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-black/5 overflow-hidden"
            >
              <nav className="flex flex-col p-4 gap-4 text-sm text-brand font-medium">
                <a href="#servicos" onClick={toggleMenu} className="py-2 border-b border-black/5">Serviços</a>
                <a href="#como-trabalhamos" onClick={toggleMenu} className="py-2 border-b border-black/5">Como trabalhamos</a>
                <a href="#projetos" onClick={toggleMenu} className="py-2 border-b border-black/5">Projetos</a>
                <a href="#contato" onClick={toggleMenu} className="py-2 border-b border-black/5">Contato</a>
                <a
                  href={buildWa(DEFAULT_MSG, { campaign: "header_button_mobile", content: "cta_header_mobile" })}
                  className="inline-flex items-center justify-center rounded-md bg-rust text-white px-4 py-3 text-sm font-medium hover:bg-rust/90 transition mt-2"
                  target="_blank"
                  onClick={toggleMenu}
                >
                  Falar no WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#A54633_0%,_transparent_55%)] opacity-40" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
              >
                Automação e sites que{" "}
                <span className="text-brand">economizam tempo e trazem resultado.</span>
              </motion.h1>
              <p className="mt-5 text-muted leading-relaxed max-w-xl text-base sm:text-lg">
                A gente cuida das tarefas repetitivas e do seu atendimento — e também cria sites e sistemas
                sob medida. Você foca no que importa.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWa(DEFAULT_MSG, { campaign: "hero", content: "primary_cta" })}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-rust text-white px-5 py-3 text-sm font-medium hover:bg-rust/90 transition w-full sm:w-auto"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm hover:bg-white/90 transition w-full sm:w-auto"
                >
                  Ver serviços
                </a>
              </div>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg">
                {stats.map((s, i) => (
                  <div key={i} className="rounded-lg bg-white p-4 text-center shadow-sm border border-black/5">
                    <div className="text-2xl font-semibold">{s.kpi}</div>
                    <div className="mt-1 text-xs text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:justify-self-end mt-8 md:mt-0">
              <div className="relative rounded-3xl border border-black/10 bg-white p-4 sm:p-6 shadow-2xl">
                <div className="rounded-2xl bg-white p-4 sm:p-6">
                  <div className="flex items-center gap-2 text-sm text-brand">
                    <ShieldCheck className="h-4 w-4" /> Segurança e privacidade desde o início
                  </div>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-brand" /> Resposta imediata no WhatsApp e no site
                    </div>
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-brand" /> Robôs que não param e evitam retrabalho
                    </div>
                    <div className="flex items-center gap-2">
                      <ServerCog className="h-4 w-4 text-brand" /> Sistemas conversando entre si
                    </div>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-brand" /> Acompanhamento com números claros
                    </div>
                  </div>
                  <a
                    href={buildWa(DEFAULT_MSG, { campaign: "hero", content: "secondary_cta" })}
                    className="mt-6 inline-flex w-full justify-center items-center rounded-md bg-brand text-white px-5 py-3 text-sm font-medium hover:bg-brand/90 transition"
                    target="_blank"
                  >
                    Falar com especialista no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias (texto simples) */}
      <section aria-label="Ferramentas que usamos" className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 opacity-80 text-xs">
            {["WhatsApp", "Chat no site", "Sites rápidos", "Integrações", "Automação", "Painéis e métricas"].map(
              (l) => (
                <div key={l} className="rounded-md border border-black/10 bg-white px-3 py-2 text-muted">
                  {l}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 sm:py-20 bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">O que fazemos</h2>
          <p className="mt-3 text-muted max-w-2xl">
            Começamos pelo que dá mais retorno rápido. Projeto leve, entrega ágil e sem complicação.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-md transition">
                <div className="flex items-center gap-2 text-sm text-brand">
                  <div className="rounded-lg bg-brand/10 p-2 text-brand">{f.icon}</div>
                  <span className="font-medium">{f.title}</span>
                </div>
                <p className="mt-3 text-sm text-muted leading-relaxed">{f.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {f.chips.map((c) => (
                    <span key={c} className="rounded-lg border border-black/10 px-2 py-1 text-xs text-muted bg-white">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={buildWa("Quero um site ou sistema sob medida.", {
                campaign: "servicos",
                content: "cta_sites_sistemas",
              })}
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-rust text-white px-5 py-3 text-sm font-medium hover:bg-rust/90 transition w-full sm:w-auto"
            >
              Quero um site ou sistema sob medida
            </a>
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section id="como-trabalhamos" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Como trabalhamos</h2>
              <p className="mt-3 text-muted max-w-xl">
                Transparência do início ao fim. Você acompanha tudo e vê resultado rápido.
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-black/10 p-5 bg-white">
                    <div className="text-sm font-medium text-brand">{s.title}</div>
                    <div className="mt-1 text-sm text-muted">{s.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-brand">
                <Link2 className="h-4 w-4" /> Integramos com o que você já usa
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-medium">Formas de contratação</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <span className="font-medium text-ink">Começo Rápido:</span> primeira versão em poucas semanas.
                </li>
                <li>
                  <span className="font-medium text-ink">Plano Mensal:</span> melhorias contínuas e suporte.
                </li>
                <li>
                  <span className="font-medium text-ink">Projeto Fechado:</span> escopo definido e prazo combinado.
                </li>
              </ul>
              <div className="mt-6 rounded-xl border border-black/10 p-4 text-xs text-muted bg-white">
                Sempre com documentação, versão dos códigos e acompanhamento por métricas.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos (com mensagem dinâmica no WhatsApp) */}
      <section id="projetos" className="py-16 sm:py-20 bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projetos</h2>
          <p className="mt-3 text-muted max-w-2xl">
            Clique no projeto que te interessa. Vamos te atender no WhatsApp com as informações certas para começar.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <article
                key={i}
                className="rounded-2xl border border-black/10 p-6 bg-white hover:shadow-md transition"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-md bg-brand/10 p-2">{p.icon}</div>
                  <div className="text-sm font-medium text-brand">{p.title}</div>
                </div>

                <p className="mt-3 text-sm text-ink font-medium">{p.summary}</p>

                <ul className="mt-3 text-sm text-muted list-disc list-inside space-y-1">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <a
                  href={buildWa(p.message, { campaign: p.utm.campaign, content: "card_cta" })}
                  target="_blank"
                  className="mt-4 inline-block text-sm text-rust underline underline-offset-4"
                >
                  Falar sobre este projeto no WhatsApp
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato (sem formulário) */}
      <section id="contato" className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Vamos conversar</h2>
          <p className="mt-3 text-muted">Fale direto com a gente pelo WhatsApp. Resposta rápida em horário comercial.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={buildWa(DEFAULT_MSG, { campaign: "contato", content: "cta_principal" })}
              target="_blank"
              className="inline-flex items-center justify-center rounded-md bg-rust text-white px-6 py-3 font-medium hover:bg-rust/90 transition w-full sm:w-auto"
            >
              Chamar no WhatsApp ({WHATSAPP_DISPLAY})
            </a>
            <a
              href="mailto:contato@dumatechnology.com"
              className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-6 py-3 font-medium hover:bg-white/90 transition w-full sm:w-auto"
            >
              contato@dumatechnology.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-sm text-muted">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>© {new Date().getFullYear()} Duma Technology. Todos os direitos reservados.</div>
            <div className="flex items-center justify-center gap-4">
              <a href="/privacidade" className="hover:text-brand">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-brand">
                Termos
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
