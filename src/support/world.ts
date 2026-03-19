import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { BrowserContext, Page } from "@playwright/test";

export interface CustomWorld extends World {
  context?: BrowserContext;
  page?: Page;
}

export class SauceWorld extends World implements CustomWorld {
  public context!: BrowserContext;
  public page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(SauceWorld);
