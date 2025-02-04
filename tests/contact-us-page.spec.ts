import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await expect(page.getByRole('link', { name: 'CONTACT US', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'CONTACT US', exact: true }).click();
  await expect(page.getByText('Contact Us Thuprai Solutions')).toBeVisible();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('test test');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('est@awecode.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('9800000000');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('testing');
  await page.getByRole('button', { name: 'Submit' }).click();
});