// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import _ from '../../../shared/helpers';
import GlobalNavigation, { ContextBar } from './';

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

export const Context = props => (
  <div style={{ height: '16rem' }}>{props.children}</div>
);

export default <GlobalNavigation />;

export let states = [
  {
    id: 'item-active',
    label: 'Item Active',
    element: (
      <ContextBar>
        <li className="slds-context-bar__item slds-is-active">
          <a
            href="javascript:void(0);"
            className="slds-context-bar__label-action"
            title={'Menu Item'}
          >
            <span className="slds-assistive-text">Current Page:</span>
            <span className="slds-truncate" title="Menu Item">
              Menu Item
            </span>
          </a>
        </li>
        {_.times(2, i => (
          <li className="slds-context-bar__item" key={i}>
            <a
              href="javascript:void(0);"
              className="slds-context-bar__label-action"
              title={'Menu Item ' + i}
            >
              <span className="slds-truncate" title="Menu Item">
                Menu Item
              </span>
            </a>
          </li>
        ))}
      </ContextBar>
    )
  },
  {
    id: 'item-menu-open',
    label: 'Item Menu Open',
    element: <GlobalNavigation hasNavMenuOpen />
  }
];
