class FormsPage {
  clickPracticeForm() {
    cy.contains("Practice Form").click();
  }

  fillOutForm() {
    cy.get("#firstName").type("John");
    cy.get("#lastName").type("Doe");
    cy.get("#userEmail").type("johndoe@example.com");
    cy.get("#gender-radio-1").check();
    cy.get("#userNumber").type("1234567890");
    cy.get("#dateOfBirthInput").click();
    // Complete com seleção de data e outros campos do formulário, se necessário
  }

  uploadFile() {
    cy.get("#uploadPicture").attachFile("sample.txt"); // certifique-se de ter sample.txt em cypress/fixtures
  }

  submitForm() {
    cy.get("#submit").click();
  }

  verifyPopupAppears() {
    cy.get(".modal-content").should("be.visible");
  }

  closePopup() {
    cy.get("#closeLargeModal").click();
  }
}

export default new FormsPage();