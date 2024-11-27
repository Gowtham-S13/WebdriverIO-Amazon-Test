import elementHelper from "../utilities/elementHelper";
import waitHelper from "../utilities/waitHelper";
import data from "../../testData/testData.json";
import page from "./page";
import { expect } from "chai";

class accountPage extends page {
  get addressLineOne() {
    return "#address-ui-widgets-AddressLineOne";
  }
  get cityPostalCode() {
    return "#address-ui-widgets-CityStatePostalCode";
  }
  get getCountry() {
    return "#address-ui-widgets-Country";
  }
  get phoneNumber() {
    return "#address-ui-widgets-PhoneNumber";
  }
  get yourAddress() {
    return '//h2[contains(text(), "Your Addresses")]';
  }
  get addressPageHeader() {
    return '//h1[contains(text(), "Your Addresses")]';
  }

  async verifyAddressDetails() {
    await waitHelper.waitForElementToBeDisplayed(this.yourAddress);
    await elementHelper.clickElement(this.yourAddress);
    await waitHelper.waitForElementToBeDisplayed(this.addressPageHeader);
    await elementHelper.assertText(
      this.addressLineOne,
      data.address.addressLine1
    );
    await elementHelper.assertText(
      this.cityPostalCode,
      data.address.addressLine2
    );
    await elementHelper.assertText(this.getCountry, data.address.country);
    const actualPhoneNumer = await elementHelper.getText(this.phoneNumber);
    expect(actualPhoneNumer).to.contains(data.address.phoneNumber);
  }
}
export default new accountPage();
