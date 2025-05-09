export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12 bg-gradient-to-r from-primary to-secondary text-white rounded-lg shadow-xl">
        <h1 className="text-5xl font-bold mb-4">Duma Tech: Inovação em Automação de Processos</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Transformamos seus desafios operacionais em soluções eficientes e automatizadas. Na Duma Tech, impulsionamos o crescimento da sua empresa através da tecnologia de ponta em automação, otimizando seu tempo e recursos para que você possa focar no que realmente importa: o seu negócio.
        </p>
        <a href="/servicos" className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg shadow-md">
          Conheça Nossas Soluções
        </a>
      </section>

      <section className="py-10">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Por que Automatizar com a Duma Tech?</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Eficiência Operacional</h3>
            <p className="text-gray-600">
              Reduzimos drasticamente o tempo gasto em tarefas manuais e repetitivas. Nossas soluções de automação são projetadas para executar processos complexos com precisão e velocidade, liberando sua equipe para atividades estratégicas e de maior valor agregado. Maximizamos sua produtividade e minimizamos erros.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Redução de Custos</h3>
            <p className="text-gray-600">
              A automação inteligente de processos resulta em uma significativa diminuição dos custos operacionais. Ao otimizar fluxos de trabalho e eliminar gargalos, sua empresa economiza recursos financeiros e humanos, direcionando investimentos para áreas que geram crescimento e inovação.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-primary mb-3">Escalabilidade e Inovação</h3>
            <p className="text-gray-600">
              Nossas plataformas de automação são flexíveis e escaláveis, adaptando-se ao crescimento da sua empresa. Oferecemos desde automações via WhatsApp e desenvolvimento de Lambdas até implementações robustas de RPA, garantindo que sua operação esteja sempre à frente, pronta para os desafios do futuro.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 rounded-lg shadow-inner">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Nossos Principais Serviços de Automação</h2>
        <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto text-center">
          A Duma Tech oferece um portfólio completo de serviços de automação, desenhados para atender às necessidades específicas de cada cliente. Nossa expertise abrange diversas tecnologias e plataformas, garantindo soluções personalizadas e de alto impacto. Desde a automatização de interações com clientes até a otimização de back-office, estamos preparados para revolucionar seus processos.
        </p>
        <div className="text-center">
            <a href="/servicos" className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-secondary transition duration-300 text-lg shadow-md">
              Explore Nossos Serviços
            </a>
        </div>
      </section>
    </div>
  );
}
