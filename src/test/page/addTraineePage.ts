import { HomePage } from './homePage';
import { BasePage } from "./basepage";
import { RecordsPage } from "./RecordsPage";
import { expect } from "@playwright/test";

export class AddTraineePage extends BasePage {

    private readonly empId=this.page.locator('input[name="empId"]');
    private readonly empName=this.page.locator('input[name="employeeName"]');
    private readonly course=this.page.locator('input[name="course"]');
    private readonly trainerName=this.page.locator('input[name="trainerName"]');
    private readonly startDate=this.page.locator('input[name="startDate"]');
    private readonly endDate=this.page.locator('input[name="endDate"]');
    private readonly completedStatus=this.page.locator('input[name="percentageCompleted"]');
    private readonly errorMessage = this.page.locator(
        "[role='alert'], .Mui-error, p.MuiFormHelperText-root.Mui-error"
    );

    async selectDropdown(fieldName: string, value: string) {
        await this.page.locator(`input[name="${fieldName}"]`).click();

        await this.page.getByRole('option', { name: value, exact: true }).click();
    }

    async enterDetails(projectName: string,empId: string,empName: string,course: string,trainerName: string,trainingType: string,startDate: string,endDate: string,
        status: string,completedStatus: string) {

        await this.selectDropdown("projectName", projectName);

        await this.fill(this.empId, empId);
        await this.fill(this.empName, empName);
        await this.fill(this.course, course);
        await this.fill(this.trainerName, trainerName);

        await this.selectDropdown("trainingType", trainingType);

        await this.fill(this.startDate, startDate);
        await this.fill(this.endDate, endDate);

        await this.selectDropdown("status", status);

        await this.fill(this.completedStatus, completedStatus);
    }

    async verifyRecordNotCreated(employeeName: string, course: string) {
        const row = this.page
            .locator("tr")
            .filter({ hasText: employeeName })
            .filter({ hasText: course });

        await expect(row).toHaveCount(0);
    }

    async verifyRecordCreated(empId: string) {
        const record = this.page.getByRole("cell", { name: empId, exact: true }).first();
        await expect(record).toBeVisible({ timeout: 30000 });
    }

    async verifyErrorMessageDisplayed() {
        await expect(this.errorMessage.first()).toBeVisible({ timeout: 5000 });
    }

    async isErrorMessageVisible(): Promise<boolean> {
        return await this.errorMessage.first().isVisible().catch(() => false);
    }
}