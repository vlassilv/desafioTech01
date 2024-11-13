import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import formPage from '../pageObjects/formPage';

Given('I am on the demoqa homepage', () => {
  cy.visit('/');
});

When('I navigate to the Forms section', () => {
  formPage.navigateToFormsSection();
});

When('I click on Practice Form', () => {
  formPage.navigateToPracticeForm();
});

When('I fill out the form with random data', () => {
  formPage.fillFormWithRandomData();
});

When('I upload a .txt file', () => {
  formPage.uploadTxtFile();
});

Then('I submit the form', () => {
  formPage.submitForm();
});

Then('I verify that a popup appears', () => {
  formPage.verifyPopupAppears();
});

Then('I close the popup', () => {
  formPage.closePopup();
});