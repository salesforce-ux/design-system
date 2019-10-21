// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';
import ButtonIcon from '../button-icon';
import DropdownContainer from '../dropdown-container';
import Menu from '../menu';

import common from '../common/index.scss';
import buttonMenu from './base/index.scss';

class ButtonMenu extends Component {
  render() {
    const {
      children,
      title,
      isOpen,
      hasActions,
      length,
      width,
      selectionType,
      position,
      shadow,
      customization
    } = this.props;

    const css = rollupAdoptedStylesheets([common, buttonMenu, customization]);

    return (
      <Shadow.on name="button-menu" includes={css} shadow={shadow}>
        <div className="lwc-button-menu">
          <ButtonIcon
            symbol="down"
            variant="neutral"
            boundarySize="medium"
            title={title}
            hasPopup
            isExpanded={isOpen}
          />

          {isOpen && (
            <DropdownContainer
              length={length}
              width={width}
              position={position}
            >
              <Menu
                title={title}
                selectionType={selectionType}
                hasActions={hasActions}
              >
                {children}
              </Menu>
            </DropdownContainer>
          )}
        </div>
      </Shadow.on>
    );
  }
}

ButtonMenu.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  hasActions: PropTypes.bool,
  length: PropTypes.number,
  selectionType: PropTypes.oneOf(['single', 'multiple']),
  position: PropTypes.oneOf([
    'below-start',
    'below-center',
    'below-end',
    'above-start',
    'above-center',
    'above-end'
  ]),
  width: PropTypes.oneOf(['xx-small', 'x-small', 'small', 'medium', 'large']),
  shadow: PropTypes.bool
};

export default ButtonMenu;
