"use client";

/* eslint-disable @next/next/no-img-element */
import { MessageCircle, Bot, ServerCog, Workflow, Mail, Globe, MapPin } from "lucide-react";

const WHATSAPP_DISPLAY = "+55 41 8850-3782";
const EMAIL = "contato@dumatechnology.com";
const WEBSITE = "www.dumatechnology.com";

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
];

const projects = [
    {
        title: "Site Institucional e Sistemas",
        summary: "Layout responsivo, SEO e performance.",
        image: "/img/blog/1.jpg",
    },
    {
        title: "Automação de Atendimento",
        summary: "Bot 24/7 com inteligência e handoff humano.",
        image: "/img/blog/2.jpg",
    },
    {
        title: "Desenvolvimento de Funções Serverless (Lambdas)",
        summary: "Infraestrutura ágil e econômica com AWS Lambda.",
        image: "/images/telegramflow.png",
    },
    {
        title: "Integração de Sistemas e APIs",
        summary: "Conectividade segura entre plataformas (CRM, ERP, E-commerce).",
        image: "/images/whatsappflow.png",
    },
];

export default function PortfolioPage() {
    return (
        <div className="portfolio-print-wrapper bg-white min-h-screen text-slate-800 p-8 sm:p-12">
            <style dangerouslySetInnerHTML={{
                __html: `
        @media print {
          body { -webkit-print-color-adjust: exact; }
          .no-print { display: none !important; }
          .page-break { page-break-before: always; }
          .portfolio-print-wrapper { p: 0; }
        }
        .text-gradient {
          background: linear-gradient(90deg, #FF9800 0%, #F44336 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .header-bg {
          background-color: #0c0c0c;
        }
      `}} />

            {/* Header */}
            <header className="header-bg p-10 rounded-3xl mb-12 flex justify-between items-center text-white">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Duma<span className="text-orange-500">.</span></h1>
                    <p className="text-slate-400">Automação & Software</p>
                </div>
                <div className="text-right">
                    <p className="flex items-center justify-end gap-2 text-sm mb-1">
                        <Globe className="h-4 w-4 text-orange-500" /> {WEBSITE}
                    </p>
                    <p className="flex items-center justify-end gap-2 text-sm mb-1">
                        <Mail className="h-4 w-4 text-orange-500" /> {EMAIL}
                    </p>
                    <p className="flex items-center justify-end gap-2 text-sm">
                        <MessageCircle className="h-4 w-4 text-orange-500" /> {WHATSAPP_DISPLAY}
                    </p>
                </div>
            </header>

            {/* Introduction */}
            <section className="mb-16 max-w-4xl">
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                    Cuidamos do <span className="text-gradient">trabalho repetitivo</span> para você focar no que importa.
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Especialistas em automação de processos, atendimento Inteligente e desenvolvimento de software sob medida.
                    Unimos tecnologia de ponta e resultados reais para transformar a operação da sua empresa.
                </p>
            </section>

            {/* Services Grid */}
            <section className="mb-20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                    Nossos Serviços
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="border border-slate-100 p-8 rounded-2xl bg-slate-50">
                            <div className="text-orange-500 mb-6">{f.icon}</div>
                            <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                            <p className="text-slate-600 mb-6">{f.desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {f.chips.map((chip, ci) => (
                                    <span key={ci} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-500">
                                        {chip}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="page-break no-print my-12 border-t border-dashed border-slate-300"></div>

            {/* Projects/Portfolio */}
            <section className="mb-20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
                    Soluções de Impacto
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((p, i) => (
                        <div key={i} className="group">
                            <div className="aspect-video relative overflow-hidden rounded-2xl mb-6 bg-slate-100 border border-slate-200">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                            <p className="text-slate-600">{p.summary}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer / Contact */}
            <footer className="bg-slate-900 p-12 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center gap-8 mt-20">
                <div>
                    <h2 className="text-2xl font-bold mb-2">Duma Technology</h2>
                    <p className="text-slate-400 mb-6 max-w-md">
                        Evoluindo seu negócio através da tecnologia e automação de processos.
                    </p>
                    <div className="flex gap-4">
                        <span className="p-2 bg-slate-800 rounded-full"><Globe className="h-5 w-5" /></span>
                        <span className="p-2 bg-slate-800 rounded-full"><MessageCircle className="h-5 w-5" /></span>
                        <span className="p-2 bg-slate-800 rounded-full"><Mail className="h-5 w-5" /></span>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                    <div>
                        <h5 className="font-bold mb-3 text-orange-500 uppercase tracking-widest text-xs">Localização</h5>
                        <p className="text-slate-300 flex items-start gap-2">
                            <MapPin className="h-4 w-4 mt-1 shrink-0" /> Curitiba - PR<br />Brasil
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-3 text-orange-500 uppercase tracking-widest text-xs">Canais Digitais</h5>
                        <p className="text-slate-300 mb-1">{WEBSITE}</p>
                        <p className="text-slate-300 mb-1">{EMAIL}</p>
                        <p className="text-slate-300">{WHATSAPP_DISPLAY}</p>
                    </div>
                </div>
            </footer>

            {/* Print Button (Browsing only) */}
            <div className="fixed bottom-8 right-8 no-print">
                <button
                    onClick={() => window.print()}
                    className="bg-orange-500 hover:bg-orange-600 text-black font-bold py-4 px-8 rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center gap-3"
                >
                    Salvar como PDF em Portfólio
                </button>
            </div>
        </div>
    );
}
