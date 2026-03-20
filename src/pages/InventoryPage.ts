import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private readonly page: Page;
  private readonly cartIcon: Locator;
  private readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductToCart(productName: string) {
    const productContainer = this.page.locator('.inventory_item', { hasText: productName });
    await productContainer.locator('button:has-text("Add to cart")').click();
  }

  async removeProductFromCart(productName: string) {
    const itemContainer = this.page.locator('.cart_item', { hasText: productName });
    await itemContainer.locator('button:has-text("Remove")').click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }

// Returns to the inventory page from the cart.
  async clickContinueShopping() {
    await this.page.locator('[data-test="continue-shopping"]').click();
  }

  async isProductVisibleInCart(productName: string): Promise<boolean> {
    const item = this.page.locator('.inventory_item_name', { hasText: productName });
    return await item.isVisible();
  }

  // Returns the number shown in the shopping cart badge.
  async getCartBadgeText(): Promise<string> {
    if (await this.cartBadge.isVisible()) {
      return (await this.cartBadge.textContent()) || '0';
    }
    return '0';
  }

  async isCartEmpty(): Promise<boolean> {
    const items = this.page.locator('.cart_item');
    return (await items.count()) === 0;
  }
}