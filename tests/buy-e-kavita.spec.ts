import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await page.getByRole('link', { name: 'POEMS' }).click();
  await expect(page.getByText('eकविता e-Kavita is an')).toBeVisible();
  await page.getByRole('link', { name: 'पानीको लय' }).click();
  await expect(page.getByText('पानीको लयजुनू रानाJan 18, 2025· 3 min readUntitled · Unknown00:00 / 00:33')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^READ \/ LISTEN Rs 15Read or listen to this poem\.$/ }).first()).toBeVisible();
  await expect(page.getByRole('button', { name: 'READ / LISTEN' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Rs 15' })).toBeVisible();
  await page.getByRole('button', { name: 'READ / LISTEN' }).click();
  await page.getByText('You need to login to purchase this content! Login Continue with GoogleContinue').click();
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('kushma@awecode.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('thuprai123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Order #' })).toBeVisible();

});