// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
<span className="slds-icon_container slds-icon-standard-case" title="description of icon when needed">
  <SvgIcon className={`slds-icon${props.size ? ' slds-icon--' + props.size : ''}`} sprite="standard" symbol="case" />
  <span className="slds-assistive-text">Case icon</span>
</span>;

let XSmall = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-warning slds-icon--x-small" sprite="utility" symbol="warning" />
  <span className="slds-assistive-text">Warning Icon</span>
</span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'x-small',
    label: 'Extra Small',
    description: 'Extra-small - (`.{{cssPrefix}}icon--x-small`) - is typically used for small alert icons, with no background color.',
    element: <XSmall />
  },
  {
    id: 'small',
    label: 'Small',
    description: 'Small - (`.{{cssPrefix}}icon--small`) - 1.5rem&times;1.5rem (for icons with a background color).',
    element: <Default size="small" />
  },
  {
    id: 'medium',
    label: 'Medium (default)',
    description: 'Medium - (this default size requires no additional class) - 2rem&times;2rem.',
    element: <Default />
  },
  {
    id: 'large',
    label: 'Large',
    description: 'Large - (`.{{cssPrefix}}icon--large`) - 3rem&times;3rem.',
    element: <Default size="large" />
  }
];
