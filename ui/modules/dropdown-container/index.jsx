// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';

import common from '../common/index.scss';
import dropdownContainer from './index.scss';

class DropdownContainer extends Component {
  render() {
    const {
      children,
      shadow,
      position,
      width,
      length,
      customization
    } = this.props;

    const css = rollupAdoptedStylesheets([
      common,
      dropdownContainer,
      customization
    ]);

    const positionClassNames = {
      'lwc-dropdown__below-start': position === 'below-start',
      'lwc-dropdown__below-center': position === 'below-center',
      'lwc-dropdown__below-end': position === 'below-end',
      'lwc-dropdown__center-start': position === 'center-start',
      'lwc-dropdown__center-end': position === 'center-end',
      'lwc-dropdown__above-start': position === 'above-start',
      'lwc-dropdown__above-center': position === 'above-center',
      'lwc-dropdown__above-end': position === 'above-end'
    };

    const widthClassNames = {
      'lwc-dropdown__width_x-small': width === 'x-small',
      'lwc-dropdown__width_small': width === 'small',
      'lwc-dropdown__width_medium': width === 'medium',
      'lwc-dropdown__width_large': width === 'large'
    };

    const lengthClassName = length ? `lwc-dropdown_height-limited` : null;

    return (
      <Shadow.on name="dropdown-container" includes={css} shadow={shadow}>
        <div
          className={classNames(
            'lwc-dropdown-container',
            positionClassNames,
            widthClassNames,
            lengthClassName
          )}
        >
          {children}
        </div>
      </Shadow.on>
    );
  }
}

DropdownContainer.propTypes = {
  position: PropTypes.oneOf([
    'below-start',
    'below-center',
    'below-end',
    'above-start',
    'above-center',
    'above-end'
  ]),
  width: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  length: PropTypes.number,
  shadow: PropTypes.bool
};

export default DropdownContainer;
