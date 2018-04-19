// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import gulp from 'gulp';
import gulpAxe from 'gulp-axe-webdriver';

export default (paths, done) =>
  gulpAxe(
    {
      folderOutputReport: '.reports',
      saveOutputIn: 'a11y.json',
      browser: 'phantomjs',
      a11yCheckOptions: {
        rules: {
          bypass: { enabled: false }
        }
      },
      exclude:
        '#GoogleMapID, table[role="treegrid"] tr[aria-posinset], abbr.slds-avatar__initials, abbr.slds-indicator_unsaved',
      urls: paths,
      showOnlyViolations: true
    },
    done
  );
