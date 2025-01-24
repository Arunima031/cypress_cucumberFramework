class ElementsPage{
elements ={
  welcomeText:'div.col-12.mt-4.col-md-6',
  dropDownOpen:'[d*="5.83z"]',
  fullNameTextBox:'//input[@id="userName"]',
  emailTextBox:'//input[@id="userEmail"]',
  currentAddress:'//textArea[@id="currentAddress"]',
  permanentAddress:'//textArea[@id="permanentAddress"]',
  submitButton:'#submit',
  validationNameText:'p#name',
  validationEmail:'p#email',
  validationCurrentAddress:'p#currentAddress',
  validationPermanentAddress:'p#permanentAddress',
  dropdownOptions:(optionName)=>`//span[text()="${optionName}"]`,
  checkBox:'.rct-checkbox',
  checkItemText:'#result',
  expandIcon:'[title="Expand all"]',
  collapseAll:'[title="Collapse all"]',
  radioButton:'div[class*="custom-radio"]',
  radioConfirm:'.mt-3',
  uploadButton:'#uploadFile',
  validateUpload:'#uploadedFilePath',
  downloadButton:'#downloadButton',
  linklocate:(text)=>`#${text}`,
  doubleClickBtn:'#doubleClickBtn',
  rightClickBtn:'#rightClickBtn',
  clickBtn:'//button[text()="Click Me"]'
};

validateWelcomeText(textValidate){
    cy.get(this.elements.welcomeText).should('have.text',textValidate)
};

validateDropdownOpen(){
  cy.get(this.elements.dropDownOpen).should('exist').should('be.visible');
};

testTextBox(fullName,email,currentAdd,PermanentAdd){
  cy.xpath(this.elements.fullNameTextBox).type(fullName);
  cy.xpath(this.elements.emailTextBox).type(email);
  cy.xpath(this.elements.currentAddress).type(currentAdd);
  cy.xpath(this.elements.permanentAddress).type(PermanentAdd);
};

clickSubmit(){
  cy.get(this.elements.submitButton).click();
};

validateOutput(fullName,email,currentAddress,permanentAddress){
  cy.get(this.elements.validationNameText).then($el=>{
   var nameText=$el.text().split(":");
   expect(nameText[0].trim()).to.eq('Name');
   expect(nameText[1].trim()).to.eq(fullName);
  });
  cy.get(this.elements.validationEmail).then($el=>{
    var emailText=$el.text().split(":");
    expect(emailText[0].trim()).to.eq('Email');
    expect(emailText[1].trim()).to.eq(email);
   });

   cy.get(this.elements.validationCurrentAddress).then($el=>{
    var cuAdText=$el.text().split(":");
    expect(cuAdText[0].trim()).to.eq('Current Address');
    expect(cuAdText[1].trim()).to.eq(currentAddress)
   });

   
   cy.get(this.elements.validationPermanentAddress).then($el=>{
    var perAddText=$el.text().split(":");
    expect(perAddText[0].trim()).to.eq('Permananet Address');
    expect(perAddText[1].trim()).to.eq(permanentAddress)
   });

};

selectDropdownOption(option){
cy.xpath(this.elements.dropdownOptions(option)).click();
};



expandcheckBox(){
cy.get(this.elements.expandIcon).click();
};

selectBox(){
cy.get(this.elements.checkBox).click();
};

validateTextConfirm(){
  cy.get(this.elements.checkItemText).should('be.visible');
};

testExpand(){
  cy.get(this.elements.expandIcon).click();
  cy.verifyLenth(this.elements.checkBox,17);
};

testCollapse(){
 cy.get(this.elements.collapseAll).click();
 cy.verifyLenth(this.elements.checkBox,1);
};

selectRadio(option){
 cy.get(this.elements.radioButton).each(($el)=>{
   var elementText=$el.find('label').text().trim();
   cy.log(elementText);
   if(elementText==="No"){
    cy.wrap($el).find('input').invoke('prop','class').should('contain','disabled');
    cy.log(`Unable to click 'No' as it is disabled`);
   }
   else if(elementText.includes(option)){
    cy.wrap($el).find('input').click({force:true});
    return false; 
   };
});
};

confirmRadioMsg(option){
  cy.get(this.elements.radioConfirm).should('be.visible');
  cy.get(this.elements.radioConfirm).find('span').should('have.text',option);
};

uploadFile(){
  cy.get(this.elements.uploadButton).selectFile('cypress/fixtures/test.PNG');
};

validateUploadFile(fileName){
cy.get(this.elements.validateUpload).should('have.text',`C:\\fakepath\\${fileName}`);
};

downloadFile(){
  cy.get(this.elements.downloadButton).click();
  const filePath = 'cypress/downloads/sampleFile.jpeg';
  cy.readFile(filePath, { timeout: 10000 }).should('exist'); 
};

invokeAndValidateApiCall(linkName,method,path,alias,response){
cy.invokeApi(method,path,alias);
cy.get(this.elements.linklocate(linkName)).click();
cy.validateApiResponse(alias,response);
};

validateClicks(){
  cy.get(this.elements.doubleClickBtn).dblclick();
  cy.get('#doubleClickMessage').should('be.visible');
  cy.get(this.elements.rightClickBtn).rightclick();
  cy.get('#rightClickMessage').should('be.visible');
  cy.xpath(this.elements.clickBtn).click();
  cy.get('#dynamicClickMessage').should('be.visible');

}


}



var elementsPage= new ElementsPage();
export default elementsPage;