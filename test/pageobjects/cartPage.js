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
    return parseInt(await this.getText(this.cartCount));
  }

  async proceedToCheckout() {
    await this.click(this.proceedToCheckoutButton);
  }

  async removeItem() {
    await this.click(this.removeButton);
  }

  async getCartTotal() {
    return await this.getText(this.cartTotal);
  }
}

export default new CartPage();
