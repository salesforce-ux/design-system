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
import MediaObject from 'ui/utilities/media-objects/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { prefix as pf } from 'app_modules/ui/util/component';

const image = (
  <SvgIcon className={pf('icon icon-standard-contact icon--small')} sprite="standard" symbol="contact" />
);

export default (
  <div className="demo-only">
    <div className={pf('card')}>
      <div className={pf('card__header grid grid--content-center grid--align-spread')}>
        <MediaObject figureLeft={image} flavor="center" className={pf('has-flexi-truncate size--1-of-3')}>
          <h2 className={pf('truncate')}>Card Header (2)</h2>
        </MediaObject>
        <div className={pf('input-has-icon input-has-icon--left size--1-of-3')}>
          <SvgIcon className={pf('input__icon icon-text-default')} sprite="utility" symbol="search" />
          <label htmlFor="text-input-01" className={pf('assistive-text')}>Find in List</label>
          <input id="text-input-01" className={pf('input')} type="text" placeholder="Find in List" />
        </div>
        <div className={pf('no-flex align-middle size--1-of-3 text-align--right dropdown-trigger--click')}>
          <Button className={pf('button text-link--reset')}>2 Selected <SvgIcon className={pf('button__icon button__icon--right')} sprite="utility" symbol="down" /></Button>
        </div>
      </div>
      <div className={pf('card__body')}>
        <table className={pf('table table--bordered no-row-hover table--cell-buffer')}>
          <thead>
            <tr>
              <th className={pf('cell-shrink')} scope="col">
                <label className={pf('checkbox')} htmlFor="select-all">
                  <input type="checkbox" name="options" id="select-all" className={pf('checked--intermediate')} defaultChecked />
                  <span className={pf('checkbox--faux')}></span>
                  <span className={pf('assistive-text')}>Select All</span>
                </label>
              </th>
              <th className={pf('text-heading--label')} scope="col">Name</th>
              <th className={pf('text-heading--label')} scope="col">Company</th>
              <th className={pf('text-heading--label')} scope="col">Title</th>
              <th className={pf('text-heading--label')} scope="col">Email</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr className={pf('hint-parent')}>
              <td className={pf('cell-shrink')}>
                <label className={pf('checkbox')} htmlFor="select-row-01">
                  <input type="checkbox" name="options" id="select-row-01" />
                  <span className={pf('checkbox--faux')}></span>
                  <span className={pf('assistive-text')}>Select Row</span>
                </label>
              </td>
              <th scope="row" data-label="Name">Adam Choi</th>
              <td data-label="Company">Company One</td>
              <td data-label="Title">Director of Operations</td>
              <td data-label="Email">adam@company.com</td>
              <td className={pf('cell-shrink')}>
                <ButtonIcon
                  flavor="icon-border-filled,icon-x-small"
                  iconFlavor="hint,small"
                  sprite="utility"
                  symbol="down"
                  assistiveText="Show More" />
              </td>
            </tr>
            <tr className={pf('hint-parent')}>
              <td className={pf('cell-shrink')}>
                <label className={pf('checkbox')} htmlFor="select-row-02">
                  <input type="checkbox" name="options" id="select-row-02" defaultChecked />
                  <span className={pf('checkbox--faux')}></span>
                  <span className={pf('assistive-text')}>Select Row</span>
                </label>
              </td>
              <th scope="row" data-label="Name">Adam Choi</th>
              <td data-label="Company">Company One</td>
              <td data-label="Title">Director of Operations</td>
              <td data-label="Email">adam@company.com</td>
              <td className={pf('cell-shrink')}>
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
        <a href="javascript:void(0);">View All <span className={pf('assistive-text')}>entity type</span></a>
      </div>
    </div>
  </div>
);
