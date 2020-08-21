// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import WelcomeMat from '../';
import {
  WelcomeMatMarketingContent,
  WelcomeMatContext,
  exampleDemoStyles
} from '../helpers';
import { Backdrop } from '../../modals/base/example';

export const Context = WelcomeMatContext;

const defaultComponent = (
  <Backdrop>
    <WelcomeMat
      content={({ labelId }) => (
        <WelcomeMatMarketingContent labelId={labelId} />
      )}
      tiles={null}
    />
  </Backdrop>
);

export default defaultComponent;

export let examples = [
  {
    id: 'default',
    label: 'Default (Splash)',
    demoStyles: exampleDemoStyles,
    element: defaultComponent
  }
];
