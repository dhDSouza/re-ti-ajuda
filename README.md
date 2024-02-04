# re-ti-ajuda

Este repositório contém uma reengenharia do back-end do aplicativo TI-AJUDA realizada na disciplina de Programação IV do curso de Tecnólogo em Análise e Desenvolvimento de Sistemas no Instituto Federal de Educação, Ciência e Tecnologia Farroupilha - Campus São Vicente do Sul.

## Sumário

1. [Pré-requisitos](#pré-requisitos)
2. [Visão geral da aplicação](#visão-geral-da-aplicação)
3. [Estrutura do repositório](#estrutura-do-repositório)
   - [Arquitetura Limpa](#arquitetura-limpa)
   - [Camada de Apresentação](#camada-de-apresentação)
   - [Camada de Infraestrutura](#camada-de-infraestrutura)
   - [Camada de Domínio](#camada-de-domínio)
   - [Camada Principal](#camada-principal)
4. [Coleção do Postman](#coleção-do-postman)
   - [Importando uma Coleção do Postman](#importando-uma-coleção-do-postman)
5. [Como utilizar este projeto](#como-utilizar-este-projeto)
6. [Docker Compose](#docker-compose)
   - [Executando um banco de dados de desenvolvimento local com o Docker Compose](#executando-um-banco-de-dados-de-desenvolvimento-local-com-o-docker-compose)
7. [Licença](#licença)

## Pré-requisitos

Antes de começar, verifique se você possui os seguintes pré-requisitos instalados:

- Docker (opcional): [Instale o Docker](https://docs.docker.com/get-docker/)
- Node.js: [Instale o Node.js](https://nodejs.org/)

## Visão geral da aplicação

A aplicação consiste nas seguintes funcionalidades:

1. Cadastrar e/ou logar na aplicação.
2. Consultar e/ou realizar perguntas.
3. Consultar e/ou efeturar respostas.

## Estrutura do repositório

O repositório está organizado nas seguindo os princípios da arquitetura limpa.

## Arquitetura Limpa

A Arquitetura Limpa é um padrão arquitetural que promove a separação de responsabilidades dividindo sistemas de software em várias camadas, cada uma com uma responsabilidade específica. O objetivo principal da Arquitetura Limpa é tornar um sistema sustentável e flexível ao longo do tempo. Ela é especialmente útil para aplicações de grande escala que requerem desenvolvimento e manutenção contínuos.

No centro da Arquitetura Limpa está o princípio de desacoplamento. Isso significa que cada camada da aplicação deve ser independente das outras, para que as alterações feitas em uma camada não afetem as outras. Essa separação de responsabilidades é essencial para criar um sistema que seja fácil de entender, testar e modificar.

Existem várias camadas em uma Arquitetura Limpa típica:

### **Camada de Apresentação**

 Esta camada é responsável pelo manuseio de entrada e saída do usuário. Ela consiste em componentes de interface do usuário, como páginas da web, visualizações e controladores. Essa camada se comunica com a camada de Domínio por meio de interfaces e é responsável por traduzir a entrada e saída do usuário em conceitos do domínio.

### **Camada de Infraestrutura**

Esta camada é responsável por fornecer os detalhes técnicos do sistema. Ela inclui componentes como bancos de dados, serviços externos e sistema de arquivos. Essa camada é responsável por fornecer implementações para as interfaces definidas na camada de Domínio.

### **Camada de Domínio**

Esta camada contém a lógica de negócio da aplicação. Ela é responsável pelas entidades, casos de uso e serviços do domínio do sistema.

### **Camada Principal**

Esta camada coordena a interação entre as outras camadas. Ela é responsável por iniciar a aplicação e conectar as diferentes camadas. Ela pode conter o código de injeção de dependência que conecta as diferentes camadas.

1. Camada de Apresentação:

   - Controllers: Responsáveis por receber as requisições HTTP e coordenar a interação entre as rotas, middlewares e os serviços do domínio.
   - Routes: Contém as definições das rotas e associação com os controladores correspondentes.
   - Middlewares: Lidam com aspectos transversais, como autenticação, validação de entrada e tratamento de erros.

Estrutura:
```bash
/controllers
   answer-controller.js
   question-controller.js
   user-controller.js

/routes
   answer-routes.js
   question-routes.js
   user-routes.js

/middlewares
   auth-middleware.js
   error-middleware.js
   validation-middleware.js
```

2. Camada de Infraestrutura:

   - Repositories: Responsáveis pela persistência e acesso aos dados.
   - Config: Configuração e conexão com a base de dados.

Estrutura:
```bash
/repositories
   answer-repository.js
   question-repository.js
   user-repository.js

/config
   connection.js
```

3. Camada de Domínio:

   - Models: Definição das entidades principais do domínio.
   - Services: Contêm a lógica de negócio, aplicam regras do domínio e orquestram as operações relacionadas às entidades.
   - Tests: Testes relacionados ao domínio e apresentação.

Estrutura:
```bash
/models
   answer.js
   question.js
   user.js

/services
   answer-service.js
   question-service.js
   user-service.js

/tests
   answer.test.js
   question.test.js
   user.test.js
   answer-service.test.js
   question-service.test.js
   user-service.test.js
```

4. Camada Principal:
   - server.js: Arquivo principal para iniciar o servidor.
   - demais arquivos de configurações.

Estrutura:
```bash
server.js
```

Um dos benefícios da Arquitetura Limpa é que ela permite flexibilidade e adaptabilidade. Como cada camada é independente, as alterações podem ser feitas em uma camada sem afetar as outras. Isso significa que o sistema pode ser modificado e atualizado sem arriscar a estabilidade de toda a aplicação.

## Coleção do Postman

O Postman é uma ferramenta popular usada para o desenvolvimento e teste de APIs. Ele fornece uma interface amigável para enviar solicitações para APIs e inspecionar as respostas.

Uma coleção do Postman é um grupo de solicitações que podem ser organizadas em pastas e compartilhadas entre os membros da equipe. Nesta seção, veremos como importar e exportar uma coleção do Postman.

Na raiz do projeto existe uma pasta `collections` nela contem o arquivo `re-ti-ajuda-postman-collection.json` este arquivo pode ser importado no Postman.

### Importando uma Coleção do Postman

Para importar uma coleção do Postman, siga estas etapas:

1. Abra o Postman e clique no botão "Importar" no canto superior esquerdo da tela.
2. Selecione o arquivo exportado que você deseja importar.
3. Escolha o formato desejado (Postman Collection v1, Postman Collection v2, etc.) e clique em "Importar".
4. A coleção estará disponível no seu espaço de trabalho do Postman.
5. Usando coleções do Postman, você pode compartilhar facilmente solicitações de API e garantir consistência entre os membros da equipe.

## Como utilizar este projeto

Siga as instruções abaixo para configurar e executar o projeto:

1. Instale as dependências necessárias usando o npm:

```bash
npm install
```

2. Configure as variáveis de ambiente:

    Crie um arquivo .env na raiz do projeto.
    Adicione as seguintes variáveis de ambiente ao arquivo `.env` e preencha com as informações necessárias:

```bash
DB_HOST=''
DB_USER=''
DB_PASS=''
DB_NAME=''
DB_DIALECT=''
DB_PORT=
PORT=
SECRET_KEY=''
```
3. Execute os testes (opcional):

```bash
npm test
```
Uma pasta `reports` será criada na raiz do projeto contendo um relatório detalhado em HTML dos testes realizados.

4. Inicie o servidor:

```bash
npm start
```

Agora você está pronto para começar a utilizar o projeto.

## Docker Compose

O Docker Compose é uma ferramenta que permite definir e executar aplicativos Docker com vários contêineres. Com o Docker Compose, você pode configurar e iniciar vários contêineres que fazem parte do seu aplicativo e gerenciar suas dependências e rede.

### Executando um banco de dados de desenvolvimento local com o Docker Compose

Um caso de uso comum para o Docker Compose é executar um banco de dados de desenvolvimento local. Por exemplo, este projeto usa o `MySQL`, você pode usar o Docker Compose para iniciar um contêiner do `MySQL` e conectar o projeto a ele.

Para fazer isso, foi criado um arquivo `docker-compose.yaml` no diretório raiz do projeto.

```yaml
# Use root/example como credenciais de usuário/senha
version: '3.1'

services:

  db:
    image: mysql
    # NOTA: O uso de "mysql_native_password" não é recomendado: https://dev.mysql.com/doc/refman/8.0/en/upgrading-from-previous-series.html#upgrade-caching-sha2-password
    # (este é apenas um exemplo, não pretende ser uma configuração de produção)
    command: --default-authentication-plugin=mysql_native_password
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: example

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080
```

Nesta configuração, definimos dois serviços chamados `db` e `adminer`, que utilizam imagens disponíveis no [Docker Hub](https://hub.docker.com/). Também especificamos que o contêiner deve ser sempre reiniciado em caso de falha `restart: always`

Para iniciar o contêiner, execute o seguinte comando no mesmo diretório do seu arquivo docker-compose.yaml:

```Bash
docker-compose up
```

Isso iniciará o contêiner do `MySQL` e exibirá seus logs no console. Você pode interromper o contêiner pressionando `Ctrl+C`.

**OBS: Lembrando que por padrão o `MySQL` utiliza a porta `3306` e o `adminer` está utilizando a porta `8080`, então certifique-se de que estas portas não estão sendo utilizadas por outros serviços em sua máquina. Se você já possuí o `MySQL` e um gerenciador (ex: `phpmyadmin`) instalados em sua máquina, não é necessário o uso do docker-compose.**

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE). Você tem a liberdade de usar, modificar e distribuir este código.
