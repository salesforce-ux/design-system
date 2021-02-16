// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BuilderHeader from '../';

/**
 * Demo Styles
 *
 * Stylings used in all our examples. Since our 'default' example lives
 * outside of the state machine, this is a workaround to allow
 * us to keep the source of truth for demo styles in this file.
 * DEMO_STYLES is imported in .stories and applied to the <StoryFrame />.
 */
export const DEMO_STYLES = 'height: 220px; position: relative;';

export default <BuilderHeader showDropDown />;

export let states = [
  {
    id: 'menu-open',
    label: 'Menu open',
    isOpen: true,
    element: <BuilderHeader showDropDown openDropDown />
  },
  {
    id: 'with-truncation',
    label: 'With Truncation',
    element: (
      <BuilderHeader docName="Page Type with a very very long name that will truncate when the container is not wide enough to contain this content completely" />
    )
  },
  {
    id: 'has-tooltip',
    label: 'Has "Back" Tooltip',
    element: <BuilderHeader hasBackTooltip />
  }
];
