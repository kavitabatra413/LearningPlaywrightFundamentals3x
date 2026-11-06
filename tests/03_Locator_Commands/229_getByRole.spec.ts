import { test, expect} from '@playwright/test';

test("Enter data", async({ page})=>{
    await page.goto("https://app.wingify.com/#/login");
    //nth(1) = Second element
    //let username = page.getByRole("textbox",{ name: "Email", exact :true}).nth(1); //error
    //let password = page.getByRole("textbox",{ name: "Password"});//error
    //username.nth(1);
    await username.fill('admin@vwo.com'); //incorrect id
    await password.fill('1234'); //incorrect password

    await page.pause();

});


/*
name means accessible name.It does NOT mean name="username"
Find an element whose ARIA role is textbox and whose accessible name is Email.
HTML	Playwright role
<input type="text">	textbox
<input type="email">	textbox
<input type="password">	textbox
<textarea>	textbox
<button>	button
<input type="checkbox">	checkbox
<input type="radio">	radio
cd C:\Users\Kavita Batra\Documents\LearningPlaywrightFundamentals3x\tests\03_Locator_Commands
npx playwright test 229_getByRole.spec.ts
*/