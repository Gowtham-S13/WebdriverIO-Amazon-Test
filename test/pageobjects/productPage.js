import elementHelper from "../utilities/elementHelper";
import BasePage from "./page";
import { $, browser } from "@wdio/globals";

class ProductPage extends BasePage {
  //Locators
  get firstProduct() {
    return '[data-component-type="s-search-result"] h2 a';
  }
  get addToCartButton() {
    return "#add-to-cart-button";
  }
  get price() {
    return $("#priceblock_ourprice");
  }

  //Functions
  async selectFirstProduct() {
    await elementHelper.clickElement(this.firstProduct);
  }

  async addToCart() {
    await elementHelper.clickElement(this.addToCartButton);
  }

  async getPrice() {
    return await elementHelper.getText(this.price);
  }
}

export default new ProductPage();
