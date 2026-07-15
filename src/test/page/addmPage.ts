import { BasePage } from "./basepage";

export class AddPageMuhi extends BasePage {
    private readonly addtrainee = this.page.getByRole('button', { name: 'Add Training' })
    private readonly projectname = this.page.locator("//div[@id='_r_o_']")
    private readonly empid = this.page.locator("//input[@id='_r_q_']")
    private readonly empname = this.page.locator("//input[@id='_r_r_']")
    private readonly course = this.page.locator("//input[@id='_r_s_']")
    private readonly trainername = this.page.locator("//input[@id='_r_t_']")
    private readonly trainingtype = this.page.locator("//div[@id='_r_u_']")
    private readonly start = this.page.getByRole('textbox', { name: 'Start Date' })
    private readonly enddate = this.page.getByRole('textbox', { name: 'End Date' })
    private readonly status = this.page.getByRole('combobox', { name: 'Status Not Started' })
    private readonly percentage = this.page.getByRole('spinbutton', { name: '% Completed' })
    private readonly addbtn = this.page.locator("//button[normalize-space()='Add']")

    async clickaddemp() {
        await this.click(this.addtrainee)
    }
    async enterEmployeeData(id: string,proname:string, name: string, coursee: string, sts:string,tname: string, traintype: string, startdate: string, percent: string, end: string) {
        await this.projectname.fill(proname);
        await this.empid.fill(id);
        await this.empname.fill(name);
        await this.course.fill(coursee);
        await this.trainername.fill(tname);
        await this.trainingtype.fill(traintype);
        await this.start.fill(startdate);
        await this.enddate.fill(end);
        await this.status.fill(sts);
        await this.percentage.fill(percent);
    }
    async clickaddbtn(){
        await this.click(this.addbtn)
    }


}