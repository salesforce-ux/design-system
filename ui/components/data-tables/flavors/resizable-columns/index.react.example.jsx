/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import ButtonIcon from 'ui/components/buttons/flavors/icon/index.react';
import SvgIcon from 'app_modules/ui/svg-icon';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import StatefulClass from 'ui/components/lib/stateful.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className='demo-only'>
  <span className={pf('resizable__handle resizable__handle--indicator')} style={{transform: 'translate3d(318px,0,0)', height: '37px'}}>
    <span className={pf('resizable__divider')}></span>
  </span>
  <table className={pf('table table--bordered table--resizable')}>
    <thead>
      <tr className={pf('text-heading--label')} >
        <th className={pf('cell-shrink')} scope="col"><Checkbox assistiveText="select all" /></th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Opportunity Name</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-1">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-1" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Account Name</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-2">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-2" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Close Date</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-3">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-3" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Stage</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-4">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-4" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Confidence</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-5">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-5" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Amount</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-6">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-6" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
        <th className={pf('is-sortable')} scope="col">
          <div className={pf('grid cell-content')}>
            <a href="javascript:void(0)" className={pf('grow')}>
              <span className={pf('truncate')}>Contact</span>
              <ButtonIcon
                flavor="icon-bare"
                iconFlavor="small"
                sprite="utility"
                symbol="arrowdown"
                assistiveText="Sort" />
            </a>
            <div className={pf('shrink-none resizable resizable--vertical')}>
              <label className={pf('assistive-text')} htmlFor="cell-resize-handle-7">click and drag to resize</label>
              <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-7" />
              <span className={pf('resizable__handle')}>
                <span className={pf('resizable__divider')}></span>
              </span>
            </div>
          </div>
        </th>
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
        <td className={pf('row-select')}><Checkbox assistiveText="select row1" name="select-row1" /></td>
        <th data-label="opportunity-name" scope="row"><a href="#" className={pf('truncate')}>Acme 25</a></th>
        <td data-label="account"><a href="#" className={pf('truncate')}>Acme</a></td>
        <td data-label="activity"><span className={pf('truncate')}>4/14/2015</span></td>
        <td data-label="stage"><span className={pf('truncate')}>Prospecting</span></td>
        <td data-label="confidence"><span className={pf('truncate')}>20%</span></td>
        <td data-label="amount"><span className={pf('truncate')}>$25k</span></td>
        <td data-label="contact"><span className={pf('truncate')}>--</span></td>
        <td className={pf('row-action')}>
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
);
