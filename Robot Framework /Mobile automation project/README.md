# Capco_-Assignment_QA_Automation_Tester
Capco TH: Assignment for QA Automation Tester by Thanapon Sarasap


Mobile Automation Project: SwagLabs
This project utilizes Robot Framework and Appium to automate functional testing for the SwagLabs mobile application on Android.



📂 Project Structure

Mobile automation project/

├── tests/

│   └── SwagLab_Login.robot    # Main login test suite

├── results/                   # Robot Framework output (Log, Report, XML)

└── README.md                  # Project documentation


🛠 Prerequisites
Ensure the following are installed and configured on your machine:

        Python 3.x
  
        Node.js & NPM (For Appium)
  
        Android SDK & Build Tools (Set ANDROID_HOME in your environment variables)
  
        Java JDK (Set JAVA_HOME in your environment variables)
  
        Appium Server 2.x/3.x
  
        UiAutomator2 Driver: Install via appium driver install uiautomator2
  
  Required Libraries
    Install the necessary Python libraries using pip:


  Bash
      
      pip install robotframework robotframework-appiumlibrary





🚀 How to Run the Tests

1. Start Appium Server
Open your terminal and start the Appium server. Since this project targets Chrome and system elements, use the relaxed security flag:

Bash

      appium 

2. Prepare the Emulator
Launch your Android Emulator (e.g., emulator-5554).
Ensure the SwagLabs app is installed on the device. Find the .apk below.

      https://github.com/saucelabs/sample-app-mobile/releases

4. Execute Tests
Run the following command from the project "Mobile automation project" to execute the tests and save results in the results folder:

Bash

      robot -d results tests/SwagLab_Login.robot


📝 Test Cases Covered
The suite currently includes the following scenarios:

TC01: Successful Login
Logs in with valid credentials.
Verifies the "PRODUCTS" header is displayed.
Performs a clean logout.

TC02: Invalid Username Login
Attempts to log in with an incorrect username.
Verifies that the correct error message is displayed: "Username and password do not match any user in this service."

TC03: Verify user can add products to the cart
Verifies that the correct "Product" is added to the cart



⚙️ Configuration (Variables)

You can modify the following variables inside SwagLab_Login.robot to match your environment:

${REMOTE_URL}: The Appium server address.

${DEVICE_NAME}: Your specific emulator or physical device ID.

${VALID_USERNAME} / ${VALID_PASSWORD}: Credentials for testing.

