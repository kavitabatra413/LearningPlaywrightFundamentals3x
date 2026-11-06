import { chromium } from 'playwright';
import dotenv from "dotenv";

dotenv.config();
// Credentials live in .env (gitignored) — never hardcode them in a public repo.

const VWO_USER = process.env.VWO_USER;
const VWO_PASS = process.env.VWO_PASS;

async function saveSession() {

    let browser = await chromium.launch({ headless: false });
    let context = await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://app.wingify.com/#/login");

    await page.fill("#login-username", VWO_USER);//CSS id locator
    await page.fill("#login-password", VWO_PASS);//CSS id locator

    await page.click("#js-login-btn");//CSS id locator
    await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
    //https://app.wingify.com/#/dashboard?accountId=1283116

    await context.storageState({ path: "./user-session.json" });//SAVE the login session for reuse
    console.log("Session saved to user-session.json ✅");

    await browser.close();

}
saveSession();

/*dotenv is a Node.js package used to load environment variables from a .env file into your application.
A browser context can contain things like:
Cookies 🍪
Local Storage
Session-related information
Session Storage is a browser feature used to temporarily store data on the
client side (in the browser) for a particular tab or browsing session.
In simple terms, it remembers information while you are using a website,
 even when you navigate from one page to another.*/

/* 1. CSS ID locator
await page.fill("#login-username", "admin@vwo.com");

 2. CSS class locator
await page.fill(".username", "admin@vwo.com");

 3. CSS attribute locator
await page.fill('input[name="username"]', "admin@vwo.com");
*/
