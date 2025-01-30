
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import mockAPIPage from '../../support/pageObjects/mockAPIPage';
Given('@mockApi I mock API response for request',()=>{
mockAPIPage.visitAnotherSite();
mockAPIPage.clickOnLibraryAndMock('libraryRetrive');

});

Then('@mockApi I validate the application',()=>{
mockAPIPage.validateApp();
});

Given('@mockApi I call the request',()=>{
    mockAPIPage.visitAnotherSite();
    mockAPIPage.callApiNormal();
});

Then('@mockApi I validate the application for response',()=>{
 mockAPIPage.validateAppForNormalData();
});

Given('@mockApi I mock API request',()=>{
    mockAPIPage.visitAnotherSite();
    mockAPIPage.mockRequest();
});
Then('@mockApi I validate the application for request Mocking',()=>{

});