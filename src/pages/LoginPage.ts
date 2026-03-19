import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.errorMessage = page.locator('[data-test="error"]');
  }

  async navigate() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async enterUsername(user: string) {
    await this.usernameInput.fill(user);
  }

  async enterPassword(pass: string) {
    await this.passwordInput.fill(pass);
  }

  async clickLogin() {
    await this.loginButton.click();
  }

  async getErrorText(): Promise<string> {
    return (await this.errorMessage.textContent()) || '';
  }
}