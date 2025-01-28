const { devices } = require('@playwright/test');

module.exports = {
  testDir: '../tests',

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['list'],
    ['json', { outputFile: '../reports/report.json' }],
    ['html', { outputFolder: '../reports', open: 'never' }],
    ['allure-playwright']
  ]
};
