@Filter
Feature: Myl_15.07.206_Search Employee Training Records

  Background:
    Given user is on the homepage of the site

  @Mylambigai
  @ValidFilter
  Scenario Outline: Verify user can search records using different filters
    When User enters "<Search Value>" in "<Column>" filter
    Then Only records containing "<Search Value>" should be displayed in "<Column>" column

    Examples:

      | Column        | Search Value          |
      | Completed     | 10                    |
      | EMP ID        | EMP001                |
      | Employee Name | Muhindhar S V         |
      | Course        | Playwright Automation |
      | Trainer Name  | Raj Kumar             |

  @Vetri
  @DateFilter
  Scenario Outline: Verify the user can filter records using date filters

    When User enters "<Date>" in "<Date Type>" filter
    Then Only records containing "<Date>" should be displayed in "<Date Type>" column

    Examples:
      | Date Type  | Date       |
      | Start Date | 2026-07-15 |
      | End Date   | 2026-07-15 |

  @Vetri
  @NoDataOnNonExistingDates
  Scenario Outline: Verify no records are displayed when the user selects a date with no matching records

    When User enters "<Date>" in "<Date Type>" filter
    Then no records should be displayed

    Examples:
      | Date Type  | Date       |
      | Start Date | 2035-01-01 |
      | End Date   | 2035-12-31 |

  @Mylambigai
  @InvalidFilter
  Scenario Outline: Verify user cannot find records using non-existing filter data
    When User enters "<Search Value>" in "<Column>" filter
    Then no records should be displayed in the table

    Examples:
      | Column        | Search Value |
      | Completed     | 0.0          |
      | EMP ID        | !@#$         |
      | Employee Name | Rana@        |
      | Course        | NoCourse     |
      | Trainer Name  | TrainerName  |

