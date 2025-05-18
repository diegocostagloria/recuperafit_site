'use client';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState, FormEvent } from 'react';
import { LucideLoader2, LucideCreditCard, LucideQrCode } from 'lucide-react';

interface PaymentFormProps {
  clientSecret: string;
  totalPrice: number;
  onPaymentSuccess: (paymentIntentId: string) => void;
  onPaymentError: (errorMessage: string) => void;
  onProcessing: (isProcessing: boolean) => void;
}

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

export default function PaymentForm({ clientSecret, totalPrice, onPaymentSuccess, onPaymentError, onProcessing }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix'>('card');
  const [isSubmittingPayment, setIsSubmittingPayment] = useState(false);
  const [pixDetails, setPixDetails] = useState<{ qrCodeUrl: string | null, pixCopyPaste: string | null }>({ qrCodeUrl: null, pixCopyPaste: null });

  const handleCardPaymentSubmit = async (event: FormEvent) => {
    event.preventDefault();
    onProcessing(true);
    setIsSubmittingPayment(true);
    onPaymentError(''); // Limpa erros anteriores

    if (!stripe || !elements) {
      onPaymentError('Stripe não foi inicializado corretamente.');
      onProcessing(false);
      setIsSubmittingPayment(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      onPaymentError('Elemento do cartão não encontrado.');
      onProcessing(false);
      setIsSubmittingPayment(false);
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        // billing_details: { name: 'Nome do Cliente' }, // Opcional: Adicionar dados do cliente se necessário
      },
    });

    if (error) {
      onPaymentError(error.message || 'Ocorreu um erro ao processar o pagamento com cartão.');
      onProcessing(false);
      setIsSubmittingPayment(false);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      onPaymentSuccess(paymentIntent.id);
      onProcessing(false);
      setIsSubmittingPayment(false);
    } else {
      onPaymentError('O pagamento com cartão não foi bem-sucedido. Status: ' + paymentIntent?.status);
      onProcessing(false);
      setIsSubmittingPayment(false);
    }
  };

  const handlePixPaymentRequest = async () => {
    onProcessing(true);
    setIsSubmittingPayment(true);
    onPaymentError('');
    setPixDetails({ qrCodeUrl: null, pixCopyPaste: null });

    // Aqui, você faria uma chamada ao seu backend para gerar os dados do PIX via Stripe
    // Por exemplo, usando uma sessão de Checkout do Stripe configurada para PIX
    // Esta é uma simulação, pois a geração real do PIX requer uma chamada de backend.
    try {
      // Simulação de chamada ao backend para obter dados do PIX
      // Em um cenário real, esta chamada retornaria o QR Code (imagem ou base64) e/ou o código Copia e Cola
      // const response = await fetch('/api/stripe/create-pix-payment', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ amount: totalPrice * 100, clientSecret }), // Enviar valor em centavos
      // });
      // const data = await response.json();
      // if (!response.ok) throw new Error(data.error || 'Falha ao gerar PIX');
      // setPixDetails({ qrCodeUrl: data.qrCodeUrl, pixCopyPaste: data.pixCopyPaste });
      
      // Simulação de dados PIX (substitua pela lógica real)
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay da API
      setPixDetails({
        qrCodeUrl: 'https://www.gstatic.com/webp/gallery/1.webp', // URL de um QR Code de exemplo
        pixCopyPaste: '00020126580014br.gov.bcb.pix0136123e4567-e12b-12d1-a456-42665544000053039865802BR5913NOME DO LOJISTA6008CIDADEBR62070503***6304ABCD' // Código PIX de exemplo
      });
      // Em um cenário real, você também informaria o usuário que o pagamento PIX precisa ser confirmado via webhook.
      // onPaymentSuccess('pix_initiated'); // Ou um status similar

    } catch (err: any) {
      onPaymentError(err.message || 'Falha ao gerar informações do PIX.');
    } finally {
      onProcessing(false);
      setIsSubmittingPayment(false);
    }
  };

  return (
    <div className="mt-6">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Escolha o Método de Pagamento:</label>
        <div className="flex space-x-4">
          <button 
            type="button"
            onClick={() => setPaymentMethod('card')}
            className={`px-4 py-2 rounded-md flex items-center justify-center w-full ${paymentMethod === 'card' ? 'bg-[#1E5F8C] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            <LucideCreditCard className="mr-2" size={20}/> Cartão de Crédito/Débito
          </button>
          <button 
            type="button"
            onClick={() => setPaymentMethod('pix')}
            className={`px-4 py-2 rounded-md flex items-center justify-center w-full ${paymentMethod === 'pix' ? 'bg-[#1E5F8C] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            <LucideQrCode className="mr-2" size={20}/> PIX
          </button>
        </div>
      </div>

      {paymentMethod === 'card' && (
        <form onSubmit={handleCardPaymentSubmit}>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-medium mb-2">Dados do Cartão</label>
            <CardElement id="cardNumber" options={CARD_ELEMENT_OPTIONS} className="p-3 border border-gray-300 rounded-md" />
          </div>
          <button 
            type="submit" 
            disabled={!stripe || isSubmittingPayment}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-50 flex items-center justify-center"
          >
            {isSubmittingPayment ? <LucideLoader2 className="animate-spin mr-2" /> : null}
            Pagar R$ {totalPrice.toFixed(2)} com Cartão
          </button>
        </form>
      )}

      {paymentMethod === 'pix' && (
        <div>
          {!pixDetails.qrCodeUrl && !pixDetails.pixCopyPaste && (
            <button 
              type="button" 
              onClick={handlePixPaymentRequest}
              disabled={isSubmittingPayment}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmittingPayment ? <LucideLoader2 className="animate-spin mr-2" /> : null}
              Gerar PIX para Pagar R$ {totalPrice.toFixed(2)}
            </button>
          )}
          {pixDetails.qrCodeUrl && (
            <div className="mt-4 p-4 border border-gray-300 rounded-md text-center">
              <h3 className="text-lg font-semibold mb-2">Pague com PIX</h3>
              <p className="text-sm text-gray-600 mb-2">Escaneie o QR Code abaixo com o app do seu banco:</p>
              <img src={pixDetails.qrCodeUrl} alt="PIX QR Code" className="mx-auto mb-2 max-w-xs"/>
              <p className="text-sm text-gray-600 mb-1">Ou use o código Copia e Cola:</p>
              <input 
                type="text" 
                value={pixDetails.pixCopyPaste || ''} 
                readOnly 
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-50 text-sm text-center mb-2"
                onClick={(e) => (e.target as HTMLInputElement).select()} 
              />
              <p className="text-xs text-gray-500">Após o pagamento, a confirmação pode levar alguns instantes. Aguarde nesta tela ou verifique seu e-mail.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

