export default function ContatoPage() {
  return (
    <div className="space-y-8 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">Entre em Contato</h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed">
          Estamos ansiosos para ouvir sobre seus desafios e como podemos ajudar a transformar seus processos com nossas soluções de automação. Preencha o formulário abaixo ou utilize um de nossos canais de contato direto. Nossa equipe retornará o mais breve possível.
        </p>
      </section>

      <section className="bg-secondary/5 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-6 text-center">Formulário de Contato</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary">Nome Completo</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary">E-mail</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-primary">Empresa (Opcional)</label>
            <input type="text" name="company" id="company" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary">Mensagem</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-background bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold text-primary mb-4">Outras Formas de Contato</h2>
        <p className="text-secondary">
          Se preferir, você também pode nos contatar através do e-mail: <a href="mailto:contato@dumatech.com.br" className="text-accent hover:underline">contato@dumatech.com.br</a>
        </p>
        <p className="text-secondary mt-2">
          Acompanhe nossas novidades e insights sobre automação em nossas redes sociais (links em breve).
        </p>
      </section>
    </div>
  );
}
