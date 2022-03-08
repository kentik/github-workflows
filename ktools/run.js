var childProcess = require('child_process');
const { exit } = require('process');
const fs = require('fs');
const mainScript = `${__dirname}/action`
fs.readdir(__dirname, (err, files) => {
    files.forEach(file => {
      console.log(`foo: ${file}`);
    });
});


console.log(`path: ${mainScript}`);
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })
console.log(`Final status: ${spawnSyncReturns.status} err: ${spawnSyncReturns.error}`);
exit(spawnSyncReturns.status);
