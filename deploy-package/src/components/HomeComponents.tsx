'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LucideArrowRight, LucideCheck } from 'lucide-react';


// Função para animar elementos quando entram na viewport
const useAnimateOnScroll = () => {
  useEffect(() => {
    const animateElements = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        // Verificar se o elemento está visível na viewport
        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
          element.classList.add('visible');
        }
      });
    };
    
    // Executar uma vez no carregamento
    animateElements();
    
    // Adicionar listener para scroll
    window.addEventListener('scroll', animateElements);
    
    // Cleanup
    return () => window.removeEventListener('scroll', animateElements);
  }, []);
};

export default function HeroSection() {
  useAnimateOnScroll();
  
  return (
    <section className="hero py-20 md:py-32 relative overflow-hidden">
      {/* Background video (opcional) */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-[#1E5F8C] to-[#174a6e]"></div>
        {/* Aqui pode ser adicionado um vídeo de background */}
      </div>
      
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 slide-in-left">
            Recuperação de atleta, <br />ao seu alcance
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 slide-in-left" style={{transitionDelay: '0.2s'}}>
            Alugue botas pneumáticas de alta performance para acelerar sua recuperação muscular. Entregamos em sua casa em São Paulo.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start slide-in-left" style={{transitionDelay: '0.4s'}}>
            <Link href="/agendamento" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center text-lg">
              Agendar Agora
            </Link>
            <Link href="/botas-pneumaticas" className="bg-white hover:bg-gray-100 text-[#1E5F8C] font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-center text-lg">
              Saiba Mais
            </Link>
          </div>
        </div>
        <div className="relative h-[350px] md:h-[450px] lg:h-[550px] slide-in-right">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E5F8C]/30 to-transparent rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
          <Image
            src="/imagens/homecomponents/modelo-sofa-bota-normatec.jpeg" // Substitua pelo caminho da sua imagem
            alt="Botas pneumáticas Normatec em uso"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-xl"
          />
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  useAnimateOnScroll();
  
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
    <section className="bg-[#F8F9FA] py-20 md:py-32">
      <div className="container">
        <h2 className="section-title fade-in">Benefícios das Botas Pneumáticas</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto fade-in" style={{transitionDelay: '0.2s'}}>
          A tecnologia de compressão pneumática oferece diversos benefícios para atletas de todas as modalidades, especialmente para corredores, ciclistas e triatletas.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="card p-8 hover:shadow-lg transition-all duration-300 fade-in" style={{transitionDelay: `${0.1 * (index + 1)}s`}}>
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 transform hover:scale-110 transition-transform duration-300">
                <LucideCheck className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center md:text-left">{benefit.title}</h3>
              <p className="text-gray-600 text-center md:text-left text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  useAnimateOnScroll();
  
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
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="section-title fade-in">Como Funciona</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto fade-in" style={{transitionDelay: '0.2s'}}>
          Alugar botas pneumáticas com a RecoveryFit é simples, rápido e conveniente. Veja como funciona:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="relative fade-in" style={{transitionDelay: `${0.1 * (index + 1)}s`}}>
              <div className="text-8xl font-bold text-[#1E5F8C]/10 absolute -top-10 left-0">
                {step.number}
              </div>
              <div className="pt-12 relative z-10">
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 right-0 transform translate-x-1/2">
                  <LucideArrowRight className="text-[#4CAF50]" size={28} />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 fade-in" style={{transitionDelay: '0.6s'}}>
          <Link href="/agendamento" className="btn-primary text-lg">
            Agendar Agora
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PlansSection() {
  useAnimateOnScroll();
  
  const plans = [
    {
      name: "Diário",
      price: "R$ 80",
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
      price: "R$ 190",
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
      price: "R$ 420",
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
      price: "R$ 1.200",
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
    <section className="bg-[#F8F9FA] py-20 md:py-32">
      <div className="container">
        <h2 className="section-title fade-in">Planos de Aluguel</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto fade-in" style={{transitionDelay: '0.2s'}}>
          Oferecemos planos flexíveis para atender às suas necessidades de recuperação muscular.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {plans.map((plan, index) => (
            <div key={index} className={`card p-8 relative ${plan.popular ? 'border-t-4 border-[#4CAF50]' : ''} fade-in`} style={{transitionDelay: `${0.1 * (index + 1)}s`}}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#4CAF50] text-white px-4 py-1 text-sm font-semibold transform translate-x-2 -translate-y-2 rounded-bl-lg rounded-tr-lg shadow-md">
                  Mais Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#1E5F8C]">{plan.price}</span>
                <span className="text-gray-600 ml-2">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <LucideCheck className="text-[#4CAF50] mr-3 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link 
                href="/agendamento" 
                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 ${
                  plan.popular 
                    ? 'bg-[#4CAF50] hover:bg-[#3d8b40] text-white' 
                    : 'bg-white border-2 border-[#1E5F8C] text-[#1E5F8C] hover:bg-[#1E5F8C] hover:text-white'
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
  useAnimateOnScroll();
  
  const testimonials = [
    {
      name: "Deoclecio",
      role: "Maratonista",
      quote: "As botas pneumáticas da RecoveryFit fizeram toda a diferença na minha recuperação após a Maratona de São Paulo. Consegui voltar aos treinos muito mais rápido do que o normal.",
      image: "/imagens/homecomponents/deo.jpeg"
    },
    {
      name: "Oliveira",
      role: "Ciclista",
      quote: "Aluguei as botas para usar após um evento de ciclismo de longa distância e fiquei impressionada com os resultados. A entrega foi pontual e o atendimento excelente.",
      image: "/imagens/homecomponents/ciclista.png"
    },
    {
      name: "Marcos Santos",
      role: "Triatleta",
      quote: "Como triatleta, a recuperação é fundamental para manter a consistência nos treinos. O serviço da RecoveryFit é perfeito para usar nos períodos mais intensos de preparação.",
      image: "/imagens/homecomponents/triatleta.png"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <h2 className="section-title fade-in">O Que Nossos Clientes Dizem</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 fade-in" style={{transitionDelay: `${0.1 * (index + 1)}s`}}>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-300 mr-4 overflow-hidden">
                <Image
                  src={testimonial.image} // Caminho da imagem de cada pessoa
                  alt={testimonial.name} // Nome da pessoa como texto alternativo
                  width={64} // Largura da imagem
                  height={64} // Altura da imagem
                  className="rounded-full" // Estilo para bordas arredondadas
                />
                </div>
                <div>
                  <h4 className="font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  useAnimateOnScroll();
  
  return (
    <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-20 md:py-28">
      <div className="container text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 fade-in">Pronto para melhorar sua recuperação?</h2>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto fade-in" style={{transitionDelay: '0.2s'}}>
          Agende agora o aluguel das botas pneumáticas e experimente a diferença na sua recuperação muscular.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in" style={{transitionDelay: '0.4s'}}>
          <Link href="/agendamento" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg">
            Agendar Agora
          </Link>
          <Link href="/contato" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E5F8C] text-white font-semibold py-4 px-10 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 text-lg">
            Fale Conosco
          </Link>
        </div>
      </div>
    </section>
  );
}

export function PartnersSection() {
  useAnimateOnScroll();
  
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="section-title fade-in">Nossos Parceiros</h2>
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto fade-in" style={{transitionDelay: '0.2s'}}>
          Trabalhamos com as melhores assessorias esportivas e organizadores de eventos de São Paulo.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 fade-in" style={{transitionDelay: '0.4s'}}>
          {[1, 2, 3, 4, 5, 6].map((partner) => (
            <div key={partner} className="flex items-center justify-center h-28 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <Image
                  src={`/imagens/homecomponents/parceiros/logo-parceiro-${partner}.jpg`} // Substitua pelo caminho correto das imagens
                  alt={`Logo do Parceiro ${partner}`}
                  width={100} // Ajuste a largura conforme necessário
                  height={100} // Ajuste a altura conforme necessário
                  className="object-contain" // Garante que a imagem se ajuste ao contêiner
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
