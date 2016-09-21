/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';

import Button from 'ui/components/buttons/index.react';
import Truncate from 'ui/components/lib/truncate/index.react';
import Heading from 'ui/components/heading/index.react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';

const image = (
  <div className="slds-icon_container slds-icon-standard-lead">
    <SvgIcon className="slds-icon" sprite="standard" symbol="lead" />
    <span className="slds-assistive-text">Lead</span>
  </div>
);

export default (
  <div className="demo-only" style={{width: '300px'}}>
    <div className="slds-page-header--vertical" role="banner">
      <div className="slds-grid slds-grid--vertical">
        <div>
          <MediaObject flavor="center" figureLeft={image} className="slds-no-space slds-has-divider--bottom-space">
            <h1 className="slds-page-header__title slds-align-middle">Record Title</h1>
          </MediaObject>
        </div>
        <div className="slds-has-divider--bottom-space">
          <Button className="slds-button slds-button--neutral slds-not-selected" aria-live="assertive">
            <span className="slds-text-not-selected"><SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="add" />Follow</span>
            <span className="slds-text-selected"><SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="check" />Following</span>
            <span className="slds-text-selected-focus"><SvgIcon className="slds-button__icon--stateful slds-button__icon--left" sprite="utility" symbol="close" />Unfollow</span>
          </Button>
          <div className="slds-button-group slds-m-left--none slds-m-top--x-small" role="group">
            <Button className="slds-button slds-button--neutral">
              Convert
            </Button>
            <Button className="slds-button slds-button--neutral">
              Clone
            </Button>
            <Button className="slds-button slds-button--neutral">
              Edit
            </Button>
            <div className="slds-dropdown-trigger slds-dropdown-trigger--click slds-button--last">
              <ButtonIcon
                className="slds-button--icon-border-filled"
                symbol="down"
                aria-haspopup="true"
                assistiveText="More Actions" />
            </div>
          </div>
        </div>
      </div>
      <ul className="slds-list--vertical-space-medium slds-m-left--xx-small">
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom--xx-small">Field 1</div>
          <div className="slds-text-body--regular" title="Description that demonstrates truncation with a long text field">
            Description that demonstrates a long text field and will eventually wrap.
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom--xx-small">Field 2</div>
          <div className="slds-text-body--regular" title="Hyperlink">
            <a href="javascript:void(0);">Hyperlink</a>
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom--xx-small">Field 3</div>
          <div className="slds-truncate" title="Description">
            Description
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom--xx-small">
            <button className="slds-button slds-text-link--reset" aria-haspopup="true">
              Field 4 (3)
              <SvgIcon className="slds-button__icon slds-button__icon--small" sprite="utility" symbol="down" />
            </button>
          </div>
          <div className="slds-text-body--regular">
            <div>1 Market St</div>
            <div>San Francisco, CA 94105</div>
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom--xx-small">Field 5</div>
          <div className="slds-text-body--regular" title="Description">
            Description
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-m-bottom--xx-small">Field 6</div>
          <div className="slds-text-body--regular" title="Description">
            Description
          </div>
        </li>
        <li className="slds-item">
          <div className="slds-text-title slds-truncate slds-m-bottom--xx-small">Field 7</div>
          <div className="slds-text-body--regular" title="Description">
            Description
          </div>
        </li>
      </ul>
    </div>
  </div>
);
