/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { Tile, TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';

export default (
  <div className="demo-only" style={{ width: '320px' }}>
    <ul className="slds-has-dividers--around-space">
      <li className="slds-item">
        <Tile title="Anypoint Connectors" className="slds-tile--board">
          <p className="slds-text-heading--medium">$500,000</p>
          <p className="slds-truncate"><a href="javascript:void(0);">Company One</a></p>
          <p className="slds-truncate">Closing 9/30/2015</p>
        </Tile>
      </li>
      <li className="slds-item">
        <Tile title="Cloudhub" className="slds-tile--board">
          <p className="slds-text-heading--medium">$185,000</p>
          <p className="slds-truncate"><a href="javascript:void(0);">Company Two</a></p>
          <p className="slds-truncate slds-has-alert">Closing 12/15/2015</p>
          <span className="slds-icon_container slds-tile--board__icon">
            <SvgIcon className="slds-icon slds-icon-text-warning slds-icon--x-small" sprite="utility" symbol="warning" />
            <span className="slds-assistive-text">Warning Icon</span>
          </span>
        </Tile>
      </li>
      <li className="slds-item">
        <Tile title="600 Widgets" className="slds-tile--board">
          <p className="slds-text-heading--medium">$35,000</p>
          <p className="slds-truncate"><a href="javascript:void(0);">Company Three</a></p>
          <p className="slds-truncate">Closing 10/12/2015</p>
        </Tile>
      </li>
    </ul>
  </div>
);
