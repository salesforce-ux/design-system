// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Action = props =>
<span className="slds-icon_container slds-icon_container--circle slds-icon-action-description" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon--small" sprite="action" symbol="description" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let Doctype = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon" sprite="doctype" symbol="xml" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let Standard = props =>
<span className="slds-icon_container slds-icon-standard-account" title="description of icon when needed">
  <SvgIcon className="slds-icon" sprite="standard" symbol="account" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let Utility = props =>
<span className="slds-icon_container" title="description of icon when needed">
  <SvgIcon className="slds-icon slds-icon--small slds-icon-text-default" sprite="utility" symbol="announcement" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

let Custom = props =>
<span className="slds-icon_container slds-icon-custom-custom5" title="description of icon when needed">
  <SvgIcon className="slds-icon" sprite="custom" symbol="custom5" />
  <span className="slds-assistive-text">Description of icon</span>
</span>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'standard',
    label: 'Standard',
    element: <Standard />
  },
  {
    id: 'utility',
    label: 'Utility',
    element: <Utility />
  },
  {
    id: 'action',
    label: 'Action',
    element: <Action />
  },
  {
    id: 'doctype',
    label: 'Doctype',
    element: <Doctype />
  },
  {
    id: 'custom',
    label: 'Custom',
    element: <Custom />
  }
];
