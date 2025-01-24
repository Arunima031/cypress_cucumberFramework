Feature: Implement Forms

Background:

Given @homePage I click on "Forms" tile to get to page
Then @elementPage I validate the page is open 
And @elementPage I validate dropdown is open

@Sanity @Smoke
Scenario: Validate Forms

Given @elementPage I select "Practice Form" option from dropdown
