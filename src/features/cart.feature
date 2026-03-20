Feature: Cart Validation

  As a user of Sauce Demo
  I want to see the products I added in my cart
  To verify my selection before buying

  Background:
    Given the user is logged into Sauce Demo with "standard_user" and "secret_sauce"

  Scenario: Verify a single product is correctly displayed in the cart
    When the user adds "Sauce Labs Backpack" to the cart
    And the user goes to the cart
    Then the item "Sauce Labs Backpack" should be visible in the list
    And the cart badge should show "1"

    Scenario: Remove a product from the cart
    Given the user adds "Sauce Labs Backpack" to the cart
    And the user goes to the cart
    When the user removes "Sauce Labs Backpack" from the cart
    Then the item "Sauce Labs Backpack" should not be visible in the list
    And the cart badge should be empty

    Scenario: Cart persistence after returning to inventory
    When the user adds "Sauce Labs Backpack" to the cart
    And the user goes to the cart
    And the user clicks "Continue Shopping"
    And the user adds "Sauce Labs Bike Light" to the cart
    And the user goes to the cart
    Then the cart should show "2" items
    And the item "Sauce Labs Backpack" should be visible in the list
    And the item "Sauce Labs Bike Light" should be visible in the list

    Scenario: Accessing cart without products
    When the user goes to the cart
    Then the cart list should be empty
    And the "Checkout" button should be visible but the list area should be clear