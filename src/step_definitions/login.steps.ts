import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SauceWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';

const getLoginPage = (world: SauceWorld) => new LoginPage(world.page);

Given('the user navigates to the login page', async function (this: SauceWorld) {
  await getLoginPage(this).navigate();
});

When('the user enters username {string}', async function (this: SauceWorld, username: string) {
  await getLoginPage(this).enterUsername(username);
});

When('the user enters password {string}', async function (this: SauceWorld, password: string) {
  await getLoginPage(this).enterPassword(password);
});

When('clicks the login button', async function (this: SauceWorld) {
  await getLoginPage(this).clickLogin();
});

Then('the header title should be {string}', async function (this: SauceWorld, expectedTitle: string) {
  const titleLocator = this.page.locator('.title');
  await expect(titleLocator).toHaveText(expectedTitle);
});

Then('an error message should appear containing {string}', async function (this: SauceWorld, expectedMessage: string) {
  const actualError = await getLoginPage(this).getErrorText();
  expect(actualError).toContain(expectedMessage);
});