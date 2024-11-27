import elementHelper from "../utilities/elementHelper";
import basePage from "./page";

class HomePage extends basePage {
  get searchInput() {
    return "#twotabsearchtextbox";
  }
  get searchButton() {
    return "#nav-search-submit-button";
  }

  async searchForProduct(productName) {
    await elementHelper.setValue(this.searchInput, productName);
    await elementHelper.clickElement(this.searchButton);
  }
}

export default new HomePage();
