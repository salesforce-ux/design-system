// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import _ from '../../shared/helpers';

const Input = props => {
  const {
    id,
    className,
    type,
    placeholder,
    readOnly,
    defaultValue,
    disabled,
    required,
    role,
    tabIndex,
    isBare
  } = props;

  const computedClassNames = {
    'slds-input_bare': isBare,
    'slds-input_counter': type === 'number'
  };

  const uniqueId = _.uniqueId('text-input-unique-id-');

  return (
    <input
      {...props}
      id={id || uniqueId}
      className={classNames('slds-input', computedClassNames, className)}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly}
      defaultValue={defaultValue}
      disabled={disabled}
      required={required}
      aria-invalid={props['aria-describedby'] ? 'true' : undefined}
      role={role}
      tabIndex={tabIndex}
    />
  );
};

Input.defaultProps = {
  type: 'text'
};

Input.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf([
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ]),
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  role: PropTypes.string,
  tabIndex: PropTypes.string
};

export default Input;
