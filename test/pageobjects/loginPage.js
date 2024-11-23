import BasePage from "./page";

class LoginPage extends BasePage {
  get emailInput() {
    return "#ap_email";
  }
  get passwordInput() {
    return "#ap_password";
  }
  get loginButton() {
    return "#signInSubmit";
  }
  get accountButton() {
    return "#nav-link-accountList";
  }
  get signoutButton() {
    return "span=Sign Out";
  }

  async login(email, password) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.click(this.loginButton);
  }

  async logoutApplication() {
    await this.click(this.accountButton);
    await this.click(this.signoutButton);
  }
}

export default new LoginPage();
