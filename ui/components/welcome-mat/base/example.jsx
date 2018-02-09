// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import WelcomeMat from '../';

export default <WelcomeMat />;

export let states = [
  {
    id: 'with-completed-tiles',
    label: 'With Completed Tiles',
    element: <WelcomeMat complete={3} />
  }
];
