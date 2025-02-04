import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://thuprai.com/');
  await page.getByRole('link', { name: 'TAKSAR' }).click();
  await expect(page.getByText('Taksar Magazine Taksar is a')).toBeVisible();
  await expect(page.getByText('टक्सार वर्ष ४, अङ्क १० : ऋणको रौंदालोटक्सार वर्ष ४, अङ्क ९ : संरुद्ध आर्थिक सुशा')).toBeVisible();
  await page.getByRole('link', { name: 'टक्सार वर्ष ४, अङ्क १० : ऋणको रौंदालो' }).click();
  await expect(page.locator('div').filter({ hasText: 'Search Search Your Favourite Book Login BOOKS All Books New Releases' }).nth(1)).toBeVisible();
  await expect(page.getByText('E-magazine Rs 150Add to')).toBeVisible();
  await expect(page.getByText('Rs 150')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Add to cart' }).first()).toBeVisible();
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.getByRole('button', { name: 'Cart', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Cart', exact: true }).click();
  await expect(page.getByRole('link', { name: 'PLACE ORDER' })).toBeVisible();
  await page.getByRole('link', { name: 'PLACE ORDER' }).click();
  await expect(page.getByText('You need to login to purchase this content! Login Continue with GoogleContinue')).toBeVisible();
  await page.getByRole('textbox', { name: 'Email*' }).click();
  await page.getByRole('textbox', { name: 'Email*' }).fill('kushma@awecode.com');
  await page.getByRole('textbox', { name: 'Password*' }).click();
  await page.getByRole('textbox', { name: 'Password*' }).fill('thuprai123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Order #' })).toBeVisible();

});