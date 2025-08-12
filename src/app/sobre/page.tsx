"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Bot, MessageCircle, ServerCog, Workflow, ShieldCheck, LineChart, Link2, MonitorSmartphone
} from "lucide-react";

const LOGO_PATH = "/logo.png"; // coloque seu logo em /public/logo.png (ou .svg)
const WHATSAPP_DISPLAY = "+55 41 8850-3782";
const WHATSAPP_LINK =
  "https://wa.me/554188503782?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Duma%20Technology%20e%20gostaria%20de%20conversar%20sobre%20automa%C3%A7%C3%A3o.";

const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Atendimento Omnichannel",
    desc: "Bots e fluxos em WhatsApp/Telegram e Web. Qualificação, triagem, handoff e métricas.",
    chips: ["WhatsApp Business API", "Human-in-the-loop"],
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: "RPA & Orquestração",
    desc: "Automação de processos com monitoramento, filas e reprocesso automático.",
    chips: ["Python/Selenium", "Queues & Retries"],
  },
  {
    icon: <ServerCog className="h-6 w-6" />,
    title: "Serverless & Integrações",
    desc: "Lambdas, webhooks e APIs conectando legados e modernos com segurança.",
    chips: ["AWS Lambda", "APIs & Webhooks"],
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "IA aplicada ao negócio",
    desc: "Assistentes, classificação de documentos, extração de dados e respostas.",
    chips: ["OpenAI", "RAG/LLM"],
  },
  {
    icon: <MonitorSmartphone className="h-6 w-6" />,
    title: "Desenvolvimento de sites e sistemas",
    desc: "Landing pages rápidas, portais e sistemas sob medida com Next.js/Django.",
    chips: ["Next.js", "Django", "PostgreSQL"],
  },
];

const stats = [
  { kpi: "85%", label: "taxa média de sucesso em jobs RPA" },
  { kpi: "+80k", label: "execuções automatizadas/ano" },
  { kpi: "−70%", label: "redução de TMA no atendimento" },
];

const processSteps = [
  { title: "Descoberta", desc: "Mapeamos objetivos, métricas e sistemas." },
  { title: "MVP", desc: "PoC em 1–2 sprints com foco em impacto." },
  { title: "Escala", desc: "Observabilidade, custo, segurança e SLAs." },
  { title: "Evolução", desc: "Roadmap contínuo orientado a indicadores." },
];

export default function Page() {
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
            <nav className="hidden md:flex items-center gap-8 text-sm text-brand">
              <a href="#servicos" className="hover:opacity-80">Serviços</a>
              <a href="#como-trabalhamos" className="hover:opacity-80">Como trabalhamos</a>
              <a href="#cases" className="hover:opacity-80">Cases</a>
              <a href="#contato" className="hover:opacity-80">Contato</a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center rounded-md bg-rust text-white px-4 py-2 text-sm font-medium hover:bg-rust/90 transition"
                target="_blank"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_#A54633_0%,_transparent_55%)] opacity-20" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight"
              >
                Automação que acelera seu negócio{" "}
                <span className="text-brand">de verdade.</span>
              </motion.h1>
              <p className="mt-5 text-muted leading-relaxed max-w-xl">
                RPA com Selenium, integrações AWS (Lambda, SQS, SES) e chatbots (WhatsApp/Telegram) — tudo
                para reduzir TMA, erros e custos com governança.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="inline-flex items-center rounded-md bg-rust text-white px-5 py-3 text-sm font-medium hover:bg-rust/90 transition"
                >
                  Começar pelo WhatsApp ({WHATSAPP_DISPLAY})
                </a>
                <a
                  href="#servicos"
                  className="inline-flex items-center rounded-md border border-black/10 bg-white px-5 py-3 text-sm hover:bg-white/90 transition"
                >
                  Ver serviços
                </a>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                {stats.map((s, i) => (
                  <div key={i} className="rounded-lg bg-white p-4 text-center shadow-sm border border-black/5">
                    <div className="text-2xl font-semibold">{s.kpi}</div>
                    <div className="mt-1 text-xs text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-2xl">
                <div className="rounded-2xl bg-white p-6">
                  <div className="flex items-center gap-2 text-sm text-brand">
                    <ShieldCheck className="h-4 w-4" /> Governança e segurança by design
                  </div>
                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp/Telegram com roteamento e handoff
                    </div>
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4 text-brand" /> RPA com retries, logs e observability
                    </div>
                    <div className="flex items-center gap-2">
                      <ServerCog className="h-4 w-4 text-brand" /> Lambdas, filas e eventos
                    </div>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-4 w-4 text-brand" /> KPIs e dashboards executivos
                    </div>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    className="mt-6 inline-flex items-center rounded-md bg-brand text-white px-5 py-3 text-sm font-medium hover:bg-brand/90 transition"
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

      {/* Tecnologias */}
      <section aria-label="Tecnologias" className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 opacity-80 text-xs">
            {["AWS", "Python", "Django", "PostgreSQL", "Docker", "Kubernetes", "Next.js"].map((l) => (
              <div key={l} className="rounded-md border border-black/10 bg-white px-3 py-2 text-muted">{l}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Serviços</h2>
          <p className="mt-3 text-muted max-w-2xl">
            Portfólio de ponta a ponta, do discovery à operação. Comece pequeno, escale com segurança.
          </p>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
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

          {/* CTA inline para serviço novo */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="inline-flex items-center rounded-md bg-rust text-white px-5 py-3 text-sm font-medium hover:bg-rust/90 transition"
            >
              Quero um site/sistema sob medida
            </a>
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section id="como-trabalhamos" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Como trabalhamos</h2>
              <p className="mt-3 text-muted max-w-xl">
                Framework de entrega com foco em ROI e governança. Transparência, ciclos curtos e indicadores desde o dia 1.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {processSteps.map((s) => (
                  <div key={s.title} className="rounded-2xl border border-black/10 p-5 bg-white">
                    <div className="text-sm font-medium text-brand">{s.title}</div>
                    <div className="mt-1 text-sm text-muted">{s.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-brand">
                <Link2 className="h-4 w-4" /> Integramos com CRM, ERP, SAC e sistemas legados
              </div>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white p-6">
              <h3 className="text-lg font-medium">Pacotes e modelos de contratação</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li><span className="font-medium text-ink">Sprint Pack:</span> 2 a 4 semanas para um MVP funcional.</li>
                <li><span className="font-medium text-ink">Retainer Operacional:</span> melhorias contínuas + SRE de automações.</li>
                <li><span className="font-medium text-ink">Projeto Fixo:</span> escopo fechado para prazos definidos.</li>
              </ul>
              <div className="mt-6 rounded-xl border border-black/10 p-4 text-xs text-muted bg-white">
                Inclui: documentação, versionamento, logs, dashboards e handover.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-20 bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Cases & resultados</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-2xl border border-black/10 p-6 bg-white">
                <div className="text-sm font-medium text-brand">Projeto {i}</div>
                <p className="mt-2 text-sm text-ink font-medium">
                  Resumo curto do problema, solução e KPI de impacto.
                </p>
                <p className="mt-1 text-sm text-muted">Ex.: −70% TMA, +30% conversão, payback 3 meses.</p>
                <a href={WHATSAPP_LINK} target="_blank" className="mt-4 inline-block text-sm text-rust underline underline-offset-4">
                  Quero um case parecido
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato (sem formulário) */}
      <section id="contato" className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Vamos conversar</h2>
          <p className="mt-3 text-muted">Fale direto com a gente pelo WhatsApp. Resposta rápida em horário comercial.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WHATSAPP_LINK} target="_blank" className="inline-flex items-center justify-center rounded-md bg-rust text-white px-6 py-3 font-medium hover:bg-rust/90 transition">
              Chamar no WhatsApp ({WHATSAPP_DISPLAY})
            </a>
            <a href="mailto:contato@dumatechnology.com" className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white px-6 py-3 font-medium hover:bg-white/90 transition">
              contato@dumatechnology.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-sm text-muted">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {new Date().getFullYear()} Duma Technology. Todos os direitos reservados.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-brand">Política de Privacidade</a>
              <a href="#" className="hover:text-brand">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
