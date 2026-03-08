# QA Automation Portfolio & Practice Workspace

Welcome to my QA Automation portfolio! This repository serves as a central hub for my automated testing projects, showcasing my skills in **Playwright**, **TypeScript**, **Postman**, and **Robot Framework**.

It includes a realistic Application Under Test (AUT), UI automation scripts, and API testing collections.

## 🚀 Portfolio Highlights

### 1. UI Automation with Playwright
*   **Location**: `/Playwright_Learning/`
*   **Language**: TypeScript
*   **Key Features**:
    *   **Auto-waiting & Resilience**: Handling dynamic elements and AJAX requests (e.g., `autoWaiting.spec.ts`).
    *   **Cross-Browser Support**: Tests configured for Chromium, Firefox, and WebKit.
    *   **Advanced Selectors**: Using robust locators to interact with complex UI elements.
    *   **JavaScript Fundamentals**: Core logic and control flow exercises.

### 2. API Testing with Postman
*   **Location**: `/Postman/`
*   **Target**: The Cat API
*   **Key Features**:
    *   **End-to-End Workflows**: Chaining requests by extracting data (e.g., `breed_id`) from responses and passing it to subsequent requests.
    *   **Schema Validation**: Ensuring JSON responses meet strict schema definitions.
    *   **Status Code & Logic Checks**: Verifying HTTP status codes (200, 201, 400) and business logic.

### 3. Application Under Test (Angular) under Udemy course "Playwright: Web Automation Testing From Zero to Hero" byArtem Bondar  
*   **Location**: Current Directory (`/pw-practice-app-master`)
*   **Description**: A modified, lightweight version of the ngx-admin Angular 14 application.
*   **Purpose**: for practicing UI automation without external dependencies or flakiness.

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Automation Framework** | Playwright, Robot Framework |
| **API Tool** | Postman |
| **Language** | TypeScript, JavaScript |

## 📂 Directory Structure

```text
QA_Automated_Learning/
├── pw-practice-app-master/       # The Angular Web Application for testing
│   ├── src/                      # App source code
│   └── README.md                 # This portfolio documentation
├── Playwright_Learning/          # Playwright Automation Project
│   ├── Playwright_test/          # Test specs and config
│   └── JS Fundamentals/          # JS coding practice
└── Postman/                      # API Testing Collections
    └── API_TESTING_POSTMAN.json  # Postman export file
```

## 💻 Getting Started

### Prerequisites
*   Node.js (LTS version recommended)
*   NPM (Node Package Manager)

### Running the Web Application
To start the local Angular application for testing:

```bash
# Install dependencies
npm install

# Start the development server
npm start
```
The application will be available at `http://localhost:4200/`.

### Running Playwright Tests
Open a new terminal and navigate to the Playwright directory:

```bash
cd /Playwright_Learning/Playwright_test

# Install Playwright dependencies
npm install
npx playwright install

# Run all tests
npx playwright test

# Run tests with UI mode
npx playwright test --ui
```

### Running Postman Tests
1.  Open Postman.
2.  Import the collection file located at `/Postman/API_TESTING_POSTMAN.postman_collection.json`.
3.  Run the collection using the Collection Runner.



---
*Created by Thanapon Sarasap*
