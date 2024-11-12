const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler();
      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    baseUrl: "https://demoqa.com",
    specPattern: 'cypress/e2e/features/*.feature', // Define apenas arquivos .feature para serem executados
    supportFile: 'cypress/support/commands.js', // Certifique-se que o arquivo de suporte está no lugar correto
  },
});
