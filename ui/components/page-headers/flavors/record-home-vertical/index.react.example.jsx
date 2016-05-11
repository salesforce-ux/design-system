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
  <SvgIcon className={pf('icon icon-standard-lead')} sprite="standard" symbol="lead" />
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
            <div className={pf('dropdown-trigger dropdown-trigger--click button--last')} aria-expanded="false">
              <ButtonIcon
                flavor="icon-border-filled"
                sprite="utility"
                symbol="down"
                assistiveText="More" />
            </div>
          </div>
        </div>
      </div>
      <ul className={pf('list--vertical-space-medium m-left--xx-small')}>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 1">Field 1</p>
          <p className={pf('truncate')} title="Description that demonstrates truncation with a long text field">
            Description that demonstrates truncation with a long text field.
          </p>
        </li>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 2">Field 2</p>
          <a href="#void">Hyperlink</a>
        </li>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 3">Field 3</p>
          <p className={pf('truncate')} title="Description">
            Description
          </p>
        </li>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 4 (3)">
            Field 4 (3)
            <ButtonIcon
              flavor="icon-bare"
              iconFlavor="small"
              sprite="utility"
              symbol="down"
              assistiveText="More Actions" />
          </p>
          <p className={pf('text-body--regular')}>Multiple Values</p>
        </li>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 5">Field 5</p>
          <p className={pf('truncate')} title="Description">
            Description
          </p>
        </li>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 6">Field 6</p>
          <p className={pf('truncate')} title="Description">
            Description
          </p>
        </li>
        <li className={pf('list__item')}>
          <p className={pf('text-heading--label-normal truncate m-bottom--xx-small')} title="Field 7">Field 7</p>
          <p className={pf('truncate')} title="Description">
            Description
          </p>
        </li>
      </ul>
    </div>
  </div>
);
