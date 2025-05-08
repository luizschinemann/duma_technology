import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Duma Tech Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold">Duma Tech</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/sobre" className="hover:text-gray-300">Sobre Nós</Link></li>
            <li><Link href="/servicos" className="hover:text-gray-300">Serviços</Link></li>
            <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
