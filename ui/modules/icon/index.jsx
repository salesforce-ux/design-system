// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconPrimitive from '../icon-primitive/';
import Shadow from '../../shared/shadow';

import '../common/index.scss';
import './base/index.scss';

import common from '!!css-loader!../common/index.css'; // eslint-disable-line import/no-webpack-loader-syntax
import icon from '!!css-loader!./base/index.css'; // eslint-disable-line import/no-webpack-loader-syntax

/**
 * - svg is sized based on container
 * - any svg can be used in any context type
 * - sound defaults
 * - colors are independent of the icon symbol
 */

class Icon extends Component {
  constructor() {
    super();
    this.renderAssistiveText = this.renderAssistiveText.bind(this);
  }

  renderAssistiveText() {
    if (!this.props.assistiveText) return;
    return <span className="slds-assistive-text">{assistiveText}</span>;
  }

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
      'sldswc-icon_x-large': size === 'x-large',
      'sldswc-icon_large': size === 'large',
      'sldswc-icon_medium': size === 'medium',
      'sldswc-icon_small': size === 'small',
      'sldswc-icon_x-small': size === 'x-small',
      'sldswc-icon_xx-small': size === 'xx-small'
    };

    const iconColorClassName = {
      'sldswc-icon_success': color === 'success',
      'sldswc-icon_warning': color === 'warning',
      'sldswc-icon_error': color === 'error',
      'sldswc-icon_muted': color === 'muted'
    };

    const iconBoundaryClassName = {
      'sldswc-icon-boundary_x-large': boundarySize === 'x-large',
      'sldswc-icon-boundary_large': boundarySize === 'large',
      'sldswc-icon-boundary_medium': boundarySize === 'medium',
      'sldswc-icon-boundary_small': boundarySize === 'small',
      'sldswc-icon-boundary_x-small': boundarySize === 'x-small'
    };

    const iconModifierClassName = {
      'sldswc-icon_unset': unset
    };

    // Remove underscores and add a dash before numbers
    const sanitizedSymbol = symbol
      .replace('_', '-')
      .split(/(\d+)/, 2)
      .join('-');

    // Remove duplicate customs in string
    const sanitizedSprite = sprite === 'custom' ? '' : `${sprite}-`;

    const computedClassNames = `sldswc-icon-${sprite} sldswc-icon-${sanitizedSprite}${sanitizedSymbol}`;

    return (
      <Shadow name="icon" includes={[common, icon]} shadow={shadow}>
        <span
          className={classNames('sldswc-icon-boundary', iconBoundaryClassName)}
        >
          <span
            className={classNames(
              'sldswc-icon',
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

export default Icon;
