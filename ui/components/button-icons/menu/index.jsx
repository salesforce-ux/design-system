// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../../shared/svg-icon';
import { Button } from '../../buttons/base/example';
import ButtonIcon from '../';
import classNames from 'classnames';

const ButtonText = props => {
  const { label, assistiveText } = props;
  return (
    <Button aria-haspopup>
      {label}
      {assistiveText && (
        <span className="slds-assistive-text">{assistiveText}</span>
      )}
      <SvgIcon
        className="slds-button__icon slds-button__icon_x-small slds-button__icon_right"
        sprite="utility"
        symbol="down"
      />
    </Button>
  );
};

ButtonText.propTypes = {
  label: PropTypes.string,
  assistiveText: PropTypes.string
};

export const ButtonMenu = props => {
  const { isOpen, label, symbol, assistiveText, children } = props;
  return (
    <div
      className={classNames(
        'slds-dropdown-trigger slds-dropdown-trigger_click',
        isOpen && 'slds-is-open'
      )}
    >
      {label ? (
        <ButtonText label={label} assistiveText={assistiveText} />
      ) : (
        <ButtonIcon
          isOpen
          hasDropdown
          symbol={symbol}
          assistiveText={assistiveText}
        />
      )}
      {children}
    </div>
  );
};

ButtonMenu.propTypes = {
  isOpen: PropTypes.bool,
  symbol: PropTypes.string,
  assistiveText: PropTypes.string,
  children: PropTypes.node
};
