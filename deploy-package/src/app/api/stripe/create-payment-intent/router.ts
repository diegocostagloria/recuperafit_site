import Stripe from 'stripe';

// Inicialize o Stripe com sua chave secreta (do .env.local)
// Certifique-se de que STRIPE_SECRET_KEY está definido nas suas variáveis de ambiente no Vercel/plataforma de deploy
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2025-04-30.basil', // Use a versão mais recente da API
});

export async function POST(req: Request) {
  if (req.method === 'POST') {
    try {
      const { amount, currency, description, customerEmail } = await req.json();

      if (!amount || !currency) {
        return new Response(JSON.stringify({ error: 'Valor e moeda são obrigatórios.' }), { status: 400 });
      }

      // Crie um PaymentIntent
      const params: Stripe.PaymentIntentCreateParams = {
        amount: amount, // Valor em centavos
        currency: currency,
        description: description || 'Pagamento de Agendamento',
        payment_method_types: ['card', 'pix'], // Adicione os métodos que deseja suportar
        // Adicionar metadata pode ser útil para rastrear o pedido
        metadata: {
          // order_id: 'algum_id_do_seu_sistema',
        },
      };

      // Se o email do cliente for fornecido, tente encontrar ou criar um Customer no Stripe
      // Isso ajuda a salvar cartões para uso futuro, se desejado.
      if (customerEmail) {
        let customer = await stripe.customers.list({ email: customerEmail, limit: 1 });
        if (customer.data.length > 0) {
          params.customer = customer.data[0].id;
        } else {
          const newCustomer = await stripe.customers.create({ email: customerEmail, name: description }); // Pode adicionar mais detalhes do cliente
          params.customer = newCustomer.id;
        }
      }
      
      const paymentIntent = await stripe.paymentIntents.create(params);

      return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200 });

    } catch (err: any) {
      console.error('Erro ao criar PaymentIntent:', err);
      return new Response(JSON.stringify({ error: err.message || 'Erro interno do servidor ao criar PaymentIntent.' }), { status: 500 });
    }
  } else {
    return new Response(JSON.stringify({ error: 'Método não permitido' }), { status: 405 });
  }
}

