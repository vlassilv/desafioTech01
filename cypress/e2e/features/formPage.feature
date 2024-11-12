Feature: Test Form Page

  Scenario: Fill and submit the practice form
    Given I am on the demoqa homepage
    When I navigate to the Forms section
    And I click on Practice Form
    And I fill out the form with random data
    And I upload a .txt file
    Then I submit the form
    And I verify that a popup appears
    And I close the popup