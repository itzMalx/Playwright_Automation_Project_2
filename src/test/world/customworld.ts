import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { RecordsPage } from '../page/RecordsPage';
import { AddPageMuhi } from '../page/addmPage';
import { ExportToExcelPage} from '../page/ExportToExcelPage'

export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page
    addpage!:AddPageMuhi
    recordPage!: RecordsPage
    exportPage!: ExportToExcelPage;
}

setWorldConstructor(glitchworld)