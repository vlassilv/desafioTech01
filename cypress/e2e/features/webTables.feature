Feature: Test Web Tables Page

Scenario: Add, edit, and delete a record in Web Tables
  Given I am on the demoqa homepage
  When I navigate to Elements
  And I click on Web Tables
  And I create a new record
  And I edit the new record
  And I delete the new record
  Then I dynamically create 12 records using Cucumber
  And I delete all the created records