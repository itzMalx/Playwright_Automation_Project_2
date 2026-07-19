import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { RecordsPage } from '../page/RecordsPage';
import { AddPageMuhi } from '../page/addmPage';
import { EditPage } from '../page/editPage';
export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page

    addpage!:AddPageMuhi
    recordPage!: RecordsPage
    editPage!:EditPage
}

setWorldConstructor(glitchworld)