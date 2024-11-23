import HomePage from "../pageobjects/homePage";
import ProductPage from "../pageobjects/productPage";
import CartPage from "../pageobjects/cartPage";

describe("Amazon Add to Cart and check out Flow", () => {
  it("should add a product to the cart and verify", async () => {
    step.addStep("Launch the application");
    await HomePage.open();

    step.addStep("Search with laptop keyword");
    await HomePage.searchForProduct("HP Chromebook 14 inch Laptop");

    step.addStep("Select first product of search result");
    await ProductPage.selectFirstProduct();

    step.addStep("select and click add to cart");
    await ProductPage.addToCart();

    step.addStep("Verify no of items in cart");
    const cartItemCount = await CartPage.getCartItemCount();
    expect(cartItemCount).toBeGreaterThan(0);

    step.addStep("Click proceed to checkout option from cart");
    await CartPage.proceedToCheckout();
    const url = await browser.getUrl();
    expect(url).toContain("signin");
  });
});
