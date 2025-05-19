
'use client';

import { useState, useEffect, FormEvent } from 'react';
import { format, addDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { LucideCalendar, LucideMapPin, LucideUser, LucidePhone, LucideLoader2, LucideMail, LucideHome } from 'lucide-react';

// Stripe Imports
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '@/components/PaymentForm'; // Assumindo que PaymentForm.tsx está em src/components/

// Carregue o Stripe fora do render do componente para evitar recriá-lo em cada renderização
// Certifique-se de que NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY está no seu .env.local
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface Plan {
  id: number;
  name: string;
  duration_days: number;
  price: number;
  description: string | null;
}

export default function AgendamentoPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoadingPlans, setIsLoadingPlans] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cep: '',
    address: '',
    neighborhood: '',
    city: '',
    state: '',
    deliveryDate: format(new Date(), 'yyyy-MM-dd'),
    notes: ''
  });
  
  const [returnDate, setReturnDate] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); // Para o formulário de agendamento
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  // Estados para o pagamento Stripe
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  useEffect(() => {
    const fetchPlans = async () => {
      setIsLoadingPlans(true);
      try {
        const response = await fetch('/api/plans-static');
        if (!response.ok) throw new Error('Falha ao carregar planos');
        const data = await response.json();
        const plansData = data.plans || data;
        setPlans(plansData);
        if (plansData.length > 0) {
          const defaultPlan = plansData[0];
          setSelectedPlan(defaultPlan);
          // A atualização do preço será feita pelo useEffect abaixo
        }
      } catch (err) {
        console.error('Erro ao carregar planos:', err);
        setError('Não foi possível carregar os planos disponíveis. Por favor, tente novamente mais tarde.');
      } finally {
        setIsLoadingPlans(false);
      }
    };
    fetchPlans();
  }, []);

  useEffect(() => {
    if (selectedPlan && formData.deliveryDate) {
      updateTotalPrice(selectedPlan, formData.deliveryDate);
    }
  }, [selectedPlan, formData.deliveryDate]);

  const fetchAddressByCep = async (cep: string) => {
    if (!cep || cep.length !== 8) return;
    setIsLoadingCep(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) throw new Error('CEP não encontrado');
      const data = await response.json();
      if (data.erro) {
        setError('CEP não encontrado. Verifique o número informado.');
        return;
      }
      setFormData(prev => ({ ...prev, address: data.logradouro, neighborhood: data.bairro, city: data.localidade, state: data.uf }));
      setError(null);
    } catch (err) {
      console.error('Erro ao buscar CEP:', err);
      setError('Não foi possível buscar o endereço pelo CEP. Por favor, preencha manualmente.');
    } finally {
      setIsLoadingCep(false);
    }
  };

  const updateTotalPrice = (plan: Plan, deliveryDateStr: string) => {
    if (!plan || !deliveryDateStr) return;
    try {
      const deliveryDate = new Date(deliveryDateStr + 'T00:00:00'); // Adiciona hora para evitar problemas de fuso
      const returnDateObj = addDays(deliveryDate, plan.duration_days);
      setReturnDate(format(returnDateObj, 'yyyy-MM-dd'));
      setTotalPrice(plan.price);
    } catch (err) {
      console.error('Erro ao calcular datas:', err);
    }
  };

  const handlePlanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const planId = parseInt(e.target.value);
    const plan = plans.find(p => p.id === planId) || null;
    setSelectedPlan(plan);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'cep' && value.length === 8) fetchAddressByCep(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedPlan) {
      setError('Por favor, selecione um plano.');
      return;
    }
    if (!formData.name || !formData.email || !formData.phone || !formData.cep || !formData.address) {
      setError('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
    
    try {
      // Formatar a mensagem para o WhatsApp
      const formattedDeliveryDate = format(new Date(formData.deliveryDate), 'dd/MM/yyyy', { locale: ptBR });
      const formattedReturnDate = returnDate ? format(new Date(returnDate), 'dd/MM/yyyy', { locale: ptBR }) : '';
      
      // Construir a mensagem com todos os dados do formulário
      const message = `*Novo Agendamento - RecoveryFit*
      
*Plano Escolhido:* ${selectedPlan.name}
*Valor:* R$ ${selectedPlan.price.toFixed(2)}
*Duração:* ${selectedPlan.duration_days} ${selectedPlan.duration_days === 1 ? 'dia' : 'dias'}

*Dados do Cliente:*
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}

*Endereço de Entrega:*
${formData.address}
${formData.neighborhood}, ${formData.city} - ${formData.state}
*CEP:* ${formData.cep}

*Datas:*
*Entrega:* ${formattedDeliveryDate}
*Retirada:* ${formattedReturnDate}

${formData.notes ? `*Observações:* ${formData.notes}` : ''}`;

      // Codificar a mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      // Número do WhatsApp da empresa (sem o +55)
      const whatsappNumber = '11989288740';
      
      // Criar o link do WhatsApp
      const whatsappLink = `https://wa.me/55${whatsappNumber}?text=${encodedMessage}`;
      
      // Redirecionar para o WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Mostrar mensagem de sucesso
      setSuccess('Agendamento realizado com sucesso! Você será redirecionado para o WhatsApp para finalizar o atendimento.');
      
      // Limpar formulário
      setFormData({
        name: '', email: '', phone: '', cep: '', address: '',
        neighborhood: '', city: '', state: '',
        deliveryDate: format(new Date(), 'yyyy-MM-dd'), notes: ''
      });
      setSelectedPlan(plans.length > 0 ? plans[0] : null);
      window.scrollTo(0, 0);
      
    } catch (err: any) {
      console.error('Erro ao processar agendamento:', err);
      setError('Não foi possível completar o agendamento. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentSuccess = (paymentIntentId: string) => {
    setSuccess(`Agendamento e Pagamento (ID: ${paymentIntentId}) realizados com sucesso! Entraremos em contato.`);
    setShowPaymentForm(false);
    // Limpar formulário de agendamento, etc.
    setFormData({
        name: '', email: '', phone: '', cep: '', address: '',
        neighborhood: '', city: '', state: '',
        deliveryDate: format(new Date(), 'yyyy-MM-dd'), notes: ''
    });
    setSelectedPlan(plans.length > 0 ? plans[0] : null);
    window.scrollTo(0, 0);
  };

  const handlePaymentError = (errorMessage: string) => {
    setError(`Falha no Pagamento: ${errorMessage}`);
    setShowPaymentForm(true); // Mantém o formulário de pagamento visível para nova tentativa
  };
  
  const handlePaymentProcessing = (isProcessing: boolean) => {
    setIsPaymentProcessing(isProcessing);
  }

  if (isLoadingPlans) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center h-screen">
        <LucideLoader2 className="h-12 w-12 animate-spin text-[#1E5F8C]" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#1E5F8C]">Agende sua Bota Pneumática</h1>
        <p className="text-center text-gray-600 mb-8">Preencha o formulário abaixo para agendar o aluguel.</p>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
            {success}
          </div>
        )}

        {!showPaymentForm ? (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
            {/* ... (Conteúdo do formulário de agendamento existente - SEÇÃO DE PLANOS) ... */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Escolha seu Plano</h2>
              {plans.length === 0 && !isLoadingPlans && <p>Nenhum plano disponível no momento.</p>}
              {plans.length > 0 && (
                <>
                  <div className="mb-4">
                    <label htmlFor="plan" className="block text-gray-700 font-medium mb-2">Selecione o Plano</label>
                    <select id="plan" name="plan" value={selectedPlan?.id || ''} onChange={handlePlanChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required>
                      {plans.map(plan => (
                        <option key={plan.id} value={plan.id}>
                          {plan.name} - {plan.duration_days} {plan.duration_days === 1 ? 'dia' : 'dias'} - R$ {plan.price.toFixed(2)}
                        </option>
                      ))}
                    </select>
                  </div>
                  {selectedPlan && (
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold text-lg mb-2">{selectedPlan.name}</h3>
                      {selectedPlan.description && <p className="text-gray-600 mb-2">{selectedPlan.description}</p>}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Duração: {selectedPlan.duration_days} {selectedPlan.duration_days === 1 ? 'dia' : 'dias'}</span>
                        <span className="text-[#1E5F8C] font-bold text-xl">R$ {selectedPlan.price.toFixed(2)}</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* ... (Conteúdo do formulário de agendamento existente - SEÇÃO DE DATAS) ... */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Datas</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="deliveryDate" className="block text-gray-700 font-medium mb-2"><LucideCalendar className="inline-block mr-2" size={18} />Data de Entrega</label>
                  <input type="date" id="deliveryDate" name="deliveryDate" value={formData.deliveryDate} onChange={handleInputChange} min={format(new Date(), 'yyyy-MM-dd')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                </div>
                <div>
                  <label htmlFor="returnDate" className="block text-gray-700 font-medium mb-2"><LucideCalendar className="inline-block mr-2" size={18} />Data de Retirada</label>
                  <input type="date" id="returnDate" name="returnDate" value={returnDate} className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100" disabled />
                  <p className="text-sm text-gray-500 mt-1">Data calculada automaticamente</p>
                </div>
              </div>
            </div>

            {/* ... (Conteúdo do formulário de agendamento existente - SEÇÃO SEUS DADOS) ... */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Seus Dados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2"><LucideUser className="inline-block mr-2" size={18} />Nome Completo</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2"><LucideMail className="inline-block mr-2" size={18} />E-mail</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2"><LucidePhone className="inline-block mr-2" size={18} />Telefone (WhatsApp)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(11) 99999-9999" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                </div>
                <div>
                  <label htmlFor="cep" className="block text-gray-700 font-medium mb-2"><LucideMapPin className="inline-block mr-2" size={18} />CEP</label>
                  <div className="relative">
                    <input type="text" id="cep" name="cep" value={formData.cep} onChange={handleInputChange} placeholder="Somente números" maxLength={8} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                    {isLoadingCep && <LucideLoader2 className="absolute right-3 top-3 h-4 w-4 animate-spin text-[#1E5F8C]" />}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Digite o CEP para preenchimento automático</p>
                </div>
              </div>
            </div>
            
            {/* ... (Conteúdo do formulário de agendamento existente - SEÇÃO ENDEREÇO) ... */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Endereço de Entrega</h2>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2"><LucideHome className="inline-block mr-2" size={18} />Endereço Completo</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleInputChange} placeholder="Rua, número, complemento" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="neighborhood" className="block text-gray-700 font-medium mb-2">Bairro</label>
                    <input type="text" id="neighborhood" name="neighborhood" value={formData.neighborhood} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Cidade</label>
                    <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-gray-700 font-medium mb-2">Estado</label>
                    <input type="text" id="state" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" required />
                  </div>
                </div>
              </div>
            </div>

            {/* ... (Conteúdo do formulário de agendamento existente - SEÇÃO OBSERVAÇÕES E BOTÃO) ... */}
            <div className="mb-6">
              <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">Observações Adicionais</label>
              <textarea id="notes" name="notes" value={formData.notes} onChange={handleInputChange} rows={3} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C]" placeholder="Alguma informação extra para a entrega ou sobre o uso?"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting || !selectedPlan} className="w-full bg-[#1E5F8C] hover:bg-[#164A6F] text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E5F8C] focus:ring-opacity-50 disabled:opacity-50 flex items-center justify-center">
              {isSubmitting ? <LucideLoader2 className="animate-spin mr-2" /> : null}
              Enviar Agendamento
            </button>
          </form>
        ) : (
          clientSecret && stripePromise && (
            <div className="bg-white shadow-md rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">Complete seu Pagamento</h2>
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <PaymentForm 
                  clientSecret={clientSecret} 
                  totalPrice={totalPrice}
                  onPaymentSuccess={handlePaymentSuccess}
                  onPaymentError={handlePaymentError}
                  onProcessing={handlePaymentProcessing}
                />
              </Elements>
              {isPaymentProcessing && (
                <div className="flex justify-center items-center mt-4">
                  <LucideLoader2 className="h-6 w-6 animate-spin text-[#1E5F8C]" />
                  <span className="ml-2">Processando pagamento...</span>
                </div>
              )}
              <button 
                onClick={() => { setShowPaymentForm(false); setError(null); }} 
                className="mt-4 text-sm text-gray-600 hover:text-gray-800"
                disabled={isPaymentProcessing}
              >
                Voltar e editar agendamento
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

