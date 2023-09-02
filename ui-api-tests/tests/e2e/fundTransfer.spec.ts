import {test, expect} from '@playwright/test'
import LoginPage from '../../pages/loginPage'
import { readCredentialsFromTOML } from '../../utils/config'
import FundTransferPage from '../../pages/fundsTransfer'

test.use({storageState: './auth-jsons/loggedInState.json'})


test ('fund transfer', async({page})=> {

    await page.goto('http://127.0.0.1:8080/parabank/transfer.htm')

    const fundsTransfer = new FundTransferPage(page)
    await page.waitForTimeout(5000)

    await fundsTransfer.selectFromAccount('Replace From account#')
    await fundsTransfer.selectToAccount('Replace To account#')
    await fundsTransfer.fillAmount(1)
    await fundsTransfer.transfer()
    await page.screenshot({path: './snapshots/fundtransferred.png', fullPage: true})
    await expect(page.getByText('Transfer Complete!')).toBeVisible()


})