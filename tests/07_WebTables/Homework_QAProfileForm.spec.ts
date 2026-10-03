import { test, Page, expect, Locator } from '@playwright/test';

test("QAProfileForm", async ({ page }) => {
   await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");

   //Personal information
   await page.getByRole('textbox', { name: "First name" }).fill("Kavita");//First name
   await page.getByRole('textbox', { name: "Last name" }).fill("Batra");//Last name
   await page.getByRole('radio', { name: "Female" }).click();//Gender

   //Professional details
   await page.locator("#years-experience").click();//Years of experience
   await page.selectOption("#years-experience", "2");//select 2 in dropdown
   await page.locator('#profile-date').fill('2026-10-01');//date
   await page.getByRole('radio', { name: "Manual Tester" }).click();//profession

   //Technical skills
   await page.getByRole('checkbox', { name: 'UFT' }).check();//Automation tools
   await page.getByRole('checkbox', { name: 'Asia' }).check();//Continents you have worked from

   //select Selenium commands
   await page.getByRole('tab', { name: 'Navigation Commands' }).click();

    //File operations
    await page.getByRole('button', { name: "Save profile" }).click();//save profile button

   //check
   const output = page.locator('#submission-output');
   const content = await output.textContent();
   const data = JSON.parse(content!);
   expect(data.firstName).toBe('Kavita');
   await page.pause();
});

