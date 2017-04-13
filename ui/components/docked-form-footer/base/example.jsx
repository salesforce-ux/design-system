// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from '../../button-icons/base/example';
import SvgIcon from '../../../shared/svg-icon';

export const Context = props =>
  <div style={{ height: '180px' }}>
    {props.children}
  </div>;

export default (
  <div className="slds-docked-form-footer">
    <button type="button" className="slds-button slds-button--neutral">Cancel</button>
    <button type="button" className="slds-button slds-button--brand">Save</button>
  </div>
);

export let states = [
  {
    id: 'docked-form-footer-with-error',
    label: 'With error(s)',
    element:
      <div className="slds-docked-form-footer">
        <ButtonIcon
          assistiveText="Review the Following Errors"
          className="slds-button--icon slds-button--icon-error"
          iconClassName="slds-button__icon--large"
          symbol="warning"
          title="Review the Following Errors"
        />
        <button type="button" className="slds-button slds-button--neutral">Cancel</button>
        <button type="button" className="slds-button slds-button--brand">Save</button>
      </div>
  },
  {
    id: 'docked-form-footer-with-popover',
    label: 'With error popover',
    element:
      <div className="slds-docked-form-footer">
        <ButtonIcon
          assistiveText="Review the Following Errors"
          className="slds-button--icon slds-button--icon-error"
          iconClassName="slds-button__icon--large"
          symbol="warning"
          title="Review the Following Errors"
        />
        <button type="button" className="slds-button slds-button--neutral">Cancel</button>
        <button type="button" className="slds-button slds-button--brand">Save</button>
        <section className="slds-popover slds-nubbin--bottom-left slds-theme--error" role="dialog" aria-label="Contextual title of this dialog" aria-describedby="dialog-description-01" style={{ position: 'absolute', bottom: '56px', left: '50%', marginLeft: '66px', transform: 'translateX(-50%)' }}>
          <ButtonIcon className="slds-button--icon-inverse slds-button--icon-small slds-float--right slds-popover__close" symbol="close" assistiveText="Close" title="Close" />
          <div className="slds-popover__body slds-text-longform" id="dialog-description-01">
            <p>Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi.</p>
          </div>
        </section>
      </div>
  }
];
