import { test, expect, Locator } from '@playwright/test';

test('Verify Custom DropDowns', async ({ page }) => {
   await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');

   //Programming language
   await page.getByTestId('lang-trigger').click();//data-testid="lang-trigger"
   await page.getByRole("option", { name:"JavaScript" }).click();

   // await page.getByText("JavaScript").first().click();

   //Experience level
   await page.getByTestId('experience-trigger').click();//data-testid="experience-trigger"
   await page.getByText("Mid-level (4-6 years)", { exact: true }).click();


   await page.pause();
});

/*Programming language dropdown\
instead of select tag its button
getByTestId() specifically looks for the data-testid attribute:
*/