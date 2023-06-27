import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import login from '../../pageobjects/loginhrm.po';
import dashboard from '../../pageobjects/dashboard.po';


Given('User launch the application', () => {
  cy.visit('/')
})

when(`User Enter Valid username {string} and Valid password {string}`, (username, password) => {
    //cy.title().should('include', title)

    cy.get(login.usernameinput()).type(username);
    cy.get(login.passwordinput()).type(password);

})
when('User clicks on login Button', () => {
  cy.get(login.submit()).click();
})
Then('User should be navigate to Dashboard page', () => {

  

})
