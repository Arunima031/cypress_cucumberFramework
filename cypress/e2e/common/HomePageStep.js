import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homepage from "../../support/pageObjects/HomePage";
import { should } from 'chai';


When('@homePage I validate landing on homepage',()=>{
  var urlString=homepage.validateHomePageLanding();
  urlString.should('contain','demoqa.com');
  var title=homepage.validateTitleString();
  title.should('have.attr', 'src', '/images/Toolsqa.jpg');
})

Then('@homePage I validate items are present from list:',(datasets)=>{
    const lists=datasets.hashes().map((item)=> item.item_list);
    homepage.validateItelList(lists);
})

Given('@homePage I click on {string} tile to get to page',(tileName)=>{
homepage.clickOnTile(tileName);
})