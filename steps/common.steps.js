const { Logger } = require('../utils/logger');
const { LoginPage } = require('../pages/login.page');
const { BoardPage } = require('../pages/board.page');

async function loginAndSelectBoard(page, url, email, password, boardName) {
  Logger.info('Executing login and board selection steps...');

  const loginPage = new LoginPage(page);
  const boardPage = new BoardPage(page);

  await loginPage.goToUrl(url);
  await loginPage.login(email, password);
  await boardPage.selectBoard(boardName);

  return boardPage;
}

module.exports = { loginAndSelectBoard };
