This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para visualizar o resultado.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Estrutura do projeto

- `app/page.tsx`:  Este diretório contém a lógica central da aplicação, incluindo rotas e gerenciamento de estados com o App Router.
- `src/components`: Aqui, você encontrará componentes reutilizáveis usados para estilização e estruturação da interface do usuário.
- `src/assets`: Este diretório contém imagens e arquivos SVG que são utilizados para estilização e exibição de recursos visuais no projeto.
- `src/providers`: Contém funções de interação do lado do cliente e gerenciamento de estados. Aqui, você pode encontrar os contextos e provedores relacionados ao estado
- `src/services/api.ts`: Este arquivo contém a configuração da API que é usada no projeto. Certifique-se de configurar sua API_KEY aqui para acessar os recursos da TMDB.
- `src/services/utils.ts`: Contém funções úteis que podem ser usadas para manipular os dados recebidos da API no lado do servidor do Next.js.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Utilização da API

Para usar a API neste projeto, você deve obter uma API_KEY da The Movie Database (TMDB). Esta chave deve ser configurada no arquivo `.env` na raiz do projeto. Certifique-se de seguir as instruções da TMDB para obter sua API_KEY.

```bash
API_KEY=your-api-key-here
```

Lembre-se de não compartilhar sua API_KEY publicamente e mantenha-a segura. Certifique-se também de que o arquivo `.env` não seja adicionado ao controle de versão. Você pode adicionar `.env` ao arquivo `.gitignore` para evitar a exposição acidental da sua chave.