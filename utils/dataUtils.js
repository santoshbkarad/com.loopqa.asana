const fs = require('fs');
const path = require('path');

function getTestData() {
  const dataPath = path.join(__dirname, '../data/testData.json');
  const fileContent = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(fileContent);
}

module.exports = { getTestData };
