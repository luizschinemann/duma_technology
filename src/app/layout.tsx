import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Duma Tech - Automação de Processos",
  description: "Soluções inovadoras em automação de processos para sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-background text-secondary`}>
        <header className="bg-primary text-background p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Duma Tech Logo" width={50} height={50} className="mr-3" />
              <span className="text-2xl font-bold text-accent">Duma Tech</span>
            </Link>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-accent transition-colors duration-300">Home</Link></li>
              <li><Link href="/sobre" className="hover:text-accent transition-colors duration-300">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="hover:text-accent transition-colors duration-300">Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-accent transition-colors duration-300">Contato</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-6 min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <footer className="bg-secondary text-background text-center p-6 mt-10">
          <p>&copy; {new Date().getFullYear()} Duma Tech. Todos os direitos reservados.</p>
          <p className="text-sm mt-1">Desenvolvido com paixão por automação.</p>
        </footer>
      </body>
    </html>
  );
}
