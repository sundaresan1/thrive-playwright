import {test, expect} from '@playwright/test'


test.describe("Alert, Confirm and Prompt", () => {
    let page;

    test.beforeEach(async ({browser})=>{
        page = await browser.newPage()
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    } )

    test.afterEach(async() =>{
        await page.close()
    })

    test("should display the correct alert message", async()=>{
        const alertButton = await page.locator(
            'button:has-text("Click for JS Alert")'
        )
        await alertButton.click()
        page.on("dialog", async(dialog:any) =>{
            expect(dialog.message()).toBe("I am a JS Alert")
            await dialog.accept()
        })
        await page.waitForSelector('#result')
    })

    test ("should display the correct confirm message and handle OK button", async()=>{
        const confirmButton = await page.locator(
            'button:has-text("Click for JS Confirm")'
        )

        page.on("dialog", async (dialog:any)=>{
            expect(dialog.message()).toBe("I am a JS Confirm")
            await dialog.accept()
        })
        await confirmButton.click()

        const confirmResult = await page.locator("#result")
        expect (await confirmResult.textContent()).toBe("You clicked: Ok")
    })

    test ("should display the correct confirm message and handle Cancel button", async()=>{
        const confirmButton = await page.locator(
            'button:has-text("Click for JS Confirm")'
        )

        page.on("dialog", async (dialog:any)=>{
            expect(dialog.message()).toBe("I am a JS Confirm")
            await dialog.dismiss()
        })
        await confirmButton.click()

        const confirmResult = await page.locator("#result")
        expect (await confirmResult.textContent()).toBe("You clicked: Cancel")
    })

    test ("should display the correct prompt and handle OK button", async()=>{
        const promptButton = await page.locator(
            'button:has-text("Click for JS Prompt")'
        )

        page.on("dialog", async (dialog:any)=>{
            expect(dialog.message()).toBe("I am a JS prompt")
            await dialog.accept("Test Input")
        })
        await promptButton.click()

        const promptResult = await page.locator("#result")
        expect (await promptResult.textContent()).toBe("You entered: Test Input")
    })

    test ("should display the correct prompt and handle Cancel button", async()=>{
        const promptButton = await page.locator(
            'button:has-text("Click for JS Prompt")'
        )

        page.on("dialog", async (dialog:any)=>{
            expect(dialog.message()).toBe("I am a JS prompt")
            await dialog.dismiss()
        })
        await promptButton.click()

        const promptResult = await page.locator("#result")
        expect (await promptResult.textContent()).toBe("You entered: null")
    })


})