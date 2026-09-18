import { test, expect } from '@playwright/test'

test("Verify X", async ({ page }) => {

    await page.goto(
        "https://app.thetestingacademy.com/playwright/multiple_element_filter"
        , { waitUntil: 'commit' } //It does NOT wait for the entire page to load.
    );

    const response = await page.goto('https://app.thetestingacademy.com/login', {
        waitUntil: 'domcontentloaded',
        timeout: 45000,
        referer: 'https://thetestingacademy.com'
    });

});
//Wait until the HTML document has been completely parsed and the DOM is ready.
//So, domcontentloaded does not mean the entire page is fully loaded.