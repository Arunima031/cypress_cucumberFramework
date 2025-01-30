class MockAPIPage{

elements={
  libraryButton:'//button[text()=" Virtual Library "]',
  validationText:'app-library-dashboard p',
  validHeader:'app-library-dashboard h2'
};
    visitAnotherSite(){
        cy.visit("https://rahulshettyacademy.com/angularAppdemo")
    };

    mockResponse(alias){
        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },{
        statusCode:200,
        body:[
            {
              "book_name": "RestAssured with Java",
              "isbn": "LSA",
              "aisle": "2303"
            }
        ]
        }).as(alias);
    };

    clickOnLibraryAndMock(alias){
        this.mockResponse(alias);
        cy.xpath(this.elements.libraryButton).click();
        cy.wait(`@${alias}`).then(({request,response})=>{
         cy.get('tr').should('have.length',response.body.length+1)
    
       });
    };

    validateApp(){
        cy.get(this.elements.validationText).should('have.text','Oops only 1 Book available');
    };

    callApiNormal(){
    cy.invokeApi('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty','callApi');
    cy.xpath(this.elements.libraryButton).click();
    cy.validateApiResponse('callApi',200);
    };

    validateAppForNormalData(){
        cy.get(this.elements.validHeader).should('have.text','Books Availability in Rahul Shetty Academy Library');
    };

    mockRequest(){
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',(req)=>{
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra';
            req.continue((res)=>{
                // expect(res.statusCode).to.equal(403);
            });
           
        }).as('reqAlias');

        cy.xpath(this.elements.libraryButton).click();
        cy.wait('@reqAlias')
    }
}

export default new MockAPIPage();