import {test, expect} from '@playwright/test'
import { readCredentialsFromTOML } from '../../utils/config'
import { loginHelper } from '../../api-helpers/loginHelper'

test ('Login and Fetch customer details', async ({request}) => {
  
    const {username, password, apiUrl} = readCredentialsFromTOML()

    const customerId = await loginHelper.login(request, username, password, apiUrl)

    const apiBaseUrl = apiUrl

    const customerResponse = await request.get (`${apiBaseUrl}/customers/${customerId}`, {

        headers: {
            'Accept' : 'application/json'
        }
        
    })

    expect(customerResponse.ok()).toBeTruthy()

    const customerData = await customerResponse.json();

    console.log('Customer Details:', customerData)


    
})
    