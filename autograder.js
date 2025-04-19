const core = require('@actions/core');

try {
  const repo = process.env.REPO;
  const student = process.env.STUDENT;
  const studentId = process.env.STUDENT_ID;
  const organization = process.env.ORGANIZATION;
  const organizationId = process.env.ORGANIZATION_ID;
  const report = process.env.REPORT;
  const branch = process.env.BRANCH;

  console.log('report', process.env);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
