const fs = require('fs');

const core = require('@actions/core');

try {
  const raw = fs.readFileSync('context.json', 'utf8');
  const context = JSON.parse(raw);

  console.log(context);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}

// fs.readFile('report.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('Content of report.json:', data);
// });
