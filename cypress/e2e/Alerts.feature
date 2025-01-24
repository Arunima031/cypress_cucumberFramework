Feature: Implement Alerts, Frame & Windows

Background:

Given @homePage I click on "Alerts, Frame & Windows" tile to get to page
Then @elementPage I validate the page is open 
And @elementPage I validate dropdown is open

@Sanity @Smoke
Scenario: Validate Browser windows

Given @elementPage I select "Browser Windows" option from dropdown