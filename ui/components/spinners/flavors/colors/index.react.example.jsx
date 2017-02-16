// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import { SpinnerContainer } from 'ui/components/spinners/flavors/containers/index.react.example';
import { Spinner } from 'ui/components/spinners/flavors/containers/index.react.example';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={classNames('demo-only', props.className)} style={{height: '5rem'}}>
    {props.children}
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element:
      <Demo>
        <SpinnerContainer>
          <Spinner className="slds-spinner--medium" />
        </SpinnerContainer>
      </Demo>
  },
  {
    id: 'brand',
    label: 'Brand',
    element:
    <Demo>
      <SpinnerContainer>
        <Spinner className="slds-spinner--medium slds-spinner--brand" />
      </SpinnerContainer>
    </Demo>
  },
  {
    id: 'inverse',
    label: 'Inverse',
    element:
    <Demo className="demo--inverse">
      <SpinnerContainer>
        <Spinner className="slds-spinner--medium slds-spinner--inverse" />
      </SpinnerContainer>
    </Demo>
  }
];
