export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-muted">
          O link pode estar incorreto ou a página foi removida.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center rounded-md bg-rust text-white px-6 py-3 text-sm font-medium hover:bg-rust/90 transition"
          >
            Voltar para a home
          </a>
        </div>
      </div>
    </div>
  );
}
