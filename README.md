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

#### - Feature: Test Browser Windows Page
#### Scenario: Open a new window and verify its contents
    Given I am on the demoqa homepage
    When I navigate to Alerts, Frame & Windows
    And I click on Browser Windows
    And I open a new window
    Then I verify the new window contains "This is a sample page"
    And I close the new window

#### - Feature: Test Form Page
#### Scenario: Fill and submit the practice form
    Given I am on the demoqa homepage  
    When I navigate to the Forms section  
    And I click on Practice Form
    And I fill out the form with random data
    And I upload a .txt file
    Then I submit the form
    And I verify that a popup appears
    And I close the popup

#### - Feature: Test Progress Bar
#### Scenario: Validate Progress Bar value
    Given I am on the demoqa homepage
    When I navigate to Widgets
    And I click on Progress Bar
    And I start the progress bar
    And I stop it before 25%
    Then I validate that the progress bar value is less than or equal to 25%
    And I start the progress bar again
    And I wait until it reaches 100% and reset the progress bar

#### - Feature: Test Sortable Interaction
#### Scenario: Verify sorting functionality
    Given I am on the demoqa homepage
    When I navigate to Interactions
    And I click on Sortable
    Then I sort the list items
    And verify that items are in the new order

#### - Feature: Test Web Tables Page
#### Scenario: Add, edit, and delete a record in Web Tables
    Given I am on the demoqa homepage
    When I navigate to Elements
    And I click on Web Tables
    And I create a new record
    And I edit the new record
    And I delete the new record
    Then I dynamically create 12 records using Cucumber
    And I delete all the created records

## Estrutura do Projeto

    desafioTech01/

        ├── cypress/

            ├── e2e/

                ├── features/

                    ├── browserWindows.feature      # Arquivo .feature com cenários de teste para Browser Windows

                    ├── formPage.feature            # Arquivo .feature com cenários de teste para Form Page

                    ├── progressBar.feature         # Arquivo .feature com cenários de teste para Progress Bar

                    ├── sortable.feature            # Arquivo .feature com cenários de teste para Sortable

                    └── webTables.feature           # Arquivo .feature com cenários de teste para Web Tables

                ├── pageObjects/

                    ├── browserWindowsPage.js       # Page Object para interagir com elementos da página Browser Windows

                    ├── formPage.js                 # Page Object para interagir com elementos da página Form Page

                    ├── homePage.js                 # Page Object para interagir com elementos da página Home Page

                    ├── progressBarPage.js          # Page Object para interagir com elementos da página Progress Bar

                    ├── sortablePage.js             # Page Object para interagir com elementos da página Sortable

                    └── webTablesPage.js            # Page Object para interagir com elementos da página Web Tables

                └── step_definitions/

                    ├── browserWindows.js           # Arquivo de steps para o teste de Web Tables

                    ├── formPage.js                 # Arquivo de steps para o teste de Web Tables

                    ├── progressBar.js              # Arquivo de steps para o teste de Web Tables

                    ├── sortable.js                 # Arquivo de steps para o teste de Web Tables

                    └── webTables.js                # Arquivo de steps para o teste de Progress Bar

            ├── fixtures/                           # Pasta para armazenar dados de teste fixos

                └── fileUpload.txt                  # Arquivo de texto para upload

            ├── support/

                ├── commands.js                     # Custom commands para o Cypress

                └── e2e.js                          # Configurações e eventos globais do Cypress

        ├── cypress.config.js                   # Configuração principal do Cypress, incluindo specPattern

        ├── node_modules/                           # Dependências do projeto (gerado pelo npm)

        ├── .gitignore                              # Arquivo para ignorar arquivos e pastas desnecessárias no Git

        ├── package.json                            # Gerenciamento de dependências do projeto

        └── README.md                               # Documentação do projeto (opcional)

### Descrição das Pastas e Arquivos

- cypress/e2e/features/: Contém arquivos .feature onde cada arquivo define um conjunto de cenários de teste em Gherkin.

- cypress/e2e/step_definitions/: Contém arquivos .js que implementam os steps descritos nos arquivos .feature. Cada arquivo de steps implementa um ou mais cenários específicos para uma funcionalidade.

- cypress/support/pageObjects/: Contém arquivos JavaScript que definem os Page Objects. Cada arquivo aqui representa uma página ou componente específico da aplicação e contém métodos para interagir com elementos dessa página.

- cypress/fixtures/: Contém arquivos .json com dados de teste que podem ser usados em testes para fornecer dados de entrada consistentes.

- cypress/support/commands.js: Arquivo para comandos personalizados do Cypress que podem ser usados em diferentes testes.

- cypress/support/e2e.js: Configurações e eventos globais do Cypress.

- cypress.config.js: Configuração principal do Cypress, onde você define o caminho do specPattern e outras opções de configuração.

- package.json: Arquivo de configuração do npm que contém as dependências e scripts do projeto.

- .gitignore: Arquivo para especificar quais arquivos e pastas o Git deve ignorar.

- README.md: Arquivo opcional para documentar o projeto, instruindo outros usuários sobre como configurar e executar os testes.

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