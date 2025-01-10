import { Page } from "@playwright/test"

const get = {
    acceptCookiesButton: (page: Page) => page.getByRole('button', {name: 'Accept all'}),
    searchField: (page:Page) => page.locator('textarea').nth(0),
    searchButton: (page:Page) => page.locator('center').nth(1).getByRole('button').first(),
    searchResult: (page:Page, index:number) => page.locator('#search').getByRole('link').nth(index*3),
    calculatorHeader: (page:Page) => page.locator('div',{hasText:'Calculator result'}).first()
}

export default {
    get
}