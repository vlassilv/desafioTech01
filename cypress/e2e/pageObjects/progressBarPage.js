class ProgressBarPage {
    get startButton() {
      return cy.get('#startButton');
    }

    get stopButton() {
      return cy.get('#stopButton');
    }

    get resetButton() {
      return cy.get('#resetButton');
    }

    get progressBar() {
      return cy.get('#progressBar');
    }

    startProgressBar() {
      this.startButton.click();
    }

    stopProgressBar() {
      this.stopButton.click();
    }

    resetProgressBar() {
      this.resetButton.click();
    }

    validateProgressBarValue(expectedValue) {
      this.progressBar.should('have.attr', 'aria-valuenow', expectedValue);
    }

    waitUntilProgressBarReaches100() {
      this.progressBar.should('have.attr', 'aria-valuenow', '100');
    }
  }
  
  export default new ProgressBarPage();