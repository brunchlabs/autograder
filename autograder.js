const fs = require('fs');
const core = require('@actions/core');

try {
  // const context = JSON.parse(fs.readFileSync('context.json', 'utf8'));
  const report = core.getInput('report');

  // console.log(context);
  console.log(report);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
