"use client";

import { motion } from "framer-motion";
import { WrappedData } from "../data/mockData";

interface HighlightsProps {
    data: {
        branches: Array<{ name: string; percentage: number }>;
        insurers: Array<{ name: string; percentage: number }>;
        consortiumProducts?: Array<{ name: string; percentage: number }>;
    };
}

export function HighlightsSection({ data }: HighlightsProps) {
    return (
        <section className="w-full max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left mb-8"
            >
                <h2 className="text-3xl font-bold text-white mb-2">Perfil de produção em 2025</h2>
                <p className="text-white/60">Distribuição do Prêmio Líquido em 2025.</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Branches Column */}
                <HighlightCard title="Por Ramo" subtitle="Distribuição do Prêmio Líquido em 2025." items={data.branches} />

                {/* Insurers Column */}
                <HighlightCard title="Por Seguradora" subtitle="Distribuição do Prêmio Líquido em 2025." items={data.insurers} />

                {/* Consortium Column */}
                <HighlightCard
                    title="Consórcio — produtos (2025)"
                    subtitle="Share de crédito vendido em 2025."
                    items={data.consortiumProducts || []}
                    emptyMessage="Sem vendas de consórcio em 2025."
                />
            </div>
        </section>
    );
}

function HighlightCard({ title, subtitle, items, emptyMessage }: {
    title: string;
    subtitle: string;
    items: Array<{ name: string; percentage: number }>;
    emptyMessage?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1a0504] border border-white/5 rounded-3xl p-6 h-full"
        >
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-white/40 text-xs mb-6">{subtitle}</p>

            {items.length === 0 ? (
                <p className="text-white/30 text-sm italic">{emptyMessage}</p>
            ) : (
                <div className="space-y-3">
                    {/* Header */}
                    <div className="flex justify-between text-xs text-white/30 font-semibold uppercase border-b border-white/5 pb-2">
                        <span>{title.includes("Consórcio") ? "Produto" : (title.includes("Seguradora") ? "Seguradora" : "Ramo")}</span>
                        <span>{title.includes("Consórcio") ? "% de crédito" : "% do Prêmio"}</span>
                    </div>

                    {/* Rows */}
                    {items.map((item, i) => (
                        <div key={i} className="flex justify-between items-center text-sm">
                            <span className="text-white/80 font-medium truncate pr-4">{item.name}</span>
                            <span className="text-white font-bold">{item.percentage.toFixed(1).replace('.', ',')}%</span>
                        </div>
                    ))}
                </div>
            )}
        </motion.div>
    );
}
