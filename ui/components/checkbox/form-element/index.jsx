// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxStandalone } from '../';
import { FormElement } from '../../form-element/';
import _ from '../../../shared/helpers';

// Component for standalone checkboxes within form
export const FormElementCheckboxStandalone = props => {
  const {
    name,
    value,
    isDisabled,
    isChecked,
    isRequired,
    isEditing,
    isStacked,
    isHorizontal,
    labelContent,
    hasError,
    hasTooltip,
    showTooltip,
    inlineMessage
  } = props;
  const uniqueId = _.uniqueId('checkbox-unique-id-'); // "*-unique-id-*" prevents copy/paste & informs about using unique IDs
  const uniqueErrorId = _.uniqueId('error-unique-id-');

  return (
    <FormElement
      labelContent={labelContent || 'Form Element Label'}
      inputId={uniqueId}
      isRequired={isRequired}
      isEditing={isEditing}
      isStacked={isStacked}
      isHorizontal={isHorizontal}
      hasError={hasError}
      inlineMessage={inlineMessage}
      errorId={hasError && uniqueErrorId}
      hasTooltip={hasTooltip}
      showTooltip={showTooltip}
    >
      <CheckboxStandalone
        id={uniqueId}
        name={name}
        value={value}
        isDisabled={isDisabled}
        isChecked={isChecked}
        isRequired={isRequired}
        errorId={hasError && uniqueErrorId}
      />
    </FormElement>
  );
};

CheckboxStandalone.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  isDisabled: PropTypes.bool,
  isChecked: PropTypes.bool,
  isRequired: PropTypes.bool,
  isEditing: PropTypes.bool,
  isStacked: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  labelContent: PropTypes.string,
  hasError: PropTypes.bool,
  hasTooltip: PropTypes.bool,
  showTooltip: PropTypes.bool,
  inlineMessage: PropTypes.string
};
