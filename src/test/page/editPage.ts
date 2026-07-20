import { BasePage } from "./basepage";

export class EditPage extends BasePage {

    private readonly editIcon = this.page.locator("//tr[td[contains(normalize-space(),'Muhindhar S V')]]//button[@aria-label='edit']");

    private readonly course = this.page.locator("//input[@id='_r_3k_']");
    private readonly trainername = this.page.locator("//input[@id='_r_3l_']");
    private readonly updateButton = this.page.getByRole('button', { name: 'UPDATE' });

    async clickEditIcon() {
        await this.click(this.editIcon.first());
    }

    async updateTrainingDetails(course: string, trainer: string) {
        await this.clear(this.course);
        await this.fill(this.course, course);
        await this.clear(this.trainername);
        await this.fill(this.trainername, trainer);

    }

    async clickUpdateButton() {
        await this.click(this.updateButton);
    }

}