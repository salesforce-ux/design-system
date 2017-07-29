const conventionalChangelog = require('conventional-changelog');
const through = require('through2');

const replaceInternal = str =>
  str.replace(/design-system/ig, 'design-system-internal');

const replaceRepo = isInternal => (chunk, enc, callback) =>
  callback(null, isInternal ? replaceInternal(String(chunk)) : chunk);

module.exports = ({isInternal, outStream, callback}) =>
  conventionalChangelog({ preset: 'angular', releaseCount: 0 })
  .pipe(through(replaceRepo(isInternal)))
  .pipe(outStream)
  .on('finish', callback);
