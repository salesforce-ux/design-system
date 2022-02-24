// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../shared/svg-icon';
import classNames from 'classnames';

export const HintParent = props => (
  <div className="slds-hint-parent">{props.children}</div>
);

class ButtonIcon extends Component {
  render() {
    let {
      id,
      className,
      iconClassName,
      assistiveText,
      hasDropdown,
      size,
      variant,
      theme,
      feedback,
      selected,
      symbol,
      isFirst,
      isMiddle,
      isLast,
      isOpen,
      useCurrentColor,
      innerRef,
      ...rest
    } = this.props;

    /**
     * Neutral - Bordered with Filled Container
     */
    if (theme === 'neutral') {
      variant = 'slds-button_icon-border-filled';

      if (size === 'medium') {
        size = null;
      }
      if (hasDropdown) {
        variant = null;
      }
      /**
       * Inverse - Bare/Bordered on Inverse Background
       */
    } else if (theme === 'inverse') {
      variant = 'slds-button_icon-inverse';

      if (size === 'medium') {
        variant = 'slds-button_icon-border-inverse';
        size = null;
      }
      /**
       * Brand
       */
    } else if (theme === 'brand') {
      variant = 'slds-button_icon-brand';

      if (size === 'medium') {
        size = null;
      }
      /**
       * Transparent - Bordered with Transparent Container
       */
    } else if (theme === 'transparent') {
      variant = 'slds-button_icon-border';

      if (size === 'medium') {
        size = null;
      }
      if (hasDropdown) {
        variant = null;
      }
    }

    return (
      <button
        onClick={e => {
          // Temporary fix to stop Action Menus from triggering Accordion Section toggling
          e.stopPropagation();
        }}
        id={id}
        className={classNames(
          'slds-button slds-button_icon',
          selected && 'slds-is-selected',
          {
            'slds-button_icon-more': hasDropdown && theme === 'neutral',
            'slds-button_icon-container-more':
              hasDropdown && theme === 'transparent',
            'slds-button_icon-current-color': useCurrentColor
          },
          {
            'slds-button_icon-container': size === 'medium',
            'slds-button_icon-large': size === 'large',
            'slds-button_icon-small': size === 'small',
            'slds-button_icon-x-small': size === 'x-small',
            'slds-button_icon-xx-small': size === 'xx-small'
          },
          {
            'slds-button_icon-error': feedback === 'error',
            'slds-button_icon-warning': feedback === 'warning'
          },
          {
            'slds-button_first': isFirst,
            'slds-button_middle': isMiddle,
            'slds-button_last': isLast
          },
          variant,
          className
        )}
        aria-haspopup={hasDropdown ? 'true' : this.props['aria-haspopup']}
        {...hasDropdown && { [`aria-expanded`]: isOpen ? 'true' : 'false' }}
        ref={innerRef}
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

ButtonIcon.propTypes = {
  id: PropTypes.string,
  symbol: PropTypes.string,
  theme: PropTypes.string,
  assistiveText: PropTypes.string,
  useCurrentColor: PropTypes.bool,
  title: PropTypes.string
};

export default ButtonIcon;
