import {Given,When,Then} from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";

Given('user is on the homepage of the employee training records',async function (this: glitchworld) {
        // Write code here that turns the phrase above into concrete actions
        await this.deletepage.goto();
    }
);

When('user deletes the trainee with employee ID {string}',async function (this: glitchworld,empId: string) {
        // Write code here that turns the phrase above into concrete actions
        await this.deletepage.deleteTrainee(empId);
    }
);

Then('the trainee with employee ID {string} should not be displayed in the list',async function (this: glitchworld,empId: string) {
        // Write code here that turns the phrase above into concrete actions
        await this.deletepage.verifyTraineeDeleted(
            empId
        );
    }
);