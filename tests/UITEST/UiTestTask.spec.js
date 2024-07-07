import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/UI/LoginPage';
import { HomePage } from '../../pages/UI/HomePage';
import user from '../../test-data/UI/user.json'


test('ProductsSortedByName', async({page})=>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goToLoginPage();
    await loginPage.login (user.username, user.password);

    await homePage.verifyProductsSortedAscendingOrder();
    
    await homePage.sortDescendingOrderByName();
    await homePage.verifyProductsSortedDescendingOrder();

})