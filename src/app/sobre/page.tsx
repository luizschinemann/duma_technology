export default function SobrePage() {
  return (
    <div className="space-y-3 py-10 ">
      <div className="bg-background py-9 sm:py-9 ">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-2 bg-background">
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gradient_start sm:text-5xl">
            Sobre a Duma
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-1">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gradient_start max-lg:text-center">
                    Na língua Zulu, Duma significa “trovão” — símbolo de força, presença marcante e transformação. Essa palavra ancestral inspira não apenas nosso nome, mas também nossa essência: causar impacto onde antes havia silêncio, trazer movimento onde havia estagnação.

                    A Duma nasceu da visão de que a tecnologia pode — e deve — ser uma aliada estratégica no crescimento e na eficiência das empresas. Somos apaixonados por inovação e dedicados a transformar processos complexos em operações simples, ágeis e automatizadas.

                    Assim como o trovão antecede a mudança no céu, nossa missão é antecipar soluções, eliminar ruídos operacionais e abrir caminho para novas oportunidades. Nossa jornada é guiada por um propósito claro: entregar soluções tecnológicas que não apenas resolvem problemas, mas que impulsionam o futuro dos nossos clientes com inteligência, impacto e propósito.

                  </p>
                </div>

              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-background "></div>
              <div className="relative flex h-full flex-col overflow-hidden ">
                <img
                  className="w-full max-lg:max-w-xs p-5"
                  src="/images/namesketch.png"
                  alt="Logo Sketch"
                />

              </div>

            </div>

          </div>
        </div>
      </div>

      <section className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gradient_start mb-6 text-center">Nossa História e Missão</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Fundada por um grupo de especialistas em tecnologia e gestão de processos, a Duma rapidamente se estabeleceu como uma referência em automação. Desde o início, nosso foco tem sido entender profundamente as necessidades de cada cliente para oferecer soluções verdadeiramente personalizadas e eficazes. Acreditamos que a automação vai além da simples implementação de software; trata-se de uma reengenharia inteligente dos fluxos de trabalho, visando a otimização contínua e a sustentabilidade do negócio.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nossa missão é capacitar empresas de todos os portes a alcançar seu pleno potencial através da automação inteligente. Buscamos ser o parceiro tecnológico que não apenas entrega resultados, mas que também educa e inspira seus clientes a abraçar a transformação digital como um caminho para o sucesso duradouro. Queremos desmistificar a automação, tornando-a acessível e compreensível para todos.
        </p>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-semibold text-gradient_start mb-6 text-center">Nossa Visão e Valores</h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Almejamos ser líderes no mercado de automação de processos, reconhecidos pela excelência de nossas soluções e pelo impacto positivo que geramos nos negócios de nossos clientes. Enxergamos um futuro onde a automação e a inteligência artificial trabalham em harmonia com as equipes humanas, potencializando suas capacidades e criando ambientes de trabalho mais produtivos e satisfatórios.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Nossos valores são o alicerce de tudo o que fazemos:
        </p>
        <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
          <strong className="text-gray-800">Inovação Contínua:</strong> Estamos sempre explorando novas tecnologias e metodologias para oferecer o que há de mais avançado em automação.
        </p>
        <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
          <strong className="text-gray-800">Foco no Cliente:</strong> As necessidades e os objetivos dos nossos clientes estão sempre em primeiro lugar. Trabalhamos em estreita colaboração para garantir que nossas soluções superem suas expectativas.
        </p>
        <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
          <strong className="text-gray-800">Integridade e Transparência:</strong> Conduzimos nossos negócios com honestidade e clareza, construindo relações de confiança com nossos clientes e parceiros.
        </p>
        <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
          <strong className="text-gray-800">Excelência na Execução:</strong> Comprometemo-nos com a mais alta qualidade em cada projeto, desde o planejamento até a implementação e o suporte contínuo.
        </p>
        <p className="text-gray-700 mt-2 ml-4 leading-relaxed">
          <strong className="text-gray-800">Colaboração e Trabalho em Equipe:</strong> Acreditamos no poder da colaboração, tanto internamente quanto com nossos clientes, para alcançar os melhores resultados.
        </p>
      </section>
    </div>
  );
}
