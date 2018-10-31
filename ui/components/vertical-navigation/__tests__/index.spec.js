// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import {
  NavVerticalFieldset,
  NavVerticalItemRadio
} from '../radio-group/example';
import {
  NavVerticalItem,
  NavVerticalSection,
  NavVertical
} from '../list/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Vertical Nav Radio Group', () => {
  it('renders a radio button', () =>
    matchesMarkup(<NavVerticalItemRadio id="test1" />));

  it('renders a checked radio button', () =>
    matchesMarkup(<NavVerticalItemRadio id="test1" checked />));

  it('renders a fieldset', () =>
    matchesMarkup(
      <NavVerticalFieldset>
        <NavVerticalItemRadio id="test1">test1</NavVerticalItemRadio>
      </NavVerticalFieldset>
    ));

  it('renders a shaded fieldset', () =>
    matchesMarkup(
      <NavVerticalFieldset shaded>
        <NavVerticalItemRadio id="test1">test1</NavVerticalItemRadio>
      </NavVerticalFieldset>
    ));

  it('renders a shaded fieldset with a checked item', () =>
    matchesMarkup(
      <NavVerticalFieldset shaded>
        <NavVerticalItemRadio checked id="test1">
          test1
        </NavVerticalItemRadio>
      </NavVerticalFieldset>
    ));

  it('renders a compact fieldset', () =>
    matchesMarkup(
      <NavVerticalFieldset compact>
        <NavVerticalItemRadio id="test1">test1</NavVerticalItemRadio>
      </NavVerticalFieldset>
    ));
});

describe('Vertical Nav List Group', () => {
  it('renders a nav wrapper', () => matchesMarkup(<NavVertical />));

  it('renders a shaded nav wrapper', () =>
    matchesMarkup(<NavVertical isShaded />));

  it('renders a compact nav wrapper', () =>
    matchesMarkup(<NavVertical isCompact />));

  it('renders a list item', () =>
    matchesMarkup(<NavVerticalItem>Item One</NavVerticalItem>));

  it('renders an active list item', () =>
    matchesMarkup(<NavVerticalItem active> Item One</NavVerticalItem>));

  it('renders a list section', () =>
    matchesMarkup(<NavVerticalSection headerId="header1" title="Folders" />));

  it('renders a collapsed list section', () =>
    matchesMarkup(
      <NavVerticalSection
        headerId="header1"
        title="Folders"
        listId="list1"
        collapsed
      />
    ));

  it('renders an expanded list section', () =>
    matchesMarkup(
      <NavVerticalSection
        headerId="header1"
        title="Folders"
        listId="list1"
        expanded
      />
    ));

  it('renders a div instead of a list for radio sets', () =>
    matchesMarkup(<NavVerticalSection isNavVerticalRadioSet />));
});
