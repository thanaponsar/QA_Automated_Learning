*** Settings ***
Library           AppiumLibrary

*** Variables ***
${REMOTE_URL}                   http://127.0.0.1:4723
${PLATFORM_NAME}                Android
${DEVICE_NAME}                  emulator-5554
${ANDROID_AUTOMATION_NAME}      UIAutomator2

# App Package and Activity for Swag Labs
${APP_PACKAGE}              com.swaglabsmobileapp
${APP_ACTIVITY}             com.swaglabsmobileapp.MainActivity

# Locators
${INPUT_USERNAME}           accessibility_id=test-Username
${INPUT_PASSWORD}           accessibility_id=test-Password
${BTN_LOGIN}                accessibility_id=test-LOGIN
${ERROR_MSG_LOCATOR}        xpath=//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView
${BTN_LOGIN_LOCATOR}        xpath=//android.widget.TextView[@text="PRODUCTS"]
${CART_PRODUCT_NAME}        xpath=//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[@text="Sauce Labs Backpack"]
${CART_LOCATOR}             accessibility_id=test-Cart
${PRODUCT_NAME_LOCATOR}     accessibility_id=test-Description
${BTN_ADD_TO_CART}          accessibility_id=test-ADD TO CART



# Test Data
${VALID_USERNAME}           standard_user
${VALID_PASSWORD}           secret_sauce
${INVALID_USERNAME}         invalid_user
${CMD_TIMEOUT}              3600

#message
${ERROR_MSG_USER_NOT_MATCH}     Username and password do not match any user in this service.
${PRODUCT_NAME}                 Sauce Labs Backpack



*** Test Cases ***
TC01: Successful Login
    [Documentation]    Verify login with valid credentials
    Open Swag Labs App
    Login To Application    ${VALID_USERNAME}    ${VALID_PASSWORD}
    # Verify success by checking for the Products header
    Wait Until Element Is Visible    ${BTN_LOGIN_LOCATOR}    timeout=10s
    Element Text Should Be           ${BTN_LOGIN_LOCATOR}    PRODUCTS
    [Teardown]    Logout From Application

TC02: Invalid Username Login
    [Documentation]    Verify error message for invalid username
    Open Swag Labs App
    Login To Application    ${INVALID_USERNAME}    ${VALID_PASSWORD}    
    # Verify error message
    Wait Until Element Is Visible    ${ERROR_MSG_LOCATOR}    timeout=5s
    Element Text Should Be           ${ERROR_MSG_LOCATOR}    ${ERROR_MSG_USER_NOT_MATCH} 
    [Teardown]    Terminate Application  ${APP_PACKAGE}

TC03: Verify user can add products to the cart
    [Documentation]    Verify user can add products to cart
    Open Swag Labs App
    Login To Application    ${VALID_USERNAME}    ${VALID_PASSWORD}
    Wait Until Element Is Visible    ${BTN_LOGIN_LOCATOR}    timeout=10s
    Element Text Should Be           ${BTN_LOGIN_LOCATOR}    PRODUCTS
    Click Text         ${PRODUCT_NAME} 
    Wait Until Element Is Visible    ${PRODUCT_NAME_LOCATOR}
    Click Element       ${BTN_ADD_TO_CART} 
    Click Element       ${CART_LOCATOR} 
    Wait Until Element Is Visible    ${CART_PRODUCT_NAME}    timeout=10s
    Element Text Should Be           ${CART_PRODUCT_NAME}    ${PRODUCT_NAME} 
    Logout From Application
    [Teardown]    Terminate Application  ${APP_PACKAGE}

*** Keywords ***
Open Swag Labs App
    Open Application    ${REMOTE_URL}
    ...    platformName=${PLATFORM_NAME}
    ...    appium:automationName=${ANDROID_AUTOMATION_NAME}
    ...    appium:deviceName=${DEVICE_NAME}
    ...    appium:appPackage=${APP_PACKAGE}
    ...    appium:appActivity=${APP_ACTIVITY}
    ...    appium:noReset=true
    ...    appium:newCommandTimeout=3600
    ...    appium:newCommandTimeout=${CMD_TIMEOUT}
    Wait Until Element Is Visible    ${INPUT_USERNAME}    timeout=15s
    
Logout From Application
    Click Element       //android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView
    Wait Until Element Is Visible    //android.widget.TextView[@text="LOGOUT"]
    Click Element       //android.widget.TextView[@text="LOGOUT"]
    
Login To Application
    [Arguments]    ${username}    ${password}
    [Documentation]    Generic login keyword to handle any credential set.
    Wait Until Element Is Visible    ${INPUT_USERNAME}    timeout=15s
    Input Text          ${INPUT_USERNAME}    ${username}
    Input Text          ${INPUT_PASSWORD}    ${password}
    Click Element       ${BTN_LOGIN}


