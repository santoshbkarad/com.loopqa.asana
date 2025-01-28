const { test } = require('@playwright/test');
const { getTestData } = require('../utils/dataUtils');
const { Logger } = require('../utils/logger');
const { loginAndSelectBoard } = require('../steps/common.steps');

test.describe('Test Case 1: Verify "Implement user authentication"', () => {
  let appUrl;
  let email;
  let password;
  let boardName;
  let taskName;
  let column;
  let tags;

  test.beforeAll(() => {
    const data = getTestData();
    appUrl = data.appUrl;
    email = data.credentials.email;
    password = data.credentials.password;

    const scenario = data.testScenarios['case1'];
    boardName = scenario.board;
    taskName = scenario.taskName;
    column = scenario.column;
    tags = scenario.tags;
  });

  test('Should login, navigate, and verify task & tags', async ({ page }) => {
    Logger.info('Starting Test Case 1...');
    try {
      const boardPage = await loginAndSelectBoard(page, appUrl, email, password, boardName);

      // Verify the task in the correct column
      await boardPage.verifyTaskInColumn(taskName, column);

      // Verify the tags
      await boardPage.verifyTaskTags(taskName, tags);

      Logger.info('Test Case 1 PASSED');
    } catch (error) {
      Logger.error('Test Case 1 FAILED: ${error.message}');
      throw error;
    }
  });
});
