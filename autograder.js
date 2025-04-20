const axios = require('axios');
// const core = require('@actions/core');

async function run() {
  try {
    const repo = process.env.REPO;
    const student = process.env.STUDENT;
    const studentId = process.env.STUDENT_ID;
    const organization = process.env.ORGANIZATION;
    const organizationId = process.env.ORGANIZATION_ID;
    const branch = process.env.BRANCH;
    const report = JSON.parse(process.env.REPORT || '{}');

    const data = {
      repo,
      student,
      studentId,
      organization,
      organizationId,
      branch,
      report,
    };

    const response = await axios.post(
      'https://knowing-loyal-ringtail.ngrok-free.app/autograder',
      data
    );
  } catch (error) {
    // core.setFailed(`Action failed: ${error.message}`);
    console.error(`Action failed: ${error.message}`);
  }
}

run();
