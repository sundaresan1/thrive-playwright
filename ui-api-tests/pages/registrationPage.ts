import { Page, expect } from "@playwright/test";

export default class RegistrationPage{
    page:Page;
    constructor(page:Page){
        this.page=page;
    }

    async navigate(){
        await this.page.goto('http://127.0.0.1:8080/parabank/register.htm')
    }

    async fillFirstName(firstName:string){
        await this.page.fill('input[name="customer.firstName"]', firstName);
    }

    async fillLastName(lastName: string){
        await this.page.fill('input[name="customer.lastName"]', lastName);
    }

    async fillAddressStreet(street: string){
        await this.page.fill('input[name="customer.address.street"]', street);

    }
    async fillAddressZipcode(zipCode: string){
        await this.page.fill('input[name="customer.address.zipCode"]',zipCode);

    }
    async fillAddressCity(city: string){
        await this.page.fill('input[name="customer.address.city"]', city);
    }
    async fillAddressState(state: string){
        await this.page.fill('input[name="customer.address.state"]', state);

    }
    async fillPhoneNumber(phoneNumber: string){
        await this.page.fill('input[name="customer.phoneNumber"]',phoneNumber);

    }
    async fillSSN(SSN: string){
        await this.page.fill('input[name="customer.ssn"]',SSN);

    }
    async fillUsername(username: string){
        await this.page.fill('input[name="customer.username"]',username);

    }
    async fillRepeatPassword(repeatedPassword: string){
        await this.page.fill('input[name="repeatedPassword"]',repeatedPassword);

    }

    async fillPassword(password: string){
        await this.page.fill('input[name="customer.password"]',password);

    }

    async register(){
        await this.page.getByRole('button', {name:'Register'}).click()
    }

    async verifyRegistrationSuccess(){
        return this.page.getByText('Your account was created successfully. You are now logged in.')
    }

}
