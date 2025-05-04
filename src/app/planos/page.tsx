import Image from 'next/image';
import Link from 'next/link';
import { LucideCheck, LucideArrowRight } from 'lucide-react';

export default function PlansPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Planos e Preços</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Oferecemos planos flexíveis para atender às suas necessidades de recuperação muscular, seja para um evento específico ou para treinamento regular.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Planos para Atletas Individuais</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta à sua rotina de treinamento e competições.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Plano Diário */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-1">Plano Diário</h3>
              <p className="text-gray-600 mb-4">Ideal para recuperação pós-competição</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 150,00</span>
                <span className="text-gray-600 ml-1">por dia</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Entrega e retirada em domicílio</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Orientação de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Até 24 horas de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Higienização profissional</span>
                </li>
              </ul>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Escolher Plano
              </Link>
            </div>
            
            {/* Plano Fim de Semana */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#4CAF50] relative">
              <div className="absolute top-0 right-0 bg-[#4CAF50] text-white px-4 py-1 text-sm font-semibold transform translate-x-2 -translate-y-2">
                Mais Popular
              </div>
              <h3 className="text-xl font-bold mb-1">Plano Fim de Semana</h3>
              <p className="text-gray-600 mb-4">Perfeito para competições de fim de semana</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 350,00</span>
                <span className="text-gray-600 ml-1">por 3 dias</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Entrega na sexta e retirada na segunda</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Orientação de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>72 horas de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Higienização profissional</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Suporte via WhatsApp</span>
                </li>
              </ul>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-[#4CAF50] hover:bg-[#3d8b40] text-white"
              >
                Escolher Plano
              </Link>
            </div>
            
            {/* Plano Semanal */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-1">Plano Semanal</h3>
              <p className="text-gray-600 mb-4">Para períodos de treinamento intenso</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 650,00</span>
                <span className="text-gray-600 ml-1">por 7 dias</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Entrega e retirada em domicílio</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Orientação de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>7 dias de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Higienização profissional</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Suporte via WhatsApp</span>
                </li>
              </ul>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Escolher Plano
              </Link>
            </div>
            
            {/* Plano Mensal */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-1">Plano Mensal</h3>
              <p className="text-gray-600 mb-4">Para preparação de competições importantes</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 1.800,00</span>
                <span className="text-gray-600 ml-1">por 30 dias</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Entrega e retirada em domicílio</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Orientação de uso presencial</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>30 dias de uso</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Higienização profissional</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Manutenção inclusa</span>
                </li>
              </ul>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Escolher Plano
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Planos para Assessorias Esportivas</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Soluções especiais para assessorias esportivas que desejam oferecer recuperação muscular como diferencial para seus atletas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-1">Plano Básico</h3>
              <p className="text-gray-600 mb-4">Ideal para assessorias de pequeno porte</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 2.400,00</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>2 equipamentos por 4 fins de semana/mês</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Entrega e retirada no local da assessoria</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Treinamento para uso correto</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Material educativo para atletas</span>
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Solicitar Proposta
              </Link>
            </div>
            
            {/* Plano Premium */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#4CAF50]">
              <h3 className="text-xl font-bold mb-1">Plano Premium</h3>
              <p className="text-gray-600 mb-4">Para assessorias de médio e grande porte</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 3.200,00</span>
                <span className="text-gray-600 ml-1">/mês</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>3 equipamentos por 4 fins de semana/mês</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Entrega e retirada no local da assessoria</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Treinamento para uso correto</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Material educativo para atletas</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Workshop mensal sobre recuperação</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Desconto para atletas da assessoria</span>
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-[#4CAF50] hover:bg-[#3d8b40] text-white"
              >
                Solicitar Proposta
              </Link>
            </div>
            
            {/* Plano Evento */}
            <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-1">Plano Evento</h3>
              <p className="text-gray-600 mb-4">Para competições e eventos especiais</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">R$ 600,00</span>
                <span className="text-gray-600 ml-1">/evento</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>5 equipamentos para 1 dia de evento</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Montagem e desmontagem inclusos</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Profissional para orientação no local</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Material promocional personalizado</span>
                </li>
                <li className="flex items-start">
                  <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                  <span>Atendimento ilimitado durante o evento</span>
                </li>
              </ul>
              <Link 
                href="/contato" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Solicitar Proposta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Serviços Adicionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Entrega Expressa</h3>
              <p className="text-gray-600 mb-4">
                Entrega no mesmo dia em até 3 horas para situações urgentes de recuperação.
              </p>
              <div className="text-2xl font-bold text-[#1E5F8C] mb-4">R$ 50,00</div>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Adicionar ao Plano
              </Link>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Extensão de Aluguel</h3>
              <p className="text-gray-600 mb-4">
                Prorrogação do período de aluguel por mais 24 horas quando necessário.
              </p>
              <div className="text-2xl font-bold text-[#1E5F8C] mb-4">70% do valor diário</div>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Adicionar ao Plano
              </Link>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3">Orientação Técnica Presencial</h3>
              <p className="text-gray-600 mb-4">
                Sessão de 1h com especialista em recuperação para maximizar resultados.
              </p>
              <div className="text-2xl font-bold text-[#1E5F8C] mb-4">R$ 100,00</div>
              <Link 
                href="/agendamento" 
                className="block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white"
              >
                Adicionar ao Plano
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes sobre Planos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Existe fidelidade nos planos?</h3>
              <p className="text-gray-600">
                Não. Todos os nossos planos são sem fidelidade ou compromisso de longo prazo. Você aluga apenas quando precisar, pelo período que desejar.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Como funciona a entrega e retirada?</h3>
              <p className="text-gray-600">
                Realizamos a entrega e retirada em seu endereço em São Paulo e Grande São Paulo, em horário previamente agendado, conforme sua conveniência.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Posso cancelar ou reagendar meu aluguel?</h3>
              <p className="text-gray-600">
                Sim. Cancelamentos com até 24h de antecedência recebem reembolso integral. Reagendamentos podem ser feitos a qualquer momento, sujeitos à disponibilidade.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Quais formas de pagamento são aceitas?</h3>
              <p className="text-gray-600">
                Aceitamos cartões de crédito, débito, PIX e transferência bancária. Para planos mensais, oferecemos a opção de parcelamento em até 3x sem juros.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Existe algum desconto para grupos?</h3>
              <p className="text-gray-600">
                Sim! Grupos de 3 ou mais atletas que alugam simultaneamente recebem 10% de desconto. Assessorias esportivas têm condições especiais, consulte-nos.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">O que acontece se o equipamento apresentar problemas?</h3>
              <p className="text-gray-600">
                Em caso de problemas técnicos, substituímos o equipamento imediatamente, sem custo adicional. Basta entrar em contato com nosso suporte via WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para melhorar sua recuperação?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Escolha o plano ideal para suas necessidades e comece a aproveitar os benefícios das botas pneumáticas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendamento" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Agendar Agora
            </Link>
            <Link href="/contato" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E5F8C] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
