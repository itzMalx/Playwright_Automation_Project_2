import { expect, Download, Page } from "@playwright/test";
import { BasePage } from "./basepage";

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
        expect(this.download.suggestedFilename()).toContain(".xlsx");
    }
}