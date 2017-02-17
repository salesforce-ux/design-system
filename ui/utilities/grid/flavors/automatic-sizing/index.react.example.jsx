// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let states = [
  {
    id: 'stretch',
    label: 'Column Stretch',
    element:
      <div className="slds-grid">
        <div className="slds-col"><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
        <div className="slds-col"><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
      </div>
  },
  {
    id: 'stretch-gutters',
    label: 'Column Stretch w/ Gutters',
    element:
      <div className="slds-grid slds-grid--pull-padded-medium">
        <div className="slds-col slds-p-horizontal--medium"><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
        <div className="slds-col slds-p-horizontal--medium"><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
      </div>
  },
  {
    id: 'no-stretch',
    label: 'No Column Stretch',
    element:
      <div className="slds-grid">
        <div><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
        <div><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
      </div>
  },
  {
    id: 'no-stretch-gutters',
    label: 'No Column Stretch w/ Gutters',
    element:
      <div className="slds-grid slds-grid--pull-padded-medium">
        <div className="slds-p-horizontal--medium"><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
        <div className="slds-p-horizontal--medium"><div className="slds-box slds-box--small slds-theme--shade slds-text-align--center">col</div></div>
      </div>
  }
];
