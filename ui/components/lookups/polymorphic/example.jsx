// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Lookup } from '../base/example';

// Available props in ui/components/lookups/base/example.jsx

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <Lookup polymorphic />
  },
  {
    id: 'object-dropdown',
    label: 'Object dropdown',
    element:
      <div className="demo-only" style={{ height: '260px' }}>
        <Lookup polymorphic showEntityDropdown />
      </div>
  },
  {
    id: 'active',
    label: 'Active',
    element:
      <div className="demo-only" style={{ height: '380px' }}>
        <Lookup polymorphic showLookupDropdown />
      </div>
  },
  {
    id: 'typeahead',
    label: 'Typeahead',
    element:
      <div className="demo-only" style={{ height: '180px' }}>
        <Lookup polymorphic showLookupDropdown typeahead />
      </div>
  },
  {
    id: 'selection',
    label: 'With selection',
    element: <Lookup polymorphic selection />
  }
];
