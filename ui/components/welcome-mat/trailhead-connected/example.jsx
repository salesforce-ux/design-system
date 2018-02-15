// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import WelcomeMat from '../';

export default <WelcomeMat trailhead />;

export let states = [
  {
    id: 'trailhead-complete',
    label: 'Trailhead Complete',
    element: <WelcomeMat trailhead complete={5} />
  }
];
