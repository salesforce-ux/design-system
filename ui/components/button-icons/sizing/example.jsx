// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {Button} from '../../buttons/base/example';
import SvgIcon from '../../../shared/svg-icon';

export default [
  {
    id: 'default',
    label: 'Button Icon – Default',
    element: (
    <Button className="slds-button slds-button_icon" title="More Options">
        <SvgIcon
            sprite="utility"
            symbol="settings"
            className="slds-button__icon"
        />
    </Button>
    )
  }
];

export let examples = [
  {
    id: 'button-icon-large',
    label: 'Bare - Size Large',
    element: (
      <Button className="slds-button slds-button_icon" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon slds-button__icon_large"
        />
      </Button>
    )
  },
  {
    id: 'button-icon-small',
    label: 'Bare - Size Small',
    element: (
      <Button className="slds-button slds-button_icon" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon slds-button__icon_small"
        />
      </Button>
    )
  },
  {
    id: 'button-icon-x-small',
    label: 'Bare - Size Extra Small',
    element: (
      <Button className="slds-button slds-button_icon" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon slds-button__icon_x-small"
        />
      </Button>
    )
  },
  {
    id: 'button-icon-contained-large',
    label: 'Contained - Size Large',
    element: (
      <Button className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-large" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon"
        />
      </Button>
    )
  },
  {
    id: 'button-icon-contained-small',
    label: 'Contained - Size Small',
    element: (
      <Button className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-small" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon"
        />
      </Button>
    )
  },
  {
    id: 'button-icon-contained-x-small',
    label: 'Contained - Size Extra Small',
    element: (
      <Button className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-x-small" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon"
        />
      </Button>
    )
  },
  {
    id: 'button-icon-contained-xx-small',
    label: 'Contained - Size Extra Extra Small',
    element: (
      <Button className="slds-button slds-button_icon slds-button_icon-border slds-button_icon-xx-small" title="More Options">
        <SvgIcon
          sprite="utility"
          symbol="settings"
          className="slds-button__icon"
        />
      </Button>
    )
  }
  ];
