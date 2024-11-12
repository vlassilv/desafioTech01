class SortablePage {
    // Seletor para a lista de itens que pode ser ordenada
    get sortableList() {
      return cy.get('#sortable');
    }
  
    // Seletor para os itens da lista
    get sortableItems() {
      return this.sortableList.find('li');
    }
  
    // Método para navegar até a página de Interactions
    navigateToInteractions() {
      cy.contains('Interactions').click();
    }
  
    // Método para clicar em "Sortable"
    clickOnSortable() {
      cy.contains('Sortable').click();
    }
  
    // Método para pegar o valor de uma lista antes de ordenar (retorna os textos dos itens)
    getItemsBeforeSort() {
      return this.sortableItems.map((index, el) => {
        return Cypress.$(el).text();
      });
    }
  
    // Método para ordenar os itens (arrastar e soltar)
    sortItems() {
      this.sortableItems.first().trigger('dragstart');
      this.sortableItems.last().trigger('drop');
    }
  
    // Método para validar a nova ordem dos itens
    verifyItemsInNewOrder(beforeOrder) {
      this.sortableItems.each((index, el) => {
        const itemText = Cypress.$(el).text();
        expect(beforeOrder.includes(itemText)).to.be.true;
      });
    }
  }
  
  export default new SortablePage();