import {test, expect} from '@playwright/test'

test('testalerts', async ({page})=>{
    await page.goto('http://the-internet.herokuapp.com/javascript_alerts')

    page.once('dialog', dialog =>{
        console.log()
    })

})