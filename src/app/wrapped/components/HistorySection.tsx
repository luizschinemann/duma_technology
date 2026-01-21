"use client";

import { motion } from "framer-motion";

interface HistorySectionProps {
    data: {
        text: string;
        details: string[];
    };
}

export function HistorySection({ data }: HistorySectionProps) {
    return (
        <section className="w-full max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black border border-white/10 rounded-3xl p-8"
            >
                <h3 className="text-2xl font-bold text-white mb-6">A história de 2025</h3>

                <div className="space-y-4 text-white/70 leading-relaxed">
                    <p className="font-semibold text-white">{data.text}</p>
                    {data.details.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
