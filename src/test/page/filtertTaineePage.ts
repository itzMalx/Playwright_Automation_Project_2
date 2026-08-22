import { BasePage } from "./basepage";

export class FilterTraineePage extends BasePage {

    private readonly employeeIdFilter =
        this.page.getByPlaceholder("Search by Employee ID");

    private readonly filterButton =
        this.page.getByRole('button', { name: 'Filter' });

    async enterEmployeeId(empId: string) {
        await this.fill(this.employeeIdFilter, empId);
    }

    async clickFilterButton() {
        await this.click(this.filterButton);
    }

    async isEmployeeDisplayed(empId: string) {
        const traineeRecord = this.page.locator(
            `//tr[td[contains(normalize-space(),'${empId}')]]`
        );

        return await this.isVisible(traineeRecord.first());
    }
}