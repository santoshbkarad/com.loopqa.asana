Com.LOOPQA>ASANA

A data‐driven test automation framework built with Playwright. This project demonstrates Page Object Model (POM), common steps, logging, reporting, and screenshots on failure—aligned with the provided QA Technical Assessment requirements.

Table of Contents
Overview
Key Features
Prerequisites
Project Structure
Setup & Installation
Running the Tests
Reports & Logs
Configuration
Common Commands
Contributing
License

1. Overview
Goal: Automate end‐to‐end scenarios against a demo task‐management app using Playwright.
We verify:
Login functionality
Navigating to specific boards (Web/Mobile)
Ensuring tasks appear in correct columns (To Do, In Progress, Done)
Checking associated tags (Feature, High Priority, Bug, Design, etc.)

Highlights:
Data‐Driven tests: all scenario data in data/testData.json.
Page Object Model: pages/login.page.js, pages/board.page.js.
Logging: Custom logger writing to logs/execution-logs-<timestamp>.log.
Screenshots on failure in logs/screenshots/ (or test-results/ if using built‐in approach).
Reporting: HTML reports and optional Allure reports.

2. Key Features
Data‐Driven: You only need to modify testData.json to add/edit test scenarios.
Page Object Model: Each page (Login, Board) encapsulates locators & actions.
Reusable Steps: Common flows (e.g., login + select board) placed in steps/common.steps.js.
Logging: Timestamped logs in /logs/.
Screenshots on Failure: For quick debugging of failed tests.
Parallel Execution: Playwright config can be set to run multiple workers.
HTML / Allure Reports: For a user‐friendly test overview.

3. Prerequisites
Node.js (v14 or higher)
npm (or Yarn)
(Optional) Allure command line if you want Allure reports (npm install -g allure-commandline)

4. Project Structure

com.loopqa.asana/
│
├─ .gitignore
├─ package.json                 // Scripts & dependencies
├─ config/
│   └─ playwright.config.js     // Playwright test config
│
├─ data/
│   └─ testData.json            // JSON with credentials & test scenarios
│
├─ logs/
│   ├─ execution-logs-<timestamp>.log
|
├─ screenshots/                 // Screenshots on test failures
│
├─ pages/
│   ├─ login.page.js            // Page Object for login
│   └─ board.page.js            // Page Object for board interactions
│
├─ steps/
│   └─ common.steps.js          // Reusable step definitions (login + navigate, etc.)
│
├─ tests/
│   ├─ testCase1.spec.js
│   ├─ testCase2.spec.js
│   ├─ testCase3.spec.js
│   ├─ testCase4.spec.js
│   ├─ testCase5.spec.js
│   └─ testCase6.spec.js        // Each scenario in a separate file
│
└─ utils/
    ├─ dataUtils.js             // Utility to fetch/parse data from JSON
    └─ logger.js                // Logger with timestamps

5. Setup & Installation
Clone or download this repository to your local machine.

Open a terminal or VSCode and navigate to the project folder:
cd com.loopqa.asana

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

6. Running the Tests
6.1 Default Run (Headless)
npm run test
or
npx playwright test --config=config/playwright.config.js

6.2 Headed Mode
If you want to watch the browser:
npm run test:headed
or
npx playwright test --config=config/playwright.config.js --headed

6.3 Run a Single Test File
npx playwright test tests/testCase2.spec.js

7. Reports & Logs
7.1 HTML Report
By default, the config includes an HTML reporter saved in reports/. After tests, open:
npx playwright show-report reports
This will open a browser with the HTML report, showing each test, logs, and screenshots (if failures occur).

7.2 Allure Report (Optional)
If you added [ 'allure-playwright' ] in playwright.config.js and installed the allure-playwright package:
After tests, you’ll see an allure-results/ folder.
Generate & open the Allure report:
allure generate allure-results --clean -o allure-report
allure open allure-report

7.3 Logs
Every test run creates a log file in logs/execution-logs-<timestamp>.log with info & error messages.

7.4 Screenshots
On any test failure, screenshots are automatically captured in either logs/screenshots/ (if using an afterEach hook) or test-results/ (if using built‐in screenshot: 'only-on-failure').

8. Configuration
playwright.config.js manages:

use.headless: whether the browser is in headless mode.
use.screenshot: captures screenshots on failure.
reporter: configures HTML, JSON, or Allure.
testDir: points to tests/ folder.
Modify it as needed (parallel workers, environment variables, etc.).

9. Common Commands
Below are a few helpful scripts (assuming you have them in your package.json):

{
  "scripts": {
    "test": "npx playwright test --config=config/playwright.config.js",
    "test:headed": "npx playwright test --config=config/playwright.config.js --headed",
    "test:report": "npx playwright show-report logs/reports",
    "allure:generate": "allure generate allure-results --clean -o allure-report",
    "allure:open": "allure open allure-report"
  }
}

npm run test: runs all tests in headless mode.
npm run test:headed: runs tests in headed mode.
npm run test:report: shows the HTML report.
npm run allure:generate + npm run allure:open: generates & opens Allure.

10. Contributing
Fork or create a new branch before making changes.
Add/modify tests in tests/ and new pages in pages/.
Update testData.json with any new scenarios, tasks, columns, or tags.
Make sure tests pass locally before creating a pull request.

11. License
Distributed under the MIT License. See LICENSE for details (if you include a LICENSE file).