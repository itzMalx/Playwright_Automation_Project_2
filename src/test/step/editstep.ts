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