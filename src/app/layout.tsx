import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duma Technology — Automação & Software",
  description:
    "Automação de processos e atendimento (RPA, WhatsApp, integrações AWS) e desenvolvimento de software.",
  metadataBase: new URL("https://www.dumatechnology.com"),
  openGraph: {
    title: "Duma Technology — Automação & Software",
    description:
      "Automação de processos e atendimento (RPA, WhatsApp, integrações AWS) e desenvolvimento de software.",
    url: "https://www.dumatechnology.com",
    siteName: "Duma Technology",
    images: ["/logo.png"],
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
