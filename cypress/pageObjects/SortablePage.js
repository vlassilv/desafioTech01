class SortablePage {

  get sortableList() {
    return cy.get('#sortable');
  }

  get sortableItems() {
    return this.sortableList.find('li');
  }

  navigateToInteractions() {
    cy.contains('Interactions').click();
  }

  clickOnSortable() {
    cy.contains('Sortable').click();
  }

  getItemsBeforeSort() {
    return this.sortableItems.map((index, el) => {
      return Cypress.$(el).text();
    });
  }

  sortItems() {
    this.sortableItems.first().trigger('dragstart');
    this.sortableItems.last().trigger('drop');
  }

  verifyItemsInNewOrder(beforeOrder) {
    this.sortableItems.each((index, el) => {
      const itemText = Cypress.$(el).text();
      expect(beforeOrder.includes(itemText)).to.be.true;
    });
  }
}

export default new SortablePage();