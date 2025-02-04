import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await expect(page.getByRole('link', { name: 'E-BOOKS', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'E-BOOKS', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search for books by title,' }).click();
  await expect(page.getByRole('checkbox', { name: 'Children' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Children' }).check();
  await page.goto('https://thuprai.com/ebooks/?genre=children');
  await page.getByRole('link', { name: 'सानीका ज्ञानी कुरा' }).click();
  await expect(page.getByText('Sanika Gyani Kura सानीका ज्ञानी कुराby Anbika Giri E-book Rs 135Add to cartRead')).toBeVisible();
  await expect(page.getByText('E-book Rs 135Add to cartRead')).toBeVisible();
  await expect(page.getByText('Rs 135')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' })).toBeVisible();
  await page.getByRole('button', { name: 'Add to cart' }).click();
  await expect(page.getByRole('link', { name: 'Pay now' })).toBeVisible();
  await page.getByRole('link', { name: 'Pay now' }).click();
  await expect(page.getByText('You need to login to purchase this content! Login Continue with GoogleContinue')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('kushma@awecode.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('thuprai123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Order #' })).toBeVisible();

});