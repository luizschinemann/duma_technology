"use client";

import { motion } from "framer-motion";
import { WrappedData } from "../data/mockData";
import { TrendingUp, Award, MapPin, Building2 } from "lucide-react";

interface PerformanceSectionProps {
    data: WrappedData['results'];
}

export function PerformanceSection({ data }: PerformanceSectionProps) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    const formatNumber = (value: number) => {
        return new Intl.NumberFormat('pt-BR').format(value);
    };

    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col gap-24">

            {/* --- BLOCK 1: RESULTADOS --- */}
            <div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-2">Resultados</h2>
                    <p className="text-white/60">Crescimento 2024 → 2025 em destaque (valores do ano no rodapé de cada card).</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card: Prêmio Líquido (Burgundy/Red Background) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[2rem] bg-gradient-to-br from-[#a9251c] to-[#5e150f] p-8 border border-white/10 shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-red-200 font-bold uppercase tracking-wider text-sm mb-4">Prêmio Líquido</h3>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                    {formatCurrency(data.comparison.premium.current)}
                                </div>
                            </div>
                            <div className="mt-8 space-y-1 text-white/80 text-sm">
                                <p>2024: {formatCurrency(data.comparison.premium.previous)}</p>
                                <p className="text-white font-bold">Crescimento: {formatNumber(data.comparison.premium.growth)}%</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card: Volume (Dark Background) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="rounded-[2rem] bg-[#1a0504] border border-white/10 p-8 shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <TrendingUp size={100} />
                        </div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-white/60 font-bold uppercase tracking-wider text-sm mb-4">Volume (Apólices)</h3>
                                <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                                    {formatNumber(data.comparison.policies.current)}
                                </div>
                            </div>
                            <div className="mt-8 space-y-1 text-white/60 text-sm">
                                <p>2024: {formatNumber(data.comparison.policies.previous)}</p>
                                <p className="text-white font-bold">Crescimento: {formatNumber(data.comparison.policies.growth)}%</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
