const core = require('@actions/core');

try {
  const repo = process.env.REPO;
  const student = process.env.STUDENT;
  const studentId = process.env.STUDENT_ID;
  const organization = process.env.ORGANIZATION;
  const organizationId = process.env.ORGANIZATION_ID;
  const branch = process.env.BRANCH;
  const report = JSON.parse(process.env.REPORT);
  console.log('here pape hehe', report.summary);

  // console.log('report', report);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
