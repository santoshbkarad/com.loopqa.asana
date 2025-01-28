# Com.LOOPQA>ASANA

A data‐driven test automation framework built with Playwright. This project demonstrates Page Object Model (POM), common steps, logging, reporting, and screenshots on failure—aligned with the provided QA Technical Assessment requirements.

## Table of Contents

1. [Overview](#overview)  
2. [Key Features](#key-features)  
3. [Prerequisites](#prerequisites)

---

## 1. Overview

**Goal**: Automate end‐to‐end scenarios against a demo task‐management app using Playwright.

We verify:
- Login functionality  
- Navigating to specific boards (Web/Mobile)  
- Ensuring tasks appear in correct columns (To Do, In Progress, Done)  
- Checking associated tags (Feature, High Priority, Bug, Design, etc.)

**Highlights**:
- **Data‐Driven tests**: all scenario data in `data/testData.json`.  
- **Page Object Model**: `pages/login.page.js`, `pages/board.page.js`.  
- **Logging**: Custom logger writing to `logs/execution-logs-<timestamp>.log`.  
- **Screenshots on Failure**: in `logs/screenshots/` (or `test-results/` if using built‐in approach).  
- **Reporting**: HTML reports and optional Allure reports.

---

## 2. Key Features

- **Data‐Driven**: Modify `testData.json` to add or edit test scenarios.  
- **Page Object Model**: Each page (Login, Board) encapsulates locators & actions.  
- **Reusable Steps**: Common flows (e.g., login + select board) in `steps/common.steps.js`.  
- **Logging**: Timestamped logs in `logs/`.  
- **Screenshots on Failure**: For quick debugging of failed tests.  
- **Parallel Execution**: Playwright config can be set to run multiple workers.  
- **HTML / Allure Reports**: For a user‐friendly test overview.

---

## 3. Prerequisites

- **Node.js** (v14 or higher)  
- **npm** (or Yarn)  
- *(Optional)* **Allure command line** if you want Allure reports:  
  ```bash
  npm install -g allure-commandline

  
