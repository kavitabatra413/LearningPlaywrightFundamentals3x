import { test, expect, Locator } from '@playwright/test';

test('Verify DropDowns', async ({ page }) => {
   await page.goto("https://the-internet.herokuapp.com/dropdown");

   await page.locator("#dropdown").click();//CSS id selector
   await page.selectOption("#dropdown", "Option 2");

   await page.pause();
});

//select , then option tag
