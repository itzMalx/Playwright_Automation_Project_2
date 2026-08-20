@Vetri
Feature: Adding trainee training records

  Background:
    Given user is on the homepage of the site
    And user clicks on the add icon

  Scenario Outline: Verify adding valid employee training data is working
    When user enters the training data "<projectName>", "<empId>", "<employeeName>", "<course>", "<trainerName>", "<trainingType>", "<startDate>", "<endDate>", "<status>", "<percentageCompleted>"
    And user clicks on the add button
    Then user should be able to see the record created in the list

    Examples:
      | projectName | empId  | employeeName | course             | trainerName | trainingType | startDate  | endDate    | status      | percentageCompleted |
      | ABC         | EMP001 | Vetrivel     | Java Selenium      | Arun Kumar  | Udemy        | 19-08-2026 | 19-08-2026 | Not Started | 0                   |

  Scenario Outline: Verify adding invalid employee training data shows an error
    When user enters the training data "<projectName>", "<empId>", "<employeeName>", "<course>", "<trainerName>", "<trainingType>", "<startDate>", "<endDate>", "<status>", "<percentageCompleted>"
    And user clicks on the add button
    Then user should not be able to see the record created in the list
    And user should be able to see the error message

    Examples:
      | projectName | empId  | employeeName | course        | trainerName | trainingType | startDate  | endDate    | status      | percentageCompleted |
      | ABC         |        | Vetrivel     | Java Selenium | Arun Kumar  | Udemy        | 19-08-2026 | 19-08-2026 | Not Started | 0                   |
