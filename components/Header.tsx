'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LucideMenu, LucideX } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para mudar o estilo do header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Fechar menu ao clicar em um link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Prevenir scroll quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#1E5F8C]">
          RecuperaFit
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link">
            Início
          </Link>
          <Link href="/sobre" className="nav-link">
            Sobre Nós
          </Link>
          <Link href="/botas-pneumaticas" className="nav-link">
            Botas Pneumáticas
          </Link>
          <Link href="/para-atletas" className="nav-link">
            Para Atletas
          </Link>
          <Link href="/planos" className="nav-link">
            Planos
          </Link>
          <Link href="/contato" className="nav-link">
            Contato
          </Link>
        </nav>

        {/* Botão de Agendamento (Desktop) */}
        <div className="hidden md:block">
          <Link href="/agendamento" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300">
            Agendar Agora
          </Link>
        </div>

        {/* Botão do Menu Mobile */}
        <button 
          className="md:hidden text-[#1E5F8C]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <LucideX size={24} /> : <LucideMenu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20 pb-6 px-4 md:hidden overflow-y-auto">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="text-xl py-2 border-b border-gray-200"
              onClick={handleLinkClick}
            >
              Início
            </Link>
            <Link 
              href="/sobre" 
              className="text-xl py-2 border-b border-gray-200"
              onClick={handleLinkClick}
            >
              Sobre Nós
            </Link>
            <Link 
              href="/botas-pneumaticas" 
              className="text-xl py-2 border-b border-gray-200"
              onClick={handleLinkClick}
            >
              Botas Pneumáticas
            </Link>
            <Link 
              href="/para-atletas" 
              className="text-xl py-2 border-b border-gray-200"
              onClick={handleLinkClick}
            >
              Para Atletas
            </Link>
            <Link 
              href="/planos" 
              className="text-xl py-2 border-b border-gray-200"
              onClick={handleLinkClick}
            >
              Planos
            </Link>
            <Link 
              href="/contato" 
              className="text-xl py-2 border-b border-gray-200"
              onClick={handleLinkClick}
            >
              Contato
            </Link>
            <div className="pt-4">
              <Link 
                href="/agendamento" 
                className="block w-full bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-300"
                onClick={handleLinkClick}
              >
                Agendar Agora
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
