import {test, expect} from '@playwright/test';
import { generateRandomAlphanumeric } from '../../utils/utils';
import RegistrationPage from '../../pages/registrationPage';


test('Registration', async ({page}) => {

    const registrationPage = new RegistrationPage(page);

    await registrationPage.navigate();

    // Sample data for the test
    const firstName = 'John';
    const lastName = 'Doe';
    // Generating username as 'JohnDoe' + random alphanumeric string of 5 characters (for uniqueness)
    const username = `${firstName}${lastName}${generateRandomAlphanumeric(5)}`;

    await registrationPage.fillFirstName(firstName);
    await registrationPage.fillLastName(lastName);
    await registrationPage.fillAddressStreet('123 Main St');
    await registrationPage.fillAddressCity('New York');

    await registrationPage.fillAddressState('abc');
    await registrationPage.fillAddressZipcode('12345');
    await registrationPage.fillPhoneNumber('12345');
    await registrationPage.fillSSN('123456789');

    await registrationPage.fillUsername(username);
    await registrationPage.fillPassword('john@123');
    await registrationPage.fillRepeatPassword('john@123');
    await registrationPage.register();

    const successMessage = await registrationPage.verifyRegistrationSuccess()
    expect(successMessage).toBeVisible();

});
