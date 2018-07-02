// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { PanelPlayground } from '../';

export default <PanelPlayground />;

export let examples = [
  {
    id: 'with-centered-title',
    label: 'With Centered Title',
    element: <PanelPlayground hasCenterTitle />
  },
  {
    id: 'with-truncated-title',
    label: 'With Truncated Title',
    element: (
      <PanelPlayground title="Panel Header with a really, really long name" />
    )
  }
];
