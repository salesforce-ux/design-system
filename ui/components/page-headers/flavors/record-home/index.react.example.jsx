/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';

import Anchor from 'ui/components/page-headers/index.react';
import Button from 'ui/components/buttons/index.react';
import Truncate from 'ui/components/lib/truncate/index.react';
import Heading from 'ui/components/heading/index.react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/components/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import StatefulClass from 'ui/components/lib/stateful.react';
import componentUtil from 'app_modules/ui/util/component';
const pf = componentUtil.prefix;

const image = (
  <SvgIcon className={pf('icon icon--large icon-standard-user')} sprite="standard" symbol="user" />
);

export default (
  <Anchor flavor="home">
    <div className={pf('grid')}>
      <div className={pf('col has-flexi-truncate')}>
        <MediaObject figureLeft={image}>
          <Heading flavor="label">Record Type</Heading>
          <div className={pf('grid')}>
            <Heading flavor="medium" className={pf('m-right--small truncate align-middle')} title="Record Title">Record Title</Heading>
            <div className={pf('col shrink-none')}>
              <StatefulClass>
                <Button flavor="neutral" className={pf('not-selected')} aria-live="assertive">
                  <span className={pf('text-not-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="add" />Follow</span>
                  <span className={pf('text-selected')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="check" />Following</span>
                  <span className={pf('text-selected-focus')}><SvgIcon className={pf('button__icon--stateful button__icon--left')} sprite="utility" symbol="close" />Unfollow</span>
                </Button>
              </StatefulClass>
            </div>
          </div>
        </MediaObject>
      </div>
      <div className={pf('col no-flex align-bottom')}>
        <div className={pf('button-group')} role="group">
          <Button flavor="neutral">
           Edit
          </Button>
          <Button flavor="neutral">
           Delete
          </Button>
          <Button flavor="neutral">
           Clone
          </Button>
          <div className={pf('button--last')}>
            <ButtonIcon
              flavor="icon-border-filled"
              sprite="utility"
              symbol="down"
              assistiveText="More" />
          </div>
        </div>
      </div>
    </div>
    <Anchor.DetailRow>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field 1">Field 1</p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <p className={pf('text-body--regular truncate')} title="Description that demonstrates truncation with a long text field">
            Description that demonstrates truncation with a long text field
          </p>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field2 (3)">Field 2 (3)
          <ButtonIcon
            flavor="icon-bare"
            iconFlavor="small"
            sprite="utility"
            symbol="down"
            assistiveText="More Actions" />
          </p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <p className={pf('text-body--regular')}>Multiple Values</p>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field 3">Field 3</p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <a href="javascript:void(0)">Hyperlink</a>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
      <Anchor.DetailItem>
        <Anchor.DetailLabel>
          <p className={pf('text-heading--label truncate')} title="Field 4">Field 4</p>
        </Anchor.DetailLabel>
        <Anchor.DetailBody>
          <p>
            <Truncate amount={50}>
              Description (2-line truncation—must use JS to truncate.)
            </Truncate>
          </p>
        </Anchor.DetailBody>
      </Anchor.DetailItem>
    </Anchor.DetailRow>
  </Anchor>
);

