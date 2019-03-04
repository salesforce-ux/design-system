// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

/**
 * Create context so children can play nicely with Shadow
 *  shadow: default mode for shadowMod
 *  setShadowMode: function that stores the toggling of mode value
 */
export const ShadowContext = React.createContext({
  shadow: true,
  setShadowMode: () => {}
});
