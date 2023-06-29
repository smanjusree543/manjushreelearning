import jobtitle from '../pageobjects/jobtitle.po'
import login from '../pageobjects/loginhrm.po'

import logindata from '../fixtures/logincred.json'
import jobtitledata from '../fixtures/PIM/addjobtittle.json'
import jobtitledata2 from '../fixtures/jobtitle.json'

import paygrades from '../pageobjects/loginhrm.po'

import employeestatus from '../pageobjects/jobtitle.po'
import employeestatusdata from '../fixtures/jobtitle.json'
describe('validate adding job tittle', () => {

   it.only('verify adding job tittle with valid input ', () => {

      cy.visit("/")

      //cy.wait(5000)

      //Actions 

      login.loginwithcredentials(logindata.username, logindata.password)



      //assertion

      cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.contains(jobtitle.adminmenu()).click()
      //cy.wait(5000)
      cy.AddJobTittle(jobtitledata.jobtittle,jobtitledata.jobdesciption)
      

   })
   it('verify adding pay grade with valid input ', () => {

      cy.visit('/');
  
      //auction
  
      login.loginwithcredentials(logindata.username, logindata.password)
  
      //assertion
  
      cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      cy.contains(jobtitle.adminmenu()).click()
      cy.wait(5000)
      cy.contains(jobtitle.submenu()).click()
      cy.contains(paygrades.paygrades()).click()
      cy.get(paygrades.paygradesbutton()).click()
      cy.get(paygrades.addpaygrades()).click()
      cy.get(paygrades.paygradesinput()).type("A")
      cy.get(paygrades.submit()).click()
      cy.get(paygrades.paygradesinlist()).should(be.visible)
   })
  
  
  it('verif add employee status with valid input ', () => {
  
   cy.url('/');
  
   cy.wait(5000)
  
   //Actions 
  
   login.loginwithcredentials(logindata.username, logindata.password)
  
   //assertion
  
   cy.url('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
   cy.contains(jobtitle.adminmenu()).click()
   cy.wait(5000)
   cy.contains(jobtitle.submenu()).click()
   cy.contains(employeestatus.employeestatus()).click()
   cy.get(employeestatus.addemployeestatus()).click()
   cy.get(employeestatus.addemployeestatusinput()).type("kjhhsd")
  
  })
  //arun
})
  
  
  
  
  
  
  
  
  



 
















