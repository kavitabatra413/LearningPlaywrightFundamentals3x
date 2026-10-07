import { test, expect, Locator } from '@playwright/test';
import path from 'path';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/'; // replace with target page

test.describe('FileUpload handling', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto(URL);
   });

   test('locate FileUpload and upload', async ({ page }) => {
      // File upload
      // Path of the file. - You should. A
      //<div class="pf-v6-c-multiple-file-upload" role="presentation" tabindex="0"><input accept="image/jpeg,.jpg
      await page.locator("div.pf-v6-c-multiple-file-upload input").setInputFiles(
            [{
                name: 'file1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')
            },
            {
                name: 'file2.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('this is test')
            }

            ]);

   //   await page.locator(".pf-v6-c-button.pf-m-secondary").click();
   //<button class="pf-v6-c-button pf-m-secondary" type="button">Upload</span></button>
     await page.pause();

   });
});

//npx playwright test tests/14_FileUpload/262_Multiple_FileUpload_TC.spec.ts --reporter=line
//Buffer means create the file's content in memory instead of reading an actual .jpg file from your computer.
//It is saying "use this text as the content of the file I'm creating for this upload."
//file1.jpg and file2.jpg will be formed on its own
//Yes — the files are created in memory, not as physical .jpg files in your folder.