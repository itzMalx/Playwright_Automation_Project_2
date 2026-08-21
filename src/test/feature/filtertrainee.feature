@Shobana
Feature: Shobana_21-08-2026_Filter trainee training records

Feature Description:
    As a user, I want to filter trainee training records using different filter options.

Background:
    Given user is on the homepage of the site


Scenario: Filter trainee training record using project name

    When User enters project name "ABC" in the project name filter
    Then Trainee record with project name "ABC" should be displayed


Scenario: Filter trainee training record using employee ID

    When User enters employee ID "EMP003" in the employee ID filter
    Then Trainee record with employee ID "EMP003" should be displayed


Scenario: Filter trainee training record using employee name

    When User enters employee name "Muhindhar S V" in the employee name filter
    Then Trainee record with employee name "Muhindhar S V" should be displayed


Scenario: Filter trainee training record using course name

    When User enters course name "Playwright with TypeScript" in the course filter
    Then Trainee record with course name "Playwright with TypeScript" should be displayed


Scenario: Filter trainee training record using trainer name

    When User enters trainer name "Priyanka" in the trainer name filter
    Then Trainee record with trainer name "Priyanka" should be displayed