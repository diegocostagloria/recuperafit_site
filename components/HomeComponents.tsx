import Image from 'next/image';
import Link from 'next/link';
import { LucideArrowRight, LucideCheck } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero py-16 md:py-24">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Recuperação de atleta, ao seu alcance
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Alugue botas pneumáticas de alta performance para acelerar sua recuperação muscular. Entregamos em sua casa em São Paulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/agendamento" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-center">
              Agendar Agora
            </Link>
            <Link href="/botas-pneumaticas" className="bg-white hover:bg-gray-100 text-[#1E5F8C] font-semibold py-3 px-8 rounded-md transition-colors duration-300 text-center">
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E5F8C]/30 to-transparent rounded-lg">
            {/* Placeholder for hero image - will be replaced with actual image */}
            <div className="w-full h-full flex items-center justify-center text-white text-lg">
              Imagem de atleta usando botas pneumáticas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      title: "Recuperação Acelerada",
      description: "Reduza o tempo de recuperação entre treinos e competições"
    },
    {
      title: "Alívio da Dor Muscular",
      description: "Diminua a sensação de dor e desconforto pós-exercício"
    },
    {
      title: "Melhora da Circulação",
      description: "Aumente o fluxo sanguíneo e a oxigenação dos músculos"
    },
    {
      title: "Prevenção de Lesões",
      description: "Reduza o risco de lesões por sobrecarga e fadiga muscular"
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">Benefícios das Botas Pneumáticas</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          A tecnologia de compressão pneumática oferece diversos benefícios para atletas de todas as modalidades, especialmente para corredores, ciclistas e triatletas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                <LucideCheck className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left">{benefit.title}</h3>
              <p className="text-gray-600 text-center md:text-left">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Escolha seu plano",
      description: "Selecione entre os planos diário, fim de semana, semanal ou mensal"
    },
    {
      number: "02",
      title: "Agende a entrega",
      description: "Escolha a data e horário mais convenientes para receber o equipamento"
    },
    {
      number: "03",
      title: "Receba em casa",
      description: "Entregamos o equipamento em seu endereço e explicamos como usar"
    },
    {
      number: "04",
      title: "Aproveite os benefícios",
      description: "Use as botas pneumáticas após treinos e competições para recuperação"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">Como Funciona</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Alugar botas pneumáticas com a RecuperaFit é simples, rápido e conveniente. Veja como funciona:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl font-bold text-[#1E5F8C]/10 absolute -top-6 left-0">
                {step.number}
              </div>
              <div className="pt-8 relative z-10">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 right-0 transform translate-x-1/2">
                  <LucideArrowRight className="text-[#4CAF50]" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/agendamento" className="btn-primary">
            Agendar Agora
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PlansSection() {
  const plans = [
    {
      name: "Diário",
      price: "R$ 150",
      period: "por dia",
      description: "Ideal para recuperação pós-competição",
      features: [
        "Entrega e retirada em domicílio",
        "Orientação de uso",
        "Até 24 horas de uso",
        "Higienização profissional"
      ],
      cta: "Escolher Plano",
      popular: false
    },
    {
      name: "Fim de Semana",
      price: "R$ 350",
      period: "por 3 dias",
      description: "Perfeito para competições de fim de semana",
      features: [
        "Entrega na sexta e retirada na segunda",
        "Orientação de uso",
        "72 horas de uso",
        "Higienização profissional",
        "Suporte via WhatsApp"
      ],
      cta: "Escolher Plano",
      popular: true
    },
    {
      name: "Semanal",
      price: "R$ 650",
      period: "por 7 dias",
      description: "Para períodos de treinamento intenso",
      features: [
        "Entrega e retirada em domicílio",
        "Orientação de uso",
        "7 dias de uso",
        "Higienização profissional",
        "Suporte via WhatsApp"
      ],
      cta: "Escolher Plano",
      popular: false
    },
    {
      name: "Mensal",
      price: "R$ 1.800",
      period: "por 30 dias",
      description: "Para preparação de competições importantes",
      features: [
        "Entrega e retirada em domicílio",
        "Orientação de uso presencial",
        "30 dias de uso",
        "Higienização profissional",
        "Suporte prioritário",
        "Manutenção inclusa"
      ],
      cta: "Escolher Plano",
      popular: false
    }
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">Planos de Aluguel</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Oferecemos planos flexíveis para atender às suas necessidades de recuperação muscular.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`card p-6 relative ${plan.popular ? 'border-t-4 border-[#4CAF50]' : ''}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#4CAF50] text-white px-4 py-1 text-sm font-semibold transform translate-x-2 -translate-y-2">
                  Mais Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-[#1E5F8C]">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <LucideCheck className="text-[#4CAF50] mr-2 mt-1 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/agendamento" 
                className={`block text-center py-2 px-4 rounded-md font-semibold transition-colors duration-300 ${
                  plan.popular 
                    ? 'bg-[#4CAF50] hover:bg-[#3d8b40] text-white' 
                    : 'bg-white border border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Corredor de Maratona",
      quote: "As botas pneumáticas da RecuperaFit fizeram toda a diferença na minha recuperação após a Maratona de São Paulo. Consegui voltar aos treinos muito mais rápido do que o normal.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "Ana Oliveira",
      role: "Ciclista",
      quote: "Aluguei as botas para usar após um evento de ciclismo de longa distância e fiquei impressionada com os resultados. A entrega foi pontual e o atendimento excelente.",
      image: "/placeholder-avatar.jpg"
    },
    {
      name: "Marcos Santos",
      role: "Triatleta",
      quote: "Como triatleta, a recuperação é fundamental para manter a consistência nos treinos. O serviço da RecuperaFit é perfeito para usar nos períodos mais intensos de preparação.",
      image: "/placeholder-avatar.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <h2 className="section-title">O Que Nossos Clientes Dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4">
                  {/* Placeholder for avatar */}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para melhorar sua recuperação?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Agende agora o aluguel das botas pneumáticas e experimente a diferença na sua recuperação muscular.
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
  );
}

export function PartnersSection() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="section-title">Nossos Parceiros</h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Trabalhamos com as melhores assessorias esportivas e organizadores de eventos de São Paulo.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[1, 2, 3, 4, 5, 6].map((partner) => (
            <div key={partner} className="flex items-center justify-center h-24 bg-gray-100 rounded-md">
              <div className="text-gray-400 font-semibold">Logo Parceiro {partner}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
