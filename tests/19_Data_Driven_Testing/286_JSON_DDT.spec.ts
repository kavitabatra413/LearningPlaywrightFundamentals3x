import { test, expect } from '@playwright/test';
import path from 'path';
import loginData from "./test-data/registration-data.json";

test.describe('DDT JSON', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');
    });

    test.afterEach(async ({ }, testInfo) => {
        console.log(`afterEach: ${testInfo.title} — status: ${testInfo.status}`);
    });

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {

            const textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            const textboxPassword = page.getByRole("textbox", { name: "Password" })
                .or(page.locator("#password"))
                .or(page.locator("[name=\"password\"]"));
            const buttonLogin = page.getByRole("button", { name: "Login to Practice Account" })
                .or(page.getByTestId("login-button"))
                .or(page.getByText("Login to Practice Account"));

            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLogin.click();

            // if (data.shouldPass === "true") {
            //     await expect(page).not.toHaveURL(/multiple_element_filter/);
            // } else {
            //     await expect(page.getByText(data.expectedError)).toBeVisible();
            // }
        });//test finish

    }//for  finish

});//describe finish

/*npx playwright test 286_JSON_DDT.spec.ts
Running 5 tests using 1 worker

  ✓  1 286_JSON_DDT.spec.ts:17:13 › DDT JSON › Login with : valid registration (1.5s)
afterEach: Login with : valid registration — status: passed
  ✓  2 286_JSON_DDT.spec.ts:17:13 › DDT JSON › Login with : password mismatch (1.3s)
afterEach: Login with : password mismatch — status: passed
  ✓  3 286_JSON_DDT.spec.ts:17:13 › DDT JSON › Login with : weak password (1.3s)
afterEach: Login with : weak password — status: passed
  ✓  4 286_JSON_DDT.spec.ts:17:13 › DDT JSON › Login with : duplicate email (1.4s)
afterEach: Login with : duplicate email — status: passed
  ✓  5 286_JSON_DDT.spec.ts:17:13 › DDT JSON › Login with : invalid email format (1.0s)
afterEach: Login with : invalid email format — status: passed

  5 passed (8.0s)
  
  Where do these values come from?
- testInfo is passed automatically by Playwright to the afterEach callback.
- title and status are properties of that object.
testInfo contains information about the currently executing test, including its title, status, duration, and other execution details*/