// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

export let examples = [
  {
    id: 'reset',
    label: 'Link reset',
    element: (
      <a href="javascript:void(0);" className="slds-text-link_reset">
        Link
      </a>
    )
  },
  {
    id: 'link',
    label: 'Link reset with text link inside',
    element: (
      <a href="javascript:void(0);" className="slds-text-link_reset">
        This text is a link but looks like normal text...<span className="slds-text-link">More</span>.
      </a>
    )
  },
  {
    id: 'halo-focus',
    label: 'Link reset with halo focus',
    element: (
      <a href="javascript:void(0);" className="slds-has-blur-focus">
        Link with halo focus
      </a>
    )
  },
  {
    id: 'button-reset',
    label: 'Button reset',
    element: (
      <button className="slds-button slds-text-link_reset">Button</button>
    )
  },
  {
    id: 'faux',
    label: 'Faux Link on a span',
    element: (
      <span className="slds-text-link_faux">
        Span with faux link interactions
      </span>
    )
  }
];
