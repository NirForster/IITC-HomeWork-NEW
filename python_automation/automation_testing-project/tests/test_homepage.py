import sys
import os
import pytest
from selenium.webdriver.common.by import By
from pages.homepage import HomePage

# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))


@pytest.mark.parametrize(
    "search_term,expected_text",
    [
        ("Flamingo Tshirt", "Search Results for: Flamingo Tshirt"),
        ("Blue Shoes", "Search Results for: Blue Shoes"),
        ("Black Jacket", "Search Results for: Black Jacket"),
        ("Red Hat", "Search Results for: Red Hat"),
    ],
)
def test_search_functionality(driver, search_term, expected_text):
    homepage = HomePage(driver)
    homepage.search_product(search_term)

    result_title = driver.find_element(
        By.CSS_SELECTOR, ".page-title.ast-archive-title"
    ).text
    print(result_title)

    assert (
        expected_text in result_title
    ), f"Expected '{expected_text}' but got '{result_title}'"
