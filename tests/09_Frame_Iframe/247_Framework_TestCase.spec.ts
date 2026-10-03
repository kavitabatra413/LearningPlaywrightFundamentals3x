import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify frameset', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

  //<frame name="main" src="./main-frame.html" title="Main frame · The Testing Academy">
  let mainFrame: FrameLocator = await page.frameLocator('[name="main"]');
  const headerText = await mainFrame.locator('h2').innerText();
  console.log(headerText);//Main frame — practice playground

    const allFrames: Locator[] = await page.locator('//frame').all();
    console.log('total number of frames: ' + allFrames.length);//total number of frames: 3
  
     for (const frame of allFrames) {
        console.log(await frame.getAttribute('name'), ': ', await frame.getAttribute('src'));
    }

    /*
  side :  ./side-frame.html
  main :  ./main-frame.html
  footer :  ./footer-frame.html
    */
    
    let sideFrame: FrameLocator = await page.frameLocator('[name="side"]');
    //<a href="./registration-form.html" target="main" data-testid="side-link-registration">Vehicle registration</a>
    await sideFrame.getByTestId('side-link-registration').click();

  await page.pause();
});

/*<frameset
mainFrame is simply a variable name that stores a Playwright FrameLocator.
page.locator('//frame') : Finds all <frame> elements on the page using XPath.
.all(): Returns an array of locators.
*/
