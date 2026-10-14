import { test, expect } from '@playwright/test';


test.describe('DDT Simple', () => {

test.beforeEach(async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
  });

// TEST DATA — array of objects
    const loginData = [
        {
            description: "valid credentials",
            username: "admin@gmail.com",
            password: "admin123",
            expectedURL: /admin/,
            shouldPass: true
        },
        {
            description: "invalid password",
            username: "admin123@ymail.com",
            password: "wrongpass",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "empty username",
            username: "",
            password: "admin123",
            expectedURL: /admin123/,
            shouldPass: false
        },
        {
            description: "empty password",
            username: "pramod@ppp.com",
            password: "",
            expectedURL: /admin/,
            shouldPass: false
        },
        {
            description: "both empty",
            username: "",
            password: "",
            expectedURL: /multiple_element_filter/,
            shouldPass: false
        }
    ];

    //for loop
    for(const data of loginData){
        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.locator("#email").fill(data.username);
            await page.locator("#password").fill(data.password);
            await page.getByTestId("login-button").click();
        });

    }

});

//npx playwright test 284_DDT_JSON_ARRAY.spec.ts 
/*
Running 5 tests using 1 worker

  ✓  1 284_DDT_JSON_ARRAY.spec.ts:51:13 › DDT Simple › Login with : valid credentials (4.3s)
  ✓  2 284_DDT_JSON_ARRAY.spec.ts:51:13 › DDT Simple › Login with : invalid password (1.9s)
  ✓  3 284_DDT_JSON_ARRAY.spec.ts:51:13 › DDT Simple › Login with : empty username (1.6s)
  ✓  4 284_DDT_JSON_ARRAY.spec.ts:51:13 › DDT Simple › Login with : empty password (1.4s)
  ✓  5 284_DDT_JSON_ARRAY.spec.ts:51:13 › DDT Simple › Login with : both empty (1.5s)

  5 passed (12.0s)
*/