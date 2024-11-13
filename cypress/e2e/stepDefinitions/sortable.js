import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SortablePage from '../support/pageObjects/sortablePage';

Given('I am on the demoqa homepage', () => {
  cy.visit('/');
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