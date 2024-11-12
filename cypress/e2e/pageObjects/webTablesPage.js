class WebTablesPage {
    // Seletor para o botão "Add"
    get addButton() {
      return cy.get('#addNewRecordButton');
    }
  
    // Seletor para o formulário de criação/edição
    get form() {
      return cy.get('.modal-content');
    }
  
    // Campos do formulário
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
  
    // Botão de envio do formulário
    get submitButton() {
      return cy.get('#submit');
    }
  
    // Método para criar um novo registro
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
  
    // Método para editar o primeiro registro encontrado
    editFirstRecord(newFirstName, newLastName) {
      cy.get('.action-buttons .mr-2').first().click(); // Botão de edição
      this.firstNameInput.clear().type(newFirstName);
      this.lastNameInput.clear().type(newLastName);
      this.submitButton.click();
    }
  
    // Método para excluir o primeiro registro encontrado
    deleteFirstRecord() {
      cy.get('.action-buttons [title="Delete"]').first().click();
    }
  
    // Método para verificar que um registro foi criado
    verifyRecordExists(firstName, lastName) {
      cy.get('.rt-tbody').contains(firstName).should('exist');
      cy.get('.rt-tbody').contains(lastName).should('exist');
    }
  
    // Método para criar múltiplos registros
    createMultipleRecords(records) {
      records.forEach(record => {
        this.addRecord(record.firstName, record.lastName, record.email, record.age, record.salary, record.department);
      });
    }
  
    // Método para deletar todos os registros
    deleteAllRecords() {
      cy.get('.rt-tbody [title="Delete"]').each(($el) => {
        cy.wrap($el).click();
      });
    }
  }
  
  export default new WebTablesPage();