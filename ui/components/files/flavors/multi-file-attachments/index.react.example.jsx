// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { File } from 'ui/components/files/flavors/base/index.react.example';

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'multi-attachments',
    label: 'Files',
    element:
      <ul className="slds-grid slds-grid--pull-padded">
        <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3">
          <File
            className="slds-file--card"
            cropClass="slds-file__crop--16-by-9"
            titleClass="slds-file__title--card"
            symbol="pdf"
            title="Proposal.pdf"
            image />
        </li>
        <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3">
          <File
            className="slds-file--card"
            cropClass="slds-file__crop--16-by-9"
            titleClass="slds-file__title--card"
            symbol="pdf"
            title="Proposal.pdf" />
        </li>
      </ul>
  },
  {
    id: 'multi-attachments-overflow',
    label: 'With overflow',
    element:
      <ul className="slds-grid slds-grid--pull-padded">
        <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3">
          <File
            className="slds-file--card"
            cropClass="slds-file__crop--16-by-9"
            titleClass="slds-file__title--card"
            symbol="pdf"
            title="Proposal.pdf"
            image />
        </li>
      <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3  slds-medium-show">
          <File
            className="slds-file--card"
            cropClass="slds-file__crop--16-by-9"
            titleClass="slds-file__title--card"
            symbol="pdf"
            title="Proposal.pdf" />
        </li>
        <li className="slds-p-horizontal--xx-small slds-size--1-of-2 slds-medium-size--1-of-3">
          <File
            className="slds-file--card"
            cropClass="slds-file__crop--16-by-9"
            titleClass="slds-file__title--overlay slds-align--absolute-center slds-text-heading--large"
            title="+22"
            image
            overlay />
        </li>
      </ul>
  }
];
