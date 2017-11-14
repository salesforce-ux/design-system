// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../../shared/helpers';
import { Popover } from '../base/example';
import { EinsteinHeader } from '../../einstein-header/base';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

/// ///////////////////////////////////////////
// Export
/// //////////////////////////////////////////

export default (
  <Popover
    className="slds-nubbin_left slds-popover_einstein"
    title="Dialog Title"
    headingId={headingUniqueId}
    header={
      <EinsteinHeader
        className="slds-popover__header"
        headingId={headingUniqueId}
        closeButton
      />
    }
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Popover>
);

export let states = [
  {
    id: 'with-icon',
    label: 'Einstein card - with icon',
    element: (
      <Popover
        className="slds-nubbin_left slds-popover_einstein"
        title="Dialog Title"
        headingId={headingUniqueId}
        header={
          <EinsteinHeader
            className="slds-popover__header"
            symbol="salesforce1"
            headingId={headingUniqueId}
            closeButton
          />
        }
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Popover>
    )
  }
];
