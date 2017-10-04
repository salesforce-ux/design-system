const args = require('yargs').argv;
const packageJSON = require('../package.json');
const fs = require('fs');
const compare = require('@salesforce-ux/instant-vrt/compare');
const path = require('path');
const request = require('request');
const Task = require('data.task');

// the indexName is really just for local dev
const branch = process.env.TRAVIS_BRANCH || packageJSON.config.search.indexName;

const snapPath = args.path;

const snapUrl = branch =>
  `${process.env.VRT_HOST}/snapshot/${branch}?useToken=true`;

const download = (url, dest) =>
  new Task((rej, res) =>
    request(url)
      .pipe(fs.createWriteStream(dest))
      .on('error', rej)
      .on('finish', () => res(dest))
  );

const stat = filepath =>
  new Task((rej, res) =>
    fs.stat(filepath, (err, r) => (err ? rej(err) : res(r)))
  );

const statOrDownload = (url, filepath) =>
  stat(filepath)
    .fold(e => download(url, filepath), x => Task.of(filepath))
    .chain(x => x);

const readFile = filepath =>
  new Task((rej, res) =>
    fs.readFile(
      filepath,
      'utf-8',
      (err, contents) => (err ? rej(err) : res(contents))
    )
  );

const getSnap = () => readFile(snapPath).map(JSON.parse);

const getRef = () =>
  Task.of(path.resolve(__dirname, 'snap.json'))
    .chain(filepath => statOrDownload(snapUrl(branch), filepath))
    .chain(readFile)
    .map(JSON.parse);

Task.of(snapContents => refContents =>
  Object.keys(snapContents).map(
    k =>
      refContents[k]
        ? Object.assign({ file: k }, compare(refContents[k], snapContents[k]))
        : { file: k, passed: false } // if it doesn't exist, fail it so we can lint
  )
)
  .ap(getSnap())
  .ap(getRef())
  .map(report =>
    report
      .filter(x => !x.passed)
      .map(x => path.basename(x.file, '.html'))
      .join(',')
  )
  .fork(
    e => console.log('*'), // run all if there's an error
    r => console.log(r)
  );
