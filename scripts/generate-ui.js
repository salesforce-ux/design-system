const fs = require('fs');
const { uiJsonBasic } = require('./ui');

console.log('=> Building ui.json to .generated');

fs.mkdir('.generated', { recursive: true }, err => {
  if (err) {
    console.error(err);
  } else {
    fs.writeFile(
      '.generated/ui.json',
      uiJsonBasic(),
      { flag: 'w+' },
      writeErr => {
        if (writeErr) {
          console.error(writeErr);
        } else {
          console.log('=> Saved .generated/ui.json');
        }
      }
    );
  }
});
