import { test, expect, Locator } from '@playwright/test';

test('Verify Drag and Drop in Kanban Board', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/dnd');
    
    
    let source:Locator = page.locator('#card-write-spec');//<article class="card" draggable="true" id="card-write-spec" 
    const sBox = (await source.boundingBox())!;

    let target: Locator = page.locator('[data-status="in-progress"]');//<div class="column" data-status="in-progress"
    const tBox = (await target.boundingBox())!;

    await page.mouse.move(sBox.x + sBox.width / 2, sBox.y + sBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(tBox.x + tBox.width / 2, tBox.y + tBox.height / 2, { steps: 10 });
    await page.mouse.up();


    await page.pause();
});

/*
"Give me the position and size of the source element on the page."
boundingBox() returns information like:
{
  x: 100,
  y: 250,
  width: 300,
  height: 150
}
The ! is TypeScript's non-null assertion operator.
sBox = bounding box of the source element
tBox = bounding box of the target element
Moves the mouse to the center of the source element.
mouse down: Presses and holds the left mouse button.
Moves the mouse from the source to the center of the target while keeping the mouse button pressed.
steps: 10 means Playwright doesn't jump directly from source → target.
mouse up :Releases the mouse button.
*/
