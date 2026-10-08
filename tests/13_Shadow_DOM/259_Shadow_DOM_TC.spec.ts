import { test, expect, Locator } from '@playwright/test';

test.describe('Shadow handling', () => {

   const URL = 'https://app.thetestingacademy.com/playwright/widgets/shadow-dom'; // replace with target page

   test.beforeEach(async ({ page }) => {
      await page.goto(URL);
   });

   test('locate Shadow DOM and assert visible', async ({ page }) => {

      const card = page.getByTestId('card-account-card');
      await card.locator('input[name="email"]').fill('student@thetestingacademy.com');
      await card.locator('input[name="password"]').fill('pw');
      await card.getByTestId('card-account-submit').click();
      await expect(page.getByTestId('card-account-status'))
         .toContainText('student@thetestingacademy.com');

      const cart = page.getByTestId('counter-cart');
      await cart.getByRole('button', { name: 'Increment' }).click();
      await cart.getByRole('button', { name: 'Increment' }).click();
      await expect(cart.getByTestId('counter-value')).toHaveText('5');

      await page.getByTestId('nested-host');
      await page.getByTestId('card-inside-email').fill('pramod@thetestingacdemy.com');
      await page.getByTestId('card-inside-password').fill('pramod@123');
      await page.getByTestId('card-inside-submit').click()

      await page.pause();

   });

});

//npx playwright test tests/13_Shadow_DOM/259_Shadow_DOM_TC.spec.ts --reporter=line
//<div class="card" data-testid="card-account-card"> 1 line above says shadow root open
//<input type="email" name="email"
//<input type="password" name="password"
//<button type="button" data-testid="card-account-submit"
//<div class="status" data-testid="card-account-status">

//<tta-counter id="counter-1" data-testid="counter-cart"
//<button type="button" role="button" aria-label="Increment" data-testid="counter-cart-inc">+</button>
//<span class="value" data-testid="counter-value"
      
//<tta-nested id="nested-1" data-testid="nested-host">
