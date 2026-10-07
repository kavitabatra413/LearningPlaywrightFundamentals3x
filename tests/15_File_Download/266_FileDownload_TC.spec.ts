import { test, expect, Locator } from '@playwright/test';
test.describe('File Upload Demo - TestingAcademy', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');
   });

   test('demo: Download setInputFiles', async ({ page }) => {


         const [staticDownload] = await Promise.all([
               page.waitForEvent('download'),
               page.getByTestId('download-static').click()//data-testid="download-static">
         ]);

         await staticDownload.saveAs('./out/'+ staticDownload.suggestedFilename());
         
      await page.pause();

   });

});

//npx playwright test tests/15_File_Download/266_FileDownload_TC.spec.ts --reporter=line
//download static file and save it in out folder with the same name as suggested by the browser.
//"Wait until a download event happens on this page."
//The click is what actually triggers the download.
// out will be formed under root
//sample-download.txt file inout folder
//The content of file comes from the web application/server that you clicked the Download button on.
