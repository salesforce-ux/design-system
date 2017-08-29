// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Demo = props => (
  <div
    className={classNames('demo-only', props.className)}
    style={{ height: '6rem' }}
  >
    {props.children}
  </div>
);

export let SpinnerContainer = props => (
  <div className={classNames('slds-spinner_container', props.className)}>
    {props.children}
  </div>
);

export let Spinner = props => (
  <div role="status" className={classNames('slds-spinner', props.className)}>
    <span className="slds-assistive-text">Loading</span>
    <div className="slds-spinner__dot-a" />
    <div className="slds-spinner__dot-b" />
  </div>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <Demo>
    <Spinner className="slds-spinner_medium" />
  </Demo>
);

export let examples = [
  {
    id: 'without-container',
    label: 'Without Container',
    description:
      'A container is not required to use the spinner. Here, it is placed on a dark background to illustrate there is nothing there. The spinner will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element: (
      <Demo className="demo--inverse">
        <Spinner className="slds-spinner_medium" />
      </Demo>
    )
  },
  {
    id: 'with-container',
    label: 'With Container',
    description:
      'Here, the regular spinner container is used making the dark background look lighter. The spinner container will position itself to the closest positioned parent. So if you want it to spin over a single component, the class <code>.slds-is-relative</code> can be added to the parent.',
    element: (
      <Demo className="demo--inverse">
        <SpinnerContainer>
          <Spinner className="slds-spinner_medium" />
        </SpinnerContainer>
      </Demo>
    )
  },
  {
    id: 'fixed-container',
    label: 'Fixed Container',
    description:
      'The spinner container may be used with a container with fixed positioning by adding the <code>.slds-is-fixed</code> class to the container. This may be needed if you are dynamically loading portions of a component after the spinner is showing.',
    element: (
      <Demo className="demo--inverse">
        <SpinnerContainer className="slds-is-fixed">
          <Spinner className="slds-spinner_medium" />
        </SpinnerContainer>
      </Demo>
    )
  }
];
