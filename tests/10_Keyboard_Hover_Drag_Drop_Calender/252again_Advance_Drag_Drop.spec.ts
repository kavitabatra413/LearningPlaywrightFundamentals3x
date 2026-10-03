import { test, expect, Locator } from '@playwright/test';
test.use({ viewport: { width: 1920, height: 1080 } });

test('Verify Drag and Drop in Kanban Board', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    
    //<article class="card" draggable="true" id="card-review-pr-21" data-testid="card-review-pr-21"
    let source:Locator = page.locator('#card-review-pr-21');//CSS selector
    const sBox = (await source.boundingBox())!;

    let target: Locator = page.locator('[data-status="in-progress"]');
    const tBox = (await target.boundingBox())!;

    await page.waitForTimeout(5000);
    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();

    
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, {steps:15});
    await page.mouse.up();

    await page.pause();
});