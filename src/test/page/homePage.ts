import { BasePage} from "./basepage";
import { expect} from "@playwright/test";

export class HomePage extends BasePage{
    private readonly addIcon=this.page.locator("//button[@aria-label='Add Training']//*[name()='svg']")

    async clickAddIcon(){
        this.click(this.addIcon);
    }
}