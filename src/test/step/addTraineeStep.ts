import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";
import { expect } from "@playwright/test";

let lastEmployeeName: string;
let lastCourse: string;

Given('user clicks the add icon', async function (this: glitchworld) {
  await this.homePage.clickAddIcon();
});

When('user enters the training data {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',async function (
    this: glitchworld,
    projectName: string,
    empId: string,
    employeeName: string,
    course: string,
    trainerName: string,
    trainingType: string,
    startDate: string,
    endDate: string,
    status: string,
    percentageCompleted: string
  ) {
    lastEmployeeName = employeeName;
    lastCourse = course;
    this.lastEmpId = empId;

    await this.addTraineePage.enterDetails(projectName,empId,employeeName,course,trainerName,trainingType,startDate,endDate,status,percentageCompleted);
  }
);

Then('user should not be able to see the record created in the list',async function (this: glitchworld) {
  await this.addTraineePage.verifyRecordNotCreated(lastEmployeeName, lastCourse);
});

Then('user should be able to see the error message',async function (this: glitchworld) {
  await this.addTraineePage.verifyErrorMessageDisplayed();
});