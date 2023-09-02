import {Page} from '@playwright/test'

class FundTransferPage{
    private page: Page;

    constructor(page: Page){
        this.page = page
    }

    async selectFromAccount(accountId: string){
        await this.page.locator('#fromAccountId').selectOption(accountId)

    }

    async selectToAccount(accountId:string){
        await this.page.locator('#toAccountId').selectOption(accountId)
    }

    async fillAmount(amount:number){
        await this.page.locator('#amount').fill(amount.toString())
    }

    async transfer(){
        await this.page.click('input[type="submit"]')
    }

}

export default FundTransferPage;