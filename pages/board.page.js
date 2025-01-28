const { expect } = require('@playwright/test');
const { Logger } = require('../utils/logger');

class BoardPage {
  constructor(page) {
    this.page = page;
  }

  async selectBoard(boardName) {
    Logger.info(`Selecting board: ${boardName}`);
    await this.page.click(`text=${boardName}`);
  }

  async verifyTaskInColumn(taskName, columnName) {
    Logger.info(`Verifying task "${taskName}" under column "${columnName}"`);

    // Locate the column by classes & text. 
    const column = this.page
      .locator('div.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4')
      .filter({ hasText: columnName });
    await column.waitFor({ state: 'visible' });

    // Within that column, find the card with the given taskName
    const task = column.locator('.bg-white').filter({ hasText: taskName });
    await task.waitFor({ state: 'visible' });
  }

  async verifyTaskTags(taskName, tags) {
    Logger.info(`Verifying tags ${JSON.stringify(tags)} for task "${taskName}"`);
  
    // Locate the card by text
    const card = this.page.locator('.bg-white').filter({ hasText: taskName });
    await card.waitFor({ state: 'visible' });
  
    for (const tag of tags) {
      // target only <span> elements that contain the text exactly
      const tagLocator = card.locator(`span:has-text("${tag}")`);
      await expect(tagLocator).toBeVisible();
    }
  }
  
}

module.exports = { BoardPage };
