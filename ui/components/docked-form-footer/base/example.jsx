// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import { Popover } from '../../popovers/base/example';
import { FeedbackHeader } from '../../popovers/error/example';
import _ from '../../../shared/helpers';

const headingUniqueId = _.uniqueId('dialog-heading-id-');

export const Context = props => (
  <div style={{ height: '180px' }}>{props.children}</div>
);

export default (
  <div className="slds-docked-form-footer">
    <button type="button" className="slds-button slds-button_neutral">
      Cancel
    </button>
    <button type="button" className="slds-button slds-button_brand">
      Save
    </button>
  </div>
);

export let states = [
  {
    id: 'docked-form-footer-with-error',
    label: 'With error(s)',
    element: (
      <div className="slds-docked-form-footer">
        <ButtonIcon
          assistiveText="Resolve error"
          className="slds-button_icon slds-button_icon-error"
          iconClassName="slds-button__icon_large"
          symbol="error"
          title="Resolve error"
        />
        <button type="button" className="slds-button slds-button_neutral">
          Cancel
        </button>
        <button type="button" className="slds-button slds-button_brand">
          Save
        </button>
      </div>
    )
  },
  {
    id: 'docked-form-footer-with-popover',
    label: 'With error popover',
    element: (
      <div className="slds-docked-form-footer">
        <ButtonIcon
          assistiveText="Resolve error"
          className="slds-button_icon slds-button_icon-error"
          iconClassName="slds-button__icon_large"
          symbol="error"
          title="Resolve error"
        />
        <button type="button" className="slds-button slds-button_neutral">
          Cancel
        </button>
        <button type="button" className="slds-button slds-button_brand">
          Save
        </button>
        <Popover
          className="slds-popover_error slds-nubbin_bottom-left"
          headingId={headingUniqueId}
          header={
            <FeedbackHeader
              headingId={headingUniqueId}
              title="Resolve error"
              symbol="error"
            />
          }
          closeButton
          inverse
          style={{
            position: 'absolute',
            bottom: '56px',
            left: '50%',
            marginLeft: '62px',
            transform: 'translateX(-50%)'
          }}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.{' '}
            <a href="javascript:void(0);" title="Learn More">
              Learn More
            </a>
          </p>
        </Popover>
      </div>
    )
  }
];
