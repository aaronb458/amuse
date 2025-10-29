import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should load successfully', async ({ page }) => {
    await page.goto('/');
    expect(page).toHaveTitle(/Amuse Bouche/i);
  });

  test('should have visible content', async ({ page }) => {
    await page.goto('/');
    const body = await page.locator('body');
    await expect(body).toBeVisible();
  });
});
