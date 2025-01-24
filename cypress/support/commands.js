/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

Cypress.Commands.add('verifyLenth',(selector, expectedLength)=>{
    cy.get(selector).its('length').then((count)=>{
        cy.log(`Number of items: ${count}`);
        expect(count).to.eq(expectedLength);
});
});

Cypress.Commands.add('invokeApi',(method,path,aliasName)=>{
    cy.intercept(method,path).as(aliasName);
});

Cypress.Commands.add('validateApiResponse',(aliasName,responseCode)=>{
    cy.wait(`@${aliasName}`).its('response.statusCode').should('eq', responseCode);
})