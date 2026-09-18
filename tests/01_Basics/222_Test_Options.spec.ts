import { test, expect } from '@playwright/test';

test('context with options', async ({ browser})=>{
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 },
        locale: 'fr-FR',
        timezoneId: 'Europe/Paris',
        geolocation: { latitude: 48.8566, longitude: 2.3522 },
        permissions: ['geolocation'],
    });
    const page = await context.newPage();
    await page.goto('https://app.vwo.com/#login');
    await context.close();
});

test('mobile context', async ({ browser }) => {
    const iPhone = {
        viewport: { width: 375, height: 667 },
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X)',
        deviceScaleFactor: 2,
        isMobile: true,
        hasTouch: true,
    };
    const context = await browser.newContext(iPhone);
    const page = await context.newPage();
    await page.goto("https://app.vwo.com/#login");
    await context.close();
});

// run direct from arrow. 
// first test not fast . browser opened and closed
// next test 3 pages oepend. I could see

/*test() → Playwright function used to define a test.
'context with options' → test name.
{ browser } → Playwright provides the browser fixture.
async → because we use await for Playwright operations.
browser.newContext() creates a new isolated browser session/context with specific settings.
Pretend the browser window/page has a viewport of 1920 × 1080 pixels
The application may therefore display things such as:

French language
French date formats
This makes the browser context behave as though it is in the Paris timezone.
geolocatopn:For this browser context, pretend the user's location is Paris."

in the Playwright Test framework, the browser fixture is managed by Playwright. 
You generally don't manually close the browser fixture.
*/