import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";
import editData from "../../test-data/editdata.json";

When("User clicks the edit icon of an existing training record", async function (this: glitchworld) {

    await this.editPage.clickEditIcon();

});

When("User updates the trainee training details", async function (this: glitchworld) {

    await this.editPage.updateTrainingDetails(
        editData.course,
        editData.trainerName
    );

});

When("User clicks the Update button", async function (this: glitchworld) {

    await this.editPage.clickUpdateButton();

});

Then("Training record should be updated successfully", async function (this: glitchworld) {

    await expect(this.page.getByText(editData.course)).toBeVisible();

});


When(
    "User tries to edit the trainee with employee ID {string}",
    async function (this: glitchworld, empId: string) {

        const editAvailable =
            await this.editPage.isEditOptionAvailable(empId);

        expect(editAvailable).toBe(false);

    }
);

Then(
    "Edit option should not be available for employee ID {string}",
    async function (this: glitchworld, empId: string) {

        const editAvailable =
            await this.editPage.isEditOptionAvailable(empId);

        expect(editAvailable).toBe(false);

    }
);

Then(
    "Training record should be available for editing",
    async function (this: glitchworld) {

        await expect(
            this.page.locator('//input[@name="course"]')
        ).toBeVisible();

    }
);