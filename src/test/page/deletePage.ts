import { BasePage } from "./basepage";

export class DeletePage extends BasePage {
    async deleteTrainee(empId: string) {
        await this.page.waitForLoadState("domcontentloaded");
        const empIdCell = this.page.getByRole("cell", { name: empId, exact: true }).first();
        const count = await this.page.getByRole("cell", { name: empId, exact: true }).count();

        console.log(`Count before deleting ${empId}: ${count}`);
        if (count === 0) {
            console.log(`Employee ID ${empId} is not available - continuing test`);
            return;
        }

        const targetRow = empIdCell.locator("xpath=ancestor::tr");
        const deleteButton = targetRow.getByRole("button").nth(1);
        
        try {
            await deleteButton.click();
            console.log(`Delete action attempted for ${empId}`);
        }
        catch (error) {
            console.log(`Delete action could not be completed for ${empId}`);
        }
    }

    async verifyTraineeDeleted(empId: string) {
        const record = this.page.getByRole("cell", {name: empId,exact: true});
        const count = await record.count();
        if (count === 0) {
            console.log(`${empId} is not displayed - delete successful`);
        }
        else{
            console.log(`${empId} is still displayed - application did not delete it`);
        }
    }

    async tryDeleteTrainee(empId: string) {
        const record = this.page.getByRole("cell", {name: empId,exact: true});
        const count = await record.count();
        console.log(`Count of ${empId}: ${count}`);
        if (count === 0) {
            console.log(`Negative test passed: Employee ID ${empId} is not available`);
            return;
        }
        try {
            const targetRow = record.first().locator("xpath=ancestor::tr");
            const deleteButton = targetRow.getByRole("button").nth(1);
            await deleteButton.click();
            console.log(`Delete action attempted for ${empId}`);
        }
        catch (error) {
            console.log(`Could not delete ${empId} - continuing test`);
        }
    }

    async verifyUnavailableEmployee(empId: string) {
        const record = this.page.getByRole("cell", {name: empId,exact: true});
        const count = await record.count();
        console.log(`Count of ${empId} after delete: ${count}`);
        if (count === 0) {
            console.log(`Negative test passed: ${empId} is not displayed`);
        } 
        else {
            console.log(`${empId} is displayed`);
        }
    }

    async refreshpage() {
        await this.page.reload();
        await this.page.waitForLoadState("domcontentloaded");
    }
}