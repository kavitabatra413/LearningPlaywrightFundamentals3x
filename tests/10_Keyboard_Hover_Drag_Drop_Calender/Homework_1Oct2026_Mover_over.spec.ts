import { test, expect } from '@playwright/test';

test('perform mouse over', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    //<div class="nav-item" tabindex="0" data-testid="nav-add-ons">
    await page.locator("//div[@data-testid='nav-add-ons']").hover();//Xpath locator
    //<a class="submenu-item" role="menuitem"
    await page.getByRole("menuitem", { name: "Wi-Fi" }).click();
    
    let output = await page.locator("#output").innerText();//<div class="submission-output" id="output"
    console.log("Output is : " + output);
    const jsonData = JSON.parse(output);
    expect(jsonData.clicked).toContain("Wi-Fi")

    await page.pause();
});