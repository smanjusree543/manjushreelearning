// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import jobtitle from '../pageobjects/jobtitle.po'
Cypress.Commands.add('AddJobTittle', (tittle, description) => { 


      cy.contains(jobtitle.submenu()).click()
      cy.contains(jobtitle.jobtitlebutton()).click()
      cy.get(jobtitle.addbutton()).click()
      //let r = (Math.random() + 1).toString(36).substring(7);
      cy.get(jobtitle.jobtitleinput()).eq(0).type(tittle)
      cy.get(jobtitle.jobtitledescribtion()).eq(0).type(description)
      cy.get(jobtitle.submit()).click()
})

Cypress.Commands.add('login', (username, password) => { 
  
      cy.get(this.usernameinput()).type(username);
      cy.get(this.passwordinput()).type(password);
      cy.get(this.submit()).click()
})
