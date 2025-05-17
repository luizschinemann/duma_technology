import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransparentHeader from "./components/TransparentHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duma Technology - Automação de Processos",
  description: "Soluções inovadoras em automação de processos para sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-background">
        <TransparentHeader />
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-900 shadow-xl text-white text-center p-4 mt-8 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Duma Tech. Todos os direitos reservados. —{" "}
            <a
              href="/privacy"
              className="underline hover:text-gradient_start transition-colors"
            >
              Política de Privacidade
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}