import { test, expect} from '@playwright/test';

test("Verfiy Make Appointment link", async({ page})=>{

    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let mainButton = page.getByRole("link",{ name: "Make Appointment", exact :true});
    await mainButton.click();
    await page.pause();

});

/*
<a> makes it a link
href="./profile.php#login"
its aria role is link
generally, <a> is the HTML element used for a link.
Make Appointment comes from the visible text/content of the <a> element.
*/