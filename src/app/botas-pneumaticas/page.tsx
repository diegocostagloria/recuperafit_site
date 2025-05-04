import Image from 'next/image';
import Link from 'next/link';
import { LucideCheck, LucideArrowRight } from 'lucide-react';

export default function BootsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16 md:py-24">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Botas Pneumáticas</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Conheça a tecnologia avançada de compressão pneumática que está revolucionando a recuperação muscular de atletas.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for boots image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem das botas pneumáticas
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#1E5F8C]">O que são Botas Pneumáticas?</h2>
              <p className="mb-4">
                As botas pneumáticas são dispositivos de recuperação muscular que envolvem os membros inferiores, dos pés até a virilha. Elas funcionam através de um sistema de compressão progressiva que melhora o fluxo sanguíneo e linfático, especialmente após exercícios físicos intensos.
              </p>
              <p className="mb-4">
                O equipamento consiste em um par de botas infláveis que cobrem as pernas, conectadas a uma unidade de controle por tubos de ar. O sistema infla e desinfla as botas em sequência, criando uma compressão controlada que ajuda na recuperação muscular.
              </p>
              <p>
                Utilizadas por atletas profissionais há anos, as botas pneumáticas agora estão disponíveis para atletas amadores através do serviço de aluguel da RecuperaFit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Como Funcionam</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            O funcionamento das botas pneumáticas se baseia em um princípio simples, mas extremamente eficaz para a recuperação muscular.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Vestir as Botas</h3>
              <p className="text-gray-600 text-center">
                O usuário veste as botas e se deita, preferencialmente com as pernas elevadas para melhor resultado.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Conexão ao Sistema</h3>
              <p className="text-gray-600 text-center">
                A unidade de controle é conectada à tomada e aos tubos de ar das botas para iniciar o processo.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Compressão Sequencial</h3>
              <p className="text-gray-600 text-center">
                O sistema infla as botas de forma sequencial, começando pelos pés e subindo gradualmente pelas pernas.
              </p>
            </div>
            
            <div className="card p-6">
              <div className="w-12 h-12 bg-[#1E5F8C] rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Ciclos de Recuperação</h3>
              <p className="text-gray-600 text-center">
                O ciclo de inflação e deflação se repete durante a sessão (geralmente 30-60 minutos) para máxima eficácia.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-6">
              A compressão é mais forte nos pés e diminui conforme sobe para as panturrilhas e coxas. Este padrão facilita o retorno venoso e a drenagem linfática, acelerando a recuperação muscular.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Benefícios para Atletas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <LucideCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Recuperação Muscular Acelerada</h4>
                    <p className="text-gray-600">
                      Ajuda os músculos a se recuperarem mais rapidamente após treinos intensos, reduzindo o tempo necessário entre sessões de treinamento.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <LucideCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Drenagem do Ácido Lático</h4>
                    <p className="text-gray-600">
                      Remove mais eficientemente o ácido lático acumulado durante o exercício, reduzindo dores musculares pós-treino.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <LucideCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Melhora da Circulação Sanguínea</h4>
                    <p className="text-gray-600">
                      Aumenta o fluxo de sangue oxigenado para os músculos, acelerando o processo de recuperação e reparação tecidual.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <LucideCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Redução de Inchaço e Fadiga</h4>
                    <p className="text-gray-600">
                      Diminui o inchaço nas pernas e a sensação de fadiga muscular, proporcionando maior conforto após atividades intensas.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <LucideCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Prevenção de Lesões</h4>
                    <p className="text-gray-600">
                      Pode ajudar a prevenir lesões ao melhorar a recuperação entre sessões de treino, reduzindo o risco de sobrecarga muscular.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 bg-[#4CAF50] rounded-full flex items-center justify-center mr-4 mt-1">
                    <LucideCheck className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Melhora do Desempenho</h4>
                    <p className="text-gray-600">
                      Atletas que recuperam mais rapidamente podem treinar com mais frequência e intensidade, melhorando seu desempenho geral.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Tecnologia Utilizada</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#1E5F8C]">Equipamentos de Alta Performance</h3>
              <p className="mb-4">
                Na RecuperaFit, trabalhamos apenas com os melhores equipamentos do mercado, garantindo eficácia e segurança para nossos clientes.
              </p>
              <p className="mb-6">
                Nosso portfólio inclui modelos premium como o Normatec 3, reconhecido mundialmente como referência em recuperação muscular para atletas.
              </p>
              
              <h4 className="text-xl font-bold mb-3">Características dos nossos equipamentos:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Múltiplas câmaras de ar para compressão precisa</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Diferentes níveis de pressão ajustáveis</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Programas específicos para diferentes necessidades</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Controle digital intuitivo</span>
                </li>
                <li className="flex items-center">
                  <LucideArrowRight className="text-[#4CAF50] mr-2 flex-shrink-0" size={16} />
                  <span>Tamanhos variados para melhor ajuste</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for technology image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
                Imagem do equipamento Normatec
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Quanto tempo devo usar as botas pneumáticas?</h3>
              <p className="text-gray-600">
                O tempo recomendado varia de 30 minutos a 1 hora por sessão. Para atletas após competições intensas, duas sessões no mesmo dia podem ser benéficas, com intervalo de algumas horas entre elas.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Quando devo usar as botas pneumáticas?</h3>
              <p className="text-gray-600">
                O ideal é utilizar logo após treinos intensos ou competições, quando o corpo está mais necessitado de recuperação. Também podem ser usadas na véspera de eventos importantes para preparar os músculos.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">As botas pneumáticas substituem outras formas de recuperação?</h3>
              <p className="text-gray-600">
                Não completamente. Elas são um complemento poderoso a outras técnicas como alongamento, hidratação adequada, alimentação balanceada e sono de qualidade. A combinação de métodos traz os melhores resultados.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Existem contraindicações para o uso?</h3>
              <p className="text-gray-600">
                Sim. Pessoas com problemas de circulação sanguínea preexistentes, trombose venosa profunda, problemas de pele na área de aplicação e gestantes devem evitar o uso. Em caso de dúvida, consulte um médico.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Preciso de ajuda para usar o equipamento?</h3>
              <p className="text-gray-600">
                Não. Nossos equipamentos são intuitivos e fáceis de usar. Além disso, fornecemos orientação completa no momento da entrega e suporte via WhatsApp durante todo o período de aluguel.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-3 text-[#1E5F8C]">Qual a diferença entre os modelos disponíveis?</h3>
              <p className="text-gray-600">
                Os modelos variam principalmente em termos de número de câmaras de ar, opções de programas, níveis de pressão e cobertura das pernas. Todos os nossos equipamentos são de alta qualidade e eficácia comprovada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#1E5F8C] to-[#174a6e] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experimente os benefícios das botas pneumáticas</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Agende agora o aluguel e descubra como a tecnologia de compressão pneumática pode transformar sua recuperação muscular.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendamento" className="bg-[#4CAF50] hover:bg-[#3d8b40] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Agendar Agora
            </Link>
            <Link href="/planos" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1E5F8C] text-white font-semibold py-3 px-8 rounded-md transition-colors duration-300">
              Ver Planos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
