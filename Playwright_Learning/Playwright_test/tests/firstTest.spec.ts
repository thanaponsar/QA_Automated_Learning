import { test, expect } from '@playwright/test'

test.beforeAll(() => {

})

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
})

test('Locator syntax rules', async ({ page }) => {
    //by Tag name
    await page.locator('input').first().click()

    //by id
    page.locator('#inputEmail1')

    //by class
    page.locator('.input-full-width')

    //by attribute
    page.locator('[placeholder]')

    //by attribute value
    page.locator('[placeholder="Email"]')

    //by Class value (full)
    page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')

    //combine different selector
    page.locator('input#inputEmail1[placeholder="Email"]')

    //by XPath (NOT RECOMENDED)
    page.locator('//*[@id="inputEmail1"]')

    //by partial text match
    page.locator(':text("Using")')

    //by exact text match
    page.locator(':text-is("Using the Grid")')

})


test('User facing selectors', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Email' }).first().click()
    await page.getByRole('button', { name: 'Sign in' }).first().click()

    await page.getByLabel('Email').first().click()

    await page.getByPlaceholder('Jane Doe').click()

    await page.getByText('Using the Grid').click()

    await page.getByTestId('SignIn').click()

    await page.getByTitle('IoT Dashboard').click()

})

test('locating to child elements', async ({ page }) => {
    await page.locator('nb-card nb-radio :text-is("Option 1")').click()
    await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()

    await page.locator('nb-card').getByRole('button', { name: "Sign in" }).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click()

})
test('locating to Parent elements', async ({ page }) => {

    await page.locator('nb-card', { hasText: "Using The Grid" }).getByRole('textbox', { name: 'Email' }).click()
    await page.locator('nb-card', { hasText: "Basic form" }).getByRole('textbox', { name: 'Email' }).click()
    await page.locator('nb-card', { has: page.locator('#inputEmail1') }).getByRole('textbox', { name: 'Email' }).click()

    await page.locator('nb-card').filter({ hasText: "Block form" }).getByRole('textbox', { name: 'Email' }).click()
    await page.locator('nb-card').filter({ has: page.locator('.status-danger') }).getByRole('textbox', { name: 'Password' }).click()

    await page.locator('nb-card').filter({ has: page.locator('nb-checkbox') }).filter({ hasText: "Sign in" }).getByRole('textbox', { name: 'Email' }).click()

    await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', { name: 'Email' }).click()
})

test('Reusing the locators', async ({ page }) => {
    const basicForm = page.locator('nb-card', { hasText: "Basic form" })
    const emailField = basicForm.getByRole('textbox', { name: 'Email' })
    const passwordField = basicForm.getByRole('textbox', { name: 'Password' })

    await emailField.fill('test@test.com')
    await passwordField.fill('1234')
    await basicForm.locator('nb-checkbox').click()
    await basicForm.getByRole('button').click()

    await expect(emailField).toHaveValue('test@test.com')
    await expect(passwordField).toHaveValue('1234')

})

test('Extracting Values', async ({ page }) => {
    //Single test vslue
    const basicForm = page.locator('nb-card', { hasText: "Basic form" })
    const buttonText = await basicForm.locator('button').textContent()
    expect(buttonText).toEqual('Submit')

    //All test value
    const allRadiobuttonsLables = await page.locator('nb-radio').allTextContents()
    expect(allRadiobuttonsLables).toContain('Option 1')

    //Input value
    const emailField = basicForm.getByRole('textbox', { name: 'Email' })
    await emailField.fill('test@test.com')
    const emailValue = await emailField.inputValue()
    expect(emailValue).toEqual('test@test.com')


    const placeholderValue = await emailField.getAttribute('placeholder')
    expect(placeholderValue).toEqual('Email')

})

test('Assertions', async ({ page }) => {
    const basicFormButton = page.locator('nb-card').filter({ hasText: "Basic form" }).locator('button')

    //General Assertion
    const value = 5
    expect(value).toEqual(5)

    const text = await basicFormButton.textContent()
    expect(text).toEqual('Submit')

    //Locator Assertion
    await expect(basicFormButton).toHaveText('Submit')

    //Soft Assertion
    await expect.soft(basicFormButton).toHaveText('Submit')
    await basicFormButton.click()

})

