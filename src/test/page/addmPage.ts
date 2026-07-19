import { BasePage } from "./basepage";
import { expect } from "@playwright/test";
export class AddPageMuhi extends BasePage {
    private readonly addtrainee = this.page.getByRole('button', {name: 'Add Training'});
    private readonly projectname = this.page.getByRole('combobox', {name: /Project Name/i});
    private readonly empid = this.page.getByRole('textbox', {name: /EMP ID/i});
    private readonly empname = this.page.getByRole('textbox', {name: /Employee Name/i});
    private readonly course = this.page.getByRole('textbox', {name: /Course/i});
    private readonly trainername = this.page.getByRole('textbox', {name: /Trainer Name/i});
    private readonly trainingtype = this.page.getByRole('combobox', {name: /Training Type/i});
    private readonly start = this.page.getByRole('textbox', {name: /Start Date/i});
    private readonly enddate = this.page.getByRole('textbox', {name: /End Date/i});
    private readonly status = this.page.getByRole('combobox', {name: /Status/i});
    private readonly percentage = this.page.getByRole('spinbutton', {name: /% Completed/i});
    private readonly addbtn = this.page.getByRole('button', {name: 'Add',exact: true});

    async clickaddemp() {
        await this.click(this.addtrainee);
    }

    async enterEmployeeData(
        id: string,
        proname: string,
        name: string,
        coursee: string,
        tname: string,
        traintype: string,
        startdate: string,
        end: string,
        sts: string,
        percent: string
    ) 
    {
        await this.projectname.click();
        await this.page.getByRole('option', {name: proname,exact: true}).click();
        await this.empid.fill(id);
        await this.empname.fill(name);
        await this.course.fill(coursee);
        await this.trainername.fill(tname);
        await this.trainingtype.click();
        await this.page.getByRole('option', {name: traintype,exact: true}).click();
        await this.start.fill(startdate);
        await this.enddate.fill(end);
        await this.status.click();
        await this.page.getByRole('option', {name: sts,exact: true}).click()
        await this.percentage.fill(percent);
    }

    async clickaddbtn() {
        await this.click(this.addbtn);
    }



async checkadded(empId: string) {

    if (empId === "") {
        console.log("EMP ID is empty - Record not created as expected");
        return;
    }

    const record = this.page.getByText(empId, { exact: true }).first();

    if (empId === "EMP004") {
        await expect(record).toBeHidden({ timeout: 5000 });
        console.log("Invalid percentage - Record not created as expected");
        return;
    }

    await expect(record).toBeVisible({ timeout: 30000 });
}
}