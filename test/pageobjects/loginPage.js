import elementHelper from "../utilities/elementHelper";
import waitHelper from "../utilities/waitHelper";
import page from "./page";

class LoginPage extends page {
  get emailInput() {
    return "#ap_email";
  }
  get passwordInput() {
    return "#ap_password";
  }
  get loginButton() {
    return "#signInSubmit";
  }
  get continueButton() {
    return "#continue";
  }
  get accountButton() {
    return "#nav-link-accountList";
  }
  get signoutButton() {
    return "span=Sign Out";
  }
  get greetingText() {
    return "#nav-link-accountList-nav-line-1";
  }

  async login(email, password) {
    await elementHelper.setValue(this.emailInput, email);
    await elementHelper.clickElement(this.continueButton);
    await elementHelper.setValue(this.passwordInput, password);
    await elementHelper.clickElement(this.loginButton);
  }

  async logoutApplication() {
    await waitHelper.waitForElementToBeDisplayed(this.accountButton);
    await elementHelper.hoveronElement(this.accountButton);
    await waitHelper.waitForElementToBeDisplayed(this.signoutButton);
    await elementHelper.clickElement(this.signoutButton);
  }
}

export default new LoginPage();
