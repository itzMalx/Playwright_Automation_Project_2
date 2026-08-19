import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given("user is on the homepage of the employee training records", async function (this: glitchworld) {
    // Write code here that turns the phrase above into concrete actions
    await this.deletepage.goto();
}
);

When("user deletes the trainee with employee ID {string}", async function (this: glitchworld, empId: string) {
    // Write code here that turns the phrase above into concrete actions
    await this.deletepage.deleteTrainee(empId);
}
);


Then("the trainee with employee ID {string} should not be displayed in the list", async function (this: glitchworld, empId: string) {
    // Write code here that turns the phrase above into concrete actions
    await this.deletepage.verifyTraineeDeleted(empId);
}
);


When("user tries to delete the unavailable trainee with employee ID {string}", async function (this: glitchworld, empId: string) {
    // Write code here that turns the phrase above into concrete actions
    await this.deletepage.tryDeleteTrainee(empId);
}
);

When('user tries to delete the trainee with employee ID {string}', async function (this: glitchworld, empId: string) {
    // Write code here that turns the phrase above into concrete actions
    await this.deletepage.tryDeleteTrainee(empId);
}
);


Then("the unavailable trainee with employee ID {string} should not be displayed in the list", async function (this: glitchworld, empId: string) {
    // Write code here that turns the phrase above into concrete actions
    await this.deletepage.verifyUnavailableEmployee(empId);
}
);

When(
    "user searches for the trainee with employee ID {string}",
    async function (this: glitchworld, empId: string) {

        const traineeRow = this.page.locator(
            `//tr[td[normalize-space()='${empId}']]`
        ).first();

        await expect(traineeRow).toBeVisible();
    }
);

Then(
    "the trainee with employee ID {string} should be displayed in the list",
    async function (this: glitchworld, empId: string) {

        const traineeRow = this.page.locator(
            `//tr[td[normalize-space()='${empId}']]`
        ).first();

        await expect(traineeRow).toBeVisible();
    }
);