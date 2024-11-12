class ProgressBarPage {
    // Seletor para o botão de 'Start'
    get startButton() {
      return cy.get('#startButton');
    }
  
    // Seletor para o botão de 'Stop'
    get stopButton() {
      return cy.get('#stopButton');
    }
  
    // Seletor para o botão de 'Reset'
    get resetButton() {
      return cy.get('#resetButton');
    }
  
    // Seletor para a barra de progresso
    get progressBar() {
      return cy.get('#progressBar');
    }
  
    // Método para iniciar a barra de progresso
    startProgressBar() {
      this.startButton.click();
    }
  
    // Método para parar a barra de progresso
    stopProgressBar() {
      this.stopButton.click();
    }
  
    // Método para resetar a barra de progresso
    resetProgressBar() {
      this.resetButton.click();
    }
  
    // Método para verificar o valor da barra de progresso
    validateProgressBarValue(expectedValue) {
      this.progressBar.should('have.attr', 'aria-valuenow', expectedValue);
    }
  
    // Método para esperar até que a barra de progresso atinja 100%
    waitUntilProgressBarReaches100() {
      this.progressBar.should('have.attr', 'aria-valuenow', '100');
    }
  }
  
  export default new ProgressBarPage();