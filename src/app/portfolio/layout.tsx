import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portfólio Duma Technology",
    description: "Portfólio de soluções de automação e desenvolvimento de software da Duma Technology.",
};

export default function PortfolioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
