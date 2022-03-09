// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon, { HintParent } from '../';
import {Button} from '../../buttons/base/example';
import SvgIcon from '../../../shared/svg-icon';

export default [
  {
    id: 'default',
    label: 'Base – default',
    element: <ButtonIcon assistiveText="Settings" title="Settings" />
  }
];

export let states = [
  {
    id: 'error',
    label: 'Base - Error',
    element: (
      <ButtonIcon
        feedback="error"
        symbol="error"
        title="Error"
        assistiveText="Error"
      />
    )
  },
  {
    id: 'warning',
    label: 'Base - Warning',
    element: (
      <ButtonIcon
        feedback="warning"
        symbol="warning"
        title="Warning"
        assistiveText="Warning"
      />
    )
  },
  {
    id: 'bare-disabled',
    label: 'Base - Disabled',
    element: <ButtonIcon assistiveText="Settings" disabled title="Settings" />
  }
];

export let examples = [
  {
    id: 'hint-hover',
    label: 'Base - Hint on hover',
    element: (
      <HintParent>
        <ButtonIcon
          assistiveText="Settings"
          iconClassName="slds-button__icon_hint"
          title="Settings"
        />
      </HintParent>
    )
  },
  {
    // this was put in to place to test a styling hooks edge case
    id: 'button-icon-lbc-mismatch',
    label: 'Button Icon - LBC Mismatch',
    element: (
      <Button className="slds-button_icon slds-button_icon-border">
        <span className="slds-assistive-text">Error</span>
        <SvgIcon
          sprite="utility"
          symbol="clock"
          className="slds-button__icon slds-icon-text-error"
        />
      </Button>
    )
  }
];
