"use client";

import { motion } from "framer-motion";
import { Shield, FileText, Monitor, CheckCircle } from "lucide-react";
import { WrappedData } from "../data/mockData";

interface StatsSectionProps {
    data: WrappedData['stats'];
}

export function StatsSection({ data }: StatsSectionProps) {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl font-bold text-white mb-4">Proteção e Continuidade</h2>
                <p className="text-white/60 max-w-2xl mx-auto">
                    Além dos resultados comerciais, garantimos a segurança e a operação contínua dos seus negócios.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatsCard
                    icon={<FileText size={24} />}
                    value={data.emissions}
                    label="Emissões"
                    delay={0}
                />
                <StatsCard
                    icon={<CheckCircle size={24} />}
                    value={data.parcels}
                    label="Parcelas Processadas"
                    delay={0.1}
                    isCurrency={false}
                />
                <StatsCard
                    icon={<Monitor size={24} />}
                    value={data.monitoring}
                    label="Monitoramentos"
                    delay={0.2}
                />
                <StatsCard
                    icon={<Shield size={24} />}
                    value={data.timeSaved}
                    label="Horas Economizadas"
                    delay={0.3}
                />
            </div>
        </section>
    );
}

function StatsCard({ icon, value, label, delay, isCurrency = false }: { icon: React.ReactNode, value: number, label: string, delay: number, isCurrency?: boolean }) {
    const formattedValue = new Intl.NumberFormat('pt-BR').format(value);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-[#1a0504] border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center hover:border-red-900/50 transition-colors group"
        >
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500/20 transition-colors">
                {icon}
            </div>
            <div className="text-3xl font-bold text-white mb-1">
                {formattedValue}
            </div>
            <div className="text-sm text-white/40 uppercase tracking-wider font-bold">
                {label}
            </div>
        </motion.div>
    );
}
