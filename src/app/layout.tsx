import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Duma Technology — Automação & Software",
  description:
    "Automação de processos e atendimento (RPA, WhatsApp, integrações AWS) e desenvolvimento de software.",
  metadataBase: new URL("https://www.dumatechnology.com"),
  alternates: {
    canonical: "https://www.dumatechnology.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Duma Technology — Automação & Software",
    description:
      "Automação de processos e atendimento (RPA, WhatsApp, integrações AWS) e desenvolvimento de software.",
    url: "https://www.dumatechnology.com",
    siteName: "Duma Technology",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Duma Technology — Automação & Software",
      },
    ],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duma Technology — Automação & Software",
    description:
      "Automação de processos e atendimento (RPA, WhatsApp, integrações AWS) e desenvolvimento de software.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Duma Technology",
  url: "https://www.dumatechnology.com",
  logo: "https://www.dumatechnology.com/logo.png",
  description:
    "Especialistas em automação de processos e desenvolvimento de software sob medida.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-41-8850-3782",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  sameAs: ["https://wa.me/554188503782"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J4D6L1PN68"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J4D6L1PN68');
          `}
        </Script>

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
