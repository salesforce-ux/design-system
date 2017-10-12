// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import SvgIcon from '../../shared/svg-icon';
import classNames from 'classnames';

class ButtonIcon2 extends Component {
  render() {
    let {
      id,
      className,
      iconClassName,
      assistiveText,
      hasDropdown,
      size,
      background,
      theme,
      feedback,
      selected,
      symbol,
      ...rest
    } = this.props;

    if (theme === 'neutral') {
      background = 'slds-button_icon-border-filled';

      if (size === 'medium') {
        size = null;
      }
    } else if (theme === 'inverse') {
      background = 'slds-button_icon-inverse';

      if (size) {
        background = 'slds-button_icon-border-inverse';
      }
    } else if (theme === 'brand') {
      background = 'slds-button_icon-brand';

      if (size === 'medium') {
        size = null;
      }
    } else if (theme === 'transparent') {
      background = 'slds-button_icon-border';

      if (size === 'medium') {
        size = null;
      }
    }

    return (
      <button
        id={id}
        className={classNames(
          'slds-button slds-button_icon',
          selected && 'slds-is-selected',
          hasDropdown && 'slds-button_icon-more',
          {
            'slds-button_icon-container': size === 'medium',
            'slds-button_icon-small': size === 'small',
            'slds-button_icon-x-small': size === 'x-small',
            'slds-button_icon-xx-small': size === 'xx-small'
          },
          {
            'slds-button_icon-error': feedback === 'error'
          },
          background,
          className
        )}
        aria-haspopup={hasDropdown ? 'true' : this.props['aria-haspopup']}
        {...rest}
      >
        <SvgIcon
          className={classNames('slds-button__icon', iconClassName)}
          sprite="utility"
          symbol={symbol || 'settings'}
        />
        {hasDropdown && (
          <SvgIcon
            className="slds-button__icon slds-button__icon_x-small"
            sprite="utility"
            symbol="down"
          />
        )}
        <span className="slds-assistive-text">
          {assistiveText || 'Provide description of action'}
        </span>
      </button>
    );
  }
}

export default ButtonIcon2;
