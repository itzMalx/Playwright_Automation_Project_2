import { BasePage } from "./basepage";

export class EditPage extends BasePage {

    private readonly editIcon = this.page.locator("button[aria-label='edit']").first();

    private readonly empname = this.page.locator("//input[@id='_r_r_']");
    private readonly course = this.page.locator("//input[@id='_r_s_']");
    private readonly trainername = this.page.locator("//input[@id='_r_t_']");
    private readonly startDate = this.page.getByRole('textbox', { name: 'Start Date' });
    private readonly endDate = this.page.getByRole('textbox', { name: 'End Date' });
    private readonly percentage = this.page.getByRole('spinbutton', { name: '% Completed' });

    private readonly updateButton = this.page.getByRole('button', { name: 'UPDATE' });

    async clickEditIcon() {
        await this.click(this.editIcon);
    }

    async updateTrainingDetails(
        employeeName: string,
        course: string,
        trainerName: string,
        start: string,
        end: string,
        percent: string
    ) {

        await this.fill(this.empname, employeeName);
        await this.fill(this.course, course);
        await this.fill(this.trainername, trainerName);
        await this.fill(this.startDate, start);
        await this.fill(this.endDate, end);
        await this.fill(this.percentage, percent);

    }

    async clickUpdateButton() {
        await this.click(this.updateButton);
    }

}