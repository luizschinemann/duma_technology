import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/css/plugins/fancybox.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body className="antialiased">
        {children}

        {/* Scripts */}
        <Script src="/js/plugins/jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/swup.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/swiper.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/fancybox.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/gsap.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/smooth-scroll.js" strategy="afterInteractive" />
        <Script src="/js/plugins/ScrollTrigger.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/ScrollTo.min.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
