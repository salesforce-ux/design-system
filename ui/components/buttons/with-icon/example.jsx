// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import { Button } from '../base/example';

export default (
  <Button>
    <SvgIcon
      className="slds-button__icon slds-button__icon_left"
      sprite="utility"
      symbol="download"
    />
    Button Neutral
  </Button>
);

export let examples = [
  {
    id: 'icon-right',
    label: 'Neutral with right icon',
    element:
      <Button>
        Button Neutral
        <SvgIcon
          className="slds-button__icon slds-button__icon_right"
          sprite="utility"
          symbol="down"
        />
      </Button>
  }
];
