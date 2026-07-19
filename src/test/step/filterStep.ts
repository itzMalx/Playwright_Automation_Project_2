import {Given,When,Then} from '@cucumber/cucumber'
import { glitchworld } from '../world/customworld';

When('User enters {string} in {string} filter', async function (this:glitchworld,searchValue: string, column: string) {
  //await this.recordPage.searchByColumn(Column,searchvalue)
  await this.recordPage.searchByColumn(column, searchValue);
});

Then('Only records containing {string} should be displayed in {string} column', async function (this:glitchworld,searchValue: string, column: string) {
  await this.recordPage.verifySearchResult(column,searchValue)
});