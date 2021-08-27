// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Combobox from '../../combobox';
import Listbox from '../../combobox/listbox/';
import {
  PlainTimeOptions,
  PlainTimeOptionsFocused,
  PlainTimeOptionsSelected
} from '../../combobox/snapshots.data';
import { UtilityIcon } from '../../icons/base/example';
import _ from '../../../shared/helpers';

/* -----------------------------------------------------------------------------
    Private
----------------------------------------------------------------------------- */

const ExampleTimepicker = ({
  hasFocus,
  isOpen,
  listboxData,
  hasError,
  isRequired,
  isDisabled
}) => {
  const focusedRef = useRef();
  const [focusedId, setFocusedId] = useState('');
  const [focusedValue, setFocusedValue] = useState('');
  const [comboboxId] = useState(_.uniqueId('example-unique-id-'));
  const [listboxId] = useState(_.uniqueId('example-unique-id-'));

  useEffect(() => {
    if (focusedRef.current) {
      if ('id' in focusedRef.current && focusedRef.current.id) {
        setFocusedId(focusedRef.current.id);
      }
      if (
        'ariaChecked' in focusedRef.current &&
        focusedRef.current.ariaChecked
      ) {
        setFocusedValue(focusedRef.current.textContent);
      }
    }
  }, []);

  return (
    <>
      <Combobox
        className={classNames('slds-timepicker', {
          'slds-has-error': hasError
        })}
        id={comboboxId}
        aria-controls={listboxId}
        aria-activedescendant={focusedId}
        autocomplete
        label="Time"
        placeholder="Select a time…"
        inputIconPosition="right"
        rightInputIcon={
          <UtilityIcon
            symbol="clock"
            className={classNames(
              'slds-icon slds-icon_x-small slds-icon-text-default',
              {
                'slds-icon-text-error': hasError,
                'slds-is-disabled': isDisabled
              }
            )}
            containerClassName="slds-input__icon slds-input__icon_right"
            assistiveText={false}
            title={false}
          />
        }
        results={
          <Listbox
            id={listboxId}
            snapshot={listboxData}
            type="plain"
            count={6}
            // hasUniqueId // There's an issue with uniqueId and rerenders that we will need to fix
            focusedRef={focusedRef}
          />
        }
        resultsType="listbox"
        hasInteractions
        hasFocus={hasFocus}
        isOpen={isOpen}
        hasError={hasError}
        isRequired={isRequired}
        isDisabled={isDisabled}
        value={focusedValue}
      />
      {hasError && (
        <div className="slds-form-element__help" id={comboboxId + '-error'}>
          Complete this field.
        </div>
      )}
    </>
  );
};

ExampleTimepicker.propTypes = {
  hasFocus: PropTypes.bool,
  isOpen: PropTypes.bool,
  hasError: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  listboxData: PropTypes.object
};

/* -----------------------------------------------------------------------------
    Exports
----------------------------------------------------------------------------- */

// Default
export default <ExampleTimepicker listboxData={PlainTimeOptions} />;

export let states = [
  {
    id: 'focused',
    label: 'Focused',
    element: (
      <ExampleTimepicker listboxData={PlainTimeOptions} hasFocus isOpen />
    )
  },
  {
    id: 'open-item-focused',
    label: 'Open - Item Focused',
    element: (
      <ExampleTimepicker
        listboxData={PlainTimeOptionsFocused}
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'time-selection',
    label: 'Open - Time selected',
    element: (
      <ExampleTimepicker
        listboxData={PlainTimeOptionsSelected}
        hasFocus
        isOpen
      />
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: <ExampleTimepicker listboxData={PlainTimeOptions} isRequired />
  },
  {
    id: 'error',
    label: 'Error',
    element: <ExampleTimepicker listboxData={PlainTimeOptions} hasError />
  },
  {
    id: 'required-error',
    label: 'Required with Error',
    element: (
      <ExampleTimepicker listboxData={PlainTimeOptions} isRequired hasError />
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    demoStyles: 'min-height: 8rem;',
    storybookStyles: true,
    element: (
      <ExampleTimepicker listboxData={PlainTimeOptions} isDisabled />
    )
  }
];
