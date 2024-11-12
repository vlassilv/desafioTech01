class HomePage {
    get formsOption() {
      return cy.contains('Forms');
    }
  
    get alertsFrameWindowsOption() {
      return cy.contains('Alerts, Frame & Windows');
    }
  
    get elementsOption() {
      return cy.contains('Elements');
    }
  
    get widgetsOption() {
      return cy.contains('Widgets');
    }
  
    get interactionsOption() {
      return cy.contains('Interactions');
    }
  
    navigateToForms() {
      this.formsOption.click();
    }
  
    navigateToAlertsFrameWindows() {
      this.alertsFrameWindowsOption.click();
    }
  
    navigateToElements() {
      this.elementsOption.click();
    }
  
    navigateToWidgets() {
      this.widgetsOption.click();
    }
  
    navigateToInteractions() {
      this.interactionsOption.click();
    }
  }
  
  export default new HomePage();