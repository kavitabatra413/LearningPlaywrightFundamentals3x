import { test, expect} from '@playwright/test';

test("Verfiy URL", async({ page})=>{


    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter/");
    let inputBox = page.locator("//input[@id='email']");
    await inputBox.fill("dummy@dummy.com");
    let PassBox = page.locator("//input[@id='password']");
    await PassBox.fill("dummy");

    await page.locator("//input[@type='checkbox']").click();
    await page.locator("//button[@data-testid='login-button']").click();

    expect(page).toHaveURL("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=aa%40aa.com&password=brgn&remember=yes#login-success");

    await page.pause();

});

