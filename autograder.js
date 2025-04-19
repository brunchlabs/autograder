const core = require('@actions/core');

try {
  const repo = core.getInput('repo');
  const student = core.getInput('student');
  const studentId = core.getInput('studentId');
  const organization = core.getInput('organization');
  const organizationId = core.getInput('organizationId');
  const report = core.getInput('report');
  const branch = core.getInput('branch');

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
