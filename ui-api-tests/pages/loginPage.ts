import { Page } from "@playwright/test";
import {promises as fs} from 'fs';

class LoginPage{
 private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async navigate() {
        await  this.page.goto('http://127.0.0.1:8080/parabank/register.htm')
    }

    async fillUsername (username: string){
        await this.page.fill('input[name="username"]', username)
    }

    async fillPassword( password: string){
        await this.page.fill('input[name="password"]', password)
    }

    async submit(){
        await this.page.click('input[value="Log In"]')

    }

    async isLoggedIn(){
        return await this.page.getByText('Log Out')
    }

    async login(username: string, password:string){
        await this.fillUsername(username)
        await this.fillPassword(password)
        await this.submit()
    }

    async saveLoginState(filePath:string){
        const state = await this.page.context().storageState();
        await fs.writeFile(filePath, JSON.stringify(state))
    }
        
}
export default LoginPage;