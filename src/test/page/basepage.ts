import { Locator,Page } from "@playwright/test";
import { logger } from "../../utilities/logger";
import { EnvReader } from '../../utilities/envreader'
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

  async isVisible(locator: Locator) {
    try {
      return await locator.isVisible()
    }
    catch (error) {
      logger.error(`Failed to check visibility`);
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

  async goto() {
        await this.page.goto(EnvReader.getBaseUrl());
    }
}