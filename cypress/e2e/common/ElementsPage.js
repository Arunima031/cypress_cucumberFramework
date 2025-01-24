import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import elementsPage from '../../support/pageObjects/ElementsPage';
import data from '../../fixtures/textBoxData.json';

const textData=data;

Then('@elementPage I validate the page is open',()=>{
cy.fixture('validation.json').then(data=>{
elementsPage.validateWelcomeText(data.WelcomeTextToElementPage);
});
});

When('@elementPage I validate dropdown is open',()=>{
elementsPage.validateDropdownOpen();
});

Given('@elementPage I select {string} option from dropdown',(option)=>{
elementsPage.selectDropdownOption(option);
});

When('@elementPage I enter data for text Box data',()=>{
    //cy.fixture('textBoxData.json').then(data=>{
        elementsPage.testTextBox(textData.fullName,textData.email,textData.currentAddress,textData.permanentAddress);
});


Then('@elementPage I click on submit',()=>{
    elementsPage.clickSubmit();
});

When('@elementPage I validate output',()=>{
    elementsPage.validateOutput(textData.fullName,textData.email,textData.currentAddress,textData.permanentAddress);
});

When('@elementPage I select checkbox',()=>{
elementsPage.selectBox();
});

Then('@elementPage I validate confirmation messsage',()=>{
elementsPage.validateTextConfirm();
});

When('@elementPage I test expand function',()=>{
elementsPage.testExpand();
});

When('@elementPage I test collapse function',()=>{
elementsPage.testCollapse();
});

When('@elementPage I select {string} option',(option)=>{
elementsPage.selectRadio(option);
})

Then('@elementPage I validate confirm message for {string} option',(option)=>{
elementsPage.confirmRadioMsg(option);
});

When('@elementPage I confirm {string} is disabled',(option)=>{
elementsPage.selectRadio(option);
});

When('@elementPage I upload a file',()=>{
elementsPage.uploadFile();
});

Then('@elementPage I validate file uploaded {string}',(fileName)=>{
elementsPage.validateUploadFile(fileName);
});

When('@elementPage I download file',()=>{
    elementsPage.downloadFile();
});

Then('@elementPage I invoke and validate {string} api call with method {string} with path {string} with alias {string} for reponse {string}',(link,method,path,alias,response)=>{
    var responseCode=Number(response);
elementsPage.invokeAndValidateApiCall(link,method,path,alias,responseCode);
});

Then('@elementPage I validates all clicks',()=>{
    elementsPage.validateClicks();
})