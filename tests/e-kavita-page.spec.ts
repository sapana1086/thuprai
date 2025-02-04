import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await expect(page.getByText('Search Search Your Favourite Book Login')).toBeVisible();
  await expect(page.getByRole('list').filter({ hasText: 'BOOKS All Books New Releases' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: 'Browse Books by Genre' }).nth(3)).toBeVisible();
  await page.getByRole('link', { name: 'POEMS' }).click();
  await expect(page.getByText('eकविता e-Kavita is an')).toBeVisible();
  await page.getByRole('link', { name: 'पानीको लय' }).click();
  await expect(page.locator('div').filter({ hasText: 'Search Search Your Favourite Book Login POEMS BOOKS All Books New Releases' }).nth(1)).toBeVisible();
  await expect(page.locator('.aplayer-button > .iconify')).toBeVisible();
  await page.locator('.aplayer-button > .iconify').click();
  await page.locator('.flex-1 > .relative').click();
  await page.locator('.aplayer-button').click();
});