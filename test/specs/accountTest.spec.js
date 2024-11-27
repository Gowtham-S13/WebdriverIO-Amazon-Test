import loginPage from "../pageobjects/loginPage";
import LoginPage from "../pageobjects/loginPage";
import step from "@wdio/allure-reporter";
import allure from "allure-commandline";
import elementHelper from "../utilities/elementHelper";
import waitHelper from "../utilities/waitHelper";
import data from "../../testData/testData.json";
import accountPage from "../pageobjects/accountPage";

describe("User Account Management", () => {
  it("should log in successfully with valid credentials and verify it's address details", async () => {
    step.addStep("Launch the application");
    await LoginPage.open();
    await elementHelper.clickElement(loginPage.accountButton);
    await waitHelper.waitForElementToBeDisplayed(loginPage.emailInput);

    step.addStep("Enter the username and password");
    await LoginPage.login(
      data.loginCredentials.userMail,
      data.loginCredentials.password
    );

    step.addStep("Verify login successfully or not");
    const greeting = await elementHelper.getText(loginPage.greetingText);
    expect(greeting).toContain(data.loginCredentials.userName);

    step.addStep("Navigate to account page");
    await elementHelper.clickElement(loginPage.accountButton);

    step.addStep("Validate the address details displayed correct or not");
    await accountPage.verifyAddressDetails();

    step.addStep("Logout the application");
    await loginPage.logoutApplication();

    step.addStep("Verify the application successfully logged out");
    const title = await browser.getTitle();
    expect(title).toContain("Sign-In");
  });
});
