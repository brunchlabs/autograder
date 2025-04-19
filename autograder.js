const fs = require('fs');

try {
  // const context = JSON.parse(fs.readFileSync('context.json', 'utf8'));
  const report = JSON.parse(fs.readFileSync('report.json', 'utf8'));

  // console.log(context);
  console.log(report);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
