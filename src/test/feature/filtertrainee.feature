@Shobana
Feature: Filter trainee training records

Feature Description:
    As a user,
    I want to filter trainee training records using Employee ID.

Background:
    Given user is on the homepage of the site

Scenario: Filter trainee training record using employee ID

    When User enters employee ID "EMP001" in the filter
    And User applies the filter
    Then Trainee record with employee ID "EMP001" should be displayed