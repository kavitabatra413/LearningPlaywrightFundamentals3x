/*import { test, expect } from '@playwright/test'; 
imports the test and expect functions from Playwright's testing library so that
I can define test cases and perform assertions.
test - Used to create/write a test.
expect -Used to verify/check the result.
*/

import { test, expect } from '@playwright/test';

test('viewer', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

test('admin', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");
});

