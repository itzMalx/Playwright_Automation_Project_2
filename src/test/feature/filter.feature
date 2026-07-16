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