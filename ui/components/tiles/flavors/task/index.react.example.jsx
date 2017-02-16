// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Checkbox } from 'ui/components/checkbox/flavors/base/index.react.example';
import { TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';
import classNames from 'classnames';

///////////////////////////////////////////
// Export
///////////////////////////////////////////

export let states = [
  {
    id: 'tile-task',
    label: 'Default',
    element:
      <div className="demo-only" style={{ width: '320px' }}>
        <TileMedia
          title="Contact Trammel Crow Company"
          media={ <Checkbox label="Did you complete the task: Contact Trammel Crow Company?" hideLabel /> }
        >
          <p className="slds-truncate">Assignee</p>
        </TileMedia>
      </div>
  },
  {
    id: 'tile-task-with-action',
    label: 'With actions',
    element:
      <div className="demo-only" style={{ width: '320px' }}>
        <TileMedia
          title="Contact Trammel Crow Company"
          media={ <Checkbox label="Did you complete the task: Contact Trammel Crow Company?" hideLabel /> }
          actions
        >
          <p className="slds-truncate">Assignee</p>
        </TileMedia>
      </div>
  }
];
