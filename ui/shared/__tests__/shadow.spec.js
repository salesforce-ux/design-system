// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import Shadow from '../shadow/';

describe('Shadow Wrapper', () => {
  it('Renders a shadow boundary', () => {
    const wrapper = shallow(
      <Shadow name="component" includes={['']}>
        <div>test</div>
      </Shadow>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('Renders no shadow boundary', () => {
    const wrapper = shallow(
      <Shadow name="component" shadow={false} includes={['']}>
        <div>test</div>
      </Shadow>
    );
    expect(wrapper.html()).toMatchSnapshot();
  });
});
