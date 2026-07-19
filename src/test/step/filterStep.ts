import {Given,When,Then} from '@cucumber/cucumber'
import { glitchworld } from '../world/customworld';

When('User enters {string} in {string} filter', async function (this:glitchworld,Column:string, searchvalue: string) {
  this.recordPage.searchByColumn(Column,searchvalue)
});

Then('Only records containing {string} should be displayed in {string} column', async function (this:glitchworld,Column:string, searchvalue: string) {
  this.recordPage.verifySearchResult(Column,searchvalue)
});