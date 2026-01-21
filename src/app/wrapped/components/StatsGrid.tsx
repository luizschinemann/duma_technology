"use client";

import { motion } from "framer-motion";
import { FileText, Bell, Clock, Eye } from "lucide-react";
import { WrappedData } from "../data/mockData";

interface StatsGridProps {
    data: WrappedData['stats'];
}

export function StatsGrid({ data }: StatsGridProps) {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col gap-20">

            {/* Intro Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold text-white mb-4">Resultados que falam</h2>
                <p className="text-white/60">O impacto da tecnologia no seu dia a dia</p>
            </motion.div>

            {/* Split Grid - Part 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1: Emissões */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="rounded-[2rem] bg-gradient-to-br from-[#a9251c] to-[#5e150f] p-8 border border-white/10 relative overflow-hidden group shadow-2xl shadow-red-900/20"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <FileText size={120} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-red-200 font-bold uppercase tracking-wider mb-2">Emissões que viraram negócio</h3>
                        <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                            {data.emissions.toLocaleString('pt-BR')}
                        </div>
                        <p className="text-xl font-medium text-white mb-2">Propostas emitidas</p>
                        <p className="text-white/70 text-sm">
                            Menos cliques. Mais agilidade. <br />
                            Você emitiu mais sem complicar sua rotina.
                        </p>
                    </div>
                </motion.div>

                {/* Card 2: Parcelas (Neutral/Gray Contrast) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="rounded-[2rem] bg-gradient-to-br from-gray-800 to-gray-900 p-8 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Bell size={120} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-gray-300 font-bold uppercase tracking-wider mb-2">Parcelas sob controle</h3>
                        <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                            {data.parcels.toLocaleString('pt-BR')}
                        </div>
                        <p className="text-xl font-medium text-white mb-2">Parcelas pendentes notificadas</p>
                        <p className="text-white/70 text-sm">
                            O sistema avisou. <br />
                            Você manteve sua carteira protegida.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Split Grid - Part 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 3: Tempo (Wine) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="rounded-[2rem] bg-gradient-to-br from-[#7d1b15] to-[#3d0d0a] p-8 border border-white/10 relative overflow-hidden group shadow-2xl shadow-red-900/20"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Clock size={120} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-red-300 font-bold uppercase tracking-wider mb-2">Tempo que virou resultado</h3>
                        <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                            +{data.timeSaved}h
                        </div>
                        <p className="text-xl font-medium text-white mb-2">Horas economizadas</p>
                        <p className="text-white/70 text-sm">
                            Menos tarefas manuais. <br />
                            Mais tempo para vender e atender melhor.
                        </p>
                    </div>
                </motion.div>

                {/* Card 4: Acompanhamento (Neutral dark) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-black p-8 border border-white/10 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Eye size={120} />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-gray-400 font-bold uppercase tracking-wider mb-2">Acompanhamento total</h3>
                        <div className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tighter">
                            {data.monitoring}%
                        </div>
                        <p className="text-xl font-medium text-white mb-2">Das propostas monitoradas</p>
                        <p className="text-white/70 text-sm">
                            Tudo em um só lugar. <br />
                            Sem perder prazos. Sem surpresas.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
