@Malavicka @filter2

Feature: Filter Employee Training Records by Training Type

  Scenario: Filter training records by Coursera training type
    Given I am on the Employee Training Records page
    When I filter the Training Type by "Coursera"
    Then all displayed training records should have Training Type as "Coursera"