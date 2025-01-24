class HomePage{

    elements = {
        homePageElements: 'div.card-body h5', 
        titleheaderLocator:'header a img',
        tileLocators:(itemText)=>`h5:contains('${itemText}')`
      };

      validateHomePageLanding(){
      return cy.url();
      };

      validateTitleString(){
        return cy.get(this.elements.titleheaderLocator);
      };

      validateItelList(listItems){
        cy.get(this.elements.homePageElements).each((item, index) => {
            const actualItemText = item.text().trim();
            expect(actualItemText).to.equal(listItems[index]); 
  });
 };
   clickOnTile(tileName){
    cy.get(this.elements.tileLocators(tileName)).click();
   }
 
}


const homepage = new HomePage();
export default homepage;