const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');


const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with email (.+) and password (.+)$/, async (email, password) => {
    await LoginPage.login(email, password)
});

Then(/^I should see dashboard page$/, async () => {
    await expect(browser).toHaveUrlContaining('dashboard');
});

