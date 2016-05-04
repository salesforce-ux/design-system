const { resolve } = require('path');
const { exec } = require('child_process');

const local = resolve(__dirname, '../');

const execute = (cmd, cb) =>
  exec(cmd, { cwd: local, stdio: 'inherit' }, (err, out, stderr) => {
    if(err) throw(err);
    cb(out);
  });

const getSha = cb =>
  execute('git rev-parse HEAD', out => cb(out.trim()));

const getBranch = cb =>
  execute('git rev-parse --abbrev-ref HEAD', out => cb(out.trim()));

module.exports = { getSha, getBranch };
