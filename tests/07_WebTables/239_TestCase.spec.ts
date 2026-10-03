import { test, expect, Locator } from '@playwright/test';

test('Verify filter and has text', async ({ page }) => {
   await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

   const forgottenPasswordLink = page.locator('a.list-group-item')
      .filter({ hasText : 'Forgotten Password'});
   await forgottenPasswordLink.click();

   const privacyLink = page.locator('footer a')
   .filter(
      { hasText: 'Privacy Policy' }
   );

   await expect(privacyLink).toHaveAttribute('href', '#privacy-policy');

   await page.pause();
});

/*
Both are CSS locator + filter combinations in Playwright.
footer
   └── div
        └── a

You don't need to mention the <div>.
Because CSS selectors do not require you to write every element in the hierarchy.
*/
