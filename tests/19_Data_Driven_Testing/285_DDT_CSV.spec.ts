import { test, expect } from '@playwright/test';
import { readCSV } from './util/csvReader';
import path from 'path';

test.describe('DDT CSV', () => {
    const loginData = readCSV(path.join(__dirname, '/test-data/login-data.csv'));
    
    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" }).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
            let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" }).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLoginToPracticeAccount.click();

            await expect(page).toHaveURL(data.expectedURL);
        });
    }

});

/*
npx playwright test 285_DDT_CSV.spec.ts 
path — Node.js built-in module used to work with file and folder paths.
'path' — the module name; no installation is required.
  7 failed
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : valid credentials ───────────────────────────
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : invalid password ────────────────────────────
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : empty username ──────────────────────────────
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : empty password ──────────────────────────────
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : locked account ──────────────────────────────
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : special chars ───────────────────────────────
    285_DDT_CSV.spec.ts:10:13 › DDT CSV › Login with : SQL injection ───────────────────────────────
*/