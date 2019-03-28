// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconPrimitive from '../icon-primitive/';
import Shadow from '../../shared/shadow';

import common from '../common/index.scss';
import icon from './base/index.scss';

class Icon extends Component {
  render() {
    const {
      sprite,
      symbol,
      title,
      size,
      color,
      boundarySize,
      unset,
      shadow,
      assistiveText
    } = this.props;

    const iconSizingClassName = {
      'lwc-icon_x-large': size === 'x-large',
      'lwc-icon_large': size === 'large',
      'lwc-icon_medium': size === 'medium',
      'lwc-icon_small': size === 'small',
      'lwc-icon_x-small': size === 'x-small',
      'lwc-icon_xx-small': size === 'xx-small'
    };

    const iconColorClassName = {
      'lwc-icon_success': color === 'success',
      'lwc-icon_warning': color === 'warning',
      'lwc-icon_error': color === 'error',
      'lwc-icon_muted': color === 'muted'
    };

    const iconBoundaryClassName = {
      'lwc-icon-boundary_x-large': boundarySize === 'x-large',
      'lwc-icon-boundary_large': boundarySize === 'large',
      'lwc-icon-boundary_medium': boundarySize === 'medium',
      'lwc-icon-boundary_small': boundarySize === 'small',
      'lwc-icon-boundary_x-small': boundarySize === 'x-small'
    };

    const iconModifierClassName = {
      'lwc-icon_unset': unset
    };

    // Remove underscores and add a dash before numbers
    const sanitizedSymbol = symbol
      .replace('_', '-')
      .split(/(\d+)/, 2)
      .join('-');

    // Remove duplicate customs in string
    const sanitizedSprite = sprite === 'custom' ? '' : `${sprite}-`;

    const computedClassNames = `lwc-icon-${sprite} lwc-icon-${sanitizedSprite}${sanitizedSymbol}`;

    return (
      <Shadow name="icon" includes={[common, icon]} shadow={shadow}>
        <span
          className={classNames('lwc-icon-boundary', iconBoundaryClassName)}
        >
          <span
            className={classNames(
              'lwc-icon',
              iconSizingClassName,
              iconColorClassName,
              iconModifierClassName,
              computedClassNames
            )}
            title={title}
          >
            <IconPrimitive
              sprite={sprite}
              symbol={symbol}
              assistiveText={assistiveText}
            />
          </span>
        </span>
      </Shadow>
    );
  }
}

Icon.defaultProps = {
  sprite: 'utility',
  symbol: 'add'
};

Icon.propTypes = {
  sprite: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  boundarySize: PropTypes.string,
  unset: PropTypes.bool,
  shadow: PropTypes.bool,
  assistiveText: PropTypes.string
};

export default Icon;
