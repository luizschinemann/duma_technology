"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { HeroSection } from "./HeroSection";
import { PerformanceSection } from "./PerformanceSection";
import { HighlightsSection } from "./HighlightsSection";
import { ProductionChartSection } from "./ProductionChartSection";
import { FeaturesSection } from "./FeaturesSection";
import { StatsSection } from "./StatsSection";
import { FooterSection } from "./FooterSection";
import { Confetti } from "./Confetti";
import { WrappedData } from "../data/mockData";

interface WrappedContainerProps {
    data: WrappedData;
}

export function WrappedContainer({ data }: WrappedContainerProps) {
    const { scrollYProgress } = useScroll();

    // Smooth background transitions based on scroll
    const background = useTransform(
        scrollYProgress,
        [0, 0.2, 0.5, 0.8, 1],
        [
            "linear-gradient(to bottom, #000000, #3d0d0a)", // Intro: Black -> Dark Rust
            "linear-gradient(to bottom, #3d0d0a, #5e150f)", // Stats: Dark Rust -> Rust
            "linear-gradient(to bottom, #5e150f, #3d0d0a)", // Features: Rust -> Dark Rust
            "linear-gradient(to bottom, #3d0d0a, #1a0504)", // Footer: Dark Rust -> Blackish
            "linear-gradient(to bottom, #1a0504, #000000)", // End
        ]
    );

    return (
        <motion.div
            className="w-full min-h-screen relative"
            style={{ background }}
        >
            {/* Ambient Animated Particles (Global) */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div
                    className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#a9251c]/20 rounded-full blur-[100px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -100, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px]"
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 100, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Content Container */}
            <main className="relative z-10 flex flex-col gap-12 pb-24 top-0">
                <Confetti />
                <HeroSection year={data.year} name={data.brokerName} />
                <PerformanceSection data={data.results} />
                <StatsSection data={data.stats} />
                <ProductionChartSection data={data.monthlyProduction} />
                <HighlightsSection data={data.highlights} />
                <FeaturesSection data={data.features} />
                <FooterSection year={data.year} />
            </main>
        </motion.div>
    );
}
