const core = require('@actions/core');

try {
  const repo = process.env.REPO;
  const student = process.env.STUDENT;
  const studentId = process.env.STUDENT_ID;
  const organization = process.env.ORGANIZATION;
  const organizationId = process.env.ORGANIZATION_ID;
  const report = process.env.REPORT;
  const branch = process.env.BRANCH;

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
