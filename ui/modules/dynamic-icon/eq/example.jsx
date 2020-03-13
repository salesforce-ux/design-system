// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Fragment } from 'react';
import Eq from './';
import EqV2 from '../../../components/dynamic-icons/eq/index';
import AnimationComparison from '..';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export default <Eq />;

export let examples = [
  {
    id: 'v2',
    label: 'V2',
    element: <EqV2 />
  },
  {
    id: 'version-comparison',
    label: 'Compared to V2',
    element: (
      <Fragment>
        <AnimationComparison version="2">
          <EqV2 />
        </AnimationComparison>
        <AnimationComparison>
          <Eq />
        </AnimationComparison>
      </Fragment>
    )
  }
];
