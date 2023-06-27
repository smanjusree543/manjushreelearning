import login from '../../pageobjects/loginhrm.po';
 import Dashboard from '../../pageobjects/dashboard.po'
describe('Validate Login functionality', () => {
    it('Verify login with Valid credentials', () => {
        
        cy.visit("/")
        login.loginwithcredentials(Cypress.env('username'),Cypress.env('password'))
        cy.url("/web/index.php/dashboard/index")
        cy.contains(Dashboard.dashboardPage()).should("be.visible");
        cy.contains(Dashboard.Adminmenu()).click();
        //cy.get(Dashboard.Adminmenu2()).click()
        
   })

})