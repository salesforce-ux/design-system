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
import componentUtil, { prefix as pf } from 'app_modules/ui/util/component';


export default (
<table className={pf('table table--bordered max-medium-table--stacked-horizontal')}>
  <thead>
    <tr className={pf('text-heading--label')} >
      <th className={pf('row-select')} scope="col"><Checkbox assistiveText="select all" /></th>
      <th className={pf('is-sortable')} scope="col">
        <span className={pf('truncate')}>Opportunity Name</span>
        <ButtonIcon
          flavor="icon-bare"
          iconFlavor="small"
          sprite="utility"
          symbol="arrowdown"
          assistiveText="Sort" />
      </th>
      <th scope="col"><span className={pf('truncate')}>Account Name</span></th>
      <th scope="col"><span className={pf('truncate')}>Close Date</span></th>
      <th scope="col"><span className={pf('truncate')}>Stage</span></th>
      <th scope="col"><span className={pf('truncate')}>Confidence</span></th>
      <th scope="col"><span className={pf('truncate')}>Amount</span></th>
      <th scope="col"><span className={pf('truncate')}>Contact</span></th>
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
      <th data-label="opportunity-name" role="row"><a href="#" className={pf('truncate')}>Acme 25</a></th>
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
    <tr className={pf('hint-parent')}>
        <td className={pf('row-select')}><Checkbox assistiveText="select row2" name="select-row2" /></td>
        <th data-label="opportunity-name" role="row"><a href="#" className={pf('truncate')}>Rohde Corp 30</a></th>
        <td data-label="account"><a href="#" className={pf('truncate')}>Rohde Corp</a></td>
        <td data-label="activity"><span className={pf('truncate')}>6/18/2015</span></td>
        <td data-label="stage"><span className={pf('truncate')}>Prospecting</span></td>
        <td data-label="confidence"><span className={pf('truncate')}>40%</span></td>
        <td data-label="amount"><span className={pf('truncate')}>$30k</span></td>
        <td data-label="contact"><a href="#" className={pf('truncate')}>achoi@rohdecorp.com</a></td>
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
);
