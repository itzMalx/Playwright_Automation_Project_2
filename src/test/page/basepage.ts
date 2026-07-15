import { Locator,Page } from "@playwright/test";
import { logger } from "../../utilities/logger";
export class BasePage{
    readonly page:Page;

    constructor(page:Page){
        this.page = page
    }

    async click(locator: Locator) {
    try {
      await locator.click();
    }
    catch (error) {
      logger.error(`Failed to click element: ${error}`);
      throw error;
    }
  }

  async fill(locator:Locator,value:string){
    try {
        await locator.fill(value)
    } catch (error) {
        logger.error(`Failed to fill the value: ${error}`)
        throw error;
    }
  }
}