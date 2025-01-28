const fs = require('fs');
const path = require('path');

const now = new Date();
const timestamp = now
  .toISOString()
  .replace(/:/g, '-')        
  .replace('T', '_')          
  .split('.')[0];           

class Logger {
  static logFilePath = path.join(
    __dirname,
    '../logs',
    `execution-logs-${timestamp}.log`
  );

  static info(message) {
    const logMsg = `[INFO] [${new Date().toISOString()}] ${message}`;
    console.log(logMsg);
    fs.appendFileSync(this.logFilePath, logMsg + '\n');
  }

  static error(message) {
    const logMsg = `[ERROR] [${new Date().toISOString()}] ${message}`;
    console.error(logMsg);
    fs.appendFileSync(this.logFilePath, logMsg + '\n');
  }
}

module.exports = { Logger };
