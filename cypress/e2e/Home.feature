Feature: Home page implement

@Sanity @Smoke
Scenario: Validate list of items in home page

When @homePage I validate landing on homepage
Then @homePage I validate items are present from list: 
|item_list|
|Elements|
|Forms|
|Alerts, Frame & Windows|
|Widgets|
|Interactions|
|Book Store Application|