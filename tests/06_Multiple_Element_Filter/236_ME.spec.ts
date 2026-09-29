import { test, expect, Locator } from '@playwright/test';

test('Basic verify how to handle multiple elements ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksTexts: Locator[] =  await page.locator('a.list-group-item').all();
    console.log(rightPanelLinksTexts.length);//13

    for (const link of rightPanelLinksTexts) {
        console.log(await link.getAttribute('href'));//Printed all href values
    }
    await page.pause();

});

// run file
//npx playwright test tests/06_Multiple_Element_Filter/236_ME.spec.ts
//report is generated in reports folder

/*
#login
#register
#forgotten-password
#my-account
#address-book
#wish-list
#order-history
#downloads
#recurring-payments
#reward-points
#returns
#transactions
#newsletter
*/