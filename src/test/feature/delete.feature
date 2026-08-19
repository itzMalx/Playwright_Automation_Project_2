@Muhindhar
Feature:  Muhindhar_12-08-2026(updated)_Delete a trainee training record

              Description:
              As a user, I want to delete a trainee training record from the list

        Scenario Outline: Delete an existing trainee training record successfully
            Given user is on the homepage of the employee training records
             When user deletes the trainee with employee ID "<empId>"
             Then the trainee with employee ID "<empId>" should not be displayed in the list

        Examples:
                  | empId  |
                  | EMP001 |

        Scenario Outline: Attempt to delete an unavailable trainee record
            Given user is on the homepage of the employee training records
             When user tries to delete the trainee with employee ID "<empId>"
             Then the trainee with employee ID "<empId>" should not be displayed in the list

        Examples:
                  | empId  |
                  | EMP999 |