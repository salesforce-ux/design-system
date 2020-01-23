// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import React from 'react';
import { MobileCombobox } from './';

export const demoHeight = { height: '24rem' };

export const examples = [
  {
    id: 'default',
    label: 'Mobile Combobox - Default',
    demoStyles: demoHeight,
    element: <MobileCombobox labelContent="Search" />
  },
  {
    id: 'mobile-combobox-icon',
    label: 'Mobile Combobox - Icon',
    demoStyles: demoHeight,
    element: <MobileCombobox labelContent="Search" iconName="contact" />
  },
  {
    id: 'mobile-combobox-icon-value',
    label: 'Mobile Combobox - Icon with Value',
    demoStyles: demoHeight,
    element: (
      <MobileCombobox
        labelContent="Search"
        iconName="contact"
        defaultValue="Mel"
        listboxHeadingText="Results for “Mel”"
        listboxListItemState="typing"
      />
    )
  },
  {
    id: 'mobile-combobox-icon-results',
    label: 'Mobile Combobox - Icon with All Results',
    demoStyles: demoHeight,
    element: (
      <MobileCombobox
        labelContent="Search"
        iconName="contact"
        defaultValue="Mel"
        listboxHeadingText="All results for “Mel”"
      />
    )
  },
  {
    id: 'mobile-combobox-icon-results-selected',
    label: 'Mobile Combobox - Icon with All Results and Selected',
    demoStyles: demoHeight,
    element: (
      <MobileCombobox
        labelContent="Search"
        iconName="contact"
        defaultValue="Mel"
        listboxHeadingText="All results for “Mel”"
        listboxListItemState="selected"
      />
    )
  }
];

export const states = [
  {
    id: 'mobile-combobox-icon-disabled',
    label: 'Mobile Combobox - Icon and Disabled',
    demoStyles: demoHeight,
    element: (
      <MobileCombobox labelContent="Search" iconName="contact" isDisabled />
    )
  },
  {
    id: 'mobile-combobox-icon-value-loading',
    label: 'Mobile Combobox - Icon with Value and Loading',
    demoStyles: demoHeight,
    element: (
      <MobileCombobox
        labelContent="Search"
        iconName="contact"
        defaultValue="Mel"
        listboxHeadingText="Results for “Mel”"
        listboxListItemState="typing"
        listboxIsLoading
      />
    )
  }
];
