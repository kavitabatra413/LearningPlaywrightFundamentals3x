import { test, expect} from '@playwright/test';

test("Verfiy the error message in the wingify free trial", async({ page})=>{


    await page.goto("https://wingify.com/free-trial/");
    let inputBox = page.locator("//input[@id='free-trial-step1-email']");//XPath locator
    await inputBox.fill("abccd");

    await page.locator("#free-trial-step1-gdpr-consent-checkboxcu-marketing-consent-checkbox").click(); //css id #
    await page.locator("[data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']").click();//css attribute dataqa

   
    await page.locator("//button[@data-qa='page-su-submit']").first().click();//XPath locator

    let error_message = page.locator("//div[contains(@class,'invalid-reason')]").first();
    let error_message_text = await error_message.textContent();
    expect(error_message_text).toContain("The email address you entered is incorrect.");
   
    await page.pause();

});

/*
CTRL F
search //div[contains(@class,'invalid-reason')]
16 so first function used
expect can take locator or text
*/

/*
#username → CSS ID locator
.my-class → CSS class locator
[data-qa='...'] → CSS attribute locator
input[name='username'] → CSS attribute locator
button[type='submit'] → CSS attribute locator
*/