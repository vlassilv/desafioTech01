class FormPage {
  get formsOption() {
    return cy.contains('Forms');
  }

  get practiceFormOption() {
    return cy.contains('Practice Form');
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

  get genderOption() {
    return cy.get('[name="gender"]').first();
  }

  get mobileInput() {
    return cy.get('#userNumber');
  }

  get uploadInput() {
    return cy.get('#uploadPicture');
  }

  get submitButton() {
    return cy.get('#submit');
  }

  navigateToFormsSection() {
    this.formsOption.click();
  }

  navigateToPracticeForm() {
    this.practiceFormOption.click();
  }

  fillFormWithRandomData() {
    this.firstNameInput.type('John');
    this.lastNameInput.type('Doe');
    this.emailInput.type('john.doe@example.com');
    this.genderOption.check();
    this.mobileInput.type('1234567890');
  }

  uploadTxtFile() {
    this.uploadInput.attachFile('fileUpload.txt'); // O arquivo fileUpload.txt estar na pasta cypress/fixtures
  }

  submitForm() {
    this.submitButton.click();
  }

  verifyPopupAppears() {
    cy.get('.modal-content').should('be.visible');
  }

  closePopup() {
    cy.get('#closeLargeModal').click();
  }
}

export default new FormPage();