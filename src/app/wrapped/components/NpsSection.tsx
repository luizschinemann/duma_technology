"use client";

import { motion } from "framer-motion";
import { WrappedData } from "../data/mockData";
import { Smile } from "lucide-react";

interface NpsSectionProps {
    data: WrappedData['nps'];
}

export function NpsSection({ data }: NpsSectionProps) {
    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-20 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1a0504] to-black border border-white/10 rounded-[3rem] p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl"
            >
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#a9251c]/10 rounded-full blur-[80px] -z-10" />

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500 mb-8">
                        <Smile size={40} />
                    </div>

                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        NPS da Rede
                    </h2>

                    <div className="text-[8rem] md:text-[10rem] font-black text-white leading-none tracking-tighter my-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#a9251c]">
                        {data.score}
                    </div>

                    <p className="text-xl text-white/80 max-w-lg mx-auto font-medium">
                        A voz da nossa rede confirma: estamos construindo o futuro juntos.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
