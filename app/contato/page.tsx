'use client';

import { useState } from 'react';
import { LucideMail, LucidePhone, LucideMapPin, LucideClock, LucideSend } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica para enviar os dados para o servidor
    console.log(formData);
    setFormSubmitted(true);
    // Resetar o formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contato</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Entre em contato com a RecuperaFit para tirar dúvidas, solicitar informações ou agendar seu aluguel de botas pneumáticas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">Fale Conosco</h2>
              <p className="mb-8">
                Estamos à disposição para atender suas necessidades de recuperação muscular. Preencha o formulário ao lado ou utilize um de nossos canais de atendimento.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-4">
                    <LucidePhone className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Telefone/WhatsApp</h3>
                    <p className="text-gray-600">(11) 99999-9999</p>
                    <p className="text-gray-600 text-sm mt-1">Atendimento via WhatsApp 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-4">
                    <LucideMail className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">E-mail</h3>
                    <p className="text-gray-600">contato@recuperafit.com.br</p>
                    <p className="text-gray-600 text-sm mt-1">Respondemos em até 24 horas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-4">
                    <LucideMapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Área de Atendimento</h3>
                    <p className="text-gray-600">São Paulo e Grande São Paulo</p>
                    <p className="text-gray-600 text-sm mt-1">Consulte disponibilidade para sua região</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-4">
                    <LucideClock className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 8h às 20h</p>
                    <p className="text-gray-600">Sábado: 9h às 15h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              {formSubmitted ? (
                <div className="card p-8 bg-[#4CAF50]/10 border border-[#4CAF50]">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[#4CAF50]">Mensagem Enviada!</h2>
                    <p className="mb-6">
                      Obrigado por entrar em contato conosco. Recebemos sua mensagem e responderemos o mais breve possível.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)} 
                      className="bg-[#4CAF50] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#3d8b40] transition-colors duration-300"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form className="card p-8" onSubmit={handleSubmit}>
                  <h2 className="text-2xl font-bold mb-6 text-center">Envie sua Mensagem</h2>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                      placeholder="Seu nome completo"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                      placeholder="seu.email@exemplo.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone/WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                      placeholder="(11) 99999-9999"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Assunto</label>
                    <select 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="aluguel">Informações sobre aluguel</option>
                      <option value="agendamento">Agendamento</option>
                      <option value="assessorias">Planos para assessorias</option>
                      <option value="duvidas">Dúvidas gerais</option>
                      <option value="outros">Outros assuntos</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                      placeholder="Digite sua mensagem aqui..."
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#1E5F8C] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#174a6e] transition-colors duration-300 flex items-center justify-center"
                  >
                    <LucideSend className="mr-2" size={18} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Como faço para agendar o aluguel?</h3>
              <p className="text-gray-600">
                Você pode agendar através do nosso site na seção "Agendamento", pelo WhatsApp (11) 99999-9999 ou por e-mail. Basta informar o plano desejado, data e endereço para entrega.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Qual a antecedência necessária para agendar?</h3>
              <p className="text-gray-600">
                Recomendamos agendar com pelo menos 48h de antecedência para garantir disponibilidade. Para eventos especiais ou feriados, sugerimos reservar com maior antecedência.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Vocês atendem em qual região?</h3>
              <p className="text-gray-600">
                Atendemos toda a cidade de São Paulo e Grande São Paulo. Para regiões mais distantes, pode haver taxa adicional de entrega. Consulte-nos para verificar disponibilidade.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Como funciona o pagamento?</h3>
              <p className="text-gray-600">
                Aceitamos cartões de crédito, débito, PIX e transferência bancária. O pagamento deve ser realizado no momento da reserva para garantir o agendamento.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Posso cancelar ou reagendar meu aluguel?</h3>
              <p className="text-gray-600">
                Sim. Cancelamentos com até 24h de antecedência recebem reembolso integral. Reagendamentos podem ser feitos a qualquer momento, sujeitos à disponibilidade.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Preciso estar presente na entrega e retirada?</h3>
              <p className="text-gray-600">
                Sim, é necessário que alguém esteja presente para receber e devolver o equipamento. Na entrega, fornecemos orientações sobre o uso correto das botas pneumáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="section-title">Siga-nos nas Redes Sociais</h2>
          <p className="text-lg mb-12 max-w-3xl mx-auto">
            Acompanhe nosso conteúdo sobre recuperação muscular, dicas para atletas e novidades da RecuperaFit.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://instagram.com/recuperafit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-2xl">IG</span>
              </div>
              <span className="font-semibold">Instagram</span>
              <span className="text-gray-600">@recuperafit</span>
            </a>
            
            <a href="https://facebook.com/recuperafit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-2xl">FB</span>
              </div>
              <span className="font-semibold">Facebook</span>
              <span className="text-gray-600">/recuperafit</span>
            </a>
            
            <a href="https://youtube.com/recuperafit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-2xl">YT</span>
              </div>
              <span className="font-semibold">YouTube</span>
              <span className="text-gray-600">/recuperafit</span>
            </a>
            
            <a href="https://twitter.com/recuperafit" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-2xl">TW</span>
              </div>
              <span className="font-semibold">Twitter</span>
              <span className="text-gray-600">@recuperafit</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
