import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ProgressBarPage from '../support/pageObjects/progressBarPage';

Given('I am on the demoqa homepage', () => {
  cy.visit('/');
});

When('I navigate to Widgets', () => {
  cy.contains('Widgets').click();
});

When('I click on Progress Bar', () => {
  cy.contains('Progress Bar').click();
});

When('I start the progress bar', () => {
  ProgressBarPage.startProgressBar();
});

When('I stop it before 25%', () => {
  // Aguarda até que a barra de progresso atinja menos de 25%
  ProgressBarPage.progressBar.should('have.attr', 'aria-valuenow').and('be.lt', 25);
  ProgressBarPage.stopProgressBar();
});

Then('I validate that the progress bar value is less than or equal to 25%', () => {
  ProgressBarPage.validateProgressBarValue(25);
});

When('I start the progress bar again', () => {
  ProgressBarPage.startProgressBar();
});

Then('I wait until it reaches 100% and reset the progress bar', () => {
  ProgressBarPage.waitUntilProgressBarReaches100();
  ProgressBarPage.resetProgressBar();
});