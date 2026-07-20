import { BasePage } from "./basepage";
import { expect, Locator } from "@playwright/test";

export class RecordsPage extends BasePage {

    private readonly empID = this.page.locator("//tr[2]/th[2]//input")
    private readonly empName = this.page.locator("//tr[2]/th[3]//input")
    private readonly course = this.page.locator("//tr[2]/th[4]//input")
    private readonly trainerName = this.page.locator("//tr[2]/th[5]//input")
    private readonly completed = this.page.locator("//tr[2]/th[10]//input")
    private readonly empIDCol = this.page.locator("//td[2]")
    private readonly empNameCol = this.page.locator("//td[3]")
    private readonly courseCol = this.page.locator("//td[4]")
    private readonly trainerNameCol = this.page.locator("//td[5]")
    private readonly completedCol = this.page.locator("//td[10]")
    private readonly startDate=this.page.locator("//input[@id='_r_3u_']")
    private readonly endDate=this.page.locator("//input[@id='_r_3v_']")
    private readonly records=this.page.locator("//*[@id='root']/descendant::tbody")


    public async searchByColumn(column: string, value: string): Promise<void> {

        let filterBox: Locator;

        switch (column.toLowerCase()) {

            case "project name":
                filterBox = this.completed;
                break;

            case "emp id":
                filterBox = this.empID;
                break;

            case "employee name":
                filterBox = this.empName;
                break;

            case "course":
                filterBox = this.course;
                break;

            case "trainer name":
                filterBox = this.trainerName;
                break;

            case "startDate":
                filterBox=this.startDate;
                break;
            
            case "endDate":
                filterBox=this.endDate;
                break;

            default:
                throw new Error(`Invalid column: ${column}`);
        }

        await filterBox.fill(value);
    }

    

public async verifySearchResult(column: string, expectedValue: string): Promise<void> {

    let columnLocator: Locator;

    switch (column.toLowerCase()) {

        case "empID":
            columnLocator = this.empIDCol;
            break;

        case "employeeName":
            columnLocator = this.empNameCol;
            break;

        case "course":
            columnLocator = this.courseCol;
            break;

        case "trainerName":
            columnLocator = this.trainerNameCol;
            break;

        case "completed":
            columnLocator = this.completedCol;
            break;
        
        case "startDate":
            columnLocator = this.startDate;
            break;
        
        case "endDate":
            columnLocator = this.startDate;
            break;

        default:
            throw new Error(`Invalid column: ${column}`);
    }

    const rowCount = await columnLocator.count();
    expect(rowCount).toBeGreaterThan(0);

    for (let i = 0; i < rowCount; i++) {
        const actualValue = (await columnLocator.nth(i).textContent())?.trim();
        expect(actualValue).toContain(expectedValue);
    }
}

    async isNoRecordsDisplayed(){
        return await this.isVisible(this.records)
    }
}