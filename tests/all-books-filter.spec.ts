import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await page.getByRole('link', { name: 'BOOKS', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search for books by title,' }).click();
  await expect(page.getByRole('checkbox', { name: 'Biography & Memoirs' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Biography & Memoirs' }).check();
  await page.goto('https://thuprai.com/books/?genre=biography-memoirs');
  await expect(page.getByRole('checkbox', { name: 'English' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'English' }).check();
  await page.goto('https://thuprai.com/books/?genre=biography-memoirs&language=English');
  await expect(page.getByRole('checkbox', { name: 'E-book' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'E-book' }).check();
  await page.goto('https://thuprai.com/books/?form=E-book&genre=biography-memoirs&language=English');
});