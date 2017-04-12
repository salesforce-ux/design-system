// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export default (
  <ButtonIcon className="slds-button--icon-border" symbol="down" assistiveText="More Options" aria-haspopup="true" title="More Options" />
);

export let states = [
  {
    id: 'button-icon-container-size-small',
    label: 'Small',
    element: <ButtonIcon className="slds-button--icon-border slds-button--icon-small" symbol="down" assistiveText="More Options" aria-haspopup="true" title="More Options" />
  },
  {
    id: 'button-icon-container-size-x-small',
    label: 'x-Small',
    element: <ButtonIcon className="slds-button--icon-border slds-button--icon-x-small" symbol="down" assistiveText="More Options" aria-haspopup="true" title="More Options" />
  },
  {
    id: 'button-icon-container-size-xx-small',
    label: 'xX-Small',
    element: <ButtonIcon className="slds-button--icon-border slds-button--icon-xx-small" symbol="down" assistiveText="More Options" aria-haspopup="true" title="More Options" />
  }
];
