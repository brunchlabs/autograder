const fs = require('fs');

try {
  const report = JSON.parse(fs.readFile('report.json', 'utf8'));

  console.log('here', report);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
