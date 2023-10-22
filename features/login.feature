Feature: User Login

  Scenario Outline: User can log in with valid credentials
    Given I am on the login page
    When I login with email <email> and password <password> 
    Then I should see dashboard page

    Examples:
      | email             | password    |
      | novanotama@ex.com | 123adsfadf@ |