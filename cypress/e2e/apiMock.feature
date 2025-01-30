Feature: Mock an API

Scenario:Mocking an api for response

Given @mockApi I mock API response for request
Then @mockApi I validate the application


Scenario: Intercepting its normal funtionality

Given @mockApi I call the request
Then @mockApi I validate the application for response

Scenario:Mocking an api for request

Given @mockApi I mock API request
Then @mockApi I validate the application for request Mocking


