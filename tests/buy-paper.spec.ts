import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await page.getByRole('heading', { name: 'Browse Books by Genre' }).click();
  await page.getByRole('link', { name: 'Front-cover for Urmaal उरमाल' }).first().click();
  await page.getByRole('button', { name: 'Buy now' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testing testing');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testing@awecode.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('9800000000');
  await page.getByRole('textbox', { name: 'Street Address' }).click();
  await page.getByRole('textbox', { name: 'Street Address' }).fill('koteshwar');
  await page.getByRole('button', { name: 'ORDER' }).click();
});