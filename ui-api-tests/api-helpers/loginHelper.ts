import { expect } from "@playwright/test";


export class loginHelper{
    static async login(request: any, username: string, password: string, url:string){
        const apiBaseUrl = url;

        const loginResponse = await request.get(`${apiBaseUrl}/login/${username}/${password}`, {

            headers: {
                'Accept' : 'application/json'
            }

        });

        expect(loginResponse.ok()).toBeTruthy()

        const loginData = await loginResponse.json()
        return loginData.id;

    }
}
