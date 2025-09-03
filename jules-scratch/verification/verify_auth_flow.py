from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # Welcome page
    page.goto("http://localhost:5173/")
    page.screenshot(path="jules-scratch/verification/01_welcome.png")

    # Go to Sign-Up page
    page.get_by_role("link", name="Create Account").click()
    page.wait_for_url("http://localhost:5173/sign-up")
    page.screenshot(path="jules-scratch/verification/02_sign_up.png")

    # Go back to Welcome and then to Sign-in
    page.goto("http://localhost:5173/")
    page.get_by_role("link", name="Already Registered? Login").click()
    page.wait_for_url("http://localhost:5173/sign-in")
    page.screenshot(path="jules-scratch/verification/03_sign_in.png")

    # Go to account settings
    page.get_by_role("link", name="Login").click()
    page.wait_for_url("http://localhost:5173/account-settings")
    page.screenshot(path="jules-scratch/verification/04_account_settings.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
