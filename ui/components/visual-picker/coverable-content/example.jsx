// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from '../../../shared/svg-icon';
import classNames from 'classnames';
import _ from '../../../shared/helpers';

import {
  Fieldset,
  Legend,
  FormElementControl
} from '../../radio-group/base/example';
import { UtilityIcon } from '../../icons/base/example';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export const Option = props => (
  <span className="slds-text-title" key={_.uniqueId()}>
    {props.label}
  </span>
);

export let VisualPicker = props => {
  const uniqueId = _.uniqueId('visual-picker-');

  return (
    <div
      className={classNames(
        'slds-visual-picker',
        {
          'slds-visual-picker_large': props.size === 'large',
          'slds-visual-picker_medium': props.size == 'medium'
        },
        props.className
      )}
    >
      <input
        type={props.type}
        id={uniqueId}
        value={uniqueId}
        name="options"
        defaultChecked={props.checked}
        disabled={props.disabled}
      />
      <label htmlFor={uniqueId}>
        {props.icon ? (
          <span
            className={classNames(
              'slds-visual-picker__figure slds-visual-picker__icon slds-align_absolute-center'
            )}
          >
            <span className="slds-is-selected">
              <span
                className="slds-icon_container"
                title="description of icon when needed"
              >
                <SvgIcon
                  className="slds-icon slds-icon_large slds-icon-action-check"
                  sprite="action"
                  symbol="check"
                />
                <span className="slds-assistive-text">
                  Provide description of icon
                </span>
              </span>
            </span>
            <span className="slds-is-not-selected">
              <span
                className="slds-icon_container"
                title="description of icon when needed"
              >
                <SvgIcon
                  className={classNames(
                    'slds-icon slds-icon-' +
                      props.sprite +
                      '-' +
                      props.symbol +
                      ' slds-icon_large',
                    { 'slds-icon-text-default': props.sprite === 'utility' }
                  )}
                  sprite={props.sprite || 'action'}
                  symbol={props.symbol}
                />
                <span className="slds-assistive-text">
                  Provide description of icon
                </span>
              </span>
            </span>
          </span>
        ) : (
          <span
            className={classNames(
              'slds-visual-picker__figure slds-visual-picker__text slds-align_absolute-center'
            )}
          >
            {props.children}
          </span>
        )}
        {props.label ? (
          <span className="slds-visual-picker__body">{props.label}</span>
        ) : null}
        {!props.icon ? (
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
    href="javascript:void(0);"
    className={classNames(
      'slds-box slds-box_link slds-box_x-small slds-media',
      props.className
    )}
  >
    <div className="slds-media__figure slds-media__figure_fixed-width slds-align_absolute-center slds-m-left_xx-small">
      <UtilityIcon className="slds-icon-text-default" symbol="knowledge_base" />
    </div>
    <div className="slds-media__body slds-border_left slds-p-around_small">
      {props.children}
    </div>
  </a>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Fieldset>
    <Legend>Select an app</Legend>
    <FormElementControl>
      <VisualPicker
        type="radio"
        icon
        sprite="utility"
        symbol="connected_apps"
        label={<Option label="Connected App" />}
        size="medium"
      />
      <VisualPicker
        type="radio"
        icon
        sprite="utility"
        symbol="custom_apps"
        label={<Option label="Custom App" />}
        size="medium"
      />
    </FormElementControl>
  </Fieldset>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled option',
    element: (
      <Fieldset>
        <Legend>Select an app</Legend>
        <FormElementControl>
          <VisualPicker
            type="checkbox"
            icon
            sprite="utility"
            symbol="connected_apps"
            label={<Option label="Connected App" />}
            size="medium"
          />
          <VisualPicker
            type="checkbox"
            disabled
            icon
            sprite="utility"
            symbol="custom_apps"
            label={<Option label="Custom App" />}
            size="medium"
          />
        </FormElementControl>
      </Fieldset>
    )
  }
];

export let examples = [
  {
    id: 'checkbox-group',
    label: 'Checkbox group',
    element: (
      <Fieldset>
        <Legend>Add the following object(s)</Legend>
        <FormElementControl>
          <VisualPicker
            type="checkbox"
            icon
            sprite="standard"
            symbol="account"
            label={<Option label="Account" />}
            size="medium"
          />
          <VisualPicker
            type="checkbox"
            icon
            sprite="standard"
            symbol="lead"
            label={<Option label="Lead" />}
            size="medium"
          />
          <VisualPicker
            type="checkbox"
            icon
            sprite="standard"
            symbol="orders"
            label={<Option label="Orders" />}
            size="medium"
          />
        </FormElementControl>
      </Fieldset>
    )
  }
];
