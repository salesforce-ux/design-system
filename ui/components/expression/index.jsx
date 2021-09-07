// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { UtilityIcon } from '../icons/base/example';
import SvgIcon from '../../shared/svg-icon';
import ButtonIcon from '../button-icons/';
import { Button } from '../buttons/base/example';
import Combobox from '../combobox/';
import Listbox from '../combobox/listbox/';
import {
  FormElement,
  SimpleFormElementWrapper,
  FormElementSpanFauxLabel,
  FormElementControl
} from '../form-element';
import Input from '../input/';
import * as Snapshot from './snapshots.data';
import classNames from 'classnames';
import _ from '../../shared/helpers';

// Private
const placeholderText = 'Select…';

export const ExpressionOptions = ({
  optionSelected,
  isInFilter,
  label,
  placeholderText
}) => {
  const listboxId = _.uniqueId('listbox-id-');
  const selected = optionSelected && Snapshot.OptionSelected[optionSelected];

  return (
    <div
      className={classNames(
        isInFilter ? 'slds-m-vertical_small' : 'slds-expression__options'
      )}
    >
      <Combobox
        id={_.uniqueId('combobox-id-')}
        aria-controls={listboxId}
        label={label}
        value={selected && selected.value}
        placeholder={placeholderText}
        selectOnly
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="down"
            className="slds-icon slds-icon_x-small slds-icon-text-default"
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id={listboxId}
            hasUniqueId
            snapshot={selected ? selected.snapshot : Snapshot.ConditionsOptions}
            type="plain"
            count={
              selected
                ? Object.keys(selected.snapshot).length
                : Object.keys(Snapshot.ConditionsOptions).length
            }
            visualSelection
          />
        }
        resultsType="listbox"
        hasInteractions
      />
    </div>
  );
};

ExpressionOptions.propTypes = {
  label: PropTypes.string.isRequired,
  isInFilter: PropTypes.bool,
  optionSelected: PropTypes.oneOf([
    'any',
    'all',
    'custom',
    'formula',
    'always',
    'group'
  ]),
  placeholderText: PropTypes.string
};

ExpressionOptions.defaultProps = {
  label: 'Take Action When',
  placeholderText: placeholderText
};

export const ExpressionCustom = props => {
  const inputId = _.uniqueId('text-input-id-');

  return (
    <div className="slds-expression__custom-logic">
      <FormElement labelContent="Custom Logic" inputId={inputId}>
        <Input id={inputId} defaultValue={props.defaultValue} />
      </FormElement>
    </div>
  );
};

ExpressionCustom.propTypes = {
  defaultValue: PropTypes.string
};

export const ExpressionList = props => <ul>{props.children}</ul>;

ExpressionList.propTypes = {
  children: PropTypes.node
};

export const ExpressionLegend = props => (
  <legend
    className={classNames('slds-expression__legend', {
      'slds-expression__legend_group': props.isGroup
    })}
  >
    {props.legendText && <span>{props.legendText}</span>}
    <span className="slds-assistive-text">{props.assistiveText}</span>
  </legend>
);

ExpressionLegend.propTypes = {
  isGroup: PropTypes.bool,
  legendText: PropTypes.string,
  assistiveText: PropTypes.string
};

export const ExpressionCol = props => (
  <div
    className={classNames('slds-col', {
      'slds-grow-none': props.doesNotGrow
    })}
  >
    {props.children}
  </div>
);

ExpressionCol.propTypes = {
  doesNotGrow: PropTypes.bool,
  children: PropTypes.node
};

export const ExpressionRow = ({
  isGroup,
  groupName,
  conditionName,
  placeholderText,
  resourceIsSelected,
  inputIsDisabled,
  hasError,
  errorMessage,
  buttonIsDisabled,
  legendText
}) => {
  const listboxId1 = _.uniqueId('listbox-id-');
  const listboxId2 = _.uniqueId('listbox-id-');
  const inputLabel = 'Value';
  const inputId = _.uniqueId('text-input-id-');
  const errorId = 'error-message-unique-id';

  return (
    <li
      className={classNames('slds-expression__row', {
        'slds-expression__row_group': isGroup
      })}
    >
      <fieldset>
        <ExpressionLegend
          legendText={legendText}
          assistiveText={
            isGroup ? conditionName + ' of ' + groupName : conditionName
          }
        />
        <div className="slds-grid slds-gutters_xx-small">
          <ExpressionCol>
            <Combobox
              id={_.uniqueId('combobox-id-')}
              aria-controls={listboxId1}
              label="Resource"
              placeholder={placeholderText}
              selectOnly
              inputIconPosition="right"
              value={resourceIsSelected && 'Resource 1'}
              formClassName="slds-has-error"
              errorId={errorId}
              rightInputIcon={
                <UtilityIcon
                  symbol="down"
                  className="slds-icon slds-icon_x-small slds-icon-text-default"
                  containerClassName="slds-input__icon slds-input__icon_right"
                  assistiveText={false}
                  title={false}
                />
              }
              results={
                <Listbox
                  id={listboxId1}
                  hasUniqueId
                  snapshot={
                    resourceIsSelected
                      ? Snapshot.ResourceSelected
                      : Snapshot.ResourceOptions
                  }
                  type="plain"
                  count={4}
                  visualSelection
                />
              }
              resultsType="listbox"
              hasInteractions
            />
          </ExpressionCol>
          <ExpressionCol doesNotGrow>
            <Combobox
              id={_.uniqueId('combobox-id-')}
              aria-controls={listboxId2}
              label="Operator"
              placeholder={placeholderText}
              selectOnly
              inputIconPosition="right"
              isDisabled={inputIsDisabled}
              rightInputIcon={
                <UtilityIcon
                  symbol="down"
                  className="slds-icon slds-icon_x-small slds-icon-text-default"
                  containerClassName="slds-input__icon slds-input__icon_right"
                  assistiveText={false}
                  title={false}
                />
              }
              results={
                <Listbox
                  id={listboxId2}
                  hasUniqueId
                  snapshot={Snapshot.OperatorOptions}
                  type="plain"
                  count={4}
                  visualSelection
                />
              }
              resultsType="listbox"
              hasInteractions
            />
          </ExpressionCol>
          <ExpressionCol>
            <FormElement
              hasError={hasError}
              labelContent={inputLabel}
              inputId={inputId}
              errorId={errorMessage && errorId}
              inlineMessage={errorMessage}
            >
              <Input
                disabled={inputIsDisabled}
                id={inputId}
                aria-describedby={errorMessage && errorId}
              />
            </FormElement>
          </ExpressionCol>
          <ExpressionCol doesNotGrow>
            <SimpleFormElementWrapper>
              <FormElementSpanFauxLabel>&nbsp;</FormElementSpanFauxLabel>
              <FormElementControl>
                <ButtonIcon
                  theme="neutral"
                  symbol="delete"
                  disabled={buttonIsDisabled}
                  assistiveText={
                    isGroup
                      ? 'Delete ' + conditionName + ' of ' + groupName
                      : 'Delete ' + conditionName
                  }
                  title={
                    isGroup
                      ? 'Delete ' + conditionName + ' of ' + groupName
                      : 'Delete ' + conditionName
                  }
                />
              </FormElementControl>
            </SimpleFormElementWrapper>
          </ExpressionCol>
        </div>
      </fieldset>
    </li>
  );
};

ExpressionRow.propTypes = {
  legendText: PropTypes.string,
  conditionName: PropTypes.string.isRequired,
  isGroup: PropTypes.bool,
  groupName: function(props, propName) {
    if (
      props.isGroup &&
      (props[propName] === undefined || typeof props[propName] !== 'string')
    ) {
      return new Error(
        "Please provide a string of this row's group name for assistive text."
      );
    }
  },
  inputIsDisabled: PropTypes.bool,
  buttonIsDisabled: PropTypes.bool,
  resourceIsSelected: PropTypes.bool,
  errorMessage: PropTypes.string,
  placeholderText: PropTypes.string
};

ExpressionRow.defaultProps = {
  conditionName: 'Condition 1',
  placeholderText: placeholderText
};

export const ExpressionGroup = props => (
  <li className="slds-expression__group">
    <fieldset>
      <ExpressionLegend
        legendText={props.legendText}
        assistiveText={props.assistiveText}
        isGroup
      />
      <ExpressionOptions optionSelected={props.optionSelected} />
      <ul>{props.children}</ul>
      <ExpressionButtons isGroup />
    </fieldset>
  </li>
);

ExpressionGroup.propTypes = {
  legendText: PropTypes.string,
  assistiveText: PropTypes.string.isRequired,
  optionSelected: PropTypes.oneOf([
    'any',
    'all',
    'custom',
    'formula',
    'always',
    'group'
  ]),
  children: PropTypes.node
};

ExpressionGroup.defaultProps = {
  assistiveText: 'Condition Group 1'
};

export const ExpressionButtons = props => (
  <div className="slds-expression__buttons">
    <Button isNeutral>
      <SvgIcon
        className="slds-button__icon slds-button__icon_left"
        sprite="utility"
        symbol="add"
      />
      Add Condition
    </Button>
    {!props.isGroup && (
      <Button isNeutral>
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="add"
        />
        Add Group
      </Button>
    )}
  </div>
);

ExpressionButtons.propTypes = {
  isGroup: PropTypes.bool
};

export const Expression = props => (
  <div className="slds-expression">
    <h2 className="slds-expression__title">Conditions</h2>
    <ExpressionOptions optionSelected={props.optionSelected} />
    {props.hasCustomLogic && (
      <ExpressionCustom defaultValue={props.customLogicValue} />
    )}
    <ExpressionList>
      <ExpressionRow
        legendText={props.legendText}
        assistiveText="Condition 1"
        inputIsDisabled={props.inputIsDisabled}
        buttonIsDisabled={props.buttonIsDisabled}
        resourceIsSelected={props.resourceIsSelected}
      />
      {props.children}
    </ExpressionList>
    <ExpressionButtons />
  </div>
);

Expression.propTypes = {
  hasCustomLogic: PropTypes.bool,
  legendText: PropTypes.string,
  inputIsDisabled: PropTypes.bool,
  buttonIsDisabled: PropTypes.bool,
  optionSelected: PropTypes.oneOf([
    'any',
    'all',
    'custom',
    'formula',
    'always'
  ]),
  resourceIsSelected: PropTypes.bool,
  customLogicValue: PropTypes.string,
  children: PropTypes.node
};
