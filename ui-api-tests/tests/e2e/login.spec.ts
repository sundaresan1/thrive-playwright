import {test, expect} from '@playwright/test'

import LoginPage from '../../pages/loginPage'
import { readCredentialsFromTOML } from '../../utils/config'

test('Login Test', async ({page}) =>{
    const loginPage = new LoginPage(page);

    const {username, password} = readCredentialsFromTOML();

    await loginPage.navigate();

    await loginPage.login(username, password)
    await loginPage.saveLoginState('../../auth-jsons/loggedInState.json')

    const loggedIn = await loginPage.isLoggedIn();
    expect(loggedIn).toBeVisible();
})