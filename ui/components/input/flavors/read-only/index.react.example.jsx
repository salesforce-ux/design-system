// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

// Might need to move this to its own component example
let FormElement = props =>
  <div className={classNames('slds-form-element', props.className)}>
    {props.children}
  </div>;

let FormElementControl = props =>
  <div className={classNames('slds-form-element__control', props.className)}>
    {props.children}
  </div>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'read-only',
    label: 'Default',
    element:
      <FormElement>
        <span className="slds-form-element__label">Input Label</span>
        <FormElementControl className="slds-has-divider--bottom">
          <span className="slds-form-element__static">Read Only</span>
        </FormElementControl>
      </FormElement>
  },
  {
    id: 'read-only-fixed-text',
    label: 'Read only With fixed text',
    element:
      <FormElement>
        <span className="slds-form-element__label">Input Label</span>
        <FormElementControl className="slds-has-divider--bottom">
          <span className="slds-form-element__addon">$</span>
          <span className="slds-form-element__static">Read Only</span>
          <span className="slds-form-element__addon">%</span>
        </FormElementControl>
      </FormElement>
  }
];
