import { test, expect } from "@playwright/test";

// Load the saved session

test.use(
    {
        storageState : './user-session.json'
    });


test("go directly to dashboard — Test1", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard2 — Test2", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard3 — Test3", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

/*C:\Users\Kavita Batra\Documents\LearningPlaywrightFundamentals3x\allure-results
allure-results/
 ├── xxx-result.json
 ├── xxx-container.json
 ├── attachment.txt
 command allure serve allure-results
 It will generate the report and start a local web server, giving you a URL like:
http://127.0.0.1:XXXXX
 */

 /*DefaultHTML report
 npx playwright show-report
 C:\Users\Kavita Batra\Documents\LearningPlaywrightFundamentals3x\playwright-report

 D:\Playwright\MyProject\
│
├── tests\
├── playwright.config.ts
├── package.json
└── playwright-report\
    └── index.html
 */