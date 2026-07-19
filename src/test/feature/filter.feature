@search
Feature: Myl_15.07.206_Search Employee Training Records

  Background:
    Given user is on the homepage of the site

  @Mylambigai
  Scenario Outline: Verify user can search records using different filters
    When User enters "<Search Value>" in "<Column>" filter
    Then Only records containing "<Search Value>" should be displayed in "<Column>" column

    Examples:
      | Column        | Search Value          |
      | Completed	    | 10                    |
      | EMP ID        | EMP001                |
      | Employee Name | Muhindhar S V         |
      | Course        | Playwright Automation |
      | Trainer Name  | Raj Kumar             |