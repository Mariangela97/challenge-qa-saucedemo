Feature: User Login

  As a user of Sauce Demo
  I want to login with my credentials
  To access the product inventory

  Background:
    Given the user navigates to the login page

  Scenario: Successful login with standard user
    When the user enters username "standard_user"
    And the user enters password "secret_sauce"
    And clicks the login button
    Then the header title should be "Products"

  Scenario Outline: Validate login error messages
    When the user enters username "<username>"
    And the user enters password "<password>"
    And clicks the login button
    Then an error message should appear containing "<message>"

    Examples:
      | username        | password       | message                                              |
      | locked_out_user | secret_sauce   | Sorry, this user has been locked out.                |
      | standard_user   | wrong_password | Username and password do not match any user          |
      |                 | secret_sauce   | Username is required                                 |
      | standard_user   |                | Password is required                                 |
      | STANDARD_USER   | secret_sauce   | Username and password do not match any user          |