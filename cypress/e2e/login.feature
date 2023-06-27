Feature: login 


Scenario: Verify login with Valid credentials

   Given  User launch the application
   When   User Enter Valid username "Admin" and Valid password "admin123"
   And    User clicks on login Button
   Then   User should be navigate to Dashboard page

   Scenario: Verify login with Valid credentials

   Given  User launch the application
   When   User Enter Valid username "kjhfuihef" and Valid password "jdhfdhfdahd"
   And    User clicks on login Button
   Then   User should be navigate to Dashboard page