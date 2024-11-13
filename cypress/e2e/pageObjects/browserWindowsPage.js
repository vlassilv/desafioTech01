class BrowserWindowsPage {
  // Método para navegar até a seção "Alerts, Frame & Windows"
  navigateToAlertsFrameWindows() {
    cy.contains('Alerts, Frame & Windows').click();
  }

  // Método para navegar até a seção "Browser Windows"
  navigateToBrowserWindows() {
    cy.contains('Browser Windows').click();
  }

  // Método para abrir uma nova janela
  openNewWindow() {
    cy.get('#windowButton').click(); // Substitua '#windowButton' pelo seletor correto
  }

  // Método para verificar o conteúdo da nova janela
  verifyNewWindowContent(expectedContent) {
    cy.window().then((win) => {
      cy.stub(win, 'open').callsFake((url) => {
        const newWindow = cy.window().its('open').then(() => cy.visit(url));
        cy.wrap(newWindow).its('document.body').should('contain.text', expectedContent);
      });
    });
  }
}

export default new BrowserWindowsPage();