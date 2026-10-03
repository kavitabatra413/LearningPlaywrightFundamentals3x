import { test, expect, Locator } from '@playwright/test';

test('Verify the TestCase', async ({ page }) => {
   await page.goto("https://app.thetestingacademy.com/playwright/webtable");

   // await page.locator('//td[text()="Rohan.Mehta"]/preceding-sibling::td/input').click();


   await page.locator("tr:has(td:text('Rohan.Mehta'))")
   .locator('input')
   .first()
   .click();


   // await page.pause();
   await page.waitForTimeout(5000);
});

/*
Find Rohan.Mehta's table row → find an input inside that row → take the first input checkbox → click it.
Part	What it is
tr:has(td:text('Rohan.Mehta'))	  CSS-style locator using Playwright extended selectors
.locator('input')	CSS element      locator + chaining
.first()	Locator                   filtering
.click()	                          Action
*/