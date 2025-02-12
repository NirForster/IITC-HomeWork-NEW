import pytest
from pages.homepage import HomePage
from pages.checkout_page import CheckoutPage
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from pages.base_page import BasePage
from selenium.webdriver.support import expected_conditions as EC
import time


def test_checkout_process(driver):
    base_page = BasePage(driver)
    wait = WebDriverWait(driver, 10)

    homepage = HomePage(driver)
    homepage.search_and_click_product("Flamingo Tshirt")

    # Click "Add to Cart" button
    print("adding item to cart...")
    driver.find_element(By.CSS_SELECTOR, "button[value='210']").click()

    # Proceed to cart
    print("clicking view cart...")
    driver.find_element(
        By.CSS_SELECTOR, "div[role='alert'] a[class='button wc-forward']"
    ).click()

    # Find the checkout button
    checkout_button = wait.until(
        EC.element_to_be_clickable(
            (By.CSS_SELECTOR, ".checkout-button.button.alt.wc-forward")
        )
    )

    # Scroll into view before clicking
    base_page.scroll_to_element(checkout_button)

    print("Clicking Checkout...")
    checkout_button.click()

    print("Checkout clicked successfully")

    print("filling checkout form...")
    checkout = CheckoutPage(driver)
    time.sleep(3)
    checkout.fill_checkout_form(
        first_name="John",
        last_name="Doe",
        # country="Israel",
        street_address_1="123 Main Street",
        street_address_2="Apt 4B",  # Optional second address field
        city="Tel Aviv",
        postcode="12345",
        phone="0521234567",
        email="john@example.com",
    )
    checkout.submit_order()

    # Validate successful checkout
    confirmation_text = driver.find_element(By.CSS_SELECTOR, "ul[role='alert'] li").text
    assert (
        "Invalid payment method." in confirmation_text
    ), "Order was not placed successfully"
