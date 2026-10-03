import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify nested iframe', async ({ page }) => {
  await page.goto('https://selectorshub.com/iframe-scenario/');
  let frame1: FrameLocator = page.frameLocator('#pact1');
  let frame2: FrameLocator = frame1.frameLocator('#pact2');
  let frame3: FrameLocator = frame2.frameLocator('#pact3');

  //await frame1.locator('#inp_val').fill('AishwaryaRai');//CSS locator <input id="inp_val"
  await frame1.locator('#inp_val:visible').nth(1).fill('AishwaryaRai');
  await frame2.locator('#jex').fill('Wife');//<input id="jex" 
  await frame3.locator('#glaf').fill('Playwright');//<input id="glaf"

  const headerText = await frame1.locator('h3').innerText();
  console.log(headerText);
  await page.waitForTimeout(5000);
  page.keyboard


  await page.pause();
});

/*
<iframe id="pact1"  "pact2"  "pact3"
iframe and nested iframes
Dare for you
Heaven is here
*/