# Amazon Test Automation

## Overview

I will use:

Test Framework: WebdriverIO with Mocha framework using JavaScript.
Design Pattern: Page Object Model (POM).
Best Practices: Modularized code, reusable utilities, clean assertions, and proper naming conventions.
Parallel Execution: Configured in **wdio.conf.js**.
Reporting: Integrated Allure reporting.
Documentation: Inline comments and a README.md.

### Explanation of Folders:

- **`.github/workflow`**:
This folder contains GitHub-specific configurations, such as CI/CD pipelines. The main file here is:
ci.yml: The CI pipeline configuration for running WebDriverIO tests on GitHub Actions.

- **`allure-results/`**: This folder stores the raw results generated by the WebDriverIO test execution. These are typically JSON files that contain details about each test run. Allure uses these results to generate the final test report.
- **`allure-report/`**: This folder contains the generated Allure test report, which is an HTML-based report that provides detailed and interactive views of the test results. You can open `index.html` in any browser to view the report.
- **`node_modules/`**: Contains all the installed npm dependencies required for the project. This folder is automatically created when you run `npm install`.

- **`tests/`**: This is the main folder containing all the test-related files and directories.

  - **`pageobjects/`**: Contains the Page Object Model (POM) files, which abstract interactions with different pages or components of the application. Each page object represents a UI page, and its methods provide functionality to interact with that page.
    - Example: `loginPage.js`, `cartPage.js`
  - **`specs/`**: This directory contains the test specifications (spec files), which define the actual test cases for the application. Each test file contains individual tests that use page objects to perform actions and assertions.
    - Example: `accountTes.spec.js`, `cartTest.spec.js`
  - **`utilities/`**: Contains utility functions or helper files that are commonly used across the tests. This might include custom commands, hooks, or common functions to simplify or streamline test code.
    - Example: `elementHelper.js`, `waitHelper.js`

- **`wdio.conf.js`**: This is the WebDriverIO configuration file, where you define settings such as parallel test execution, test runner options, and reporter configuration.

- **`package.json`**: Contains metadata about the project, including the list of dependencies and scripts like `execute-script` for running tests and `generate-report` for generating the Allure report.

- **`package-lock.json`**: This file locks the specific versions of the dependencies installed in the project, ensuring consistency across environments.

---

### Summary:

- **`tests/pageobjects/`**: Contains Page Object Model files that define interactions with UI pages or components.
- **`tests/specs/`**: Contains test specification files that define the actual tests.
- **`tests/utilities/`**: Contains utility/helper files for reusability and custom functions across tests.

This folder structure ensures that your tests are well-organized, reusable, and maintainable.

**This project automates key user journey flows on Amazon, including:**

Testcase scenarios:

- Adding products to the cart and Simulating the checkout process **cartTest.spec.js**
- User Account Management **accountTest.spec.js**

## Features

- **Parallel Test Execution**: Optimizes test execution time by running multiple tests concurrently.
- **Allure Reporting**: Provides detailed and interactive test reports for better insights into test execution.
- **Page Object Model (POM)**: Enhances maintainability and reusability of test scripts by abstracting the UI interactions.

## How to Run

1. Install dependencies:

   ```
   npm install

   ```

2. Execute all scripts

   ```
   npm run execute-script

   ```

- **Running the Tests**: The `npm run execute-script` command runs your WebDriverIO tests based on the configuration in `wdio.conf.js`.

3. After execution, Need to generate allure report.

   ```
   npm run generate-report

   ```

- **Generating the Allure Report**: After running the tests, the `npm run generate-report` command generates a single-file Allure report from the test results.

- **Viewing the Report**: You can view the report by Navigate to allure-report folder and click index.html file.

The structure and explanations are provided in a step-by-step manner to ensure users can easily follow the process from running tests to generating and viewing the report.

project-root/
│
├── allure-results/ # Contains test execution results (generated after running tests)
├── allure-report/ # Contains generated Allure report (created by `generate-report` script)
├── wdio.conf.js # WebDriverIO configuration file
└── package.json # Project metadata and script definitions
