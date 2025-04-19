const fs = require('fs');

fs.readFile('report.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('Content of report.json:', data);
});
