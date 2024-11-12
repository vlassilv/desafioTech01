import SortablePage from '../support/pageObjects/sortablePage';

describe('Test Sortable Interaction', () => {
  it('Verify sorting functionality', () => {
    // Dado que estou na página inicial do demoqa
    cy.visit('https://demoqa.com');

    // Quando eu navego até Interactions
    SortablePage.navigateToInteractions();

    // E eu clico em Sortable
    SortablePage.clickOnSortable();

    // Então eu ordeno os itens da lista
    const beforeOrder = SortablePage.getItemsBeforeSort(); // Pega a ordem dos itens antes de ordenar
    SortablePage.sortItems(); // Ordena os itens

    // E verifico se os itens estão na nova ordem
    SortablePage.verifyItemsInNewOrder(beforeOrder); // Verifica se a ordem foi alterada
  });
});