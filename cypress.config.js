const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://vamonos-finance.herokuapp.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component:{
    //
  }
});
