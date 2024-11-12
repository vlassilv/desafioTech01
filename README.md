# Projeto Cypress - Testes Automatizados - DemoQA
   Este projeto contém testes automatizados usando [Cypress](https://www.cypress.io/). 

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Cenários de Testes](#cenários-de-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Execução dos Testes](#execução-dos-testes)
  - [Modo Interativo (Cypress GUI)](#modo-interativo-cypress-gui)
  - [Modo Headless (Sem Interface Gráfica)](#modo-headless-sem-interface-gráfica)
- [Variáveis de Ambiente](#variáveis-de-ambiente)

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/en/) (versão atualizada)
- [npm](https://www.npmjs.com/) (normalmente vem com o Node.js)
- [Cypress](https://www.cypress.io/) (instalado via npm)

## Instalação

Siga estas etapas para clonar o repositório e instalar as dependências:

### Clonar o repositório
```
git clone https://github.com/vlassilv/desafioTech01.git
```
### Navegar para o diretório do projeto
```
cd desafioTech01-cypress
```

### instalar o Cypress
```
npm install cypress --save-dev
```

### Abrir o Cypress pela primeira vez
```
npx cypress open
```
> Após abrir o cypress, será criado uma estrutura básica de pastas do Cypress

/cypress

  ├── e2e

  ├── fixtures

  ├── support

> Essa é uma estrutura básica, pode ser modificada conforme necessidade.


### Instalar o cypress-file-upload, siga estes passos:

Instale a biblioteca usando o npm com o seguinte comando:
```
npm install --save-dev cypress-file-upload
```
Importe o plugin no arquivo de configuração do Cypress. Abra o arquivo cypress/support/commands.js e adicione esta linha:

```
import 'cypress-file-upload';
```
### Cenários de Teste

## Estrutura do Projeto

DESAFIOTECH01/

### Descrição das Pastas e Arquivos

## Execução dos Testes

### Modo Interativo (Cypress GUI)
Para rodar os testes de forma interativa com a interface gráfica do Cypress:
```
npx run open
```
### Modo Headless (Sem Interface Gráfica)
Para rodar os testes em modo headless (útil para CI/CD ou pipelines):
```
npm run test
```