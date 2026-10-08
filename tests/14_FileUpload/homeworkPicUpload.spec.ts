import { test, expect, Locator } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const upload_dir = path.join(__dirname, '../upload/mypic.jpg');

test("Login to Testing Academy", async ({ page }) => {

    await page.goto(process.env.BASE_URL!);

    await page.getByPlaceholder("Enter your email address").fill(process.env.TEST_USERNAME!);

    await page.getByRole("button", { name: "Continue", exact: true })
        .first()
        .click();

    await page.getByPlaceholder("Enter your password").fill(process.env.TEST_PASSWORD!);

    await page.getByRole("button", { name: "Continue", exact: true })
        .first()
        .click();
    //await page.getByRole('textbox', { name: 'Enter verification code' }).fill('194505')   ;
    //await page.waitForLoadState('networkidle');
      await page.pause();
    console.log("Verification code entered");   
    //small dialog comes with cross on top right
    await page.getByRole('button', { name: 'Close' }).click();
    await expect(page.getByRole('button', { name: 'Close' })).toBeHidden();
    //await page.waitForTimeout(1000);
    await page.getByRole("link", { name: "Settings" }).click();//left side bottom settings link
    await page.waitForTimeout(1000);
    await page.locator("#avatar-upload").setInputFiles(upload_dir);//upload photo,<label for="avatar-upload">

    await page.waitForTimeout(5000);
    await page.pause();
});

//npx playwright test tests/14_FileUpload/homeworkPicUpload.spec.ts --reporter=line