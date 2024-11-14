import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../page_objects/HomePage';
import FormPage from '../pageObjects/FormPage';

Given('I am on the demoqa homepage', () => {
    HomePage.visit();
});

When('I navigate to the Forms section', () => {
    FormPage.navigateToFormsSection();
});

When('I click on Practice Form', () => {
    FormPage.navigateToPracticeForm();
});

When('I fill out the form with random data', () => {
    FormPage.fillFormWithRandomData();
});

When('I upload a .txt file', () => {
    FormPage.uploadTxtFile();
});

Then('I submit the form', () => {
    FormPage.submitForm();
});

Then('I verify that a popup appears', () => {
    FormPage.verifyPopupAppears();
});

Then('I close the popup', () => {
    FormPage.closePopup();
});