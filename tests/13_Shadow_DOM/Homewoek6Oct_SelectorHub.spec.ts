import { test, expect, Locator } from '@playwright/test';

test.describe('Shadow handling', () => {

    const URL = 'https://selectorshub.com/xpath-practice-page/'; // replace with target page

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate Shadow DOM and assert visible', async ({ page }) => {

        //const card = page.getByTestId('card-account-card');
        await page.locator('#kils').fill('Kavita');
        await page.locator('#pizza').fill('dominos');
        //await page.locator('#training').fill('My training text'); //timeout
        //await page.locator('#pwd').fill('MyPassword123');//not visible
        await page.keyboard.press('Tab');
        await page.keyboard.type('concept');
        await page.keyboard.press('Tab');
        await page.keyboard.press('Tab');
        await page.keyboard.type('MyPassword123');


        await page.pause();

    });

});

//npx playwright test tests/13_Shadow_DOM/Homewoek6Oct_SelectorHub.spec.ts --reporter=line
// for password shadow root closed

