import { BasePage } from "./basepage";

export class FilterTraineePage extends BasePage {

    private readonly filterInputs =
        this.page.locator('input[placeholder="Filter"]');

    private readonly employeeIdFilter =
        this.filterInputs.nth(1);

    private readonly employeeNameFilter =
        this.filterInputs.nth(2);

    private readonly courseFilter =
        this.filterInputs.nth(3);

    private readonly trainerNameFilter =
        this.filterInputs.nth(4);


    async enterProjectName(projectName: string) {

        // Open Project Name dropdown
        await this.page.getByRole('combobox').first().click();

        // Select project
        await this.page
            .locator(`[role="option"][data-value="${projectName}"]`)
            .click();

        await this.page.waitForTimeout(1000);
    }


    async enterEmployeeId(empId: string) {

        await this.employeeIdFilter.waitFor({ state: "visible" });
        await this.employeeIdFilter.fill(empId);

        await this.page.waitForTimeout(1000);
    }


    async enterEmployeeName(employeeName: string) {

        await this.employeeNameFilter.waitFor({ state: "visible" });
        await this.employeeNameFilter.fill(employeeName);

        await this.page.waitForTimeout(1000);
    }


    async enterCourseName(courseName: string) {

        await this.courseFilter.waitFor({ state: "visible" });
        await this.courseFilter.fill(courseName);

        await this.page.waitForTimeout(1000);
    }


    async enterTrainerName(trainerName: string) {

        await this.trainerNameFilter.waitFor({ state: "visible" });
        await this.trainerNameFilter.fill(trainerName);

        await this.page.waitForTimeout(1000);
    }


    async isRecordDisplayed(value: string): Promise<boolean> {

        const traineeRecord = this.page
            .locator("tbody tr")
            .filter({ hasText: value })
            .first();

        return await traineeRecord.isVisible();
    }
}