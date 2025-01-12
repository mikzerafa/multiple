import { test, expect } from '@playwright/test';
import pom from '../Support/POM/googlePom';

test.beforeEach( async({page}) => {
  await page.goto('https://www.google.com/');
  
  await pom.get.acceptCookiesButton(page).click();
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Google/);
});

test('Search Field is Visible', async ({page}) => {
  const search = pom.get.searchField(page)
  await expect(search).toBeVisible()
})

test('Search Field has text', async ({page}) => {
  
  const searchField = pom.get.searchField(page);
  await searchField.fill('The Multiple');
  await expect(searchField).toHaveValue('The Multiple');
})

test('Searching returns results', async ({page}) => {
  await pom.get.searchField(page).fill('the Multiple')
  await pom.get.searchButton(page).click()
  const result = pom.get.searchResult(page, 0)
  await expect(result).toBeVisible()
})

test('Searching giberish returns no results', async({page}) => {
  await pom.get.searchField(page).fill('78e QRGEOIFBEO FIYWEBTR7B3O7RT3OBTRV')
  await pom.get.searchButton(page).click()
  
  const result = pom.get.searchResult(page, 0)
  await expect(result).not.toBeVisible()
})