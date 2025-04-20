const axios = require('axios');
const core = require('@actions/core');

function run() {
  try {
    const repositoryId = process.env.REPOSITORY_ID;
    const studentId = process.env.STUDENT_ID;
    const organizationId = process.env.ORGANIZATION_ID;
    const branch = process.env.BRANCH;
    const report = JSON.parse(process.env.REPORT || '{}');

    const data = {
      repositoryId,
      studentId,
      organizationId,
      branch,
      report,
    };

    axios.post(
      'https://knowing-loyal-ringtail.ngrok-free.app/autograder',
      data
    );
  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
  }
}

run();
