// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../base/example';

export const BrandFooter = props => (
  <div className="slds-grid slds-grid_vertical-align-center">
    <p>Footer Item</p>
  </div>
);

export const BrandBody = props =>
  props.symbol ? (
    <div className="slds-media">
      <div className="slds-media__figure">
        <span
          className="slds-icon_container"
          title="description of icon when needed"
        >
          <SvgIcon
            className="slds-icon slds-icon_small"
            sprite="utility"
            symbol="favorite"
          />
          <span className="slds-assistive-text">Description of icon</span>
        </span>
      </div>
      <div className="slds-media__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  ) : (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  );

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    context: 'brand',
    id: 'brand-default',
    label: 'Branded – default',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_brand-top slds-nubbin_top"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody />
      </Popover>
    )
  }
];

export let examples = [
  {
    context: 'brand',
    id: 'brand-right',
    label: 'Branded with right nubbin',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_brand-right slds-nubbin_right"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody />
      </Popover>
    )
  },
  {
    context: 'brand',
    id: 'brand-bottom',
    label: 'Branded with bottom nubbin',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_brand-bottom slds-nubbin_bottom"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody symbol />
      </Popover>
    )
  },
  {
    context: 'brand',
    id: 'brand-left',
    label: 'Branded with left nubbin',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_brand-left slds-nubbin_left"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody />
      </Popover>
    )
  },
  {
    context: 'brand',
    id: 'brand-top-dark',
    label: 'Branded with top nubbin (dark)',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_dark slds-popover_brand-dark slds-popover_brand-top slds-nubbin_top"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody />
      </Popover>
    )
  },
  {
    context: 'brand',
    id: 'brand-right-dark',
    label: 'Branded with right nubbin (dark)',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_dark slds-popover_brand-dark slds-popover_brand-right slds-nubbin_right"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody />
      </Popover>
    )
  },
  {
    context: 'brand',
    id: 'brand-bottom-dark',
    label: 'Branded with bottom nubbin (dark)',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_dark slds-popover_brand-dark slds-popover_brand-bottom slds-nubbin_bottom"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody symbol />
      </Popover>
    )
  },
  {
    context: 'brand',
    id: 'brand-left-dark',
    label: 'Branded with left nubbin (dark)',
    element: (
      <Popover
        className="slds-popover_brand slds-popover_dark slds-popover_brand-dark slds-popover_brand-left slds-nubbin_left"
        title="Dialog Title"
        closeButton
        inverse
      >
        <BrandBody />
      </Popover>
    )
  }
];
