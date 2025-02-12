import pytest
from selenium import webdriver


@pytest.fixture
def driver():
    """Setup WebDriver and navigate to the homepage."""
    driver = webdriver.Chrome()
    driver.get("https://atid.store/")
    yield driver
    driver.quit()
