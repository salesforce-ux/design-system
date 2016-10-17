/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import BreadCrumbs from 'ui/components/breadcrumbs/index.react';
const {Crumb} = BreadCrumbs;
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import Heading from 'ui/components/heading/index.react';


export default (
  <div className="slds-page-header">
    <div className="slds-grid">
      <div className="slds-col slds-has-flexi-truncate">
        <BreadCrumbs className="slds-m-bottom--xx-small">
          <Crumb href="javascript:void(0);">Accounts</Crumb>
          <Crumb href="javascript:void(0);">Company One</Crumb>
        </BreadCrumbs>
        <h1 className="slds-page-header__title slds-truncate" title="Contacts (will truncate)">Contacts (will truncate)
        </h1>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-top">
        <div className="slds-button-group">
          <button className="slds-button slds-button--neutral">
            Add Contact
          </button>
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last" aria-expanded="false">
            <ButtonIcon
              className="slds-button--icon-border-filled"
              symbol="down"
              aria-haspopup="true"
              assistiveText="More Actions" />
          </div>
        </div>
      </div>
    </div>
    <div className="slds-grid">
      <div className="slds-col slds-align-bottom">
        <p className="slds-text-body--small">10 items &bull; sorted by name</p>
      </div>
      <div className="slds-col slds-no-flex slds-grid slds-align-bottom">
        <div className="slds-dropdown-trigger slds-dropdown-trigger--click" aria-expanded="false">
          <ButtonIcon
            className="slds-button--icon-more"
            symbol="table"
            hasDropdown
            assistiveText="Change view" />
        </div>
        <div className="slds-button-group slds-m-left--xx-small" role="group">
          <ButtonIcon
            className="slds-button--icon-border"
            symbol="chart"
            assistiveText="Chart" />
          <ButtonIcon
            className="slds-button--icon-border"
            symbol="filterList"
            assistiveText="Filter List" />
          <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last" aria-expanded="false">
            <ButtonIcon
              className="slds-button--icon-more"
              symbol="sort"
              hasDropdown
              assistiveText="Sort" />
          </div>
        </div>
      </div>
    </div>
  </div>
);
