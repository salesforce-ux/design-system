// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { Fieldset } from '../';

export const CompoundFormRow = props => {
  const { children } = props;
  return <div className="slds-form-element__row">{children}</div>;
};

CompoundFormRow.propTypes = {
  children: PropTypes.node.isRequired
};

export const CompoundFormElement = props => {
  const {
    isStacked,
    isHorizontal,
    isEditing,
    isRequired,
    isAddress,
    hasTooltip,
    hasError,
    errorId,
    inlineMessage,
    labelContent,
    children
  } = props;

  return (
    <Fieldset
      hasCompoundFields
      isAddress={isAddress}
      isStacked={isStacked}
      isHorizontal={isHorizontal}
      isEditing={isEditing}
      isRequired={isRequired}
      hasTooltip={hasTooltip}
      hasError={hasError}
      errorId={errorId}
      inlineMessage={inlineMessage}
      label={labelContent}
    >
      {children}
    </Fieldset>
  );
};

CompoundFormElement.propTypes = {
  children: PropTypes.node.isRequired,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isEditing: PropTypes.bool,
  isRequired: PropTypes.bool,
  isAddress: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  hasError: PropTypes.bool,
  errorId: PropTypes.string,
  inlineMessage: PropTypes.string,
  labelContent: PropTypes.string
};
