import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { RecordsPage } from '../page/RecordsPage';

export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page

    recordPage!: RecordsPage
}

setWorldConstructor(glitchworld)