import Image from 'next/image';
import Link from 'next/link';
import { LucideInfo, LucideArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sobre a RecoveryFit</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Conheça nossa história, missão e o que nos motiva a democratizar o acesso à tecnologia avançada de recuperação muscular.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">Nossa História</h2>
              <p className="mb-4">
                A RecoveryFit nasceu da vivência de seus fundadores <b>Diego Costa</b> e <b>Eddoardo Loewenthal</b> apaixonados por saúde e bem-estar. Ambos atletas de endurance, que após participar de diversas competições, identificou uma lacuna importante no mercado: o acesso limitado a equipamentos avançados de recuperação muscular.
              </p>
              <p className="mb-4">
                Após experimentarem os efeitos transformadores das botas pneumáticas em uma clínica especializada — e comprovarem a diferença significativa na recuperação — surgiu um propósito em comum: tornar essa tecnologia acessível para todos os atletas, do iniciante ao profissional sem a necessidade de um alto investimento na compra do equipamento.
              </p>
              <p>
              Em 2025, a RecoveryFit foi fundada em São Paulo com uma missão clara: democratizar o acesso à tecnologia avançada de recuperação muscular através de um serviço de aluguel conveniente, flexível e de alta qualidade.
              </p>
            </div>
            <div className="relative h-[500px] bg-gray-200 rounded-lg">
            
            <Image
                src="/imagens/sobre/fundadores.jpeg" // Substitua pelo caminho correto da imagem
                alt="Equipe RecoveryFit"
                fill
                style={{ objectFit: 'cover', objectPosition: '50% 35%' }}  // Garante que a imagem preencha o contêiner sem distorção
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Missão, Visão e Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card p-6">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-6 mx-auto">
                <LucideInfo className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Missão</h3>
              <p className="text-center">
                Proporcionar aos atletas de endurance acesso a equipamentos de alta performance para recuperação muscular, através de um serviço de aluguel conveniente, flexível e personalizado, contribuindo para a melhoria do desempenho esportivo e prevenção de lesões.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-6 mx-auto">
                <LucideInfo className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Visão</h3>
              <p className="text-center">
                Ser reconhecida como a principal referência em soluções de recuperação muscular para atletas em São Paulo, democratizando o acesso a tecnologias avançadas que otimizam o desempenho esportivo e promovem o bem-estar.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-16 h-16 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-6 mx-auto">
                <LucideInfo className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">Valores</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span><strong>Excelência:</strong> Compromisso com a qualidade dos equipamentos e do atendimento</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span><strong>Inovação:</strong> Busca constante por novas tecnologias e métodos de recuperação</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span><strong>Acessibilidade:</strong> Democratização do acesso a equipamentos de alto custo</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span><strong>Personalização:</strong> Atendimento às necessidades específicas de cada atleta</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span><strong>Sustentabilidade:</strong> Promoção do consumo consciente através do modelo de compartilhamento</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Nossa Equipe</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Conheça os profissionais apaixonados por esporte e recuperação que fazem parte da RecoveryFit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for team member image */}
              </div>
              <h3 className="text-xl font-bold">Diego Costa</h3>
              <p className="text-[#1E5F8C] font-semibold mb-2">Fundador e CEO</p>
              <p className="text-gray-600">
                Atleta de endurance, com experiência em gestão de negócios esportivos e paixão por tecnologias de recuperação.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for team member image */}
              </div>
              <h3 className="text-xl font-bold">Dra. Camila Santos</h3>
              <p className="text-[#1E5F8C] font-semibold mb-2">Especialista em Recuperação</p>
              <p className="text-gray-600">
                Fisioterapeuta esportiva com experiência no atendimento de atletas de alto rendimento e especialização em técnicas avançadas de recuperação.
              </p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for team member image */}
              </div>
              <h3 className="text-xl font-bold">Eddoardo Loewenthal</h3>
              <p className="text-[#1E5F8C] font-semibold mb-2">Fundador e CEO</p>
              <p className="text-gray-600">
              Atleta de endurance, com experiência em gestão de negócios esportivos e paixão por tecnologias de recuperação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Diferenciais RecoveryFit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1E5F8C]">Por que escolher a RecoveryFit?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Especialização em atletas de endurance</h4>
                    <p className="text-gray-600">Entendemos as necessidades específicas de corredores, ciclistas e triatletas.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Conveniência total</h4>
                    <p className="text-gray-600">Entrega e retirada em domicílio em São Paulo e Grande São Paulo.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Flexibilidade de planos</h4>
                    <p className="text-gray-600">Opções para diferentes necessidades e orçamentos, do diário ao mensal.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Equipamentos de alta qualidade</h4>
                    <p className="text-gray-600">Trabalhamos apenas com as melhores marcas e modelos do mercado.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Orientação especializada</h4>
                    <p className="text-gray-600">Suporte técnico e dicas de uso para maximizar os resultados.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for differentials image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem de atleta utilizando o serviço
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para experimentar?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Junte-se aos atletas que já descobriram os benefícios das botas pneumáticas para recuperação muscular.
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
