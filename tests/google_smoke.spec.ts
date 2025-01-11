//Google Rules
/*
site: searches only in specific site. so urls should all have the same domain
filetype: speacifies file searched for. filetype:PDF should she pdfs in results
define: find definition of words. so Dictionary popup should be visible
-word : searches for something excluding that word eg. homer -simpson
*/

import { test, expect } from '@playwright/test';
import pom from '../Support/POM/googlePom';

const stable = 3;

test.describe('Google Smoke Tests', () => {
  test.beforeEach( async({page}) => {
    await page.goto('https://www.google.com/');
    await pom.get.acceptCookiesButton(page).click();
  })

  test.describe('Google Rules Tests', () => {
    test('site: should return results from specific site',async ({page}) => {
        await pom.get.searchField(page).fill('casino games site:https://themultiple.com/');
        await pom.get.searchButton(page).click();
        for (let i = 0; i < stable; i++) {
            const result = pom.get.searchResult(page, i);
            await expect(result).toContainText('https://themultiple.com');
        }
    })

    test('filetype: should return results of given filetype', async ({ page }) => {
        await pom.get.searchField(page).fill('casino games filetype:PDF');
        await pom.get.searchButton(page).click();
        for(let i = 0; i< stable; i++){
            const result = pom.get.searchResult(page, i);
            await expect(result).toHaveAttribute('href', /.*\.pdf$/);
        }
    });

    test('define: should return the definition of a word', async ({page})=>{
        await pom.get.searchField(page).fill('define: onomatopoeia');
        await pom.get.searchButton(page).click()
        const result = pom.get.searchResult(page, 0);
        await expect(result).toHaveText('Oxford Languages')
    })

    test('intitle: should limit searches to include titles which contain a given word',async ({page}) => {
        await pom.get.searchField(page).fill('intitle:elephant');
        await pom.get.searchButton(page).click()
        for(let index =0;index < stable; index++){
            const result = pom.get.searchResult(page, index);
            await expect(result).toHaveText(/elephant/i);
        }
    })

    test('-word should return results that do not contain the given word',async ({page}) =>{
        await pom.get.searchField(page).fill('largest animal -word:elephant');
        await pom.get.searchButton(page).click()
        for(let index =0;index < stable; index++){
            const result = pom.get.searchResult(page, index);
            await expect(result).not.toHaveText(/elephant/i);
        }
    })
  })

  test.describe('Google Maths Tests', () => {
    test('Math addition shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('1+12');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

    test('Math subtraction shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('12-1');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

    test('Math division shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('17/3');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

    test('Math multiplication shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('23*2');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

    test('Math Sine shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('sin(16)');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

    test('Math cosine shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('cos(15)');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

    test('Math tangent shows calculator',async ({page})=> {
        await pom.get.searchField(page).fill('tan(12)');
        await pom.get.searchButton(page).click()
        const calculator = pom.get.calculatorHeader(page)
        await expect(calculator).toContainText('Calculator')
    })

  })

  
})