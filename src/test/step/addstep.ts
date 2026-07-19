import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { readData } from "../../utilities/csvreader"
import { TrainingData } from "../type/trainingData"
import path from "path";
import { expect } from "@playwright/test";

let selectedData: TrainingData;

const csvPath = path.resolve(__dirname,"../../test-data/addtrainee.csv");
const trainingData = readData<TrainingData>(csvPath);

Given('user is on the homepage of the site', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addpage.goto();
});

Given('user clicks on the add icon', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addpage.clickaddemp();
});

Given('user enters the data {string}', async function (this: glitchworld, string: string) {
  // Write code here that turns the phrase above into concrete actions
  const data = trainingData.find(item => item.testType === string);

  if (!data) {
    throw new Error(`Test data not found for type: ${string}`);
  }

  selectedData = data;

  await this.addpage.enterEmployeeData(
    data.empId,
    data.projectName,
    data.employeeName,
    data.course,
    data.trainerName,
    data.trainingType,
    data.startDate,
    data.endDate,
    data.status,
    data.percentageCompleted
  );
});

When('user clicks on the add button', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addpage.clickaddbtn();
});

Then('user should be able to see the record created in the list', async function (this: glitchworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.addpage.checkadded(selectedData.empId);
  
});