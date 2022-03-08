var childProcess = require('child_process');
const { exit } = require('process');
const mainScript = `${__dirname}/action`
console.log(`path: ${mainScript}`);
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })
exit(spawnSyncReturns.status);
