import { Before, After, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { SauceWorld } from './world';

let browser: Browser;

Before(async function (this: SauceWorld) {

  browser = await chromium.launch({ headless: false });
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: SauceWorld, scenario) {

  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page?.screenshot();
    if (screenshot) {
      this.attach(screenshot, 'image/png');
    }
  }

  await this.page?.close();
  await this.context?.close();
  await browser.close();
});