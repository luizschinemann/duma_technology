import React from 'react';

export default function EssentialPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cream text-ink p-8">
            <main className="text-center">
                <h1 className="text-5xl font-bold mb-4 tracking-tight">
                    Essential <span className="text-brand">Duma</span>
                </h1>
                <p className="text-xl opacity-80 mb-8 max-w-md mx-auto">
                    Bem-vindo à plataforma Essential da Duma Technology.
                    Este módulo está em desenvolvimento.
                </p>
                <div className="p-1 px-4 rounded-full border border-ink/10 bg-ink/5 inline-block text-sm font-medium">
                    Hello World — Subdomain Implementation
                </div>
            </main>

            <footer className="mt-16 opacity-50 text-sm">
                &copy; {new Date().getFullYear()} Duma Technology. Todos os direitos reservados.
            </footer>
        </div>
    );
}
