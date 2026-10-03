import { test, expect, Locator, FrameLocator } from '@playwright/test';

test('Verify Frame handling practice', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/frames/');
  let vechileFrame: FrameLocator = await page.frameLocator("#frame-one");//<iframe id="frame-one" 

  await vechileFrame.locator('#RESULT_TextField-1').fill('Hyundai i10');//<input id="RESULT_TextField-1", CSS locator
  await vechileFrame.locator('#RESULT_TextField-2').fill('Pramod Dutta');//owner name text field
  await vechileFrame.locator('#RESULT_TextField-3').fill('2012');//Registration number text field
  await vechileFrame.locator('#RESULT_RadioButton-1').selectOption('Hatchback');//vehicle type dropdown,<select id="RESULT_RadioButton-1"

  await vechileFrame.locator('#RESULT_TextField-4').fill('2015');//year text field

  await vechileFrame.locator('#RESULT_TextArea-1').fill('Amazing car with amazing family car in a budget');//text area

  await vechileFrame.getByText('Submit registration', { exact: true }).click();
  //await vechileFrame.getByRole('button', { name: 'Submit registration' }).click();

  let output = await vechileFrame.locator("#vehicle-output").innerText();//text area id="vehicle-output"
  console.log(output);
  await page.pause();
});

//a frame locator is used to interact with elements that are inside an <iframe>.
