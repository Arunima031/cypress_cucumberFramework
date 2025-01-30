import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { expect } from 'chai';

Given('@apiStep I call post API',()=>{
    cy.request('POST','http://216.10.245.166/Library/Addbook.php',{
        "name":"Learn Appium Automation with Java",
        "isbn":"bcdyresss",
        "aisle":"22s7",
        "author":"John foe"
    }).then(response=>{
    cy.log(expect(response.body).to.have.property('Msg','successfully added'));
    expect(response.status).to.equal(200);
    cy.log(response.status)
})
})