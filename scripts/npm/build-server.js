// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

const publish = require('../helpers/publish');

if (process.env.BUILD_SERVER_HOST_NEW) {
  publish((err, res) => {
    if (err) throw err;
    console.log('Successfully published build', res);
  });
}
