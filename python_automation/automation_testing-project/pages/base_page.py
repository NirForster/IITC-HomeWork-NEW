from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class BasePage:
    def __init__(self, driver):
        self.driver = driver
        self.wait = WebDriverWait(driver, 10)

    def click(self, by_locator):
        element = self.wait.until(EC.element_to_be_clickable(by_locator))
        self.scroll_to_element(element)  # Scroll before clicking
        element.click()

    def enter_text(self, by_locator, text):
        element = self.wait.until(EC.visibility_of_element_located(by_locator))
        self.scroll_to_element(element)  # Scroll before typing
        self.wait.until(EC.element_to_be_clickable(by_locator))  # Ensure it's clickable
        element.clear()  # Clear field before entering text
        element.send_keys(text)

    def get_text(self, by_locator):
        return self.wait.until(EC.visibility_of_element_located(by_locator)).text

    def scroll_to_element(self, element):
        """Scroll to an element before interacting with it."""
        self.driver.execute_script(
            "arguments[0].scrollIntoView({block: 'center'});", element
        )
