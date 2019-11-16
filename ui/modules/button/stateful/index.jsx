// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../';
import Icon from '../../icon/';

class StatefulButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPressed: false,
      isFocused: false,
      hasMouseEntered: false,
      statefulButtonIconSymbol: 'add'
    };

    this.handleClick = this.handleClick.bind(this);
    this.renderIcon = this.renderIcon.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleClick() {
    const { isPressed, hasMouseEntered, isFocused } = this.state;
    const isButtonPressed = !isPressed;
    let buttonIconSymbol;

    // states for icons
    // - isPressed === false (default; use default state 'add')
    // - isPressed === true (set state to 'check')
    // - isPressed === true && isFocused === true (set state to 'close')
    // - isPressed === true && hasMouseEntered === true (set state to 'close')

    if (
      (hasMouseEntered && isButtonPressed) ||
      (isFocused && isButtonPressed)
    ) {
      buttonIconSymbol = 'close';
    } else if (isButtonPressed) {
      buttonIconSymbol = 'check';
    } else {
      buttonIconSymbol = 'add';
    }

    this.setState({
      isPressed: isButtonPressed,
      statefulButtonIconSymbol: buttonIconSymbol
    });
  }

  // Pointer Events
  handleMouseEnter(e) {
    const hasMouseEntered = e.type === 'mouseenter';
    const { isPressed } = this.state;
    // states for icons
    // - isPressed === false && hasMouseEntered === true (default; use default state 'add')
    // - isPressed === true && hasMouseEntered === true (set state to 'close')
    const buttonIconSymbol = hasMouseEntered && isPressed ? 'close' : 'add';

    this.setState({
      hasMouseEntered,
      statefulButtonIconSymbol: buttonIconSymbol
    });
  }

  handleMouseLeave(e) {
    const hasMouseLeft = e.type === 'mouseleave';
    const { isPressed, isFocused } = this.state;
    let buttonIconSymbol;

    // states for icons
    // - isPressed === false && hasMouseLeft === true (default; use default state 'add')
    // - isPressed === true && hasMouseLeft === true (set state to 'check')
    // - isPressed === true && isFocused === true && hasMouseLeft === false (set state to 'close')

    if (hasMouseLeft && isFocused && isPressed) {
      buttonIconSymbol = 'close';
    } else if (hasMouseLeft && isPressed) {
      buttonIconSymbol = 'check';
    } else {
      buttonIconSymbol = 'add';
    }

    this.setState({
      hasMouseEntered: !hasMouseLeft,
      statefulButtonIconSymbol: buttonIconSymbol
    });
  }

  // Keyboard Events
  handleFocus(e) {
    const isFocused = e.type === 'focus';
    const { isPressed } = this.state;
    // states for icons
    // - isPressed === false && isFocused === true (default; use default state 'add')
    // - isPressed === true && isFocused === true (set state to 'close')
    const buttonIconSymbol = isFocused && isPressed ? 'close' : 'add';

    this.setState({
      isFocused,
      statefulButtonIconSymbol: buttonIconSymbol
    });
  }

  handleBlur(e) {
    const isBlurred = e.type === 'blur';
    const { isPressed } = this.state;
    // states for icons
    // - isPressed === false && isBlurred === true (default; use default state 'add')
    // - isPressed === true && isBlurred === true (set state to 'check')
    const isButtonPressed = isBlurred && isPressed ? 'check' : 'add';

    this.setState({
      isFocused: !isBlurred,
      statefulButtonIconSymbol: isButtonPressed
    });
  }

  // Change icon based on state changes
  renderIcon() {
    const { statefulButtonIconSymbol } = this.state;

    return (
      <Icon
        sprite="utility"
        size="xx-small"
        symbol={statefulButtonIconSymbol}
      />
    );
  }

  render() {
    const { isPressed } = this.state;
    const { accessibleText, disabled } = this.props;

    return (
      <Button
        name="button-stateful"
        variant="stateful"
        leftIcon={this.renderIcon()}
        ariaPressed={isPressed}
        ariaLabel={accessibleText}
        handleClick={this.handleClick}
        handleMouseEnter={this.handleMouseEnter}
        handleMouseLeave={this.handleMouseLeave}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
        disabled={disabled}
      >
        <span className="lwc-button_stateful-text-not-selected">Follow</span>
        <span className="lwc-button_stateful-text-selected">Following</span>
        <span className="lwc-button_stateful-text-selected-focused">
          Unfollow
        </span>
      </Button>
    );
  }
}

StatefulButton.propTypes = {
  accessibleText: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

StatefulButton.defaultProps = {
  disabled: false
};

export default StatefulButton;
