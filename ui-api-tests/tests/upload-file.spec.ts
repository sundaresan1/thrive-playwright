import {test, expect} from '@playwright/test'

test('Upload a file', async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.setInputFiles('input[type="file"]', './fundtransferred.png')
    await page.click('#file-submit')
    await expect(page.locator('#uploaded-files')).toContainText('fundtransferred.png')
})