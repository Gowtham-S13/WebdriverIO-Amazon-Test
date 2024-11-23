import { $, $$, browser } from "@wdio/globals";

class ElementHelper {
  static async isElementPresent(selector) {
    return (await $$(selector)).length > 0;
  }

  static async clickElement(selector) {
    const element = await $(selector);
    await element.waitForClickable();
    await element.click();
  }

  static async getText(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    return await element.getText();
  }

  static async setValue(selector, value) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await element.setValue(value);
  }
}

export default new ElementHelper();
