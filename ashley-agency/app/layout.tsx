import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ashley",
  description: "Ashley Creative Agency & Portfolio Showcase Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/plugins/bootstrap-grid.css" />
        <link rel="stylesheet" href="/css/plugins/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/plugins/swiper.min.css" />
        <link rel="stylesheet" href="/css/plugins/fancybox.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        {children}

        {/* Scripts - Loading in order suggested by the original template */}
        <Script src="/js/plugins/jquery.min.js" strategy="beforeInteractive" />
        {/* We use the version provided in the template for consistency */}
        <Script src="/js/plugins/swup.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/swiper.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/fancybox.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/gsap.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/smooth-scroll.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/ScrollTo.min.js" strategy="beforeInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
