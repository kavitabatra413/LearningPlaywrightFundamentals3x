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
*/