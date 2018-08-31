// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

/* eslint-env jest */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';

import { IsDependentOn, CannotBeSetWith } from '../helpers/index';

describe('IsDependentOn', () => {
  const FooComponent = props => (
    <div role={props.role} tabIndex={props.tabIndex} />
  );
  FooComponent.propTypes = {
    role: PropTypes.string,
    tabIndex: IsDependentOn('role', PropTypes.string)
  };

  beforeEach(() => {
    jest.spyOn(global.console, 'error');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not throw is prop is not passed', () => {
    shallow(<FooComponent />);
    expect(console.error).not.toBeCalled();
  });

  it('should throw if dependent prop is not passed', () => {
    shallow(<FooComponent tabIndex="0" />);
    expect(console.error).toBeCalledWith(
      expect.stringContaining(
        'Warning: Failed prop type: Invalid prop `tabIndex` (has value `0`) supplied to `FooComponent`. Must set `role` when setting `tabIndex'
      )
    );
  });

  it('should not throw if dependent prop is passed', () => {
    shallow(<FooComponent role="option" tabIndex="0" />);
    expect(console.error).not.toBeCalled();
  });

  it('should still also throw if prop is passed as wrong type', () => {
    shallow(<FooComponent role="option" tabIndex={0} />);
    expect(console.error).toBeCalledWith(
      expect.stringContaining(
        'Warning: Failed prop type: Invalid prop `tabIndex` of type `number` supplied to `FooComponent`, expected `string`.'
      )
    );
  });
});

describe('CannotBeSetWith', () => {
  const BarComponent = props => (
    <div role={props.role} tabIndex={props.tabIndex} />
  );
  BarComponent.propTypes = {
    role: PropTypes.string,
    tabIndex: CannotBeSetWith('role', PropTypes.string)
  };

  beforeEach(() => {
    jest.spyOn(global.console, 'error');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should not throw is prop is not passed', () => {
    shallow(<BarComponent />);
    expect(console.error).not.toBeCalled();
  });

  it('should throw if prop is passed with dependent prop', () => {
    shallow(<BarComponent role="option" tabIndex="1" />);
    expect(console.error).toBeCalledWith(
      expect.stringContaining(
        'Warning: Failed prop type: Invalid prop `tabIndex` (has value `1`) supplied to `BarComponent`. Cannot set `role` (has value `option`) when setting `tabIndex`'
      )
    );
  });

  it('should not throw if prop is passed without dependent prop', () => {
    shallow(<BarComponent tabIndex="2" />);
    expect(console.error).not.toBeCalled();
  });

  it('should still also throw if prop is wrong type', () => {
    shallow(<BarComponent tabIndex={0} />);
    expect(console.error).toBeCalledWith(
      expect.stringContaining(
        'Warning: Failed prop type: Invalid prop `tabIndex` of type `number` supplied to `BarComponent`, expected `string`.'
      )
    );
  });
});
