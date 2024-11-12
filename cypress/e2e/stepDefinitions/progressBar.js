import ProgressBarPage from '../support/pageObjects/progressBarPage';

describe('Test Progress Bar', () => {
  it('Validate Progress Bar value', () => {
    // Dado que estou na página inicial do demoqa
    cy.visit('https://demoqa.com');

    // Quando eu navego até Widgets
    cy.contains('Widgets').click();

    // E eu clico em Barra de Progresso
    cy.contains('Progress Bar').click();

    // E eu inicio a barra de progresso
    ProgressBarPage.startProgressBar();

    // E eu paro antes de 25%
    ProgressBarPage.progressBar.should('have.attr', 'aria-valuenow').and('be.lt', 25);
    ProgressBarPage.stopProgressBar();

    // Então eu valido que o valor da barra de progresso é menor ou igual a 25%
    ProgressBarPage.validateProgressBarValue('25');

    // E eu inicio a barra de progresso novamente
    ProgressBarPage.startProgressBar();

    // E eu espero até que ela atinja 100% e reseto a barra de progresso
    ProgressBarPage.waitUntilProgressBarReaches100();
    ProgressBarPage.resetProgressBar();
  });
});