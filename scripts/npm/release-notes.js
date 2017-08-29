const lodash = require('lodash');
const _ = lodash.mixin(require('lodash-inflection'));
const { fromNullable } = require('data.either');
const conventionalChangelog = require('conventional-changelog');
const through = require('through2');
const I = require('immutable');

const replaceInternal = str =>
  str.replace(/design-system/gi, 'design-system-internal');

const getSubject = line =>
  fromNullable(String(line).match(/\*\*(.*)\*\*/gi))
    .map(xs => xs[0])
    .getOrElse('');

const normalize = x => _.pluralize(_.kebabCase(x));

const getKeyAndValue = line => [
  normalize(getSubject(line)),
  _.last(line.split('**'))
];

const groupChunks = str =>
  str
    .split('\n')
    .reduce((acc, line) => {
      const [key, val] = getKeyAndValue(line);
      return acc.get(key)
        ? acc.update(key, xs => xs.push(val))
        : acc.set(key, I.List.of(val));
    }, I.OrderedMap())
    .map((v, k) => `* **${k}**:\n\t* ${v.join('\n\t*')}`)
    .join('\n');

const groupRelatedBullets = x => (x.match(/^\*/) ? groupChunks(x) : x);

const replaceRepoAndGroup = isInternal => (chunk, enc, callback) => {
  [String(chunk)]
    .map(str => (isInternal ? replaceInternal(str) : str))
    .map(replaced =>
      replaced
        .split(/\n{2,}/g)
        .map(groupRelatedBullets)
        .join('\n\n')
    )
    .map(x => x.replace(/<a name(.*)><\/a>/gi, ''))
    .map(result => callback(null, result));
};

module.exports = ({ isInternal, callback }) =>
  conventionalChangelog({ preset: 'angular', releaseCount: 2 }).pipe(
    through(replaceRepoAndGroup(isInternal))
  );
