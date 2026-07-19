import { Given, When, Then } from "@cucumber/cucumber";
import { glitchworld } from "../world/customworld";

When("User enters {string} in {string} filter",async function (this: glitchworld,searchValue: string,column: string) {
  
    }
);

Then("Only records containing {string} should be displayed in {string} column",async function (this: glitchworld,expectedValue: string,column: string) {
    }
);

When("the user selects {string} in the {string} filter",async function (this: glitchworld,date: string,dateType: string) {

    }
);

Then("only records containing {string} should be displayed in {string} column",async function (this: glitchworld,expectedDate: string,dateType: string) {

    }
);