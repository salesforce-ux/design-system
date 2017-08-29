// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

const textareaId = 'textarea-id-01';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

export let FormElement = props => (
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>
);

export let FormElementLabel = props => (
  <label className="slds-form-element__label" htmlFor={textareaId}>
    {props.children}
  </label>
);

export let FormElementControl = props => (
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>
);

export let Textarea = props => (
  <textarea
    {...props}
    id={props.id || textareaId}
    className={classNames('slds-textarea', props.className)}
    placeholder={props.placeholder || 'Placeholder Text'}
  />
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default (
  <FormElement>
    <FormElementLabel>Textarea Label</FormElementLabel>
    <FormElementControl>
      <Textarea />
    </FormElementControl>
  </FormElement>
);

export let states = [
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <FormElement>
        <FormElementLabel>Textarea Label</FormElementLabel>
        <FormElementControl>
          <Textarea disabled />
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement>
        <FormElementLabel>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Textarea Label
        </FormElementLabel>
        <FormElementControl>
          <Textarea required />
        </FormElementControl>
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement className="slds-has-error">
        <FormElementLabel>
          <abbr className="slds-required" title="required">
            *
          </abbr>{' '}
          Textarea Label
        </FormElementLabel>
        <FormElementControl>
          <Textarea required aria-describedby="error-01" />
        </FormElementControl>
        <div className="slds-form-element__help" id="error-01">
          This field is required
        </div>
      </FormElement>
    )
  },
  {
    id: 'read-only',
    label: 'Read only',
    element: (
      <FormElement>
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
      </FormElement>
    )
  }
];
