// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import _ from '../../../shared/helpers';
import { UtilityIcon } from '../../icons/base/example';

// Mimics the behavior of setting focus on an input when clicking a label
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const FauxInput = props => {
  const [fauxInput, setFauxInputFocus] = useFocus();
  const uniqueId = props.label ? _.uniqueId('slds-faux-input-label-') : null;

  return (
    <div className="slds-faux-input_container">
      {props.label && (
        <span
          className="slds-faux-input_label"
          id={uniqueId}
          onClick={setFauxInputFocus}
        >
          {props.label}
        </span>
      )}
      <button
        className="slds-faux-input"
        aria-labelledby={uniqueId}
        ref={fauxInput}
      >
        {!props.label && (
          <span className="slds-assistive-text">{props.assistiveText}</span>
        )}
        <UtilityIcon
          symbol="search"
          className="slds-icon slds-icon_x-small slds-icon-text-default"
          containerClassName="slds-input__icon slds-input__icon_right"
          assistiveText={false}
          title={false}
        />
      </button>
    </div>
  );
};

FauxInput.propTypes = {
  label: PropTypes.string,
  assistiveText: PropTypes.string.isRequired
};

export default FauxInput;
