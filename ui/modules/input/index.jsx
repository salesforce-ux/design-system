// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Shadow from '../../shared/shadow/';
import { rollupAdoptedStylesheets } from '../../shared/shadow/helpers';
import Label from '../label';
import Icon from '../icon/';
import ButtonIcon from '../button-icon/';
import Spinner from '../spinner/';

import common from '../common/index.scss';
import inputsCommon from '../common/inputs/index.scss';
import input from './base/index.scss';

/**
 * This is a utility function to handle the passing of empty strings (i.e., variables that, for one reason or another, have no string value) to the classNames package and can be returned as undefined. This would be a breaking change on the package level, so we are handling it ourselves. https://github.com/JedWatson/classnames/issues/115
 * @param {String} args - list of class names to be passed to the classNames package
 * @return String || undefined
 */
function classNamesUndefined(...args) {
  return classNames(...args) || undefined;
}

const Input = props => {
  const {
    customization,
    shadow,
    showSource,
    hideSourceOf,
    id,
    placeholderText,
    labelText,
    labelIsHidden,
    ariaLabelText,
    ariaLabelledbyIds,
    isRequired,
    isDisabled,
    isReadOnly,
    hasError,
    helpText,
    type,
    inputValue,
    prefixSymbol,
    suffixSymbol,
    isStatic,
    prefixIcon,
    suffixIcon,
    hasClearButton,
    isLoading,
    direction,
    autocomplete,
    minLength,
    maxLength,
    pattern
  } = props;

  const css = rollupAdoptedStylesheets([
    common,
    inputsCommon,
    input,
    customization
  ]);

  const inputClasses = classNames('lwc-input', {
    'lwc-input_has-prefix-icon': prefixIcon,
    'lwc-input_has-suffix-icon': suffixIcon
  });

  const inputControlClasses = classNames('lwc-input_control', {
    'lwc-input_has-error': hasError
  });

  const helpTextClassNames = classNames({
    'lwc-input_help-text': helpText,
    'lwc-input_error-text': hasError
  });

  const helpTextId = classNames({
    'error-message-id': hasError && helpText,
    'help-text-id': !hasError && helpText
  });
  const labelId = (prefixSymbol || suffixSymbol) && 'fixed-text-label';
  const prefixId = prefixSymbol && 'text-input-addon-prefix';
  const suffixId = suffixSymbol && 'text-input-addon-suffix';

  const ariaDescribedbyIds = classNamesUndefined(
    labelId,
    prefixId,
    suffixId,
    helpTextId
  );

  const hasEndGroup = hasClearButton || isLoading;

  const renderIcon = iconObject => {
    if (!iconObject) return;

    const iconSprite = Object.keys(iconObject).toString();
    const iconSymbol = iconObject[iconSprite];

    return <Icon sprite={iconSprite} symbol={iconSymbol} size="x-small" />;
  };

  return (
    <Shadow.on
      name="input"
      includes={css}
      shadow={shadow}
      showSource={showSource}
      hideSourceOf={hideSourceOf}
      dir={direction}
    >
      <Label
        id={id}
        labelText={labelText}
        isRequired={isRequired}
        shadow={false}
        labelId={labelId}
        isStatic={isStatic}
        hasLabel={!labelIsHidden}
      />
      <div className={inputClasses}>
        {prefixSymbol && (
          <span className="lwc-input_addon" id={prefixId}>
            {prefixSymbol}
          </span>
        )}

        {prefixIcon && (
          <div className="lwc-input_icon-wrapper_prefix">
            {renderIcon(prefixIcon)}
          </div>
        )}

        {isStatic ? (
          <span className="lwc-input_control_static">{inputValue}</span>
        ) : (
          <input
            id={id}
            type={type}
            className={inputControlClasses}
            placeholder={placeholderText}
            aria-label={ariaLabelText}
            aria-labelledby={ariaLabelledbyIds}
            aria-describedby={ariaDescribedbyIds}
            aria-invalid={hasError}
            disabled={isDisabled}
            required={isRequired}
            readOnly={isReadOnly}
            defaultValue={inputValue}
            autocomplete={autocomplete}
            minLength={minLength}
            maxLength={maxLength}
            pattern={pattern}
          />
        )}

        {suffixIcon && (
          <div className="lwc-input_icon-wrapper_suffix">
            {renderIcon(suffixIcon)}
          </div>
        )}

        {hasEndGroup && (
          <div className="lwc-input_group_suffix">
            {isLoading && (
              <Spinner size="x-small" color="brand" position="relative" />
            )}
            {hasClearButton && <ButtonIcon symbol="clear" size="x-small" />}
          </div>
        )}

        {suffixSymbol && (
          <span className="lwc-input_addon" id={suffixId}>
            {suffixSymbol}
          </span>
        )}
      </div>

      {helpText && (
        <div className={helpTextClassNames} id={helpTextId}>
          {helpText}
        </div>
      )}
    </Shadow.on>
  );
};

Input.propTypes = {
  shadow: PropTypes.bool,
  showSource: PropTypes.bool,
  hideSourceOf: PropTypes.array,
  customization: PropTypes.node,
  id: PropTypes.string.isRequired,
  placeholderText: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  labelIsHidden: PropTypes.bool,
  ariaLabelText: PropTypes.string,
  // TODO: Define the mechanism to make this automatic
  ariaLabelledbyIds: PropTypes.array,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  hasError: PropTypes.bool,
  helpText: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'search']),
  inputValue: PropTypes.string,
  // TODO: Define what is an acceptable prefix value
  prefixSymbol: PropTypes.string,
  // TODO: define what is an acceptable suffix value
  suffixSymbol: PropTypes.string,
  isStatic: PropTypes.bool,
  prefixIcon: PropTypes.object,
  suffixIcon: PropTypes.object,
  hasClearButton: PropTypes.bool,
  isLoading: PropTypes.bool,
  direction: PropTypes.oneOf(['rtl', 'ltr']),
  autocomplete: PropTypes.oneOf([
    'off',
    'on',
    'name',
    'honorific-prefix',
    'given-name',
    'additional-name',
    'family-name',
    'honorific-suffix',
    'nickname',
    'email',
    'username',
    'new-password',
    'current-password',
    'one-time-code',
    'organization-title',
    'organization',
    'street-address',
    'address-line1',
    'address-line2',
    'address-line3',
    'address-line4',
    'address-level1',
    'address-level2',
    'address-level3',
    'address-level4',
    'country',
    'country-name',
    'postal-code',
    'cc-name',
    'cc-given-name',
    'cc-conditional-name',
    'cc-family-name',
    'cc-number',
    'cc-exp',
    'cc-exp-month',
    'cc-exp-year',
    'cc-csc',
    'cc-type',
    'transaction-country',
    'transaction-amount',
    'language',
    'bday',
    'bday-day',
    'bday-month',
    'bday-year',
    'sex',
    'tel',
    'tel-country-code',
    'tel-national',
    'tel-area-code',
    'tel-local',
    'tel-extension',
    'impp',
    'url',
    'photo'
  ]),
  // TODO: Create custom PropType that follows the HTML spec rules (e.g., no negative numbers, smaller than maxLength)
  minLength: PropTypes.number,
  // TODO: Create custom PropType that follows the HTML spec rules (e.g., no negative numbers, larger than minLength)
  maxLength: PropTypes.number,
  pattern: PropTypes.string
};

Input.defaultProps = {
  placeholderText: 'Placeholder Text',
  type: 'text',
  labelIsHidden: false
};

export default Input;
