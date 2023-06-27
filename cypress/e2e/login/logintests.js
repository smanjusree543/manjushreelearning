import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import login from '../../pageobjects/loginhrm.po';
import Dashboard from "../../pageobjects/dashboard.po";



Given('User launch the application', () => {
  cy.visit('/')
})

When(`User Enter Valid username {string} and Valid password {string}`, (username, password) => {
    //cy.title().should('include', title)

    cy.get(login.usernameinput()).type(username);
    cy.get(login.passwordinput()).type(password);

})
when('User clicks on login Button', () => {
  cy.get(login.submit()).click();
})
Then('User should be navigate to Dashboard page', () => {

  cy.url("/web/index.php/dashboard/index")
  cy.contains(Dashboard.dashboardPage()).should("be.visible");
  cy.contains(Dashboard.Adminmenu()).click();

})
