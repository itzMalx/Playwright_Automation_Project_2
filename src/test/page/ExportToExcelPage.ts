import { expect, Download, Page } from "@playwright/test";
import { BasePage } from "./basepage";
import * as XLSX from "xlsx";

export class ExportToExcelPage extends BasePage {

    readonly exportButton;
    download!: Download;

    constructor(page: Page) {
        super(page);

        this.exportButton = page.locator("//button[normalize-space()='Export to Excel']");
    }

    async launchApplication() {
        await this.goto();
    }

    async clickExportButton() {

        const downloadPromise = this.page.waitForEvent("download");

        await this.click(this.exportButton);

        this.download = await downloadPromise;
    }

    async verifyExcelDownloaded() {

        const fileName = this.download.suggestedFilename();

        expect(fileName).toContain(".xlsx");

        console.log(
            "Excel file downloaded successfully: " + fileName
        );
    }

    async verifyExcelContainsData() {

        const filePath = await this.download.path();

        expect(filePath).not.toBeNull();

        const workbook = XLSX.readFile(filePath!);

        const sheetNames = workbook.SheetNames;

        expect(sheetNames.length).toBeGreaterThan(0);

        console.log(
            "Excel sheet found: " + sheetNames[0]
        );

        const firstSheetName = sheetNames[0];

        expect(firstSheetName).toBeDefined();

        if (!firstSheetName) {
            throw new Error("No worksheet found in Excel file");
        }

        const worksheet = workbook.Sheets[firstSheetName];

        if (!worksheet) {
            throw new Error("Worksheet could not be found");
        }

        const data = XLSX.utils.sheet_to_json(worksheet);

        expect(data.length).toBeGreaterThan(0);

        console.log("Excel contains data.");

        console.log(
            "Number of records in Excel: " + data.length
        );
    }
}