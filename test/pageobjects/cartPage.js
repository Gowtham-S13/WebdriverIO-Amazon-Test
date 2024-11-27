import elementHelper from "../utilities/elementHelper";
import BasePage from "./page";
import { $, $$ } from "@wdio/globals";

class CartPage extends BasePage {
  //Locators
  get cartCount() {
    return "#nav-cart-count";
  }
  get proceedToCheckoutButton() {
    return "//input[@name = 'proceedToRetailCheckout']";
  }
  get removeButton() {
    return 'input[value="Delete"]';
  }
  get cartTotal() {
    return "#sc-subtotal-amount-activecart";
  }

  //Functions
  async getCartItemCount() {
    return parseInt(await elementHelper.getText(this.cartCount));
  }

  async proceedToCheckout() {
    await elementHelper.clickElement(this.proceedToCheckoutButton);
  }

  async removeItem() {
    await elementHelper.clickElement(this.removeButton);
  }

  async getCartTotal() {
    return await elementHelper.getText(this.cartTotal);
  }
}

export default new CartPage();
