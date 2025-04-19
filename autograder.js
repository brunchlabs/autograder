const fs = require('fs');

const core = require('@actions/core');

try {
  // Parse the GitHub context passed as a string
  console.log('before', core.getInput('context'));
  // const githubContext = JSON.parse(core.getInput('context'));

  // console.log(githubContext);

  // // Now you can access all properties of the GitHub context
  // const { repository, actor, ref, repository_owner } = githubContext;

  // // Use these values as needed for your autograder logic
  // console.log(`Repository: ${repository}`);
  // console.log(`Actor: ${actor}`);
  // console.log(`Ref: ${ref}`);
  // console.log(`Repository Owner: ${repository_owner}`);

  // Continue with your autograder logic...
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
