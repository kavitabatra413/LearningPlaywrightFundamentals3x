import { test, expect } from '@playwright/test';

test('Basic verify how to handle multiple elements ', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksTexts: string[] =  await page.locator('a.list-group-item').allInnerTexts();
    console.log(rightPanelLinksTexts.length);//13

    for (const link of rightPanelLinksTexts) {
        console.log(link); // will print all elements inner text
    }
    /*
    Login
Register
Forgotten Password
My Account
Address Book
Wish List
Order History
Downloads
Recurring Payments
Reward Points
Returns
Transactions
Newsletter
    */

    for(const linkText of rightPanelLinksTexts){
        if( linkText === "Forgotten Password"){
             await page.getByText(linkText).first().click();//getByText converts text to locator
        }//getByText find an HTML element containing that text.
    }

    const rightPanelLinks = await page.locator('a.list-group-item').all(); //rightPanelLinks is an array of Locator objects.
    for (const link of rightPanelLinks) {
        console.log(await link.getAttribute("href"));//is HTML attribute
    }

    /* these are all href's
    #login
#register
#forgotten-password
#my-account
#address-book
#wish-list
#order-history
#downloads
#recurring-payments etc
    */

    await page.pause();

})

/*
page.locator('a.list-group-item')
Finds all <a> elements having the class list-group-item

allInnerTexts()
Gets the inner text of every matching element and returns it as an array of strings.

rightPanelLinksTexts = array containing the inner text of all matching links.

link and linktext represents one text value at a time.
Method	Returns
locator()	Locator
locator().all()	Array of Locators
locator().allInnerTexts()	Array of strings
locator().allTextContents()	Array of strings

*/