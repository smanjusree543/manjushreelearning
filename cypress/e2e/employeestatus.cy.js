describe('validate adding employee status', () => {

it('verif add employee status with valid input ', () => {
      
    cy.url('/');  
 
    cy.wait(5000)
 
     //Actions 
 
    login.loginwithcredentials(username,password)

    cy.get(this.usernameinput()).type(username);
    cy.get(this.passwordinput()).type(password);
    cy.get(this.submit()).click();
    
     //assertion
 
    cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.contains(jobtitle.adminmenu()).click()
    cy.wait(5000)
    cy.contains(jobtitle.submenu()).click()
    cy.contains(employeestatus.emlpoyeestatus()).click()
    cy.get(employeestatus.addemployeestatus()).click()
    cy.get(employeestatus.addemployeestatusinput()).type("B")
    //cy.get(employeestatus.submit()).click()
   })
 }) 