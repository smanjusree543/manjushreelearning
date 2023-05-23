 import jobtitle from "../pageobjects/jobtitle.po";
 import login from "../pageobjects/loginhrm.po"; 

 import logindata from "../fixtures/logincred.json";
 import jobtitledata from "../fixtures/jobtitle.json";

 import paygrades from "../pageobjects/jobtitle.po";
 
 import employeestatus from '../pageobjects/jobtitle.po';
describe('validate adding job tittle', () => {
   
     it('verify adding job tittle with valid input ', () => {
      
      cy.visit('https://opensource-demo.orangehrmlive.com');

      //cy.wait(5000)

       //Actions 

      login.loginwithcredentials(logindata.username,logindata.password)

      cy.get(login.usernameinput()).type(logindata.username);
      cy.get(login.passwordinput()).type(logindata.password);
      cy.get(login.submit()).click();
  

      
       //assertion

      cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.contains(jobtitle.adminmenu()).click()
      cy.wait(5000)
      cy.contains(jobtitle.submenu()).click()
      cy.contains(jobtitle.jobtitlebutton()).click()
      cy.get(jobtitle.addbutton()).click()
      let r = (Math.random() + 1).toString(36).substring(7);
      cy.get(jobtitle.jobtitleinput()).eq(0).type(jobtitledata.jobtitleinput)
      cy.get(jobtitle.jobtitledescribtion()).eq(0).type(jobtitledata.jobdescription)
      cy.get(jobtitle.submit()).click()
      cy.wait(15000)
      cy.contains(jobtitle.jobtitleinlist()+r).should('exist')
      
   })
        
   

   it.only('verify adding pay grade with valid input ', () => {
         
      cy.visit('/');  

       //auction

      login.loginwithcredentials(logindata.username,logindata.password)
      
       //assertion

      cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.contains(jobtitle.adminmenu()).click()
      cy.wait(5000)
      cy.contains(jobtitle.submenu()).click()
      cy.contains(paygrades.paygrades()).click()
      //cy.get(paygrades.paygradesbutton()).click()
      cy.get(paygrades.addpaygrades()).click()
      cy.get(paygrades.paygradesinput()).type("A")
      // cy.get(paygrades.submit()).click()
      //cy.get(paygrades.paygradesinlist()).should(be.visible)
   })
})

it.only('verif add employee status with valid input ', () => {
      
   cy.url('/');  

   cy.wait(5000)

    //Actions 

   login.loginwithcredentials(logindata.username,logindata.password)
   
    //assertion

   cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
   cy.contains(jobtitle.adminmenu()).click()
   cy.wait(5000)
   cy.contains(jobtitle.submenu()).click()
   cy.contains(employeestatus.emlpoyeestatus()).click()
   cy.get(employeestatus.addemployeestatus()).click()
   cy.get(employeestatus.addemployeestatusinput()).type("B")
   
})
     



      
     


 


















