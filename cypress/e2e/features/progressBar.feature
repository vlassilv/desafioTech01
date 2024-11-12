Feature: Test Progress Bar

Scenario: Validate Progress Bar value
  Given I am on the demoqa homepage
  When I navigate to Widgets
  And I click on Progress Bar
  And I start the progress bar
  And I stop it before 25%
  Then I validate that the progress bar value is less than or equal to 25%
  And I start the progress bar again
  And I wait until it reaches 100% and reset the progress bar