Feature: Test Sortable Interaction

Scenario: Verify sorting functionality
  Given I am on the demoqa homepage
  When I navigate to Interactions
  And I click on Sortable
  Then I sort the list items
  And verify that items are in the new order