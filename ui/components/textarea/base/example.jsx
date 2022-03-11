// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  FormElement,
  SimpleFormElementWrapper,
  FormElementControl
} from '../../form-element/';

const textareaLabel = 'Textarea Label';
const textareaId = 'textarea-id-01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let Textarea = props => (
  <textarea
    {...props}
    id={props.id || textareaId}
    className={classNames('slds-textarea', props.className)}
    placeholder={props.placeholder}
  />
);

Textarea.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

Textarea.defaultProps = {
  placeholder: 'Placeholder text…'
};

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <FormElement labelContent={textareaLabel} inputId={textareaId}>
        <Textarea id={textareaId} />
      </FormElement>
    )
  }
];

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <FormElement labelContent={textareaLabel} inputId={textareaId}>
        <Textarea id={textareaId} disabled />
      </FormElement>
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement labelContent={textareaLabel} inputId={textareaId} isRequired>
        <Textarea id={textareaId} required />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        hasError
        labelContent={textareaLabel}
        inputId={textareaId}
        isRequired
        errorId="error-01"
        inlineMessage="Enter a value."
      >
        <Textarea id={textareaId} required aria-describedby="error-01" />
      </FormElement>
    )
  },
  {
    id: 'read-only',
    label: 'Read only',
    element: (
      <SimpleFormElementWrapper>
        <span className="slds-form-element__label">Textarea Label</span>
        <FormElementControl className="slds-border_bottom">
          <div className="slds-form-element__static">
            <p>
              Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
              nibh, ut fermentum massa justo sit amet risus. Maecenas sed diam
              eget risus varius blandit sit amet non magna. Morbi leo risus,
              porta ac consectetur ac, vestibulum at eros. Nullam quis risus
              eget urna mollis ornare vel eu leo. Vestibulum id ligula porta
              felis euismod semper. Donec ullamcorper nulla non metus auctor
              fringilla. Maecenas faucibus mollis interdum.
            </p>
          </div>
        </FormElementControl>
      </SimpleFormElementWrapper>
    )
  }
];
