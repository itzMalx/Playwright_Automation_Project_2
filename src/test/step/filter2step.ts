import { When, Then } from '@cucumber/cucumber';

import { CourseraFilterPage } from '../page/filter2page';

let courseraFilterPage: CourseraFilterPage;

When(
    'I filter the Training Type by {string}',
    async function (trainingType: string) {

        courseraFilterPage = new CourseraFilterPage(this.page);

        await courseraFilterPage.filterTrainingType(trainingType);
    }
);

Then(
    'all displayed training records should have Training Type as {string}',
    async function (expectedTrainingType: string) {

        await courseraFilterPage.verifyAllTrainingTypes(
            expectedTrainingType
        );
    }
);