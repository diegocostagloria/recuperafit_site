'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { LucideCalendar, LucideCheck, LucideArrowRight, LucideClock } from 'lucide-react';
import useScheduleCalculator from '@/hooks/useScheduleCalculator';

export default function SchedulePage() {
  const {
    selectedPlan,
    setSelectedPlan,
    expressDelivery,
    setExpressDelivery,
    technicalGuidance,
    setTechnicalGuidance,
    total,
    planPrices
  } = useScheduleCalculator();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    deliveryDate: '',
    deliveryTime: '',
    pickupDate: '',
    pickupTime: '',
    address: '',
    neighborhood: '',
    city: 'São Paulo',
    zipcode: '',
    notes: '',
    paymentMethod: '',
    termsAccepted: false
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === 'checkbox' ? checked : value
    });
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui seria implementada a lógica para enviar os dados para o servidor
    alert('Agendamento enviado com sucesso! Em breve entraremos em contato para confirmar.');
    console.log({ ...formData, selectedPlan, expressDelivery, technicalGuidance, total });
  };

  return (
    <>
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Agendamento</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Agende o aluguel das suas botas pneumáticas em poucos passos e comece a melhorar sua recuperação muscular.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">Formulário de Agendamento</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-3 text-white">1</div>
                    Informações Pessoais
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
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
                    
                    <div>
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
                    
                    <div>
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
                    
                    <div>
                      <label htmlFor="sport" className="block text-gray-700 font-medium mb-2">Modalidade Esportiva</label>
                      <select 
                        id="sport" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]"
                        required
                        value={formData.sport}
                        onChange={handleInputChange}
                      >
                        <option value="">Selecione sua modalidade</option>
                        <option value="running">Corrida</option>
                        <option value="cycling">Ciclismo</option>
                        <option value="triathlon">Triathlon</option>
                        <option value="other">Outra modalidade</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-3 text-white">2</div>
                    Escolha seu Plano
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedPlan === 'daily' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                      onClick={() => handlePlanSelect('daily')}
                    >
                      <input 
                        type="radio" 
                        id="plan-daily" 
                        name="plan" 
                        className="mr-2" 
                        checked={selectedPlan === 'daily'}
                        onChange={() => {}}
                      />
                      <label htmlFor="plan-daily" className="font-bold">Plano Diário</label>
                      <p className="text-gray-600 mt-1">R$ {planPrices.daily.toFixed(2)} - 24 horas de uso</p>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedPlan === 'weekend' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                      onClick={() => handlePlanSelect('weekend')}
                    >
                      <input 
                        type="radio" 
                        id="plan-weekend" 
                        name="plan" 
                        className="mr-2" 
                        checked={selectedPlan === 'weekend'}
                        onChange={() => {}}
                      />
                      <label htmlFor="plan-weekend" className="font-bold">Plano Fim de Semana</label>
                      <p className="text-gray-600 mt-1">R$ {planPrices.weekend.toFixed(2)} - 3 dias de uso</p>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedPlan === 'weekly' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                      onClick={() => handlePlanSelect('weekly')}
                    >
                      <input 
                        type="radio" 
                        id="plan-weekly" 
                        name="plan" 
                        className="mr-2" 
                        checked={selectedPlan === 'weekly'}
                        onChange={() => {}}
                      />
                      <label htmlFor="plan-weekly" className="font-bold">Plano Semanal</label>
                      <p className="text-gray-600 mt-1">R$ {planPrices.weekly.toFixed(2)} - 7 dias de uso</p>
                    </div>
                    
                    <div 
                      className={`border rounded-md p-4 cursor-pointer transition-colors ${selectedPlan === 'monthly' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                      onClick={() => handlePlanSelect('monthly')}
                    >
                      <input 
                        type="radio" 
                        id="plan-monthly" 
                        name="plan" 
                        className="mr-2" 
                        checked={selectedPlan === 'monthly'}
                        onChange={() => {}}
                      />
                      <label htmlFor="plan-monthly" className="font-bold">Plano Mensal</label>
                      <p className="text-gray-600 mt-1">R$ {planPrices.monthly.toFixed(2)} - 30 dias de uso</p>
                    </div>
                  </div>
                  
                  <h4 className="font-bold mb-2">Serviços Adicionais (opcional)</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="service-express" 
                        className="mr-2" 
                        checked={expressDelivery}
                        onChange={(e) => setExpressDelivery(e.target.checked)}
                      />
                      <label htmlFor="service-express">Entrega Expressa (+ R$ 50,00)</label>
                    </div>
                    
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        id="service-guidance" 
                        className="mr-2" 
                        checked={technicalGuidance}
                        onChange={(e) => setTechnicalGuidance(e.target.checked)}
                      />
                      <label htmlFor="service-guidance">Orientação Técnica Presencial (+ R$ 100,00)</label>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-3 text-white">3</div>
                    Datas e Endereço
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="deliveryDate" className="block text-gray-700 font-medium mb-2">Data de Entrega</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          id="deliveryDate" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                          required
                          value={formData.deliveryDate}
                          onChange={handleInputChange}
                        />
                        <LucideCalendar className="absolute right-3 top-2.5 text-gray-400" size={20} />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="deliveryTime" className="block text-gray-700 font-medium mb-2">Horário de Entrega</label>
                      <div className="relative">
                        <select 
                          id="deliveryTime" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]"
                          required
                          value={formData.deliveryTime}
                          onChange={handleInputChange}
                        >
                          <option value="">Selecione o horário</option>
                          <option value="morning">Manhã (8h - 12h)</option>
                          <option value="afternoon">Tarde (13h - 17h)</option>
                          <option value="evening">Noite (18h - 20h)</option>
                        </select>
                        <LucideClock className="absolute right-3 top-2.5 text-gray-400" size={20} />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="pickupDate" className="block text-gray-700 font-medium mb-2">Data de Retirada</label>
                      <div className="relative">
                        <input 
                          type="date" 
                          id="pickupDate" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                          required
                          value={formData.pickupDate}
                          onChange={handleInputChange}
                        />
                        <LucideCalendar className="absolute right-3 top-2.5 text-gray-400" size={20} />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="pickupTime" className="block text-gray-700 font-medium mb-2">Horário de Retirada</label>
                      <div className="relative">
                        <select 
                          id="pickupTime" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]"
                          required
                          value={formData.pickupTime}
                          onChange={handleInputChange}
                        >
                          <option value="">Selecione o horário</option>
                          <option value="morning">Manhã (8h - 12h)</option>
                          <option value="afternoon">Tarde (13h - 17h)</option>
                          <option value="evening">Noite (18h - 20h)</option>
                        </select>
                        <LucideClock className="absolute right-3 top-2.5 text-gray-400" size={20} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Endereço Completo</label>
                      <input 
                        type="text" 
                        id="address" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                        placeholder="Rua, número, complemento"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="neighborhood" className="block text-gray-700 font-medium mb-2">Bairro</label>
                        <input 
                          type="text" 
                          id="neighborhood" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                          required
                          value={formData.neighborhood}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Cidade</label>
                        <input 
                          type="text" 
                          id="city" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                          defaultValue="São Paulo"
                          required
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="zipcode" className="block text-gray-700 font-medium mb-2">CEP</label>
                        <input 
                          type="text" 
                          id="zipcode" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                          placeholder="00000-000"
                          required
                          value={formData.zipcode}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">Observações (opcional)</label>
                      <textarea 
                        id="notes" 
                        rows={3} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" 
                        placeholder="Informações adicionais para entrega ou uso"
                        value={formData.notes}
                        onChange={handleInputChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-[#1E5F8C] rounded-full flex items-center justify-center mr-3 text-white">4</div>
                    Pagamento
                  </h3>
                  
                  <div className="mb-4">
                    <p className="font-medium mb-2">Formas de Pagamento</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div 
                        className={`border rounded-md p-3 cursor-pointer transition-colors ${formData.paymentMethod === 'credit' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                        onClick={() => setFormData({...formData, paymentMethod: 'credit'})}
                      >
                        <input 
                          type="radio" 
                          id="payment-credit" 
                          name="payment" 
                          className="mr-2" 
                          checked={formData.paymentMethod === 'credit'}
                          onChange={() => {}}
                        />
                        <label htmlFor="payment-credit">Cartão de Crédito</label>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-3 cursor-pointer transition-colors ${formData.paymentMethod === 'debit' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                        onClick={() => setFormData({...formData, paymentMethod: 'debit'})}
                      >
                        <input 
                          type="radio" 
                          id="payment-debit" 
                          name="payment" 
                          className="mr-2" 
                          checked={formData.paymentMethod === 'debit'}
                          onChange={() => {}}
                        />
                        <label htmlFor="payment-debit">Cartão de Débito</label>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-3 cursor-pointer transition-colors ${formData.paymentMethod === 'pix' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                        onClick={() => setFormData({...formData, paymentMethod: 'pix'})}
                      >
                        <input 
                          type="radio" 
                          id="payment-pix" 
                          name="payment" 
                          className="mr-2" 
                          checked={formData.paymentMethod === 'pix'}
                          onChange={() => {}}
                        />
                        <label htmlFor="payment-pix">PIX</label>
                      </div>
                      
                      <div 
                        className={`border rounded-md p-3 cursor-pointer transition-colors ${formData.paymentMethod === 'transfer' ? 'border-[#1E5F8C] bg-[#1E5F8C]/5' : 'border-gray-200 hover:border-[#1E5F8C]'}`}
                        onClick={() => setFormData({...formData, paymentMethod: 'transfer'})}
                      >
                        <input 
                          type="radio" 
                          id="payment-transfer" 
                          name="payment" 
                          className="mr-2" 
                          checked={formData.paymentMethod === 'transfer'}
                          onChange={() => {}}
                        />
                        <label htmlFor="payment-transfer">Transferência</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-sm text-gray-600">
                      Após o envio do formulário, você receberá as instruções de pagamento por e-mail e WhatsApp. O agendamento só será confirmado após a confirmação do pagamento.
                    </p>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <input 
                      type="checkbox" 
                      id="termsAccepted" 
                      className="mt-1 mr-2" 
                      required
                      checked={formData.termsAccepted}
                      onChange={handleInputChange}
                    />
                    <label htmlFor="termsAccepted" className="text-sm">
                      Li e concordo com os <Link href="/termos-de-uso" className="text-[#1E5F8C] hover:underline">Termos de Uso</Link> e <Link href="/politica-de-privacidade" className="text-[#1E5F8C] hover:underline">Política de Privacidade</Link> da RecuperaFit.
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-[#4CAF50] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#3d8b40] transition-colors duration-300"
                    disabled={!selectedPlan || !formData.paymentMethod}
                  >
                    Finalizar Agendamento
                  </button>
                </div>
              </form>
            </div>
            
            <div>
              <div className="sticky top-24">
                <div className="card p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Resumo do Pedido</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span>Plano:</span>
                      <span className="font-semibold">
                        {selectedPlan ? `R$ ${selectedPlan === 'daily' ? planPrices.daily.toFixed(2) : 
                                         selectedPlan === 'weekend' ? planPrices.weekend.toFixed(2) : 
                                         selectedPlan === 'weekly' ? planPrices.weekly.toFixed(2) : 
                                         planPrices.monthly.toFixed(2)}` : 'Selecione um plano'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Serviços adicionais:</span>
                      <span className="font-semibold">
                        R$ {((expressDelivery ? 50 : 0) + (technicalGuidance ? 100 : 0)).toFixed(2)}
                      </span>
                    </div>
                    <div className="border-t pt-2 flex justify-between">
                      <span className="font-bold">Total:</span>
                      <span className="font-bold text-[#1E5F8C]">
                        {total > 0 ? `R$ ${total.toFixed(2)}` : 'R$ 0,00'}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    * Os valores podem variar conforme as opções selecionadas.
                  </p>
                </div>
                
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
                  <p className="mb-4">
                    Se tiver dúvidas sobre o agendamento, entre em contato conosco:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                      <span>WhatsApp: (11) 99999-9999</span>
                    </li>
                    <li className="flex items-center">
                      <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                      <span>E-mail: contato@recuperafit.com.br</span>
                    </li>
                    <li className="flex items-center">
                      <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                      <span>Horário: Seg-Sex 8h às 20h</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16">
        <div className="container">
          <h2 className="section-title">Como Funciona o Processo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="relative">
              <div className="text-6xl font-bold text-[#1E5F8C]/10 absolute -top-6 left-0">
                01
              </div>
              <div className="pt-8 relative z-10">
                <h3 className="text-xl font-bold mb-3">Agendamento</h3>
                <p className="text-gray-600">Preencha o formulário e escolha o plano que melhor atende suas necessidades.</p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                <LucideArrowRight className="text-[#4CAF50]" size={24} />
              </div>
            </div>
            
            <div className="relative">
              <div className="text-6xl font-bold text-[#1E5F8C]/10 absolute -top-6 left-0">
                02
              </div>
              <div className="pt-8 relative z-10">
                <h3 className="text-xl font-bold mb-3">Confirmação</h3>
                <p className="text-gray-600">Após o pagamento, você receberá a confirmação do seu agendamento por e-mail e WhatsApp.</p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                <LucideArrowRight className="text-[#4CAF50]" size={24} />
              </div>
            </div>
            
            <div className="relative">
              <div className="text-6xl font-bold text-[#1E5F8C]/10 absolute -top-6 left-0">
                03
              </div>
              <div className="pt-8 relative z-10">
                <h3 className="text-xl font-bold mb-3">Entrega</h3>
                <p className="text-gray-600">Receba as botas pneumáticas no endereço e data escolhidos, com orientações de uso.</p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                <LucideArrowRight className="text-[#4CAF50]" size={24} />
              </div>
            </div>
            
            <div className="relative">
              <div className="text-6xl font-bold text-[#1E5F8C]/10 absolute -top-6 left-0">
                04
              </div>
              <div className="pt-8 relative z-10">
                <h3 className="text-xl font-bold mb-3">Devolução</h3>
                <p className="text-gray-600">Ao final do período, devolvemos para buscar o equipamento no mesmo endereço.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
