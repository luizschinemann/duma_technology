"use client";

import { useEffect } from "react";

export function Confetti() {
    useEffect(() => {
        // Dynamically import canvas-confetti to avoid SSR issues
        import("canvas-confetti").then((module: any) => {
            const confetti = module.default || module;

            const duration = 3 * 1000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            const randomInRange = (min: number, max: number) => {
                return Math.random() * (max - min) + min;
            }

            const interval: any = setInterval(function () {
                const timeLeft = animationEnd - Date.now();

                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }

                const particleCount = 50 * (timeLeft / duration);

                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    colors: ['#a9251c', '#ffffff', '#ff0000', '#ffd700']
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    colors: ['#a9251c', '#ffffff', '#ff0000', '#ffd700']
                });
            }, 250);

            return () => clearInterval(interval);
        });
    }, []);

    return null;
}
