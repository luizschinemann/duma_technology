# Site Institucional Duma Tech

Este projeto foi desenvolvido com Next.js e Tailwind CSS.

## Pré-requisitos

- Node.js (versão 18.x ou superior)
- npm, yarn ou pnpm

## Instruções para Execução

1.  **Clone o repositório ou extraia os arquivos** para um diretório local.

2.  **Navegue até o diretório do projeto** pelo terminal:
    ```bash
    cd duma-tech-site
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    ```
    Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura do Projeto

-   **`public/`**: Contém ativos estáticos, como a logo (`public/images/logo.png`).
-   **`src/app/`**: Contém o código principal da aplicação.
    -   **`(components)/`**: Componentes reutilizáveis (ex: `Header.tsx`, `Footer.tsx`).
    -   **`layout.tsx`**: Layout principal que envolve todas as páginas.
    -   **`page.tsx`**: Página inicial (Home).
    -   **`sobre/page.tsx`**: Página "Sobre Nós".
    -   **`servicos/page.tsx`**: Página "Serviços".
    -   **`contato/page.tsx`**: Página "Contato".
-   **`src/styles/globals.css`**: Estilos globais, incluindo configurações do Tailwind CSS.

## Customização

-   **Conteúdo das Páginas**: Edite os arquivos `.tsx` dentro de `src/app/` (e suas subpastas) para alterar os textos e a estrutura das seções.
-   **Estilos**: Utilize as classes do Tailwind CSS diretamente nos componentes para estilização. Para customizações mais globais, modifique `src/styles/globals.css` ou o arquivo de configuração do Tailwind (`tailwind.config.js`).
-   **Logo**: Substitua o arquivo `public/images/logo.png` pela sua própria imagem, mantendo o nome ou atualizando a referência no componente `Header.tsx`.

