Feature: Test Browser Windows Page

Scenario: Open a new window and verify its contents
  Given I am on the demoqa homepage
  When I navigate to Alerts, Frame & Windows
  And I click on Browser Windows
  And I open a new window
  Then I verify the new window contains "This is a sample page"
  And I close the new window