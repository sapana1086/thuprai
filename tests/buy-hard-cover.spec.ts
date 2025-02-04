import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await page.getByRole('textbox', { name: 'Search for books by title,' }).click();
  await page.getByRole('textbox', { name: 'Search for books by title,' }).fill('koreana-coffee guff');
  await page.getByRole('link', { name: 'Koreana - Coffee Guff' }).click();
  await page.getByRole('button', { name: 'Buy now' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testing testing');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@awecode.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('9800000000');
  await page.locator('#vs1__combobox svg').nth(1).click();
  await page.getByLabel('NepalLoading...').click();
  await page.getByLabel('NepalLoading...').fill('nepal');
  await page.getByLabel('NepalLoading...').press('Enter');
  await page.getByRole('textbox', { name: 'Street Address' }).click();
  await page.getByRole('textbox', { name: 'Street Address' }).fill('koteshwar');
  await page.locator('div:nth-child(3) > .relative > div').first().click();
  await page.getByRole('textbox', { name: 'Add a note to your order. E.g' }).click();
  await page.getByRole('textbox', { name: 'Add a note to your order. E.g' }).fill('testing');
  await page.getByRole('button', { name: 'ORDER' }).click();
});