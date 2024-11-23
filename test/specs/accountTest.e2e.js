import loginPage from "../pageobjects/loginPage";
import LoginPage from "../pageobjects/loginPage";
import step from "@wdio/allure-reporter";
import allure from "allure-commandline";

describe("User Account Management", () => {
  it("should log in successfully with valid credentials", async () => {
    step.addStep("Launch the application");
    await LoginPage.open("/ap/signin");

    step.addStep("Enter the username and password");
    await LoginPage.login("testuser@example.com", "testpassword");

    step.addStep("Verify login successfully or not");
    const greeting = await $("#nav-link-accountList-nav-line-1").getText();
    expect(greeting).toContain("Hello");
  });

  it("should log out successfully", async () => {
    step.addStep("Logout the application");
    await loginPage.logoutApplication();

    step.addStep("Verify the application successfully logged out");
    const title = await browser.getTitle();
    expect(title).toContain("Sign-In");
  });
});
