const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = {
  e2e: {
    baseUrl: 'https://demoqa.com',
    specPattern: 'cypress/e2e/features/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber());
    },
    supportFile: 'cypress/support/e2e.js',
  },
};