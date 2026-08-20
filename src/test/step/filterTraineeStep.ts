import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { glitchworld } from "../world/customworld";

When(
    "User enters employee ID {string} in the filter",
    async function (this: glitchworld, empId: string) {

        await this.filterTrainee.enterEmployeeId(empId);

    }
);

When(
    "User applies the filter",
    async function (this: glitchworld) {

        await this.filterTrainee.clickFilterButton();

    }
);

Then(
    "Trainee record with employee ID {string} should be displayed",
    async function (this: glitchworld, empId: string) {

        const isDisplayed =
            await this.filterTrainee.isEmployeeDisplayed(empId);

        expect(isDisplayed).toBeTruthy();

    }
);