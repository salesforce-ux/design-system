// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import {
  MultiSelect,
  DefaultSnapShot,
  LockedSnapShot,
  DisabledSnapShot,
  SelectedSnapShot,
  MultiSelectedSnapShot,
  GrabbedSnapShot,
  MovedInSnapShot,
  DroppedSnapShot,
  MoveToSnapShot,
  MultiSelectViewMode
} from '../';
/// ////////////////////////////////////////
// Examples
/// ////////////////////////////////////////

export default <MultiSelect dataSet={DefaultSnapShot} />;

export let states = [
  {
    id: 'required-dueling-picklist',
    label: 'Locked',
    element: <MultiSelect dataSet={LockedSnapShot} />
  },
  {
    id: 'disabled-dueling-picklist',
    label: 'Disabled',
    element: <MultiSelect dataSet={DisabledSnapShot} disabled />
  },
  {
    id: 'multi-select-selected-item',
    label: 'Selected Item',
    element: <MultiSelect dataSet={SelectedSnapShot} />
  },
  {
    id: 'multi-select-multi-selected-items',
    label: 'Multiple Selected Items',
    element: <MultiSelect dataSet={MultiSelectedSnapShot} />
  },
  {
    id: 'multi-select-grabbed',
    label: 'Grabbed',
    element: <MultiSelect dataSet={GrabbedSnapShot} />
  },
  {
    id: 'multi-select-moved-in',
    label: 'Moved in list',
    element: <MultiSelect dataSet={MovedInSnapShot} />
  },
  {
    id: 'multi-select-dropped',
    label: 'Dropped',
    element: <MultiSelect dataSet={DroppedSnapShot} />
  },
  {
    id: 'multi-select-moved-to',
    label: 'Moved to list',
    element: <MultiSelect dataSet={MoveToSnapShot} />
  },
  {
    id: 'no-reordering-dueling-picklist',
    label: 'No Reordering',
    element: <MultiSelect dataSet={DefaultSnapShot} noReorder />
  },
  {
    id: 'responsive-no-reordering-dueling-picklist',
    label: 'Responsive No Reordering',
    element: <MultiSelect dataSet={DefaultSnapShot} noReorder isResponsive />
  },
  {
    id: 'view-mode-dueling-picklist',
    label: 'View Mode',
    element: <MultiSelectViewMode />
  }
];
