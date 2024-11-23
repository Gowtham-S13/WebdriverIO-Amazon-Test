import basePage from "./page";

class HomePage extends basePage {
  get searchInput() {
    return "#twotabsearchtextbox";
  }
  get searchButton() {
    return "#nav-search-submit-button";
  }

  async searchForProduct(productName) {
    await this.type(this.searchInput, productName);
    await this.click(this.searchButton);
  }
}

export default new HomePage();
