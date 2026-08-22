import { Given,When,Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";

When('user clicks on the export to excel button', async function (this:glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.exportexcel.cleardfolder();
  await this.exportexcel.downloadexcel();
});

Then('user should be able to download the excel file successfully', async function (this:glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.exportexcel.checkdownload();
});