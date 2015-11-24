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
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import MediaObject from 'ui/components/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

const image = (
  <SvgIcon className={pf('icon icon-standard-contact icon--small')} sprite="standard" symbol="contact" />
);

export default (
  <div className='demo-only'>
    <div className={pf('card')}>
      <div className={pf('card__header grid')}>
        <MediaObject figureLeft={image} flavor="center" className={pf('has-flexi-truncate')}>
          <h2 className={pf('text-heading--small truncate')}>Card Header (2)</h2>
        </MediaObject>
        <div className={pf('no-flex')}>
          <div className={pf('button-group')}>
            <Button flavor="neutral,small">Button</Button>
            <ButtonIcon
              flavor="icon-border-filled"
              className={pf('toggle-visibility')}
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </div>
        </div>
      </div>
      <div className={pf('card__body')}>
        <table className={pf('table table--bordered max-medium-table--stacked-horizontal no-row-hover')}>
          <thead>
            <tr>
              <th className={pf('text-heading--label size--1-of-4')} scope="col">Name</th>
              <th className={pf('text-heading--label size--1-of-4')} scope="col">Company</th>
              <th className={pf('text-heading--label size--1-of-4')} scope="col">Title</th>
              <th className={pf('text-heading--label size--1-of-4')} scope="col">Email</th>
              <th className={pf('row-action')} scope="col">
                <ButtonIcon
                  flavor="icon-border-filled,icon-x-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={pf('hint-parent')}>
              <td className={pf('size--1-of-4')} data-label="Name">Adam Choi</td>
              <td className={pf('size--1-of-4')} data-label="Company">Company One</td>
              <td className={pf('size--1-of-4')} data-label="Title">Director of Operations</td>
              <td className={pf('size--1-of-4')} data-label="Email">adam@company.com</td>
              <td>
                <ButtonIcon
                  flavor="icon-border-filled,icon-x-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={pf('card__footer')}>
        <a href="#">View All <span className={pf('assistive-text')}>entity type</span></a>
      </div>
    </div>
  </div>
);
