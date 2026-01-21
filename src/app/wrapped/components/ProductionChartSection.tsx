"use client";

import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
    current: number[];
    previous: number[];
}

interface ProductionChartSectionProps {
    data: {
        premium: ChartData;
        policies: ChartData;
        consortium: { current: number[]; previous: number[] | null };
        months: string[];
    };
}

export function ProductionChartSection({ data }: ProductionChartSectionProps) {
    return (
        <section className="w-full max-w-6xl mx-auto px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-left mb-8"
            >
                <h2 className="text-3xl font-bold text-white mb-2">Evolução mensal</h2>
                <p className="text-white/60">Comparativo mês a mês 2024 vs 2025.</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ChartCard
                    title="Prêmio Líquido"
                    data={data.premium}
                    months={data.months}
                    color="#3b82f6" // Blue
                    formatter={(value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value)}
                />
                <ChartCard
                    title="Volume (Apólices)"
                    data={data.policies}
                    months={data.months}
                    color="#10b981" // Emerald
                    formatter={(value: number) => value.toString()} // Integer
                />
                <ChartCard
                    title="Consórcio (Crédito)"
                    data={data.consortium}
                    months={data.months}
                    color="#f59e0b" // Amber
                    formatter={(value: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value)}
                    isEmpty={data.consortium.current.every(v => v === 0)}
                />
            </div>
        </section>
    );
}

function ChartCard({ title, data, months, color, formatter, isEmpty }: {
    title: string;
    data: { current: number[]; previous: number[] | null };
    months: string[];
    color: string;
    formatter: (value: number) => string;
    isEmpty?: boolean;
}) {
    // Transform data for Recharts
    const chartData = months.map((month, index) => ({
        name: month,
        Atual: data.current[index] || 0,
        Anterior: data.previous ? (data.previous[index] || 0) : 0,
    }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1a0504] border border-white/5 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 shadow-lg"
        >
            <div className="mb-6">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <div className="flex gap-4 text-xs mt-2">
                    <div className="flex items-center gap-1.5 text-white/60">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
                        2025
                    </div>
                    {!isEmpty && (
                        <div className="flex items-center gap-1.5 text-white/40">
                            <div className="w-2 h-2 rounded-full border border-white/20" />
                            2024
                        </div>
                    )}
                </div>
            </div>

            <div className="h-[200px] w-full relative">
                {isEmpty ? (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm font-medium border border-white/5 rounded-xl bg-white/[0.02]">
                        Sem dados no período
                    </div>
                ) : (
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ top: 5, right: 0, left: -20, bottom: 0 }}>
                            <defs>
                                <linearGradient id={`gradient-${title}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                            <XAxis
                                dataKey="name"
                                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }}
                                axisLine={false}
                                tickLine={false}
                                interval="preserveStartEnd"
                            />
                            <YAxis
                                tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10 }}
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) => {
                                    if (value >= 1000) return `${(value / 1000).toFixed(0)}k`;
                                    return value;
                                }}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: '#0f0303',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '12px',
                                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
                                }}
                                itemStyle={{ fontSize: '12px' }}
                                labelStyle={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '4px' }}
                                formatter={(value: number) => [formatter(value), '']}
                            />
                            <Area
                                type="monotone"
                                dataKey="Anterior"
                                stroke="rgba(255,255,255,0.3)"
                                strokeDasharray="4 4"
                                fill="none"
                                strokeWidth={2}
                                activeDot={false}
                            />
                            <Area
                                type="monotone"
                                dataKey="Atual"
                                stroke={color}
                                fillOpacity={1}
                                fill={`url(#gradient-${title})`}
                                strokeWidth={3}
                                activeDot={{ r: 6, strokeWidth: 0, fill: color }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </motion.div>
    );
}
