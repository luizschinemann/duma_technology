import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade • Duma Technology",
  description:
    "Entenda como a Duma trata suas informações no site e nos nossos atendimentos via WhatsApp e chat.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 py-16">
      <section className="bg-white border border-black/5 p-8 rounded-2xl shadow-sm space-y-6">
        <h1 className="text-3xl font-semibold bg-gradient-to-r from-brand to-rust bg-clip-text text-transparent text-center">
          Política de Privacidade
        </h1>

        <p className="text-muted leading-relaxed text-center">
          <strong className="text-ink">Última atualização:</strong> 17/05/2025
        </p>

        <p className="text-muted leading-relaxed">
          Na <strong className="text-ink">Duma</strong>, respeitamos a sua privacidade e cuidamos dos seus
          dados pessoais com responsabilidade. Esta Política explica como coletamos, usamos e protegemos
          informações no nosso <strong className="text-ink">site</strong> e no atendimento por
          <strong className="text-ink"> WhatsApp/chat</strong>.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-brand mt-6">1. Finalidade do serviço</h2>
        <p className="text-muted leading-relaxed">
          Nosso atendimento tem como finalidade <strong className="text-ink">enviar e receber mensagens via WhatsApp</strong>
          e chat do site, para agilizar sua comunicação com nossos sistemas automatizados e equipe.{" "}
          <strong className="text-ink">Não coletamos nem armazenamos dados sensíveis</strong> e{" "}
          <strong className="text-ink">não compartilhamos informações com terceiros</strong>.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-brand mt-6">2. Coleta e uso de informações</h2>
        <p className="text-muted leading-relaxed">
          Durante o uso do WhatsApp/chat, as mensagens podem conter informações que você envia
          voluntariamente. Esses dados:
        </p>
        <ul className="list-disc pl-6 text-muted space-y-1">
          <li>não são armazenados permanentemente nos nossos aplicativos;</li>
          <li>não são usados para marketing nem repassados a terceiros;</li>
          <li>são utilizados apenas para fins operacionais e de atendimento.</li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-brand mt-6">3. Compartilhamento de dados</h2>
        <p className="text-muted leading-relaxed">
          <strong className="text-ink">Não vendemos, compartilhamos ou transferimos</strong> seus dados pessoais
          a terceiros. As interações ficam restritas ao ambiente da Duma e servem somente para viabilizar a
          comunicação automatizada e o suporte.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-brand mt-6">4. Segurança da informação</h2>
        <p className="text-muted leading-relaxed">
          Adotamos práticas adequadas de segurança para proteger dados em trânsito durante a comunicação com
          o WhatsApp e nossos serviços. Embora nenhum sistema seja 100% imune, seguimos{" "}
          <strong className="text-ink">padrões atualizados de proteção e confidencialidade</strong>.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-brand mt-6">5. Alterações nesta política</h2>
        <p className="text-muted leading-relaxed">
          Podemos atualizar este documento periodicamente. Recomendamos revisitar esta página para se manter
          informado sobre mudanças.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-brand mt-6">6. Fale com a gente</h2>
        <p className="text-muted leading-relaxed">
          Em caso de dúvidas sobre privacidade ou tratamento de dados, fale conosco:
        </p>
        <ul className="text-muted">
          <li>
            E-mail:{" "}
            <a href="mailto:contato@dumatechnology.com" className="underline text-brand">
              contato@dumatechnology.com
            </a>
          </li>
          <li>
            WhatsApp:{" "}
            <a
              href="https://wa.me/554188503782?text=Tenho%20uma%20d%C3%BAvida%20sobre%20privacidade."
              className="underline text-brand"
              target="_blank"
            >
              +55 41 8850-3782
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
