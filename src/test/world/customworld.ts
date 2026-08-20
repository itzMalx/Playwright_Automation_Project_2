import { AddTraineePage } from './../page/addTraineePage';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { RecordsPage } from '../page/RecordsPage';
import { AddPageMuhi } from '../page/addmPage';
import { ExportToExcelPage} from '../page/ExportToExcelPage'
import { HomePage } from '../page/homePage';

import { EditPage } from '../page/editPage';
import { DeletePage } from '../page/deletePage';
import { ExportExcel } from '../page/ExportExcelPage';
import { FilterTrainee } from '../page/FilterTrainee';
export class glitchworld extends World {

    browser!: Browser
    context!: BrowserContext
    page!: Page

    addTraineePage!:AddTraineePage
    homePage!:HomePage
    addpage!:AddPageMuhi
    recordPage!: RecordsPage
    exportPage!: ExportToExcelPage;
    editPage!:EditPage
    deletepage!:DeletePage
    exportexcel!:ExportExcel
    lastEmpId!: string
    filterTrainee!: FilterTrainee;
}

setWorldConstructor(glitchworld)