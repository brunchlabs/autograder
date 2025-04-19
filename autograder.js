const core = require('@actions/core');

try {
  console.log('here', process.env);
  const repo = core.getInput('repo');
} catch (error) {
  core.setFailed(`Action failed: ${error.message}`);
}
