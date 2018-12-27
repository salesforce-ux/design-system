const fs = require('fs');
const path = require('path');

const fileContents = fs
  .readFileSync(path.resolve('RELEASENOTES.legacy.md'), { encoding: 'utf-8' })
  .replace(/^\*\*(.*)\*\*$/gm, '### $1')
  .replace(/^\#\# \*\*Release \[(.*)\](.*)\*\*$/gm, '## Release $1$2');

module.exports = {
  notes: fileContents
};
