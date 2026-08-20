import { Page, Locator } from '@playwright/test';

export class EditTrainingPage {
    readonly page: Page;
    readonly employeeId: Locator;
    readonly projectNameDropdown: Locator;
    readonly updateButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.employeeId = page.locator("//td[normalize-space()='RISHWNATH_BF']");

        this.projectNameDropdown = page.getByRole('combobox').filter({
            hasText: 'ABC'
        });

        this.updateButton = page.locator("//button[normalize-space()='Update']");
    }

    async clickEditForEmployee() {
        const row = this.page.locator("tr").filter({
            hasText: "RISHWNATH_BF"
        });

        await row.locator("td:nth-child(11) button").first().click();
    }

    async changeProjectName(projectName: string) {
        await this.projectNameDropdown.click();
        await this.page.getByRole('option', { name: projectName, exact: true }).click();
    }

    async clickUpdate() {
        await this.updateButton.click();
    }

    async verifyProjectName(employeeId: string, projectName: string) {
        const row = this.page.locator("tr").filter({
            hasText: employeeId
        });

        await row.getByText(projectName, { exact: true }).waitFor();
    }
}