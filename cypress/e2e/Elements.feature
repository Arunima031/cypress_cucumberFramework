Feature: Implement Elements

Background:

Given @homePage I click on "Elements" tile to get to page
Then @elementPage I validate the page is open 
And @elementPage I validate dropdown is open

@Sanity @Smoke
Scenario: Validate Text box 

Given @elementPage I select "Text Box" option from dropdown
When @elementPage I enter data for text Box data
Then @elementPage I click on submit
And @elementPage I validate output

@Sanity
Scenario: Validate Check box 

Given @elementPage I select "Check Box" option from dropdown
When @elementPage I select checkbox
Then @elementPage I validate confirmation messsage 
And @elementPage I test expand function
And @elementPage I test collapse function

@Sanity
Scenario: Validate Radio Button

Given @elementPage I select "Radio Button" option from dropdown
When @elementPage I select "Impressive" option
Then @elementPage I validate confirm message for "Impressive" option
And @elementPage I confirm "No" is disabled

@Sanity
Scenario: Validate upload and download

Given @elementPage I select "Upload and Download" option from dropdown
When @elementPage I upload a file
Then @elementPage I validate file uploaded "test.PNG"
When @elementPage I download file

@Sanity
Scenario: Validate Links

Given @elementPage I select "Links" option from dropdown
Then @elementPage I invoke and validate "created" api call with method "GET" with path "**/created" with alias "create" for reponse '201'
And @elementPage I invoke and validate "no-content" api call with method "GET" with path "**/no-content" with alias "no-content" for reponse '204'
And @elementPage I invoke and validate "moved" api call with method "GET" with path "**/moved" with alias "moved" for reponse '301'
And @elementPage I invoke and validate "bad-request" api call with method "GET" with path "**/bad-request" with alias "bad-request" for reponse '400'
And @elementPage I invoke and validate "unauthorized" api call with method "GET" with path "**/unauthorized" with alias "unauthorized" for reponse '401'
And @elementPage I invoke and validate "forbidden" api call with method "GET" with path "**/forbidden" with alias "forbidden" for reponse '403'
And @elementPage I invoke and validate "invalid-url" api call with method "GET" with path "**/invalid-url" with alias "invalid-url" for reponse '404'

@Sanity
Scenario: Validate Clicks

Given @elementPage I select "Buttons" option from dropdown
Then @elementPage I validates all clicks







