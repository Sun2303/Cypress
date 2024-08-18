const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "./cypress/tests/*/*",
    //baseUrl: "https://the-internet.herokuapp.com"
    baseUrl: "https://www.demoblaze.com"
  },
  defaultCommandTimeout: 7000
});
