import Stripe from 'stripe';
import { headers } from 'next/headers'; // Para acessar cabeçalhos no Next.js App Router

// Inicialize o Stripe com sua chave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-04-10',
});

// Obtenha o segredo do endpoint do webhook do seu dashboard Stripe
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

export async function POST(req: Request) {
  if (req.method === 'POST') {
    const rawBody = await req.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
      console.error('⚠️  Assinatura do webhook não encontrada.');
      return new Response(JSON.stringify({ error: 'Assinatura do webhook não encontrada.' }), { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
    } catch (err: any) {
      console.error(`⚠️  Erro na verificação da assinatura do webhook: ${err.message}`);
      return new Response(JSON.stringify({ error: `Webhook Error: ${err.message}` }), { status: 400 });
    }

    // Lidar com o evento
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntentSucceeded = event.data.object as Stripe.PaymentIntent;
        console.log(`✅ Pagamento bem-sucedido para PaymentIntent: ${paymentIntentSucceeded.id}`);
        // TODO: Lógica para atualizar o status do agendamento no seu banco de dados
        // Ex: await updateBookingStatus(paymentIntentSucceeded.metadata.order_id, 'paid');
        // Enviar email de confirmação para o cliente, etc.
        break;
      case 'payment_intent.payment_failed':
        const paymentIntentFailed = event.data.object as Stripe.PaymentIntent;
        console.log(`❌ Falha no pagamento para PaymentIntent: ${paymentIntentFailed.id}, motivo: ${paymentIntentFailed.last_payment_error?.message}`);
        // TODO: Lógica para lidar com falha no pagamento
        // Ex: Notificar o cliente, registrar a falha.
        break;
      case 'checkout.session.completed': // Se você usar Stripe Checkout para PIX ou outros métodos
        const checkoutSessionCompleted = event.data.object as Stripe.Checkout.Session;
        console.log(`✅ Sessão de Checkout completada: ${checkoutSessionCompleted.id}`);
        // Se o pagamento foi PIX, o payment_intent estará associado.
        // Verifique o status do payment_intent ou o modo da sessão.
        if (checkoutSessionCompleted.payment_status === 'paid') {
          // TODO: Lógica para atualizar o status do agendamento no seu banco de dados
          // Ex: await updateBookingStatus(checkoutSessionCompleted.metadata.order_id, 'paid');
        }
        break;
      // ... lidar com outros tipos de eventos que você queira monitorar
      default:
        console.log(`Evento não tratado: ${event.type}`);
    }

    // Retornar uma resposta 200 para o Stripe para confirmar o recebimento do evento
    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), { status: 405 });
  }
}

