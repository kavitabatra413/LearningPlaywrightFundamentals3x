/*
Navigate to URL : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Username : admin
Password : admin123
Add an employee
Click PIM to view all employees again.
Search the same employee which is added by navigating to different pages and delete it.
cd C:\Users\Kavita Batra\Documents\LearningPlaywrightFundamentals3x\tests\07_WebTables
npx playwright test Homework_AutomateOrangeHRM.spec.ts --headed
*/
import { test, Page, expect, Locator } from '@playwright/test';

test("Orange HRM", async ({ page }) => {
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
   await page.getByPlaceholder("Username").fill("admin");
   await page.getByPlaceholder("Password").fill("admin123");
   await page.getByRole('button', { name: "Login" }).click();

   await page.locator("//a[contains(@href,'viewPimModule')]").click();
   await page.getByRole('button', { name: 'Add' }).click();
   await page.getByPlaceholder("First Name").fill("kavita");
   await page.getByPlaceholder("Middle Name").fill("mid");
   await page.getByPlaceholder("Last Name").fill("last");
   await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("9876");
   await page.getByRole('button', { name: 'Save' }).click();

   await page.locator("//a[contains(@href,'viewPimModule')]").click();
   await page.locator("//input[@class='oxd-input oxd-input--active']").nth(1).fill("9876");
   await page.getByRole('button', { name: 'Search' }).click();
   await page.locator("//i[@class='oxd-icon bi-check oxd-checkbox-input-icon']").nth(1).click();
   await page.getByRole('button', { name: 'Delete Selected' }).click();
   await page.getByRole('button', { name: 'Yes, Delete' }).click();

   await page.pause();
});
