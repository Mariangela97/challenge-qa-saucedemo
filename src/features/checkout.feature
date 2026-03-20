Feature: Checkout Process - Boundary & Negative Testing

  As a customer
  I want a secure and validated checkout process
  To ensure my order information is correct before purchasing

  Background:
    Given the user is logged into Sauce Demo with "standard_user" and "secret_sauce"
    And the user adds "Sauce Labs Backpack" to the cart
    And the user goes to the cart
    And proceeds to checkout

  @Positive @Smoke
  Scenario: Happy Path - Complete purchase with valid data
    When enters shipping information with "John", "Doe", and "12345"
    And clicks on Continue button
    And finishes the purchase
    Then a success message "Thank you for your order!" should be displayed

  @Negative @Boundary
  Scenario Outline: Validation of required fields in checkout
    When enters shipping information with "<firstName>", "<lastName>", and "<postalCode>"
    And clicks on Continue button
    Then an error message should appear containing "<errorMessage>"

    Examples:
      | firstName | lastName | postalCode | errorMessage                   |
      |           | Doe      | 12345      | First Name is required         |
      | John      |          | 12345      | Last Name is required          |
      | John      | Doe      |            | Postal Code is required        |

  @Functional @StateTransition
  Scenario: Cancel checkout from Overview page
    When enters shipping information with "John", "Doe", and "12345"
    And clicks on Continue button
    And the user cancels the purchase
    Then the user should be redirected to the inventory page