import { test, expect, Locator } from '@playwright/test';

test('Verify the TestCase', async ({ page }) => {
   await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

   let name: string = 'Luca Greco'; // 2nd page
   let row;
   while (true) {
      row = page.locator('#employees-tbody tr').filter({ hasText: name }); //id =employees-tbody
      if (await row.count()) {
         break;
      }
      const next = page.getByTestId('next-page');//next button has id next-page
      if (await next.isDisabled()) { // if Next button is disabled, then throw error
         throw new Error("Row not found!");
      }
      await next.click();
   } // while ends

   const email = await row.locator('td[data-col="email"]').innerText();
   const country = await row.locator('td[data-col="country"]').innerText();
   console.log(email, country);


   await page.pause();
});

/*
<tr>
 <th data-col="id">#</th>
 <th data-col="name">Name</th>
 <th data-col="role">Role</th>
 <th data-col="email">Email</th>
 <th data-col="country">Country</th>
</tr>
*/
