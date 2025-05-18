export const dynamic = 'force-static';

export async function GET() {
  return new Response(JSON.stringify({
    success: true,
    plans: [
      {
        id: 1,
        name: "Plano Diário",
        description: "Aluguel por 1 dia, ideal para recuperação pós-competição",
        duration_days: 1,
        price: 80.00,
        status: "active"
      },
      {
        id: 2,
        name: "Plano Semanal",
        description: "Aluguel por 7 dias, perfeito para períodos de treinamento intenso",
        duration_days: 7,
        price: 190.00,
        status: "active"
      },
      {
        id: 3,
        name: "Plano Mensal",
        description: "Aluguel por 30 dias, ideal para atletas em preparação para competições",
        duration_days: 30,
        price: 1200.00,
        status: "active"
      }
    ]
  }), {
    headers: {
      'content-type': 'application/json'
    }
  });
}
