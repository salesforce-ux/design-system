import fs from 'fs';
import path from 'path';

const ensureDirectory = dir => (fs.existsSync(dir) ? null : fs.mkdirSync(dir));

const mkdirp = dirs =>
  dirs
    .split('/')
    .filter(x => x)
    .reduce((acc, x) => {
      const filepath = path.join(acc, x);
      ensureDirectory(filepath);
      return filepath;
    }, '/');

module.exports = mkdirp;
