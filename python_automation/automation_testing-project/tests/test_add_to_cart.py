import pytest
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from pages.homepage import HomePage


def test_add_product_to_cart(driver):
    homepage = HomePage(driver)
    product_name = "Flamingo Tshirt"

    print("Searching for ", product_name, "...")
    homepage.search_and_click_product(product_name)

    wait = WebDriverWait(driver, 10)

    # Click "Add to Cart" button
    add_to_cart_button = wait.until(
        EC.element_to_be_clickable((By.CSS_SELECTOR, "button[value='210']"))
    )
    print("Clicking Add to Cart...")
    add_to_cart_button.click()

    try:
        cart_count = wait.until(
            EC.visibility_of_element_located(
                (By.CSS_SELECTOR, "div.ast-cart-menu-wrap span.count")
            )
        ).text
        print(f"Cart count found: {cart_count}")
        assert cart_count == "1", f"Expected cart count '1' but got '{cart_count}'"

    except:
        # If cart count is not visible, navigate to cart page
        print("Cart count not visible, navigating to cart page...")
        view_cart_button = wait.until(
            EC.element_to_be_clickable(
                (By.CSS_SELECTOR, "div[role='alert'] a[class='button wc-forward']")
            )
        )
        view_cart_button.click()

        # Verify quantity in cart
        quantity = wait.until(
            EC.visibility_of_element_located(
                (By.CSS_SELECTOR, "#quantity_67a768bad3ca7")
            )
        ).get_attribute("value")
        print(f"Quantity in cart: {quantity}")
        assert quantity == "1", f"Expected quantity '1' but got '{quantity}'"
