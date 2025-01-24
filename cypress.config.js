const { allureCypress } = require("allure-cypress/reporter");
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin =require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const nodePolyfills =
  require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;


module.exports = defineConfig({
  viewport:(1920, 1080),
  e2e: {
    async setupNodeEvents(on, config) {
      allureCypress(on, config);
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
        plugins: [nodePolyfills(), createEsbuildPlugin(config)],
        });
       on('file:preprocessor', bundler) 
       await addCucumberPreprocessorPlugin(on, config);
      return config;
       },
       specPattern:
    ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    env:{
      ENV:"qa"
    },
    downloadsFolder: 'cypress/downloads',
    defaultCommandTimeout:10000,
    supportFile: 'cypress/support/e2e.js'

    },
    
    
  });
