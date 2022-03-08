var childProcess = require('child_process');
const { exit } = require('process');
const fs = require('fs');
const mainScript = `${__dirname}/main`
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })
exit(spawnSyncReturns.status);
