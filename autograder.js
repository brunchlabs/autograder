const core = require('@actions/core');

try {
  const repo = process.env.INPUT_REPO;
  const student = process.env.INPUT_STUDENT;
  const studentId = process.env.INPUT_STUDENT_ID;
  const organization = process.env.INPUT_ORGANIZATION;
  const organizationId = process.env.INPUT_ORGANIZATION_ID;
  const report = process.env.INPUT_REPORT;
  const branch = process.env.INPUT_BRANCH;

  console.log('repo', repo);
  console.log('student', student);
  console.log('studentId', studentId);
  console.log('organization', organization);
  console.log('organizationId', organizationId);
  console.log('report', report);
  console.log('branch', branch);
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
