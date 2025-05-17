'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from 'next/image';

export default function TransparentHeader() {
  const [opacity, setOpacity] = useState(1);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOpacity(Math.max(0.9, 1 - scrollY / 300));
      setHasShadow(scrollY > 10); // ativa sombra a partir de 10px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background backdrop-blur-md transition-all duration-300 ${
        hasShadow ? 'shadow-lg' : ''
      }`}
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logoblue.png" alt="Duma Technology Logo" width={100} height={100} className="mr-10" />
        </Link>
        <nav className="container mx-center flex">
          <ul className="flex space-x-8 text-primary text-lg">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
            <li><Link href="/servicos" className="hover:text-gray-300">Serviços</Link></li>            
          </ul>
        </nav>
      </div>
    </header>
  );
}