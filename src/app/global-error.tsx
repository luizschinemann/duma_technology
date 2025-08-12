"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-cream text-ink">
        <div className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold">Desculpe, tivemos um problema</h1>
            <p className="mt-3 text-muted">
              Tente novamente em instantes ou volte para a página inicial.
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
                Recarregar
              </button>
              <a
                href="/"
                className="rounded-md border border-black/10 bg-white px-5 py-3 text-sm hover:bg-white/90 transition"
              >
                Ir para a home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
