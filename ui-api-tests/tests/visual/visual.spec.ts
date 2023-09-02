import {test, expect} from '@playwright/test'

test.describe.only('Visual Regression', () =>{

    test('Full page', async({page})=> {
        await page.goto('https://www.example.com')
        expect(await page.screenshot()).toMatchSnapshot('home.png')
    })

    test('Single element', async({page})=> {
        await page.goto('https://www.example.com')
        const pageElement = await page.$('h1')

        expect(await pageElement.screenshot()).toMatchSnapshot('page-title.png')
    })

})