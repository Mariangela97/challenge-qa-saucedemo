import { Given, When } from '@cucumber/cucumber';
import { SauceWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

const getLoginPage = (world: SauceWorld) => new LoginPage(world.page);
const getInventoryPage = (world: SauceWorld) => new InventoryPage(world.page);

Given('the user is logged into Sauce Demo with {string} and {string}', async function (this: SauceWorld, user, pass) {
  const loginPage = getLoginPage(this);
  await loginPage.navigate();
  await loginPage.login(user, pass);
});

When('the user adds {string} to the cart', async function (this: SauceWorld, productName: string) {
  await getInventoryPage(this).addProductToCart(productName);
});

When('the user goes to the cart', async function (this: SauceWorld) {
  await getInventoryPage(this).goToCart();
});