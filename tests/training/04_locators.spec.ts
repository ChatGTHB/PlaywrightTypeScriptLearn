/// //////////////////////////////////////////////////////////////////// ///
///                                                                      ///
///                          03. LOCATORS                                ///
///            branch: onboarding/autotesthubpro/03-locators             ///
///                                                                      ///
/// //////////////////////////////////////////////////////////////////// ///

import { test, expect } from '@playwright/test'

const GITHUB_URL = 'https://github.com' // We defined the GitHub URL as a constant

test.describe('OB-03. Locators', { tag: ['@onboarding'] }, () => {
  test('OB-03-01. should built-in locators be visible', async ({ page }) => {
    // Open GitHub homepage
    await page.goto(GITHUB_URL)

    // Expect getByRole locator to be visible
    const signUpLinkLocator = page.getByRole('link', { name: 'Sign up' })
    await expect(signUpLinkLocator).toBeVisible()

    // Expect getByText locator to be visible
    const headerTextLocator = page.getByText(
      'Build and ship software on a single, collaborative platform',
    )
    await expect(headerTextLocator).toBeVisible()

    // Expect getByLabel locator to be visible
    const homepageLocator = page.getByLabel('Homepage', { exact: true })
    await expect(homepageLocator).toBeVisible()

    // Expect getByPlaceholder locator to be visible
    const placeholderInputLocator = page.getByPlaceholder(
      'Search or jump to...',
    )
    await expect(placeholderInputLocator).toBeVisible()

    // Expect getByAltText locator to have attribute
    const logoAltTextLocator = page
      .getByTestId('Grid-:Rib:')
      .getByAltText('Duolingo')
    await expect(logoAltTextLocator).toHaveAttribute('aria-hidden', 'true')

    // Expect getByTitle locator to be defined
    const titleElementLocator = page.getByTitle('GitHub').nth(1)
    await expect(titleElementLocator).toBeDefined()

    // Expect getByTestId locator to have attribute
    const testIdLocator = page
      .getByTestId('Grid-:Rib:')
      .getByAltText('Duolingo')
    await expect(testIdLocator).toHaveAttribute('aria-hidden', 'true')
  })

  test('OB-03-02. should custom locators be visible', async ({ page }) => {
    await page.goto(GITHUB_URL)

    // An example CSS Locator
    const homepageSvgCssLocator = page.locator("a[aria-label='Homepage'] svg")
    await expect(homepageSvgCssLocator).toBeVisible()

    // An example XPath Locator
    const homepageSvgXpathLocator = page.locator(
      "//a[@aria-label='Homepage']//*[name()='svg']",
    )
    await expect(homepageSvgXpathLocator).toBeVisible()
  })

  test('OB-03-03. should filtered locators be visible', async ({ page }) => {
    await page.goto(GITHUB_URL)

    // An example filter usage
    const searchFilterLocator = page
      .getByRole('banner')
      .locator('div')
      .filter({ hasText: 'Search or jump to... Search' })
      .nth(3)
    await expect(searchFilterLocator).toBeVisible()
  })
})