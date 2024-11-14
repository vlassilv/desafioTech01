class WebTablesPage {

  get addButton() {
    return cy.get('#addNewRecordButton');
  }

  get form() {
    return cy.get('.modal-content');
  }

  get firstNameInput() {
    return cy.get('#firstName');
  }

  get lastNameInput() {
    return cy.get('#lastName');
  }

  get emailInput() {
    return cy.get('#userEmail');
  }

  get ageInput() {
    return cy.get('#age');
  }

  get salaryInput() {
    return cy.get('#salary');
  }

  get departmentInput() {
    return cy.get('#department');
  }

  get submitButton() {
    return cy.get('#submit');
  }

  addRecord(firstName, lastName, email, age, salary, department) {
    this.addButton.click();
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.ageInput.type(age);
    this.salaryInput.type(salary);
    this.departmentInput.type(department);
    this.submitButton.click();
  }

  editFirstRecord(newFirstName, newLastName) {
    cy.get('.action-buttons .mr-2').first().click(); // Botão de edição
    this.firstNameInput.clear().type(newFirstName);
    this.lastNameInput.clear().type(newLastName);
    this.submitButton.click();
  }

  deleteFirstRecord() {
    cy.get('.action-buttons [title="Delete"]').first().click();
  }

  verifyRecordExists(firstName, lastName) {
    cy.get('.rt-tbody').contains(firstName).should('exist');
    cy.get('.rt-tbody').contains(lastName).should('exist');
  }

  createMultipleRecords(records) {
    records.forEach(record => {
      this.addRecord(record.firstName, record.lastName, record.email, record.age, record.salary, record.department);
    });
  }

  deleteAllRecords() {
    cy.get('.rt-tbody [title="Delete"]').each(($el) => {
      cy.wrap($el).click();
    });
  }
}

export default new WebTablesPage();