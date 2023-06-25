## Teste Leadster FrontEnd - Junho 2023

### Demanda
- Desenvolver um landing page com o framework NextJS;
- Utilizar um arquivo {JSON} para a listagem de vídeos (e seus detalhes) pasra abrir em um modal;
- Utilização de padrões de sintaxe e semântica de código (HTML, Javascript e CSS);
- Atenção à usabilidade da página;
- Utilizar Styled Components;
- Prever Layout responsivo

## Documentação de Implantação

### Pré-requisitos
Antes de prosseguir com a implantação, é necessário garantir que o ambiente de desenvolvimento atenda aos seguintes pré-requisitos:
Node.js (versão 12 ou superior) instalado no servidor de hospedagem
Gerenciador de pacotes npm (ou yarn) instalado

### Etapas de Implantação
Siga as etapas abaixo para implantar o código web:

1. Clone o repositório do código web para o servidor de hospedagem.

2. Navegue até o diretório raiz do projeto clonado.

3. Execute o seguinte comando para instalar as dependências do projeto:
```bash
npm install
# or
yarn install
```

4. Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar a aplicação:
```bash
npm run dev
# or
yarn dev
```
Este comando irá iniciar a aplicação no modo de desenvolvimento.

5. Acesse a aplicação web no navegador utilizando o endereço local: 
[http://localhost:3000](http://localhost:3000)

## Configurações Adicionais

### Metadados
A página inicial `/index.tsx/*` e o componente `/HeadSite.tsx/*` contêm metadados importantes para SEO e exibição nos motores de busca. Certifique-se de atualizar as informações conforme necessário, incluindo o título, descrição, palavras-chave e favicon.

### Imagens e Logos
Certifique-se de substituir as imagens de exemplo pelos arquivos corretos da sua aplicação. As imagens estão localizadas na pasta `/public/images/*`. Certifique-se de manter a estrutura correta de pastas e atualize as referências de imagem nos componentes apropriados.

### Dados dos Vídeos
O componente `/GridVideos.tsx/*` utiliza dados estáticos de vídeos a partir de um arquivo JSON `/Main/videos.json/*`. Certifique-se de atualizar os dados do arquivo JSON com os vídeos corretos da sua aplicação.

### Considerações Finais
Após a conclusão dessas etapas, o código web estará implantado e acessível por meio do servidor de hospedagem. Certifique-se de realizar os testes necessários para garantir que a aplicação esteja funcionando conforme o esperado.

Lembre-se de que esta documentação cobre apenas a implantação do código web. Outros aspectos, como implantação de banco de dados, configurações de servidor e escalabilidade, podem exigir etapas adicionais que não são abordadas aqui.

### Deploy de Desenvolvimento
O deploy de desenvolvimento foi realizado na plataforma Vercel e pode ser acessado em [Deploy Leadster](https://leadster-alpha.vercel.app/) 



