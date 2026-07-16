import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';

export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page

}

setWorldConstructor(glitchworld)