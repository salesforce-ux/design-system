/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

export let Toast = props => {
  const {
    containerClassName,
    className,
    type,
    children,
    ...rest
  } = props;

  return (
    <div className={ classNames('slds-notify_container slds-is-relative', containerClassName) }>
      <div className={ classNames('slds-notify slds-notify--toast', className, type ? 'slds-theme--' + type : null) } role="alert">
        <span className="slds-assistive-text">{ type || 'info' }</span>
        { children }
        <ButtonIcon
          className="slds-notify__close slds-button--icon-inverse"
          iconClassName="slds-button__icon--large"
          symbol="close"
          assistiveText="Close"
          title="Close"
        />
      </div>
    </div>
  );
};

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'informational',
    label: 'Informational',
    element:
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="info">
          <SvgIcon
            className="slds-icon slds-icon--small slds-m-right--small slds-no-flex slds-align-top"
            sprite="utility"
            symbol="info"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading--small">26 potential duplicate leads were found. <a href="javascript:void(0);">Select Leads to Merge</a></h2>
          </div>
        </Toast>
      </div>
  },
  {
    id: 'success',
    label: 'Success',
    element:
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="success">
          <SvgIcon
            className="slds-icon slds-icon--small slds-m-right--small slds-no-flex slds-align-top"
            sprite="utility"
            symbol="success"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading--small ">Account <a href="javascript:void(0);">ACME - 100</a> widgets was created.</h2>
          </div>
        </Toast>
      </div>
  },
  {
    id: 'warning',
    label: 'Warning',
    element:
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="warning">
          <SvgIcon
            className="slds-icon slds-icon--small slds-m-right--small slds-no-flex slds-align-top"
            sprite="utility"
            symbol="warning"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading--small ">Can’t share file “report-q3.pdf” with the selected users.</h2>
          </div>
        </Toast>
      </div>
  },
  {
    id: 'error',
    label: 'Error',
    element:
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="error">
          <SvgIcon
            className="slds-icon slds-icon--small slds-m-right--small slds-no-flex slds-align-top"
            sprite="utility"
            symbol="warning"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading--small ">Can’t save lead “Sally Wong” because another lead has the same name.</h2>
          </div>
        </Toast>
      </div>
  },
  {
    id: 'error-with-details',
    label: 'Error With Details',
    element:
      <div className="demo-only" style={{ height: '4rem' }}>
        <Toast type="error">
          <SvgIcon
            className="slds-icon slds-icon--small slds-m-right--small slds-no-flex slds-align-top"
            sprite="utility"
            symbol="warning"
          />
          <div className="slds-notify__content">
            <h2 className="slds-text-heading--small">You've encountered some errors when trying to save edits to Samuel Smith.</h2>
            <p>Here's some detail of what happened, being very descriptive and transparent.</p>
          </div>
        </Toast>
      </div>
  }
];
