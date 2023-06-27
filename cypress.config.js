const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    //"specPattern": "**/*.feature",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
     "projectId": "6iyq5j",

    "pageLoadTimeout":120000,
    "defaultCommandTimeout":20000,
    "vedio":"true",
    //"defaultCommandTimeout":20000,
    env:{
      "username": "Admin",
      "password": "admin123"
    },
    
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
      return require('./cypress/plugins/index.js')(on, config)

      // implement node event listeners here
    },
  },
});

