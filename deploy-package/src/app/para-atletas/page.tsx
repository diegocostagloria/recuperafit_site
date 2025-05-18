import Image from 'next/image';
import Link from 'next/link';
import { LucideCheck, LucideArrowRight } from 'lucide-react';

export default function AthletesPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Para Atletas</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Soluções específicas de recuperação muscular para corredores, ciclistas e triatletas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">Corredores</h2>
              <p className="mb-4">
                A corrida é uma atividade de alto impacto que exige muito dos músculos das pernas, especialmente após treinos longos ou competições. A recuperação adequada é essencial para prevenir lesões e melhorar o desempenho.
              </p>
              <p className="mb-6">
                As botas pneumáticas são particularmente eficazes para corredores, pois ajudam a reduzir a inflamação, aliviar a dor muscular tardia (DOMS) e acelerar a recuperação entre treinos.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Benefícios específicos para corredores:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Redução da dor nas panturrilhas e quadríceps</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Alívio da síndrome da banda iliotibial</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Diminuição da fadiga muscular após longos percursos</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Prevenção de lesões comuns em corredores</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Recuperação mais rápida após maratonas e ultramaratonas</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for runner image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem de corredor utilizando botas pneumáticas
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for cyclist image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem de ciclista utilizando botas pneumáticas
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">Ciclistas</h2>
              <p className="mb-4">
                O ciclismo, seja de estrada ou mountain bike, exige esforço contínuo e repetitivo dos músculos das pernas. Após longas pedaladas, a recuperação adequada é fundamental para manter a consistência nos treinos.
              </p>
              <p className="mb-6">
                As botas pneumáticas são uma excelente ferramenta para ciclistas, ajudando a reduzir o acúmulo de ácido lático e promovendo uma recuperação mais rápida entre sessões de treinamento.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Benefícios específicos para ciclistas:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Alívio da tensão no quadríceps e isquiotibiais</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Redução da fadiga muscular após longas pedaladas</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Melhora da circulação nas pernas</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Prevenção de cãibras durante provas longas</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Recuperação mais eficiente entre etapas de competições</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">Triatletas</h2>
              <p className="mb-4">
                O triatlo combina natação, ciclismo e corrida, exigindo um esforço extraordinário do corpo. A recuperação entre treinos e provas é um desafio constante para triatletas de todos os níveis.
              </p>
              <p className="mb-6">
                As botas pneumáticas são especialmente valiosas para triatletas, que precisam otimizar sua recuperação para treinar múltiplas modalidades com qualidade e consistência.
              </p>
              
              <h3 className="text-xl font-bold mb-3">Benefícios específicos para triatletas:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Recuperação acelerada entre treinos de diferentes modalidades</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Redução da fadiga acumulada de múltiplos esportes</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Alívio da tensão muscular após transições</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Preparação muscular para treinos consecutivos</span>
                </li>
                <li className="flex items-center">
                  <LucideCheck className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Recuperação eficiente entre as etapas de um Ironman</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for triathlete image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem de triatleta utilizando botas pneumáticas
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Casos de Sucesso</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Conheça histórias reais de atletas que melhoraram sua recuperação e desempenho com as botas pneumáticas da RecoveryFit.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for athlete image */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Carlos Silva</h3>
              <p className="text-[#1E5F8C] font-semibold mb-4 text-center">Maratonista</p>
              <p className="text-gray-600 italic mb-4">
                "Após a Maratona de São Paulo, aluguei as botas pneumáticas da RecoveryFit por um fim de semana. A diferença foi impressionante! Em vez dos habituais 7-10 dias de recuperação, consegui voltar aos treinos leves em apenas 3 dias, sem dores ou desconforto."
              </p>
              <p className="text-gray-600 text-sm text-center">
                Tempo de recuperação reduzido em 60%
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for athlete image */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Ana Oliveira</h3>
              <p className="text-[#1E5F8C] font-semibold mb-4 text-center">Ciclista</p>
              <p className="text-gray-600 italic mb-4">
                "Durante minha preparação para o L'Étape Brasil, utilizei as botas pneumáticas semanalmente. A diferença na qualidade dos meus treinos foi notável. Consegui aumentar o volume de treinamento em 20% sem sinais de fadiga excessiva ou sobrecarga."
              </p>
              <p className="text-gray-600 text-sm text-center">
                Aumento de 20% no volume de treinamento
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4">
                {/* Placeholder for athlete image */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Marcos Santos</h3>
              <p className="text-[#1E5F8C] font-semibold mb-4 text-center">Triatleta</p>
              <p className="text-gray-600 italic mb-4">
                "Como triatleta amador que trabalha em período integral, o tempo de recuperação é crucial. Com o plano mensal da RecoveryFit, consegui treinar com qualidade nas três modalidades sem comprometer minha recuperação. Melhorei meu tempo no Ironman 70.3 em 15 minutos!"
              </p>
              <p className="text-gray-600 text-sm text-center">
                Melhora de desempenho em competição
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Dicas para Maximizar Resultados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1E5F8C]">Como tirar o máximo proveito das botas pneumáticas</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Use logo após o exercício</h4>
                    <p className="text-gray-600">Para melhores resultados, utilize as botas pneumáticas dentro de 1-2 horas após treinos intensos ou competições.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hidrate-se adequadamente</h4>
                    <p className="text-gray-600">Beba água antes, durante e após o uso das botas para potencializar os efeitos da compressão na circulação.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Eleve as pernas</h4>
                    <p className="text-gray-600">Utilize as botas em posição reclinada com as pernas ligeiramente elevadas para melhorar o retorno venoso.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Ajuste a pressão corretamente</h4>
                    <p className="text-gray-600">Comece com pressões mais baixas e aumente gradualmente conforme sua tolerância e necessidade.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Combine com outras técnicas</h4>
                    <p className="text-gray-600">Utilize as botas como parte de uma estratégia completa de recuperação, incluindo nutrição adequada e sono de qualidade.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for tips image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem de atleta seguindo as dicas de uso
              </div>
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
