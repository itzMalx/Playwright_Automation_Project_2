@Malavicka
Feature: Export Data to Excel

  As a user
  I want to export the displayed records into an Excel file
  So that I can download and use the data offline

  Background:
    Given the user launches the application

  Scenario: Export records to Excel successfully
    When the user clicks the Export to Excel button
    Then the Excel file should be downloaded successfully