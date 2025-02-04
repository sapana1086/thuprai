import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('sapanapradhan.1234@gmail.com');
  await page.getByRole('link', { name: 'Forgot Password?' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('sapanapradhan.1234@gmail.com');
  await page.getByRole('button', { name: 'Change!' }).click();
});