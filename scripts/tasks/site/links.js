import path from 'path';
import fs from 'fs';
import glob from 'glob';
import _ from 'lodash';

export default function (done) {
  console.log('Checking links');
  _(glob.sync(path.resolve(__PATHS__.www, '**/*.html')))
    .map(filePath => {
      let html = fs.readFileSync(filePath).toString();
      let pattern = /href\=\"(.*?)\"/g;
      let match, matches = [];
      while ((match = pattern.exec(html)) !== null) {
        matches.push({
          filePath,
          url: match[1]
        });
      }
      return matches;
    })
    .flatten()
    .filter(({url}) => /^\/[^/]/.test(url))
    .map(({filePath, url}) => {
      return {
        filePath,
        url: path.resolve(
          __PATHS__.www,
          url.replace(/^\//, '').replace(/[?#].*/, '')
        )
      };
    })
    .filter(item => {
      try {
        let stat = fs.statSync(item.url);
        return false;
      } catch (e) {
        return true;
      }
    })
    .thru(allItems => {
      if (allItems && allItems.length > 0) {
        console.log('');
        console.log('**********************');
        console.log('* BROKEN LINKS FOUND *');
        console.log('**********************');
        console.log('');
        console.log(allItems.length === 1 ? '1 broken link:' : `${allItems.length} broken links:`);
        console.log('');
      } else {
        console.log('No broken links found.');
      }
      return allItems;
    })
    .forEach((item, itemIdx) => {
      let num = itemIdx + 1;
      let indent = '  ';
      for (let i = 0; i < num.toString().length; i++) {
        indent += ' ';
      }
      console.log(`${itemIdx + 1}. To: ${item.url.replace(__PATHS__.www, '')}`);
      console.log(`${indent}In: ${item.filePath}`);
    })
    .thru(allItems => {
      console.log('');
      return allItems;
    })
    .value();
  done();
}
