// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import gulpAxe from 'gulp-axe-webdriver';

export default paths =>
  gulpAxe({
    folderOutputReport: '.reports',
    saveOutputIn: 'a11y.json',
    headless: true,
    a11yCheckOptions: {
      rules: {
        bypass: { enabled: false },
        'landmark-one-main': { enabled: false },
        region: { enabled: false },
        'page-has-heading-one': { enabled: false }
      }
    },
    exclude:
      '#GoogleMapID, table[role="treegrid"] tr[aria-posinset], abbr.slds-avatar__initials, .slds-file figure > a, .slds-drop-zone__label_button.slds-button_reset > span:not(:hover):not(.slds-is-hovered):not(:focus-within), #fieldset-with-help-text, .slds-combobox[aria-haspopup="dialog"], .slds-context-bar__item.slds-has-error .slds-context-bar__label-action .slds-truncate, .slds-context-bar__item.slds-has-success .slds-context-bar__label-action .slds-truncate, .slds-context-bar__item.slds-has-warning .slds-context-bar__label-action .slds-truncate, .slds-sub-tabs__item.slds-has-error .slds-tabs_default__link .slds-truncate, .slds-sub-tabs__item.slds-has-success .slds-tabs_default__link .slds-truncate, .slds-sub-tabs__item.slds-has-warning .slds-tabs_default__link .slds-truncate, .slds-tabs_default__overflow-button.slds-has-error .slds-button .slds-truncate, .slds-tabs_default__overflow-button.slds-has-success .slds-button .slds-truncate, .slds-tabs_default__overflow-button.slds-has-warning .slds-button .slds-truncate, #context-tab-panel-2',
    urls: paths,
    showOnlyViolations: true,
    verbose: true,
    errorOnViolation: false
  });
