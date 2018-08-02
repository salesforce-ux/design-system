// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { mount } from 'enzyme';
import {
  NavVerticalRadioSet,
  NavVerticalFieldset,
  NavVerticalItemRadio
} from '../radio-group/example';

const { matchesMarkup } = createHelpers(__dirname);

describe('Vertical Nav Radio Group', () => {
  it('renders a focus state', () => {
    const wrapper = mount(<NavVerticalRadioSet />);
    return matchesMarkup(
      wrapper
        .find('.slds-nav-vertical__item')
        .at(0)
        .simulate('focus')
        .html()
    );
  });

  it('renders a hover state', () => {
    const wrapper = mount(<NavVerticalRadioSet />);
    return matchesMarkup(
      wrapper
        .find('.slds-nav-vertical__item')
        .at(0)
        .simulate('mouseEnter')
        .html()
    );
  });

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

  it('renders a compact fieldset', () =>
    matchesMarkup(
      <NavVerticalFieldset compact>
        <NavVerticalItemRadio id="test1">test1</NavVerticalItemRadio>
      </NavVerticalFieldset>
    ));
});
