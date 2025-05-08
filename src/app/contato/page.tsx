export default function ContatoPage() {
  return (
    <div className="space-y-8 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em Contato</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Estamos ansiosos para ouvir sobre seus desafios e como podemos ajudar a transformar seus processos com nossas soluções de automação. Preencha o formulário abaixo ou utilize um de nossos canais de contato direto. Nossa equipe retornará o mais breve possível.
        </p>
      </section>

      <section className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Formulário de Contato</h2>
        <form className="space-y-6 max-w-xl mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
            <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700">Empresa (Opcional)</label>
            <input type="text" name="company" id="company" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensagem</label>
            <textarea name="message" id="message" rows={4} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Enviar Mensagem
            </button>
          </div>
        </form>
      </section>

      <section className="text-center py-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Outras Formas de Contato</h2>
        <p className="text-gray-600">
          Se preferir, você também pode nos contatar através do e-mail: <a href="mailto:contato@dumatech.com.br" className="text-blue-600 hover:underline">contato@dumatech.com.br</a>
        </p>
        <p className="text-gray-600 mt-2">
          Acompanhe nossas novidades e insights sobre automação em nossas redes sociais (links em breve).
        </p>
      </section>
    </div>
  );
}
