// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

import { Fieldset, Legend } from '../../radio-group/base/example';
import { FormElementControl } from '../../form-element';
import { UtilityIcon } from '../../icons/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export const Option = props => (
  <span className="slds-text-title" key={_.uniqueId()}>
    {props.label}
  </span>
);

export const VisualPicker = ({
  name,
  id,
  hasIcon,
  type,
  sprite,
  symbol,
  label,
  size,
  children,
  checked,
  disabled,
  className
}) => {
  const uniqueId = _.uniqueId('visual-picker-');

  return (
    <div
      className={classNames(
        'slds-visual-picker',
        {
          'slds-visual-picker_large': size === 'large',
          'slds-visual-picker_medium': size === 'medium',
          'slds-visual-picker_small': size === 'small'
        },
        className
      )}
    >
      <input
        type={type}
        id={uniqueId}
        value={uniqueId}
        name={name}
        defaultChecked={checked}
        disabled={disabled}
      />
      <label htmlFor={uniqueId}>
        {hasIcon ? (
          <span
            className={classNames(
              'slds-visual-picker__figure slds-visual-picker__icon slds-align_absolute-center'
            )}
          >
            <span className="slds-is-selected">
              <span className="slds-icon_container">
                <SvgIcon
                  className="slds-icon slds-icon_large slds-icon-action-check"
                  sprite="action"
                  symbol="check"
                />
              </span>
            </span>
            <span className="slds-is-not-selected">
              <span className="slds-icon_container">
                <SvgIcon
                  className={classNames(
                    'slds-icon slds-icon-' +
                    sprite +
                    '-' +
                    symbol +
                    ' slds-icon_large',
                    { 'slds-icon-text-default': sprite === 'utility' }
                  )}
                  sprite={sprite || 'action'}
                  symbol={symbol}
                />
              </span>
            </span>
          </span>
        ) : (
          <span
            className={classNames(
              'slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center'
            )}
          >
            {children}
          </span>
        )}
        {label ? (
          <span className="slds-visual-picker__body">{label}</span>
        ) : null}
        {!hasIcon ? (
          <span className="slds-icon_container slds-visual-picker__text-check">
            <SvgIcon
              className="slds-icon slds-icon-text-check slds-icon_x-small"
              sprite="utility"
              symbol="check"
            />
          </span>
        ) : null}
      </label>
    </div>
  );
};

export let VisualPickerMediaObject = props => (
  <a
    href="#"
    className={classNames(
      'slds-box slds-box_link slds-box_x-small slds-media',
      props.className
    )}
    onClick={e => e.preventDefault()}
  >
    <div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
      <UtilityIcon className="slds-icon-text-default" symbol="knowledge_base" />
    </div>
    <div className="slds-media__body slds-border_left slds-p-around_small">
      {props.children}
    </div>
  </a>
);

// Helper container that populates and manages shared properties among <VisualPicker>
export const VisualPickerContainer = ({ children, type, sprite, hasIcon }) => {
  const name = _.uniqueId('example-unique-name-');

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        name: name,
        type: type,
        sprite: hasIcon && sprite,
        hasIcon: hasIcon
      });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

VisualPickerContainer.defaultProps = {
  type: 'radio',
  sprite: 'utility',
  hasIcon: true
};

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPickerContainer>
            <VisualPicker
              symbol="connected_apps"
              label={<Option label="Connected App" />}
              size="medium"
            />
            <VisualPicker
              symbol="custom_apps"
              label={<Option label="Custom App" />}
              size="medium"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled option',
    element: (
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPickerContainer>
            <VisualPicker
              symbol="connected_apps"
              label={<Option label="Connected App" />}
              size="medium"
            />
            <VisualPicker
              disabled
              symbol="custom_apps"
              label={<Option label="Custom App" />}
              size="medium"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  }
];

export let examples = [
  {
    id: 'base_small',
    label: 'Small base',
    element: (
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPickerContainer>
            <VisualPicker
              symbol="connected_apps"
              label={<Option label="Connected App" />}
              size="small"
            />
            <VisualPicker
              symbol="custom_apps"
              label={<Option label="Custom App" />}
              size="small"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'base',
    label: 'Medium (default) base',
    element: (
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPickerContainer>
            <VisualPicker
              symbol="connected_apps"
              label={<Option label="Connected App" />}
              size="medium"
            />
            <VisualPicker
              symbol="custom_apps"
              label={<Option label="Custom App" />}
              size="medium"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'base_large',
    label: 'Large base',
    element: (
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPickerContainer>
            <VisualPicker
              symbol="connected_apps"
              label={<Option label="Connected App" />}
              size="large"
            />
            <VisualPicker
              symbol="custom_apps"
              label={<Option label="Custom App" />}
              size="large"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'checkbox-group_small',
    label: 'Small base with checkboxes',
    element: (
      <Fieldset>
        <Legend>Add the following object(s)</Legend>
        <FormElementControl>
          <VisualPickerContainer sprite="standard" type="checkbox">
            <VisualPicker
              symbol="account"
              label={<Option label="Account" />}
              size="small"
            />
            <VisualPicker
              symbol="lead"
              label={<Option label="Lead" />}
              size="small"
            />
            <VisualPicker
              symbol="orders"
              label={<Option label="Orders" />}
              size="small"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'checkbox-group',
    label: 'Medium base with checkboxes',
    element: (
      <Fieldset>
        <Legend>Add the following object(s)</Legend>
        <FormElementControl>
          <VisualPickerContainer sprite="standard" type="checkbox">
            <VisualPicker
              symbol="account"
              label={<Option label="Account" />}
              size="medium"
            />
            <VisualPicker
              symbol="lead"
              label={<Option label="Lead" />}
              size="medium"
            />
            <VisualPicker
              symbol="orders"
              label={<Option label="Orders" />}
              size="medium"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  },
  {
    id: 'checkbox-group_large',
    label: 'Large base with checkboxes',
    element: (
      <Fieldset>
        <Legend>Add the following object(s)</Legend>
        <FormElementControl>
          <VisualPickerContainer sprite="standard" type="checkbox">
            <VisualPicker
              symbol="account"
              label={<Option label="Account" />}
              size="large"
            />
            <VisualPicker
              symbol="lead"
              label={<Option label="Lead" />}
              size="large"
            />
            <VisualPicker
              symbol="orders"
              label={<Option label="Orders" />}
              size="large"
            />
          </VisualPickerContainer>
        </FormElementControl>
      </Fieldset>
    )
  }
];
