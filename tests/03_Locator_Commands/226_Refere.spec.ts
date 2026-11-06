import { test } from "@playwright/test";
test("set referer for entire context", async ({ browser }) => {
    
    let context = await browser.newContext({
        extraHTTPHeaders: {
            "Referer": "https://thetestingacademy.com"
        }
    });
    let page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    console.log("Page 1 — partner referer included");
    await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
    console.log("Page 2 — partner referer included");
});

/*
extraHTTPHeader Allows you to add custom HTTP headers to requests.
"Referer" HTTP header that indicates which page or website the request came from.
*/