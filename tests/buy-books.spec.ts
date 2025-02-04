import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await expect(page.getByRole('link', { name: 'BOOKS', exact: true })).toBeVisible();
  await page.getByRole('link', { name: 'BOOKS', exact: true }).click();
  await page.getByRole('textbox', { name: 'Search for books by title,' }).click();
  await expect(page.getByRole('checkbox', { name: 'Biography & Memoirs' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Biography & Memoirs' }).check();
  await page.goto('https://thuprai.com/books/?genre=biography-memoirs');
  await expect(page.getByText('All BooksFilter1Genre1Biography & MemoirsBusiness &')).toBeVisible();
  await page.getByRole('link', { name: 'विनोद चौधरी' }).click();
  await expect(page.getByText('Binod Chaudhary विनोद चौधरी: आत्मकथाby Binod Chaudhary E-book Rs 225Add to')).toBeVisible();
  await expect(page.getByText('Paperback Rs 545 Delivery in 1-3 daysAdd to cartBuy now')).toBeVisible();
  await expect(page.getByText('Rs 545')).toBeVisible();
  await expect(page.getByPlaceholder('Qty')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' }).nth(1)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Buy now' })).toBeVisible();
  await page.getByRole('button', { name: 'Buy now' }).click();
  await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('testingg ');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('test@awecode.com');
  await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('9800000000');
  await expect(page.getByText('CountryNepalLoading...')).toBeVisible();
  await expect(page.getByText('CityKathmanduLoading...')).toBeVisible();
  await page.getByRole('textbox', { name: 'Street Address' }).click();
  await page.getByRole('textbox', { name: 'Street Address' }).fill('koteshwar');
  await expect(page.getByRole('checkbox', { name: 'Add a note?' })).not.toBeChecked();
  await page.getByRole('checkbox', { name: 'Add a note?' }).check();
  await page.getByRole('textbox', { name: 'Add a note to your order. E.g' }).click();
  await page.getByRole('textbox', { name: 'Add a note to your order. E.g' }).fill('testing');
  await page.getByRole('button', { name: 'ORDER' }).click();
  await expect(page.getByRole('heading', { name: 'Order #' })).toBeVisible();

});