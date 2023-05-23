import login from "../pageobjects/loginhrm.po";
import logindata from "../fixtures/logincred.json"
import employeedata from "../fixtures/addemployee.json"
describe('verify add employee', () => {

  it('Logs in and adds a new employee', () => {
    cy.url('/');

    // Enter login credentials and click login button
    cy.get(login.usernameinput()).type(logindata.username);
    cy.get(login.passwordinput()).type(logindata.password);
    cy.get(login.submit()).click();

    // Verify that login is successful
    cy.url("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index").should('include', '/dashboard');
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.xpath('//input[@name="firstName"]').type(employeedata.firstname)
    cy.xpath('//input[@name="middleName"]').type(employeedata.middlename)
    cy.xpath('//input[@name="lastName"]').type(employeedata.lastname)
    cy.xpath('//button[@type="submit"]').click()

  })
})