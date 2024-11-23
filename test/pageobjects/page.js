import { $, browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path = "/") {
    await browser.url(`https://www.amazon.com${path}`);
  }

  async click(selector) {
    const element = await $(selector);
    await element.waitForClickable();
    await element.click();
  }

  async type(selector, value) {
    const element = await $(selector);
    await element.waitForDisplayed();
    await element.setValue(value);
  }

  async getText(selector) {
    const element = await $(selector);
    await element.waitForDisplayed();
    return await element.getText();
  }
}
