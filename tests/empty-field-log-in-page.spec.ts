import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('textbox', { name: 'Email*' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password*' })).toBeVisible();
});