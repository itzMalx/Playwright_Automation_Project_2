@Malavicka
@edit2
Feature: Edit Employee Training Record

  Scenario: Edit project name for an employee
    Given I am on the Employee Training Records page
    When I edit the training record for employee "RISHWNATH_BF"
    And I change the project name from "ABC" to "CDE"
    And I click the Update button
    Then the project name should be updated to "CDE" for employee "RISHWNATH_BF"