import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SauceWorld } from '../support/world';
import { CheckoutPage } from '../pages/CheckoutPage';

// Helper para instanciar la página de Checkout
const getCheckoutPage = (world: SauceWorld) => new CheckoutPage(world.page);

Given('proceeds to checkout', async function (this: SauceWorld) {
  // En Sauce Demo, el botón de checkout está en el carrito
  await this.page.locator('[data-test="checkout"]').click();
});

When('enters shipping information with {string}, {string}, and {string}', async function (this: SauceWorld, first: string, last: string, zip: string) {
  await getCheckoutPage(this).fillInformation(first, last, zip);
});

When('clicks on Continue button', async function (this: SauceWorld) {
  await getCheckoutPage(this).clickContinue();
});

When('finishes the purchase', async function (this: SauceWorld) {
  await getCheckoutPage(this).clickFinish();
});

When('the user cancels the purchase', async function (this: SauceWorld) {
  await getCheckoutPage(this).clickCancel();
});

Then('a success message {string} should be displayed', async function (this: SauceWorld, expectedMessage: string) {
  const messageElement = this.page.locator('.complete-header');
  await expect(messageElement).toHaveText(expectedMessage);
});

Then('the user should be redirected to the inventory page', async function (this: SauceWorld) {
  // Validamos que la URL sea la de inventario
  await expect(this.page).toHaveURL(/inventory.html/);
});