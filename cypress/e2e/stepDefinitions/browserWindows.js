import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import browserWindowsPage from '../pageObjects/browserWindowsPage';

Given('I am on the demoqa homepage', () => {
  cy.visit('/');
});

When('I navigate to Alerts, Frame & Windows', () => {
  browserWindowsPage.navigateToAlertsFrameWindows();
});

When('I click on Browser Windows', () => {
  browserWindowsPage.navigateToBrowserWindows();
});

When('I open a new window', () => {
  browserWindowsPage.openNewWindow();
});

Then('I verify the new window contains {string}', (content) => {
  browserWindowsPage.verifyNewWindowContent(content);
});

Then('I close the new window', () => {
  cy.window().then((win) => {
    const newWin = win.open();
    newWin.close();
  });
});