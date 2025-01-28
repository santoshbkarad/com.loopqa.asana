const { expect } = require('@playwright/test');
const { Logger } = require('../utils/logger');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('input#username');
    this.passwordInput = page.locator('input#password');
    this.submitButton = page.locator('button[type="submit"].bg-purple-600');
  }

  async goToUrl(url) {
    Logger.info('Navigating to: ${url}');
    await this.page.goto(url);
  }

  async login(email, password) {
    Logger.info('Logging in with email: ${email}');
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();

    // Wait for a post-login indicator on the page
    await this.page.waitForSelector('//button[contains(text(), "Logout")]', { timeout: 5000 });
  }
}

module.exports = { LoginPage };
