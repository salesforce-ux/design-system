// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import EllieV2 from '../../../components/dynamic-icons/ellie';
import { Ellie } from './';
import AnimationComparison from '../index';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default <Ellie />;

export let states = [
  {
    id: 'paused',
    label: 'Paused',
    element: <Ellie isPaused />
  },
  {
    id: 'static',
    label: 'Static (no animation)',
    element: <Ellie isStatic />
  }
];

export let examples = [
  {
    id: 'v2',
    label: 'V2',
    element: (
      <EllieV2
        className="slds-is-animated"
        title="Description of the icon"
        assistiveText="Text alternative"
      />
    )
  },
  {
    id: 'version-comparison',
    label: 'Compared to V2',
    element: (
      <Fragment>
        <AnimationComparison version="2">
          <EllieV2
            className="slds-is-animated"
            title="Description of the icon"
            assistiveText="Text alternative"
          />
        </AnimationComparison>
        <AnimationComparison>
          <Ellie />
        </AnimationComparison>
      </Fragment>
    )
  }
];
