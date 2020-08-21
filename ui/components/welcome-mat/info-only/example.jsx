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
      isInfoOnly
    />
  </Backdrop>
);

export default defaultComponent;

export let examples = [
  {
    id: 'default',
    label: 'Default (Info Only)',
    demoStyles: exampleDemoStyles,
    element: defaultComponent
  }
];
