import { expect, Download, Page } from "@playwright/test";
import { BasePage } from "./basepage";
import * as XLSX from "xlsx";
import * as fs from "fs";

export class ExportToExcelPage extends BasePage {

    readonly exportButton;
    readonly tableRows;
    download!: Download;

    constructor(page: Page) {
        super(page);

        this.exportButton = page.locator(
            "//button[normalize-space()='Export to Excel']"
        );

        this.tableRows = page.locator("tbody tr");
    }

    async launchApplication() {

        await this.goto();

        console.log("Waiting for trainee records to load...");

        await expect(this.tableRows.first()).toBeVisible({
            timeout: 15000
        });

        console.log("Trainee records loaded successfully.");

    }

    async clickExportButton() {

        const downloadPromise = this.page.waitForEvent("download");

        await this.click(this.exportButton);

        this.download = await downloadPromise;

        console.log(
            "Downloaded file name: " +
            this.download.suggestedFilename()
        );

        console.log(
            "Temporary download path: " +
            await this.download.path()
        );

        const downloadFolder = "downloads";

        if (!fs.existsSync(downloadFolder)) {
            fs.mkdirSync(downloadFolder, {
                recursive: true
            });
        }

        const savedFilePath =
            `${downloadFolder}/training_data_automation.xlsx`;

        await this.download.saveAs(savedFilePath);

        console.log(
            "Saved automated Excel file to: " +
            savedFilePath
        );

        const fileStats = fs.statSync(savedFilePath);

        console.log(
            "Automated Excel file size: " +
            fileStats.size +
            " bytes"
        );
    }

    async verifyExcelDownloaded() {

        const fileName =
            this.download.suggestedFilename();

        expect(fileName).toContain(".xlsx");

        console.log(
            "Excel file downloaded successfully: " +
            fileName
        );
    }

    async verifyExcelContainsData() {

        const filePath =
            "downloads/training_data_automation.xlsx";

        expect(fs.existsSync(filePath)).toBeTruthy();

        console.log(
            "Reading saved Excel file from: " +
            filePath
        );

        const workbook =
            XLSX.readFile(filePath);

        console.log(
            "Workbook sheet names: " +
            JSON.stringify(workbook.SheetNames)
        );

        expect(
            workbook.SheetNames.length
        ).toBeGreaterThan(0);

        const firstSheetName =
            workbook.SheetNames[0];

        if (!firstSheetName) {
            throw new Error(
                "No worksheet found in Excel file"
            );
        }

        console.log(
            "Excel sheet found: " +
            firstSheetName
        );

        const worksheet =
            workbook.Sheets[firstSheetName];

        if (!worksheet) {
            throw new Error(
                "Worksheet could not be found"
            );
        }

        console.log(
            "Worksheet range: " +
            worksheet["!ref"]
        );

        const data =
            XLSX.utils.sheet_to_json(worksheet);

        console.log(
            "Number of Excel records: " +
            data.length
        );

        console.log(
            "Excel data:"
        );

        console.log(data);

        expect(data.length).toBeGreaterThan(0);

        console.log(
            "Excel contains trainee records successfully."
        );
    }
}