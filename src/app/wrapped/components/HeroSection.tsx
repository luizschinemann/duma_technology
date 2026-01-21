"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface HeroSectionProps {
    year: number;
    name?: string;
}

export function HeroSection({ year, name }: HeroSectionProps) {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center p-6 overflow-hidden">
            {/* Background Glow - Burgundy/Wine */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#a9251c]/30 rounded-full blur-[120px] -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Logo */}
                <motion.div
                    className="mb-8 relative w-64 h-24"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <Image
                        src="/lojacorr_logo.png"
                        alt="Lojacorr Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {name && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mb-6"
                    >
                        <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Retrospectiva de</p>
                        <h2 className="text-2xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
                            {name}
                        </h2>
                    </motion.div>
                )}

                <h2 className="text-xl md:text-2xl text-red-100 font-medium tracking-wide mb-4 mt-4">
                    Sua retrospectiva em números
                </h2>

                <motion.h1
                    className="text-[10rem] md:text-[16rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-red-100 to-[#a9251c]/50 leading-none tracking-tighter drop-shadow-2xl"
                    animate={{
                        y: [0, -20, 0],
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {year}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-8 flex flex-col items-center gap-4"
                >
                    <p className="text-xl text-white/80 max-w-lg mx-auto font-light">
                        Um ano inteiro resumido no que realmente importa.
                    </p>

                    <div className="flex gap-2 items-center text-sm font-medium text-white/40 bg-white/5 px-4 py-2 rounded-full backdrop-blur-md border border-white/10 mt-8">
                        <span className="w-2 h-2 rounded-full bg-[#a9251c] animate-pulse" />
                        Role para descobrir
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
