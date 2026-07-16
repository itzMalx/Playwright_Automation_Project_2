import { EditPage } from './../page/editPage';
import { Before, After, BeforeAll, AfterAll, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium } from "@playwright/test";
import { glitchworld } from '../world/customworld'
import { logger } from '../../utilities/logger'

setDefaultTimeout(90 * 1000)


let browser: Browser;

BeforeAll(async () => {

    browser = await chromium.launch({ headless: true });
    logger.info("Browser Launched");
});
Before(async function (this: glitchworld, scenario) {

    this.browser = browser;
    this.context = await browser.newContext({ acceptDownloads: true });
    this.page = await this.context.newPage();


});
After(async function (this: glitchworld, scenario) {
    if (scenario.result?.status === Status.FAILED) {
        if (this.page && !this.page.isClosed()) {
            const path = `reports/screenshots/${scenario.pickle.name}-${Date.now()}.png`;
            await this.page.screenshot({ path });
        }
        logger.error(`Scenario Failed: ${scenario.pickle.name}`);
    }
    if (this.page && !this.page.isClosed()) {
        await this.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
});

AfterAll(async () => {
    logger.info("Browser Closed");
    await browser.close();
});