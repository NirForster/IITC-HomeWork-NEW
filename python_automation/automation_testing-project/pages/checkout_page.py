from selenium.webdriver.common.by import By
from base_page import BasePage
from selenium.webdriver.support import expected_conditions as EC
import time


class CheckoutPage(BasePage):
    FIRST_NAME = (By.ID, "billing_first_name")
    LAST_NAME = (By.ID, "billing_last_name")
    # COUNTRY = (By.ID, "billing_country")
    STREET_ADDRESS_1 = (By.ID, "billing_address_1")
    STREET_ADDRESS_2 = (By.ID, "billing_address_2")
    CITY = (By.ID, "billing_city")
    POSTCODE = (By.ID, "billing_postcode")
    PHONE = (By.ID, "billing_phone")
    EMAIL = (By.ID, "billing_email")
    PLACE_ORDER = (By.ID, "place_order")

    def fill_checkout_form(
        self,
        first_name,
        last_name,
        # country,
        street_address_1,
        street_address_2,
        city,
        postcode,
        phone,
        email,
    ):
        self.enter_text(self.FIRST_NAME, first_name)
        self.enter_text(self.LAST_NAME, last_name)
        time.sleep(3)

        # Ensure the country dropdown is ready
        # self.wait.until(EC.element_to_be_clickable(self.COUNTRY)).click()
        # self.enter_text(self.COUNTRY, country)

        self.enter_text(self.STREET_ADDRESS_1, street_address_1)
        self.enter_text(self.STREET_ADDRESS_2, street_address_2)
        self.enter_text(self.CITY, city)
        self.enter_text(self.POSTCODE, postcode)
        self.enter_text(self.PHONE, phone)
        self.enter_text(self.EMAIL, email)
        print("filled form successfully")
        time.sleep(3)

    def submit_order(self):
        """Scroll to 'Place Order' button and click it."""
        place_order_button = self.wait.until(
            EC.element_to_be_clickable(self.PLACE_ORDER)
        )
        print("clicking place_order_button")
        self.scroll_to_element(place_order_button)
        place_order_button.click()
        print("order submitted successfully")
        time.sleep(3)
