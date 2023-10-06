
## Pré-requisitos

Primeiro, inicie o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para visualizar o resultado.

## Estrutura do projeto

- `app/page.tsx`:  Este diretório contém a lógica central da aplicação, incluindo rotas e gerenciamento de estados com o App Router.
- `src/components`: Aqui, você encontrará componentes reutilizáveis usados para estilização e estruturação da interface do usuário.
- `src/assets`: Este diretório contém imagens e arquivos SVG que são utilizados para estilização e exibição de recursos visuais no projeto.
- `src/providers`: Contém funções de interação do lado do cliente e gerenciamento de estados. Aqui, você pode encontrar os contextos e provedores relacionados ao estado
- `src/services/api.ts`: Este arquivo contém a configuração da API que é usada no projeto. Certifique-se de configurar sua API_KEY aqui para acessar os recursos da TMDB.
- `src/services/utils.ts`: Contém funções úteis que podem ser usadas para manipular os dados recebidos da API no lado do servidor do Next.js.

## Navegando no Projeto

Para se localizar facilmente no projeto, aqui estão algumas informações úteis:

- `src/app`: Este diretório contém as páginas da aplicação. As páginas são componentes React que representam as diferentes rotas da aplicação Next.js. Você pode encontrar as páginas aqui e personalizá-las conforme necessário. Para adicionar ou editar uma página, basta criar ou modificar um arquivo `.js` ou `.jsx` neste diretório.

- `src/components`: Aqui, você encontrará componentes reutilizáveis que são usados para a estilização e estruturação da interface do usuário. Se desejar fazer alterações na aparência ou no comportamento da aplicação, este é o lugar onde você pode adicionar ou editar esses componentes. Você pode reutilizá-los em várias partes do seu projeto.

A partir destes diretórios, você pode explorar e personalizar o projeto de acordo com suas necessidades. Sinta-se à vontade para adicionar, modificar ou excluir páginas e componentes para atender aos requisitos específicos do seu projeto. Certifique-se de que as alterações estão em conformidade com as melhores práticas do Next.js e React.


## Utilização da API

Para usar a API neste projeto, você deve obter uma API_KEY da The Movie Database (TMDB). Esta chave deve ser configurada no arquivo `.env` na raiz do projeto. Certifique-se de seguir as instruções da TMDB para obter sua API_KEY.

```bash
API_KEY=your-api-key-here
```

Lembre-se de não compartilhar sua API_KEY publicamente e mantenha-a segura. Certifique-se também de que o arquivo `.env` não seja adicionado ao controle de versão. Você pode adicionar `.env` ao arquivo `.gitignore` para evitar a exposição acidental da sua chave.