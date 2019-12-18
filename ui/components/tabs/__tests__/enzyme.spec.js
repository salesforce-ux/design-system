// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { mount } from 'enzyme';
import MobileTabs from '../mobile-stack';

const { matchesMarkup } = createHelpers(__dirname);

describe('MobileTabs', () => {
  it('handles a click on a tab', () => {
    const wrapper = mount(<MobileTabs />);
    wrapper
      .find('.slds-button')
      .at(0)
      .simulate('click');
    wrapper.update();
    return matchesMarkup(wrapper.html());
  });

  it('adds the open class to the panel when tab is clicked', () => {
    const wrapper = mount(<MobileTabs />);
    wrapper
      .find('.slds-button')
      .at(0)
      .simulate('click');
    wrapper.update();
    expect(
      wrapper
        .find('.slds-panel')
        .at(0)
        .find('.slds-is-open')
    ).toHaveLength(1);
    expect(wrapper.find('.slds-tabs-mobile.slds-hidden')).toHaveLength(1);
  });

  it('handles a click on the back button of a panel', () => {
    const wrapper = mount(<MobileTabs />);
    wrapper
      .find('.slds-button')
      .at(0)
      .simulate('click');
    wrapper.update();
    wrapper
      .find('.slds-panel__back')
      .at(0)
      .simulate('click');
    wrapper.update();

    return matchesMarkup(wrapper.html());
  });

  it('adds the hidden class back to the panel when back button is pressed', () => {
    const wrapper = mount(<MobileTabs />);
    wrapper
      .find('.slds-button')
      .at(0)
      .simulate('click');
    wrapper.update();
    wrapper
      .find('.slds-panel__back')
      .at(0)
      .simulate('click');
    wrapper.update();
    expect(wrapper.find('.slds-panel.slds-hidden')).toHaveLength(3);
  });
});
