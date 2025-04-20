const core = require('@actions/core');
const fs = require('fs');

try {
  const repo = process.env.REPO;
  const student = process.env.STUDENT;
  const studentId = process.env.STUDENT_ID;
  const organization = process.env.ORGANIZATION;
  const organizationId = process.env.ORGANIZATION_ID;
  const branch = process.env.BRANCH;

  // const report = fs.readFileSync('report.json', 'utf8');

  console.log('report', report);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
