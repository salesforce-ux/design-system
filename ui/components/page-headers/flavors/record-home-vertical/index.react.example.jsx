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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import { prefix as pf } from 'app_modules/ui/util/component';


const image = (
  <div className={pf('icon_container icon-standard-lead')}>
    <SvgIcon className={pf('icon')} sprite="standard" symbol="lead" />
    <span className={pf('assistive-text')}>Lead</span>
  </div>
);

export default (
  <div className="demo-only" style={{width: '300px'}}>
    <div className="slds-page-header--vertical" role="banner">
      <div className={pf('grid grid--vertical')}>
        <div>
          <MediaObject flavor="center" figureLeft={image} className={pf('no-space has-divider--bottom-space')}>
            <h1 className={pf('page-header__title align-middle')}>Record Title</h1>
          </MediaObject>
        </div>
        <div className={pf('has-divider--bottom-space')}>
          <StatefulClass>
            <Button flavor="neutral" className={pf('not-selected')} aria-live="assertive">
              <span className={pf('text-not-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="add" />Follow</span>
              <span className={pf('text-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="check" />Following</span>
              <span className={pf('text-selected-focus')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="close" />Unfollow</span>
            </Button>
          </StatefulClass>
          <div className={pf('button-group m-left--none m-top--x-small')} role="group">
            <Button flavor="neutral">
              Convert
            </Button>
            <Button flavor="neutral">
              Clone
            </Button>
            <Button flavor="neutral">
              Edit
            </Button>
            <div className={pf('dropdown-trigger dropdown-trigger--click button--last')}>
              <ButtonIcon
                flavor="icon-border-filled"
                sprite="utility"
                symbol="down"
                assistiveText="More actions"
                aria-haspopup="true" />
            </div>
          </div>
        </div>
      </div>
      <ul className={pf('list--vertical-space-medium m-left--xx-small')}>
        <li className={pf('item')}>
          <div className={pf('text-title m-bottom--xx-small')}>Field 1</div>
          <div className={pf('text-body--regular')} title="Description that demonstrates truncation with a long text field">
            Description that demonstrates a long text field and will eventually wrap.
          </div>
        </li>
        <li className={pf('item')}>
          <div className={pf('text-title m-bottom--xx-small')}>Field 2</div>
          <div className={pf('text-body--regular')} title="Hyperlink">
            <a href="javascript:void(0);">Hyperlink</a>
          </div>
        </li>
        <li className={pf('item')}>
          <div className={pf('text-title m-bottom--xx-small')}>Field 3</div>
          <div className={pf('truncate')} title="Description">
            Description
          </div>
        </li>
        <li className={pf('item')}>
          <div className={pf('text-title m-bottom--xx-small')}>
            <button className={pf('slds-button slds-text-link--reset')} aria-haspopup="true">
              Field 4 (3)
              <SvgIcon className={pf('button__icon button__icon--small')} sprite="utility" symbol="down" />
              <span className={pf('assistive-text')}>More Actions</span>
            </button>
          </div>
          <div className={pf('text-body--regular')}>
            <div>1 Market St</div>
            <div>San Francisco, CA 94105</div>
          </div>
        </li>
        <li className={pf('item')}>
          <div className={pf('text-title m-bottom--xx-small')}>Field 5</div>
          <div className={pf('text-body--regular')} title="Description">
            Description
          </div>
        </li>
        <li className={pf('item')}>
          <div className={pf('text-title m-bottom--xx-small')}>Field 6</div>
          <div className={pf('text-body--regular')} title="Description">
            Description
          </div>
        </li>
        <li className={pf('item')}>
          <div className={pf('text-title truncate m-bottom--xx-small')}>Field 7</div>
          <div className={pf('text-body--regular')} title="Description">
            Description
          </div>
        </li>
      </ul>
    </div>
  </div>
);
