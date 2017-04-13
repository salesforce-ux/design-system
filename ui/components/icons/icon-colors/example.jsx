// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Demo = props =>
  <div className="demo-only" {...props}>
    {props.children}
  </div>;

let BaseIcon = props =>
<Demo style={{ padding: '0.5rem', background: '#16325c' }}>
  <span className="slds-icon_container" title="description of icon when needed">
    <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
    <span className="slds-assistive-text">Description of icon</span>
  </span>
</Demo>;

let DefaultIcon = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-default" sprite="utility" symbol="lock" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let WarningIcon = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-warning" sprite="utility" symbol="warning" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let ErrorIcon = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon-text-error" sprite="utility" symbol="warning" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export let states = [
  {
    id: 'baseicon',
    label: 'Base',
    element: <BaseIcon />
  },
  {
    id: 'defaulticon',
    label: 'Default',
    element: <DefaultIcon />
  },
  {
    id: 'warningicon',
    label: 'Warning',
    element: <WarningIcon />
  },
  {
    id: 'erroricon',
    label: 'Error',
    element: <ErrorIcon />
  }
];
