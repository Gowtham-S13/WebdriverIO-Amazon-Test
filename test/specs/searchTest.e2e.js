import basePage from "../pageobjects/page";
import HomePage from "../pageobjects/homePage";
import { $, browser } from "@wdio/globals";
import { expect } from "chai";
import homePage from "../pageobjects/homePage";

describe("Amazon Search Flow", () => {
  it("should search for a product", async () => {
    step.addStep("Launch the application");
    await HomePage.open();

    step.addStep("Searching for laptop");
    await HomePage.searchForProduct("Laptop");

    step.addStep("Verify serach results suggested laptop items");
    const title = await browser.getTitle();
    expect(title).to.be.contain("Laptop");
  });
});
