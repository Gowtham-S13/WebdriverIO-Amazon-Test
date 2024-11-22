# Amazon Test Automation

## Overview

I will use:

Test Framework: WebdriverIO with Mocha.
Design Pattern: Page Object Model (POM).
Best Practices: Modularized code, reusable utilities, clean assertions, and proper naming conventions.
Parallel Execution: Configured in wdio.conf.js.
Reporting: Integrated Allure reporting.
Documentation: Inline comments and a README.md.

This project automates key user journey flows on Amazon, including:

Testcase scenarios:

- Searching for products
- Adding products to the cart and Simulating the checkout process
- User Account Management

## Features

- Parallel test execution
- Allure reporting
- Page Object Model design pattern

## How to Run

1. Install dependencies:
   ```bash
   npm install

   ```
2. Execute all scripts

   ```
   npm run execute-script

   ```

3. After execution, Need to generate allure report.
   ```
   npm run generate-report

   ```

   after run this above script, Navigate to allure-report folder and click index.html file






