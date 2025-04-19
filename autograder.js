const fs = require('fs');
const core = require('@actions/core');

try {
  const raw = fs.readFileSync('report.json', 'utf8');
  const report = JSON.parse(raw);

  console.log('here', report);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
