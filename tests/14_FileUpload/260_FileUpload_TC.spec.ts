import { test, expect, Locator } from '@playwright/test';
import path from 'path';//path is a built-in Node.js module used for working with file and folder paths.

const URL = 'https://the-internet.herokuapp.com/upload'; // replace with target page , takes time

test.describe('FileUpload handling', () => {
   test.setTimeout(60000);
   test.beforeEach(async ({ page }) => {
      //await page.goto(URL, { waitUntil: 'domcontentloaded' });
      await page.goto(URL, { timeout: 60000 });
   });
   //before every test, open the application URL and wait until the HTML document has loaded.

   test('locate FileUpload and upload', async ({ page }) => {
      // File upload
      // Path of the file. - You should. A
      //__dirname is a Node.js special variable that gives the absolute path of the folder where the current JavaScript file is located.
      const filePath = path.join(__dirname, 'testdata.txt');
      console.log(filePath);
      // __dirname - Current working directory full path 
      await page.locator("#file-upload").setInputFiles([filePath]);//Choose file , <input id="file-upload" 
      await page.getByRole("button", { name: "Upload" }).click(); // upload button
      await expect(page.locator('#uploaded-files')).toContainText('testdata.txt');//<div id="uploaded-files" class="panel
      await page.pause();
   });
});

//npx playwright test tests/14_FileUpload/260_FileUpload_TC.spec.ts --reporter=line