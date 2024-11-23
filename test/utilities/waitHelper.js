import { $, $$, browser } from "@wdio/globals";

class WaitHelper {
  static async waitForElementToBeDisplayed(selector, timeout = 5000) {
    const element = await $(selector);
    await element.waitForDisplayed({ timeout });
  }

  static async waitForElementToBeClickable(selector, timeout = 5000) {
    const element = await $(selector);
    await element.waitForClickable({ timeout });
  }

  static async waitForTextToAppear(selector, expectedText, timeout = 5000) {
    await browser.waitUntil(
      async () => (await $(selector).getText()) === expectedText,
      {
        timeout,
        timeoutMsg: `Text '${expectedText}' not found within ${timeout}ms`,
      }
    );
  }
}

export default new WaitHelper();
