class BrowserWindowsPage {
    get alertsFrameWindowsOption() {
      return cy.contains('Alerts, Frame & Windows');
    }
  
    get browserWindowsOption() {
      return cy.contains('Browser Windows');
    }
  
    get newWindowButton() {
      return cy.get('#windowButton');
    }
  
    navigateToAlertsFrameWindows() {
      this.alertsFrameWindowsOption.click();
    }
  
    navigateToBrowserWindows() {
      this.browserWindowsOption.click();
    }
  
    openNewWindow() {
      this.newWindowButton.click();
    }
  
    verifyNewWindowContent() {
      cy.window().then((win) => {
        const newWindow = win.open('https://demoqa.com/sample');
        cy.wrap(newWindow.document.body)
          .invoke('text')
          .should('include', 'This is a sample page');
      });
    }
  }
  
  export default new BrowserWindowsPage();