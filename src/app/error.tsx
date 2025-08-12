"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // opcional: envie `error` para observabilidade/sentry aqui
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Ops, algo deu errado</h1>
        <p className="mt-3 text-muted">
          Um erro inesperado aconteceu. Já estamos de olho.
          {error?.digest ? (
            <span className="block text-xs mt-2 opacity-70">
              Código: {error.digest}
            </span>
          ) : null}
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="rounded-md bg-rust text-white px-5 py-3 text-sm font-medium hover:bg-rust/90 transition"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="rounded-md border border-black/10 bg-white px-5 py-3 text-sm hover:bg-white/90 transition"
          >
            Voltar para a home
          </a>
        </div>
      </div>
    </div>
  );
}
