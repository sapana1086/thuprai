import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/login');
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('kushma@awecode.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('thuprai123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Search Search Your Favourite Book Account')).toBeVisible();
  await expect(page.locator('.mx-auto > div:nth-child(2) > div > div').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Browse Books by Genre' }).nth(3)).toBeVisible();
});