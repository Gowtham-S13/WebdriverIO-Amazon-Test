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
    await this.click(this.firstProduct);
  }

  async addToCart() {
    await this.click(this.addToCartButton);
  }

  async getPrice() {
    return await this.getText(this.price);
  }
}

export default new ProductPage();
