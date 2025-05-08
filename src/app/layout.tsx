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
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Duma Tech Logo" width={40} height={40} className="mr-2" />
              <span className="text-xl font-bold">Duma Tech</span>
            </Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/sobre" className="hover:text-gray-300">Sobre Nós</Link></li>
              <li><Link href="/servicos" className="hover:text-gray-300">Serviços</Link></li>
              <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container mx-auto p-4">
          {children}
        </main>
        <footer className="bg-gray-700 text-white text-center p-4 mt-8">
          <p>&copy; {new Date().getFullYear()} Duma Tech. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
