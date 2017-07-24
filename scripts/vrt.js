const minimist = require('minimist');
const packageJSON = require('../package.json');
const fs = require('fs');
const compare = require('@salesforce-ux/instant-vrt');
const path = require('path');
const request = require('request');
const Task = require('data.task');

// the indexName is really just for local dev
const branch = process.env.TRAVIS_BRANCH || packageJSON.config.search.indexName;

const snapPath = minimist(process.argv.slice(2)).path;

const snapUrl = branch =>
  `${process.env.VRT_HOST}/snapshot/${branch}?useToken=true`

const download = (url, dest) =>
  new Task((rej, res) =>
    request(url)
    .pipe(fs.createWriteStream(dest))
    .on('error', rej)
    .on('finish', () => res(dest))
  )

const stat = filepath =>
  new Task((rej, res) =>
  fs.stat(filepath, (err, r) =>
    err ? rej(err) : res(r))
  )

const statOrDownload = (url, filepath) =>
  stat(filepath)
  .fold(e => download(url, filepath),
        x => Task.of(filepath))
  .chain(x => x)

Task.of(path.resolve(__dirname, 'snap.json'))
.chain(filepath => statOrDownload(snapUrl(branch), filepath))
.chain(refPath => compare(refPath, snapPath))
.map(report =>
  report
  .filter(x => !x.passed)
  .map(x => path.basename(x.file, '.html'))
  .join(',')
)
.fork(
  e => console.log('*'), // run all if there's an error
  r => console.log(r)
)
