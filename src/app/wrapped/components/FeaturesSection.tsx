"use client";

import { motion } from "framer-motion";
import { Zap, Users, CheckCircle, Clock, Star, ShieldCheck, Bell } from "lucide-react";
import { WrappedData } from "../data/mockData";

interface FeaturesSectionProps {
    data: WrappedData['features'];
}

export function FeaturesSection({ data }: FeaturesSectionProps) {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col gap-32">

            {/* Section 1: Automation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="w-16 h-16 rounded-2xl bg-[#a9251c]/20 flex items-center justify-center text-[#a9251c] mb-6">
                        <Zap size={32} />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Automação que <br />
                        <span className="text-red-400">trabalha por você.</span>
                    </h3>
                    <p className="text-xl text-white/70 mb-8 leading-relaxed">
                        Deixe o operacional com a gente. O sistema garantiu que nada passasse despercebido, permitindo que você focasse no que importa.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-red-400">
                                <Bell size={18} />
                                <span className="font-bold">Notificações</span>
                            </div>
                            <p className="text-3xl font-bold text-white mb-1">{data.automation.notifications.toLocaleString('pt-BR')}</p>
                            <p className="text-sm text-white/60">Avisos automáticos enviados</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-2 mb-2 text-red-400">
                                <ShieldCheck size={18} />
                                <span className="font-bold">Emissões RPA</span>
                            </div>
                            <p className="text-3xl font-bold text-white mb-1">{data.automation.rpaDetails?.[0]?.total.toLocaleString('pt-BR') ?? 0}</p>
                            <p className="text-sm text-white/60">Acompanhadas pelo robô</p>
                        </div>
                    </div>

                    {data.automation.rpaDetails && (
                        <div className="mt-8 space-y-3">
                            <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Detalhamento de Automação / RPA</h4>
                            {data.automation.rpaDetails.map((item, idx) => (
                                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                                    <span className="text-white/80 text-sm">{item.type}</span>
                                    <span className="text-red-400 font-bold">{item.total.toLocaleString('pt-BR')}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-[#a9251c]/20 blur-[80px] rounded-full" />
                    <div className="relative z-10 bg-[#121212] border border-white/10 rounded-2xl p-8 shadow-2xl">
                        <div className="space-y-4">
                            {data.automation.rpaDetails?.slice(0, 3).map((item, i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-bold text-white/90 mb-1">{item.type}</div>
                                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-green-500 w-[85%]" />
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-white/40 font-mono">DONE</span>
                                </div>
                            )) || [1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <CheckCircle size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="h-2 w-24 bg-white/20 rounded mb-2" />
                                        <div className="h-2 w-16 bg-white/10 rounded" />
                                    </div>
                                    <span className="text-xs text-white/40">Agora</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center text-red-400 text-sm font-bold uppercase tracking-widest">
                            {data.automation.rpaDetails ? "RPA em Operação Escalonável" : "Organização Automática"}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Section 2: Customer Focus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative md:order-1 order-2"
                >
                    <div className="absolute inset-0 bg-[#a9251c]/10 blur-[80px] rounded-full" />
                    <div className="bg-gradient-to-br from-[#2a0a10] to-[#1a0508] border border-white/10 rounded-[2rem] p-8 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Users size={180} />
                        </div>
                        <div className="relative z-10 flex justify-center text-center">
                            <div className="p-8 bg-white/5 rounded-2xl w-full max-w-[200px]">
                                <div className="text-6xl font-black text-white mb-2">{data.customerFocus.satisfaction}</div>
                                <div className="flex justify-center gap-1 text-yellow-500 mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                                </div>
                                <p className="text-sm text-white/60 uppercase tracking-widest font-bold">NPS da Lojacorr</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="md:order-2 order-1"
                >
                    <div className="w-16 h-16 rounded-2xl bg-[#a9251c]/20 flex items-center justify-center text-[#a9251c] mb-6">
                        <Users size={32} />
                    </div>
                    <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        Mais foco no <br />
                        <span className="text-red-400">seu cliente.</span>
                    </h3>
                    <div className="h-4" />

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-[#a9251c] group-hover:border-[#a9251c] transition-colors">
                                <span className="font-bold">1</span>
                            </div>
                            <p className="text-white text-lg group-hover:text-red-200 transition-colors">Histórico completo em um clique</p>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-[#a9251c] group-hover:border-[#a9251c] transition-colors">
                                <span className="font-bold">2</span>
                            </div>
                            <p className="text-white text-lg group-hover:text-red-200 transition-colors">Renovações antecipadas</p>
                        </div>
                        <div className="flex items-center gap-6 group">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white border border-white/10 group-hover:bg-[#a9251c] group-hover:border-[#a9251c] transition-colors">
                                <span className="font-bold">3</span>
                            </div>
                            <p className="text-white text-lg group-hover:text-red-200 transition-colors">Relacionamento proativo</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
