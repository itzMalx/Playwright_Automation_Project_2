import { Page, Locator } from '@playwright/test';

export class CourseraFilterPage {
    readonly page: Page;
    readonly trainingTypeFilter: Locator;
    readonly trainingTypeCells: Locator;

    constructor(page: Page) {
        this.page = page;

        // Training Type filter dropdown
        this.trainingTypeFilter = page.getByRole('combobox').nth(1);

        // Training Type column - all displayed rows
        this.trainingTypeCells = page.locator(
            'tbody tr td:nth-child(6)'
        );
    }

    async filterTrainingType(trainingType: string) {

        // Open Training Type dropdown
        await this.trainingTypeFilter.click();

        // Select the requested training type
        await this.page.getByRole('option', {
            name: trainingType,
            exact: true
        }).click();
    }

    async verifyAllTrainingTypes(expectedTrainingType: string) {

        // Wait for the table to display at least one row
        const rows = this.page.locator('tbody tr');

        await rows.first().waitFor({
            state: 'visible'
        });

        // Get the number of displayed Training Type cells
        const count = await this.trainingTypeCells.count();

        if (count === 0) {
            throw new Error(
                'No training records were displayed after applying the filter.'
            );
        }

        // Verify every displayed Training Type
        for (let i = 0; i < count; i++) {

            const actualTrainingType =
                (await this.trainingTypeCells.nth(i).innerText()).trim();

            if (actualTrainingType !== expectedTrainingType) {

                throw new Error(
                    `Expected Training Type to be "${expectedTrainingType}", but found "${actualTrainingType}"`
                );
            }
        }
    }
}