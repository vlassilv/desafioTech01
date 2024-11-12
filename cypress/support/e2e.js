import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que erros uncaught terminem o teste
    return false;
  });
