from selenium.webdriver.common.by import By
from .base_page import BasePage
from selenium.webdriver.support import expected_conditions as EC


class HomePage(BasePage):
    SEARCH_BAR = (By.CLASS_NAME, "search-field")
    SEARCH_BUTTON = (By.CSS_SELECTOR, "a[aria-label='Search icon link']")
    PRODUCT_IMAGE = (By.CSS_SELECTOR, ".attachment-large.size-large.wp-post-image")

    def search_product(self, product_name):
        self.click(self.SEARCH_BUTTON)
        self.enter_text(self.SEARCH_BAR, product_name)
        self.click(self.SEARCH_BUTTON)

    def search_and_click_product(self, product_name):
        self.search_product(product_name)
        product = self.wait.until(EC.element_to_be_clickable(self.PRODUCT_IMAGE))
        print("clicking on product image...")
        product.click()
