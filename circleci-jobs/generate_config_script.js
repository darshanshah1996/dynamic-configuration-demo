const fs = require('fs');
const path = require('path');

function readFile(fileName) {
  const filePath = path.join(__dirname, `${fileName}.yml`);

  return fs.readFileSync(filePath, 'utf8');
}

function generateCircleCIConfig() {
  const workflow = process.env.CONFIG_TXT;
  const sharedUtilityConfig = readFile('shared_utility');
  const workflowConfig = readFile(workflow);

  console.log(sharedUtilityConfig.concat('\n', '\n', workflowConfig));
}

generateCircleCIConfig();
