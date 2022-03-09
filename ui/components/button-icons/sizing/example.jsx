// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../';

export default [
  {
    id: 'default',
    label: 'Bare – Default',
    element: (
      <ButtonIcon
        assistiveText="More options"
        title="More options"
      />
    )
  }
];

export let examples = [
  {
    id: 'button-icon-large',
    label: 'Bare - Size Large',
    element: (
      <ButtonIcon
        iconClassName="slds-button__icon_large"
        assistiveText="More options"
        title="More options"
      />
    )
  },
  {
    id: 'button-icon-small',
    label: 'Bare - Size Small',
    element: (
      <ButtonIcon
        iconClassName="slds-button__icon_small"
        assistiveText="More options"
        title="More options"
        />
    )
  },
  {
    id: 'button-icon-x-small',
    label: 'Bare - Size Extra Small',
    element: (
      <ButtonIcon
        iconClassName="slds-button__icon_x-small"
        assistiveText="More options"
        title="More options"
      />
    )
  },
  {
    id: 'button-icon-contained-large',
    label: 'Contained - Size Large',
    element: (
      <ButtonIcon
        className="slds-button_icon-border"
        size="large"
        assistiveText="More options"
        title="More options"
      />
    )
  },
  {
    id: 'button-icon-contained-small',
    label: 'Contained - Size Small',
    element: (
      <ButtonIcon
        className="slds-button_icon-border"
        size="small"
        assistiveText="More options"
        title="More options"
      />
    )
  },
  {
    id: 'button-icon-contained-x-small',
    label: 'Contained - Size Extra Small',
    element: (
      <ButtonIcon
        className="slds-button_icon-border"
        size="x-small"
        assistiveText="More options"
        title="More options"
      />
    )
  },
  {
    id: 'button-icon-contained-xx-small',
    label: 'Contained - Size Extra Extra Small',
    element: (
      <ButtonIcon
        className="slds-button_icon-border"
        size="xx-small"
        assistiveText="More options"
        title="More options"
      />
    )
  }
  ];
