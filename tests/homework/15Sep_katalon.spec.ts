import { test, expect } from '@playwright/test';

// Test 1 - Verify visibility of Make Appointment
test('tc#1 - Verify that the Katalon page is loaded', async ({ page }) => {

    await page.goto('https://katalon-demo-cura.herokuapp.com', {
        waitUntil: 'domcontentloaded',
        timeout: 3000
    });

    const appointmentButton = page.locator('#btn-make-appointment');
    await appointmentButton.click();

    const userNameField = page.locator('#txt-username');
    const passwordField = page.locator('#txt-password');
    const loginButton = page.locator('#btn-login');

    await userNameField.fill('John Doe');
    await passwordField.fill('ThisIsNotAPassword');
    await loginButton.click();
    await expect(page.locator('h2')).toHaveText('Make Appointment');
});