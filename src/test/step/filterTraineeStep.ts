import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";


When(
    "User enters project name {string} in the project name filter",
    async function (this: glitchworld, projectName: string) {

        await this.filterTrainee.enterProjectName(projectName);

    }
);


Then(
    "Trainee record with project name {string} should be displayed",
    async function (this: glitchworld, projectName: string) {

        const isDisplayed =
            await this.filterTrainee.isRecordDisplayed(projectName);

        expect(isDisplayed).toBeTruthy();

    }
);


When(
    "User enters employee ID {string} in the employee ID filter",
    async function (this: glitchworld, empId: string) {

        await this.filterTrainee.enterEmployeeId(empId);

    }
);


Then(
    "Trainee record with employee ID {string} should be displayed",
    async function (this: glitchworld, empId: string) {

        const isDisplayed =
            await this.filterTrainee.isRecordDisplayed(empId);

        expect(isDisplayed).toBeTruthy();

    }
);


When(
    "User enters employee name {string} in the employee name filter",
    async function (this: glitchworld, employeeName: string) {

        await this.filterTrainee.enterEmployeeName(employeeName);

    }
);


Then(
    "Trainee record with employee name {string} should be displayed",
    async function (this: glitchworld, employeeName: string) {

        const isDisplayed =
            await this.filterTrainee.isRecordDisplayed(employeeName);

        expect(isDisplayed).toBeTruthy();

    }
);


When(
    "User enters course name {string} in the course filter",
    async function (this: glitchworld, courseName: string) {

        await this.filterTrainee.enterCourseName(courseName);

    }
);


Then(
    "Trainee record with course name {string} should be displayed",
    async function (this: glitchworld, courseName: string) {

        const isDisplayed =
            await this.filterTrainee.isRecordDisplayed(courseName);

        expect(isDisplayed).toBeTruthy();

    }
);


When(
    "User enters trainer name {string} in the trainer name filter",
    async function (this: glitchworld, trainerName: string) {

        await this.filterTrainee.enterTrainerName(trainerName);

    }
);


Then(
    "Trainee record with trainer name {string} should be displayed",
    async function (this: glitchworld, trainerName: string) {

        const isDisplayed =
            await this.filterTrainee.isRecordDisplayed(trainerName);

        expect(isDisplayed).toBeTruthy();

    }
);