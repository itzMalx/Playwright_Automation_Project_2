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
    private readonly completedStatus=this.page.locator('input[name="percentCompleted"]');
    private readonly genericErrorMessage = this.page.locator(
        "[role='alert'], .Mui-error, p.MuiFormHelperText-root.Mui-error"
    );

    private toIsoDate(ddmmyyyy: string): string {
        const [dd, mm, yyyy] = ddmmyyyy.split('-');
        return `${yyyy}-${mm}-${dd}`;
    }

    async selectDropdown(fieldName: string, value: string) {
        const hiddenInput = this.page.locator(`input[name="${fieldName}"]`);
        const combobox = hiddenInput.locator('xpath=..').locator('[role="combobox"]');

        await combobox.click();
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

        await this.fill(this.startDate, this.toIsoDate(startDate));
        await this.fill(this.endDate, this.toIsoDate(endDate));

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
        const ariaInvalid = await this.empId.getAttribute('aria-invalid').catch(() => null);
        if (ariaInvalid === 'true') {
            return;
        }

        const validationMessage = await this.empId
            .evaluate((el: HTMLInputElement) => el.validationMessage)
            .catch(() => '');
        if (validationMessage && validationMessage.trim().length > 0) {
            return;
        }

        await expect(this.genericErrorMessage.first()).toBeVisible({ timeout: 5000 });
    }

    async isErrorMessageVisible(): Promise<boolean> {
        return await this.genericErrorMessage.first().isVisible().catch(() => false);
    }
}