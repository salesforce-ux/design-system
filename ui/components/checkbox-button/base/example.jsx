// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CheckboxButton, CheckboxAddButtonDeprecated } from '../';

class CheckboxButtonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: !!this.props.isChecked,
      focused: false
    };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  handleFocus() {
    if (!this.state.focused) {
      this.setState({
        focused: true
      });
    }
  }

  handleBlur() {
    if (this.state.focused) {
      this.setState({
        focused: false
      });
    }
  }

  render() {
    const { iconChecked, iconUnchecked, isDisabled } = this.props;
    return (
      <CheckboxButton
        onChange={this.handleCheckboxChange}
        iconSymbol={this.state.checked ? iconChecked : iconUnchecked}
        isChecked={this.state.checked}
        isDisabled={isDisabled}
        isFocused={this.state.focused}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      />
    );
  }
}

CheckboxButtonExample.defaultProps = {
  iconChecked: 'check',
  iconUnchecked: 'add'
};

CheckboxButtonExample.propTypes = {
  iconChecked: PropTypes.string,
  iconUnchecked: PropTypes.string
};

export default <CheckboxButtonExample />;

export let states = [
  {
    id: 'checkbox-button-checked',
    label: 'Checked',
    element: <CheckboxButtonExample isChecked />
  },
  {
    id: 'checkbox-button-disabled',
    label: 'Disabled',
    element: <CheckboxButtonExample isDisabled />
  },
  {
    id: 'checkbox-button-checked-disabled',
    label: 'Checked and Disabled',
    element: <CheckboxButtonExample isChecked isDisabled />
  },
  {
    id: 'checkbox-button-icon-symbol',
    label: 'Different Icon',
    element: (
      <CheckboxButtonExample
        iconUnchecked="recycle_bin_empty"
        iconChecked="recycle_bin_full"
      />
    )
  },
  {
    id: 'checkbox-button-checked-icon-symbol',
    label: 'Different Icon - Checked',
    element: (
      <CheckboxButtonExample
        iconUnchecked="recycle_bin_empty"
        iconChecked="recycle_bin_full"
        isChecked
      />
    )
  },
  {
    id: 'checkbox-button-checked-disabled-icon-symbol',
    label: 'Different Icon - Checked and Disabled',
    element: (
      <CheckboxButtonExample
        iconChecked="recycle_bin_full"
        isChecked
        isDisabled
      />
    )
  },
  {
    id: 'checkbox-add-button-checked',
    label: 'Deprecated - Checked',
    element: <CheckboxAddButtonDeprecated checked />
  },
  {
    id: 'checkbox-add-button-disabled',
    label: 'Deprecated - Disabled',
    element: <CheckboxAddButtonDeprecated disabled />
  },
  {
    id: 'checkbox-add-button-checked-and-disabled',
    label: 'Deprecated - Checked and Disabled',
    element: <CheckboxAddButtonDeprecated checked disabled />
  }
];
