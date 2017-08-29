// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Checkbox } from '../../checkbox/base/example';
import { TileMedia } from '../base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export let states = [
  {
    id: 'tile-task',
    label: 'Default',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <TileMedia
          title="Contact Trammel Crow Company"
          media={
            <Checkbox
              label="Did you complete the task: Contact Trammel Crow Company?"
              hideLabel
            />
          }
        >
          <p className="slds-truncate" title="Assignee">
            Assignee
          </p>
        </TileMedia>
      </div>
    )
  },
  {
    id: 'tile-task-with-action',
    label: 'With actions',
    element: (
      <div className="demo-only" style={{ width: '320px' }}>
        <TileMedia
          title="Contact Trammel Crow Company"
          media={
            <Checkbox
              label="Did you complete the task: Contact Trammel Crow Company?"
              hideLabel
            />
          }
          actions
        >
          <p className="slds-truncate" title="Assignee">
            Assignee
          </p>
        </TileMedia>
      </div>
    )
  }
];
