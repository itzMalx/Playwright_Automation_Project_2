@Search
Feature: Search Employee Training

  Background:
     Given user is on the homepage of the site

  @Mylambigai
  Scenario Outline: Verify user can search records using different filters
    When User enters "<Search Value>" in "<Column>" filter
    Then Only records containing "<Search Value>" should be displayed in "<Column>" column

    Examples:
      | Column         | Search Value |
      | Project Name   | ABC          |
      | EMP ID         | 1002         |
      | Employee Name  | Sriram       |
      | Course         | AI-DS        |
      | Trainer Name   | ARUN         |

  
  @DateFilter
  Scenario Outline: Verify the user can filter records using date filters

    When the user selects "<Date>" in the "<Date Type>" filter
    Then only records containing "<Date>" should be displayed in "<Date Type>" column

    Examples:
        | Date Type | Date |
        | Start Date | 30-07-2026 |
        | End Date | 15-07-2026 |