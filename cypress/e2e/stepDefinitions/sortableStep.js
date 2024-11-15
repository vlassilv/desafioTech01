import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../pageObjects/HomePage';
import SortablePage from '../pageObjects/SortablePage';

Given('I am on the demoqa homepage', () => {
  HomePage.visit();
});

When('I navigate to Interactions', () => {
  cy.contains('Interactions').click();
});

When('I click on Sortable', () => {
  cy.contains('Sortable').click();
});

Then('I sort the list items', () => {
  SortablePage.sortListItems();
});

Then('verify that items are in the new order', () => {
  SortablePage.verifyNewOrder();
});