import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import HomePage from "../../page_objects/HomePage";
import WebTablesPage from '../support/pageObjects/WebTablesPage';

Given('I am on the demoqa homepage', () => {
  HomePage.visit();
});

When('I navigate to Elements', () => {
  cy.contains('Elements').click();
});

When('I click on Web Tables', () => {
  cy.contains('Web Tables').click();
});

When('I create a new record', () => {
  WebTablesPage.createRecord({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: '30',
    salary: '5000',
    department: 'Engineering'
  });
});

When('I edit the new record', () => {
  WebTablesPage.editRecord('john.doe@example.com', {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@updated.com',
    age: '31',
    salary: '5500',
    department: 'Product'
  });
});

When('I delete the new record', () => {
  WebTablesPage.deleteRecord('john.doe@updated.com');
});

Then('I dynamically create 12 records using Cucumber', () => {
  for (let i = 1; i <= 12; i++) {
    WebTablesPage.createRecord({
      firstName: `User${i}`,
      lastName: `Test${i}`,
      email: `user${i}@example.com`,
      age: `${20 + i}`,
      salary: `${4000 + i * 100}`,
      department: `Dept${i}`
    });
  }
});

Then('I delete all the created records', () => {
  for (let i = 1; i <= 12; i++) {
    WebTablesPage.deleteRecord(`user${i}@example.com`);
  }
});