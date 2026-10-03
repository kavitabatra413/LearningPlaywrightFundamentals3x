import { test, expect, Locator } from '@playwright/test';

test('Verify Hover for the spicejet', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

    const columnA = page.locator('#column-a');//<div class="column" id="column-a"
    const columnB = page.locator('#column-b');//<div class="column" id="column-b"

    await columnA.dragTo(columnB);
    await page.pause();
    await page.pause();
});
