'use client';

import React from 'react';
import { LucideMessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Número do WhatsApp da empresa (sem o +55)
  const whatsappNumber = '11989288740';
  
  // Mensagem inicial
  const initialMessage = 'Olá, gostaria de saber mais sobre os serviços da RecoveryFit.';
  
  // Criar o link do WhatsApp com a mensagem codificada
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${encodeURIComponent(initialMessage)}`;
  
  return (
    <a 
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <LucideMessageCircle className="w-8 h-8 text-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
