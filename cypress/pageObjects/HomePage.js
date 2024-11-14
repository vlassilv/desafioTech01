class HomePage {
  visit() {
    cy.visit("https://demoqa.com/");
  }

  selectFormsSection() {
    cy.contains("Forms").click();
  }
}

export default new HomePage();