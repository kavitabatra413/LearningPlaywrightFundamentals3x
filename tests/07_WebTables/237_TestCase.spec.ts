import { test, expect, Locator } from '@playwright/test';

test('Verify the TestCase', async ({ page }) => {
   await page.goto("https://awesomeqa.com/webtable1.html");

   //rows represents a locator that points to all <tr> elements inside the table body.
   const rows = page.locator('table[summary="Sample Table"] tbody tr');
   const rowCount = await rows.count();//4

   for(let i=0;i<rowCount-1;i++){
      // const colsheader = await rows.nth(1).locator('th').allInnerTexts();
      //Here, rowsData is an array of strings containing the text from all <td> cells in the current row.
      const rowsData = await rows.nth(i).locator('td').allInnerTexts();
      console.log(`Row ${i + 1}:`, rowsData);

   }

   await page.pause();
});


/*npx playwright test tests/07_WebTables/237_TestCase.spec.ts
rows	Locator for all <tr> rows
rows.nth(i)	Locator for one <tr>
rows.nth(i).locator('td')	Locator for all <td> cells in that row
rowsData	Array of strings containing the text of those cells
Row 1: [ 'UAE', 'Dubai', '829m', '2010', '1', '\n' ]
Row 2: [ 'Saudi Arabia', 'Mecca', '601m', '2012', '2', '\n' ]
Row 3: [ 'Taiwan', 'Taipei', '509m', '2004', '3', '\n' ]
*/