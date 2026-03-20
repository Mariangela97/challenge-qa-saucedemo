import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SauceWorld } from '../support/world';
import { InventoryPage } from '../pages/InventoryPage';

const getInventoryPage = (world: SauceWorld) => new InventoryPage(world.page);

// --- ACTION STEPS ---

When('the user removes {string} from the cart', async function (this: SauceWorld, productName: string) {
  await getInventoryPage(this).removeProductFromCart(productName);
});

When('the user clicks {string}', async function (this: SauceWorld, buttonName: string) {
  // Logic to handle navigation within the cart context
  if (buttonName === 'Continue Shopping') {
    await getInventoryPage(this).clickContinueShopping();
  }
});

// --- ASSERTION STEPS ---

Then('the item {string} should be visible in the list', async function (this: SauceWorld, productName: string) {
  const isVisible = await getInventoryPage(this).isProductVisibleInCart(productName);
  expect(isVisible).toBe(true);
});

Then('the item {string} should not be visible in the list', async function (this: SauceWorld, productName: string) {
  const isVisible = await getInventoryPage(this).isProductVisibleInCart(productName);
  expect(isVisible).toBe(false);
});

Then('the cart badge should show {string}', async function (this: SauceWorld, expectedCount: string) {
  const actualCount = await getInventoryPage(this).getCartBadgeText();
  expect(actualCount).toBe(expectedCount);
});

Then('the cart should show {string} items', async function (this: SauceWorld, expectedCount: string) {
  // Reuse the badge logic to verify the number of items from a business perspective
  const actualCount = await getInventoryPage(this).getCartBadgeText();
  expect(actualCount).toBe(expectedCount);
});

Then('the cart badge should be empty', async function (this: SauceWorld) {
  const badgeText = await getInventoryPage(this).getCartBadgeText();
  expect(badgeText).toBe('0');
});

Then('the cart list should be empty', async function (this: SauceWorld) {
  const isEmpty = await getInventoryPage(this).isCartEmpty();
  expect(isEmpty).toBe(true);
});

Then('the {string} button should be visible but the list area should be clear', async function (this: SauceWorld, buttonName: string) {
  // Specific validation for the Checkout button visibility on an empty cart
  const checkoutBtn = this.page.locator('[data-test="checkout"]');
  await expect(checkoutBtn).toBeVisible();
  
  const isEmpty = await getInventoryPage(this).isCartEmpty();
  expect(isEmpty).toBe(true);
});