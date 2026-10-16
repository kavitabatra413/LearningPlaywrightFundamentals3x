import { type Locator, type Page } from '@playwright/test';

export class Cartpage {
  readonly page: Page;
  readonly title: Locator;
  readonly itemName: Locator;
  readonly itemPrice: Locator;
  readonly checkout: Locator;

  constructor(page: Page) {
    this.page = page;

    // TTACart uses data-test, not Playwright's default data-testid.
    const byTest = (id: string) => page.locator(`[data-test="${id}"]`);

    this.title = byTest('title');
    this.itemName = byTest('inventory-item-name');
    this.itemPrice = byTest('inventory-item-price');
    this.checkout = byTest('checkout');
  }

  async goto() {
    await this.page.goto('https://app.thetestingacademy.com/playwright/ttacart/cart');
  }
}

/*
readonly means you can assign a value to page only once, usually in the constructor.
After that, you cannot reassign it.
standard_user,tta_secret
const byTest = This line creates a reusable function named byTest that locates HTML 
elements using their data-test attribute.
*/