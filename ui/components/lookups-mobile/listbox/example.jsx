// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import React from 'react';
import MobileLookupListbox from './';

export const examples = [
  {
    id: 'mobile-lookup-listbox',
    label: 'Mobile Lookup Listbox',
    element: (
      <div style={{ height: '17rem' }}>
        <MobileLookupListbox />
      </div>
    )
  },
  {
    id: 'mobile-lookup-listbox-typing-results',
    label: 'Mobile Lookup Listbox Results While Typing',
    element: (
      <div style={{ height: '15rem' }}>
        <MobileLookupListbox
          headingText="Results for “Mel”"
          listItemState="typing"
        />
      </div>
    )
  },
  {
    id: 'mobile-lookup-listbox-all-results',
    label: 'Mobile Lookup Listbox All Results',
    element: (
      <div style={{ height: '21rem' }}>
        <MobileLookupListbox
          headingText="All Results for “Mel”"
          listItemState="selected"
        />
      </div>
    )
  }
];
