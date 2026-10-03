import { test, expect} from '@playwright/test';

test("Enter data", async({ page})=>{


    await page.goto("https://app.wingify.com/#/login");
    let username = page.getByRole("textbox",{ name: "Email", exact :true}); //error
    let password = page.getByRole("textbox",{ name: "Password"});//error
    username.nth(1);
    await username.fill('admin@vwo.com');
    await password.fill('1234');

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
*/