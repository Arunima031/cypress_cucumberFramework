import { Utility } from './utility';
import './commands'
require('cypress-xpath');
import "allure-cypress";

var url= new Utility().getUrl();


beforeEach(() => {
    // cy.visit(url); // Common setup for all tests
  });