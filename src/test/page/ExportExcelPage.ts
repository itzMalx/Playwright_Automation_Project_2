import { expect } from "@playwright/test";
import { BasePage } from "./basepage";
import path from "path";
import fs from "fs";

export class ExportExcel extends BasePage{
    private readonly excelbtn = this.page.locator("//div[@class='MuiBox-root css-tavv16']/child::button"); 
      private downloadedFilePath: string = "";

    async cleardfolder(){
        const downloadfolder = path.resolve(__dirname,"../Download_ExcelFiles")
        if(fs.existsSync(downloadfolder)){
            fs.rmSync(downloadfolder,{recursive:true,force:true});
            console.log("Files cleared from the Download_ExcelFiles folder")
        }
        fs.mkdirSync(downloadfolder,{recursive:true});
        console.log("Folder ready to download");
    }

    async downloadexcel(){
        this.cleardfolder();
        const downloadpromise = this.page.waitForEvent("download");
        await this.click(this.excelbtn);
        const download = await downloadpromise;
        const filename = download.suggestedFilename();
        console.log(`downloaded file : ${filename}`);
        const downfolder = path.resolve(__dirname,"../Download_ExcelFiles")
        this.downloadedFilePath = path.join(downfolder,filename);
        await download.saveAs(this.downloadedFilePath);
        console.log(`File saved in the path ${this.downloadedFilePath}`);
    }

    async checkdownload(){
       expect(this.downloadedFilePath).not.toBe("");
       expect(fs.existsSync(this.downloadedFilePath)).toBeTruthy();
       expect(this.downloadedFilePath).toMatch(/\.xlsx$/i);
       console.log(`File downloaded in the path ${this.downloadedFilePath}`);
    }
}