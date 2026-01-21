"use client";

import { motion } from "framer-motion";
import { Share2, RotateCcw, Heart } from "lucide-react";

interface FooterSectionProps {
    year: number;
}

export function FooterSection({ year }: FooterSectionProps) {
    return (
        <section className="w-full max-w-4xl mx-auto px-6 py-32 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#a9251c] to-black border border-white/10 rounded-[3rem] p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                <h2 className="text-2xl md:text-4xl font-black text-white mb-6">
                    ✨ O ano passou. Você evoluiu.
                </h2>
                <div className="text-xl text-white/70 mb-12 max-w-lg mx-auto space-y-2">
                    <p>A tecnologia cuidou do operacional.</p>
                    <p>Você cuidou do crescimento.</p>
                    <p className="text-white font-medium pt-4">E esse é só o começo.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        className="flex items-center gap-2 px-8 py-4 bg-white text-[#a9251c] rounded-full font-bold hover:bg-gray-100 transition-colors transform hover:scale-105 active:scale-95 duration-200 shadow-lg"
                        onClick={() => alert("Compartilhar (Mock)")}
                    >
                        <Share2 size={20} />
                        Compartilhar
                    </button>
                    <button
                        className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors border border-white/10 transform hover:scale-105 active:scale-95 duration-200"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <RotateCcw size={20} />
                        Ver Novamente
                    </button>
                </div>

                <div className="mt-12 flex items-center justify-center gap-2 text-white/30 text-sm">
                    <span>Rede Lojacorr</span>
                    <Heart size={12} className="fill-[#a9251c]" />
                    <span>{year}</span>
                </div>
            </motion.div>
        </section>
    );
}
