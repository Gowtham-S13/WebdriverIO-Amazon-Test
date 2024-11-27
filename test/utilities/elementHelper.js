import { $, $$, browser } from "@wdio/globals";
import { expect } from "chai";

class ElementHelper {
  async isElementPresent(selector) {
    return (await $$(selector)).length > 0;
  }

  async clickElement(selector) {
    const element = await $(selector);
    await element.waitForClickable();
    await element.click();
  }

  async hoveronElement(selector) {
    const element = await $(selector);
    await element.moveTo();
  }

  async getText(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    return await element.getText();
  }

  async assertText(selector, expectedValue) {
    const actualValue = await this.getText(selector);
    expect(actualValue).to.be.equals(expectedValue);
  }

  async setValue(selector, value) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await element.setValue(value);
  }
}

export default new ElementHelper();
