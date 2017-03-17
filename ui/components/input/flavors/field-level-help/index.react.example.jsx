// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <div className="demo-only" style={{ paddingTop: '5rem' }}>
    <div className="slds-form-element">
      <label className="slds-form-element__label slds-align-middle" htmlFor="form-help">Text Label</label>
      <div className="slds-form-element__icon">
        <button aria-describedby="help" className="slds-button slds-button--icon">
          <SvgIcon
            className="slds-icon slds-icon--x-small slds-icon-text-default"
            sprite="utility"
            symbol="info"
          />
          <span className="slds-assistive-text">Help</span>
        </button>
      </div>
      <div className="slds-form-element__control">
        <input
          className="slds-input"
          id="form-help"
          placeholder="Field Level Help"
          type="text"
        />
      </div>
    </div>
    <div
      className="slds-popover slds-popover--tooltip slds-nubbin--bottom-left"
      id="help"
      role="tooltip"
      style={{position: 'absolute', top: '15px', left: '72px', marginLeft: '-1rem', width: '20rem'}}
    >
      <div className="slds-popover__body slds-text-longform">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci facere eligendi reiciendis obcaecati.</p>
      </div>
    </div>
  </div>
);
