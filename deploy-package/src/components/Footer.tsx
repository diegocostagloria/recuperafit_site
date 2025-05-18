'use client';

import Link from 'next/link';
import { LucidePhone, LucideMail, LucideInstagram, LucideFacebook, LucideYoutube, LucideTwitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E5F8C] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">RecoveryFit</h3>
            <p className="mb-4">
              Especialistas em aluguel de botas pneumáticas para recuperação muscular em São Paulo, atendendo atletas amadores e profissionais.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://instagram.com/RecoveryFit" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors duration-300" aria-label="Instagram">
                <LucideInstagram size={20} />
              </a>
              <a href="https://facebook.com/RecoveryFit" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors duration-300" aria-label="Facebook">
                <LucideFacebook size={20} />
              </a>
              <a href="https://youtube.com/RecoveryFit" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors duration-300" aria-label="YouTube">
                <LucideYoutube size={20} />
              </a>
              <a href="https://twitter.com/RecoveryFit" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors duration-300" aria-label="Twitter">
                <LucideTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#4CAF50] transition-colors duration-300">Início</Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#4CAF50] transition-colors duration-300">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/botas-pneumaticas" className="hover:text-[#4CAF50] transition-colors duration-300">Botas Pneumáticas</Link>
              </li>
              <li>
                <Link href="/para-atletas" className="hover:text-[#4CAF50] transition-colors duration-300">Para Atletas</Link>
              </li>
              <li>
                <Link href="/planos" className="hover:text-[#4CAF50] transition-colors duration-300">Planos</Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#4CAF50] transition-colors duration-300">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <LucidePhone size={18} className="mr-2 flex-shrink-0" />
                <span>(11) 98928-8740</span>
              </li>
              <li className="flex items-center">
                <LucideMail size={18} className="mr-2 flex-shrink-0" />
                <span>contato@recoveryfit.com.br</span>
              </li>
              <li>
                <p>São Paulo e Grande São Paulo</p>
              </li>
              <li>
                <p>Horário de Atendimento:</p>
                <p>Segunda a Sexta: 8h às 20h</p>
                <p>Sábado: 9h às 15h</p>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="mb-4">
              Inscreva-se para receber dicas de recuperação muscular e novidades.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                aria-label="Seu e-mail para newsletter"
              />
              <button 
                type="submit" 
                className="bg-[#4CAF50] hover:bg-[#3d8b40] px-4 py-2 rounded-md font-semibold transition-colors duration-300"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center md:flex md:justify-between md:text-left">
          <p>&copy; {currentYear} RecoveryFit. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/termos-de-uso" className="hover:text-[#4CAF50] transition-colors duration-300">Termos de Uso</Link>
            <Link href="/politica-de-privacidade" className="hover:text-[#4CAF50] transition-colors duration-300">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
