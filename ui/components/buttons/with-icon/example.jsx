// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Button } from '../base/example';

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Button isNeutral>
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="download"
        />
        Button Neutral
      </Button>
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <Button isNeutral disabled>
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="download"
        />
        Button Neutral
      </Button>
    )
  }
];

export let examples = [
  {
    id: 'with-icon-right',
    label: 'With right icon',
    element: (
      <Button isNeutral>
        Button Neutral
        <SvgIcon
          className="slds-button__icon slds-button__icon_right"
          sprite="utility"
          symbol="download"
        />
      </Button>
    )
  }
];
