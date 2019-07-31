// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';
import Shadow from '../shadow/';
import renderer from 'react-test-renderer';

describe('ShadowRoot', () => {
  it('creates a custom element', () => {
    const wrapper = renderer
      .create(
        <Shadow.on name="test">
          <div>content</div>
        </Shadow.on>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('custom element has a shadow boundary', () => {
    const wrapper = renderer
      .create(
        <Shadow.on name="test">
          <div>content</div>
        </Shadow.on>
      )
      .toTree();
    expect(wrapper.props.children).toBe(null);
  });
  it('renders with no shadow boundary via config', () => {
    const wrapper = renderer
      .create(
        <Shadow.off name="test">
          <div>content</div>
        </Shadow.off>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('renders with no shadow boundary via prop', () => {
    const wrapper = renderer
      .create(
        <Shadow.on name="test" shadow={false}>
          <div>content</div>
        </Shadow.on>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
