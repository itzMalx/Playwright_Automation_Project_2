import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { EditTrainingPage} from '../page/edit2page';

let editTrainingPage: EditTrainingPage;

Given('I am on the Employee Training Records page', async function () {
    editTrainingPage = new EditTrainingPage(this.page);
    await this.page.goto('https://frontend-69a7.vercel.app/');
});

When('I edit the training record for employee {string}', async function (employeeId: string) {
    await editTrainingPage.clickEditForEmployee();
});

When('I change the project name from {string} to {string}', async function (oldProject: string, newProject: string) {
    await editTrainingPage.changeProjectName(newProject);
});

When('I click the Update button', async function () {
    await editTrainingPage.clickUpdate();
});

Then('the project name should be updated to {string} for employee {string}', async function (projectName: string, employeeId: string) {
    const row = this.page.locator("tr").filter({ hasText: employeeId });
    await expect(row.getByText(projectName, { exact: true })).toBeVisible();
});