// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let CaseIcon = props =>
<span className="slds-icon_container slds-icon-standard-case" title="description of icon when needed">
  <SvgIcon className="slds-icon" sprite="standard" symbol="case" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let LogACallIcon = props =>
<span className="slds-icon_container slds-icon-standard-log-a-call" title="description of icon when needed">
  <SvgIcon className="slds-icon" sprite="standard" symbol="log_a_call" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let CustomIcon = props =>
<span className="slds-icon_container slds-icon-custom-custom25" title="description of icon when needed">
  <SvgIcon className="slds-icon" sprite="custom" symbol="custom25" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'caseicon',
    label: 'Case',
    element: <CaseIcon />
  },
  {
    id: 'logacallicon',
    label: 'Log a Call',
    element: <LogACallIcon />
  },
  {
    id: 'customicon',
    label: 'Custom Icon 25',
    element: <CustomIcon />
  }
];
