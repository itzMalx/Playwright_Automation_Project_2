import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";

Given("the user launches the application", async function (this: glitchworld) {

    await this.exportPage.launchApplication();

});

When("the user clicks the Export to Excel button", async function (this: glitchworld) {

    await this.exportPage.clickExportButton();

});

Then("the Excel file should be downloaded successfully", async function (this: glitchworld) {

    await this.exportPage.verifyExcelDownloaded();

});
