import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pageObjects/HomePage';
import BrowserWindowsPage from '../pageObjects/BrowserWindowsPage';

Given('I am on the demoqa homepage', () => {
  HomePage.visit();
});

When('I navigate to Alerts, Frame & Windows', () => {
  BrowserWindowsPage.navigateToAlertsFrameWindows();
});

When('I click on Browser Windows', () => {
  BrowserWindowsPage.navigateToBrowserWindows();
});

When('I open a new window', () => {
  BrowserWindowsPage.openNewWindow();
});

Then('I verify the new window contains {string}', (content) => {
  BrowserWindowsPage.verifyNewWindowContent(content);
});

Then('I close the new window', () => {
  cy.window().then((win) => {
    const newWin = win.open();
    newWin.close();
  });
});