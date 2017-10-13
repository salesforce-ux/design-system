// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import ButtonIcon from '../../button-icons/';

export let Tooltip = props => (
  <div
    className={classNames('slds-popover slds-popover_tooltip', props.className)}
    role="tooltip"
    id={props.id}
    style={props.style}
  >
    <div className="slds-popover__body">{props.children}</div>
  </div>
);

export default (
  <div
    style={{ paddingLeft: '2rem', paddingTop: '5rem', position: 'relative' }}
  >
    <div className="slds-form-element">
      <div className="slds-form-element__icon slds-align-middle">
        <ButtonIcon
          className="slds-button slds-button_icon"
          symbol="info"
          aria-describedby="help"
          assistiveText="Help"
          title="Help"
        />
      </div>
    </div>
    <Tooltip
      className="slds-nubbin_bottom-left"
      id="help"
      style={{ position: 'absolute', top: '0px', left: '15px' }}
    >
      Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
      deserunt aute id consequat veniam incididunt duis in sint irure nisi.
    </Tooltip>
  </div>
);
