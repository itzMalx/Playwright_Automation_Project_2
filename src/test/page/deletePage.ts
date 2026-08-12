import { expect } from "@playwright/test";
import { BasePage } from "./basepage";

export class DeletePage extends BasePage {
    private countBeforeDelete: number = 0;
    async deleteTrainee(empId: string) {
        await this.page.waitForLoadState("domcontentloaded");

        const empIdCell = this.page.getByRole("cell", {name: empId,exact: true}).first();
        await empIdCell.waitFor({state: "visible",timeout: 30000});
        const allEmpIdCells = this.page.getByRole("cell", {name: empId,exact: true});
        this.countBeforeDelete = await allEmpIdCells.count();

        console.log(`Count before deleting ${empId}:`,this.countBeforeDelete);
        if (this.countBeforeDelete === 0) {
            throw new Error(`No trainee found with employee ID: ${empId}`);
        }
        const targetRow = empIdCell.locator("xpath=ancestor::tr");
        const deleteButton = targetRow.locator("button").nth(1);
        await this.click(deleteButton);
    }


    async verifyTraineeDeleted(empId: string) {
        const records = this.page.getByRole("cell", {name: empId,exact: true});
        const expectedCount =this.countBeforeDelete - 1;
        console.log(`Expected count after deleting ${empId}:`,expectedCount);

        await expect(records).toHaveCount(expectedCount,{timeout: 10000});
        console.log(`${empId} deleted successfully. ` +`Count changed from ${this.countBeforeDelete} ` +`to ${expectedCount}`);
    }

    async refreshpage() {
        await this.page.reload();
        await this.page.waitForLoadState("domcontentloaded");
    }
}