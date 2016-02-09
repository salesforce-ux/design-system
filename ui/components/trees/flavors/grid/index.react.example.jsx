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
import SvgIcon from 'app_modules/ui/svg-icon';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import StatefulClass from 'ui/components/lib/stateful.react';
import { prefix as pf } from 'app_modules/ui/util/component';


export default (
<div className="demo-only">
  <table className={pf('table table--bordered table--tree')} role="treegrid" aria-labelledby="treeheading" aria-activedescendant="tree0-node1" aria-readonly="true">
    <thead>
      <tr className={pf('text-heading--label')}>
        <th className={pf('table--tree__toggle-cell')} scope="col"><ButtonIcon aria-controls="tree0-node1" flavor="icon-border-filled,icon-x-small" iconFlavor="small" sprite="utility" symbol="chevrondown" assistiveText="Toggle" /></th>
        <th className={pf('is-sortable')} scope="col">
          <span className={pf('truncate')}>Account Name</span>
          <ButtonIcon
            flavor="icon-bare"
            iconFlavor="small"
            sprite="utility"
            symbol="arrowdown"
            assistiveText="Sort" />
        </th>
        <th scope="col"><span className={pf('truncate')}>Employees</span></th>
        <th scope="col"><span className={pf('truncate')}>Phone Number</span></th>
        <th scope="col"><span className={pf('truncate')}>Account Owner</span></th>
        <th scope="col"><span className={pf('truncate')}>Billing City</span></th>
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
    <tr className={pf('hint-parent')} id="tree0-node0" role="row" aria-level="1" aria-expanded="true">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>United Partners</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>10,000</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>San Francisco, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node1" role="row" aria-level="2" aria-expanded="true">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node1" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>United Partners (Bay Area)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>3,000</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node1-0" role="row" aria-level="3">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><a href="#" className={pf('truncate')}>United Partners (Oakland)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>745</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2" role="row" aria-level="2" aria-expanded="true">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>United Partners (San Francisco)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>578</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>Jane Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>Los Angeles, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0" role="row" aria-level="3" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>United Partners (East)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>430</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>San Francisco, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0" role="row" aria-level="4" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>United Partners (VA)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>410</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0" role="row" aria-level="5" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Allied Technologies</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>390</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>Jane Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>Los Angeles, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0-0" role="row" aria-level="6" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Allied Technologies (UV)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>270</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>San Francisco, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0-0-0" role="row" aria-level="7" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0-0-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>AB Partners</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>260</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0-0-0-0" role="row" aria-level="8" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0-0-0-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Styles and Sounds Inc</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>187</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>Jane Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>Los Angeles, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0-0-0-0-0" role="row" aria-level="9" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0-0-0-0-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Advanced Interconnections</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>150</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>San Francisco, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0-0-0-0-0-0" role="row" aria-level="10" aria-expanded="true">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node2-0-0-0-0-0-0-0-0" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Net Inc</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>120</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node2-0-0-0-0-0-0-0-0-0" role="row" aria-level="11">
      <th data-label="account-name" colSpan="2" scope="row" className={pf('table--tree__item')}><a href="#" className={pf('truncate')}>Walt Disney Resorts International</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>100</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>Jane Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>Los Angeles, CA</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node3" role="row" aria-level="2" aria-expanded="true">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node3" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Vand Enterprises</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>6,000</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node3-0" role="row" aria-level="3">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><a href="#" className={pf('truncate')}>Vand Enterprises (UCA)</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>2,540</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node4" role="row" aria-level="2" aria-expanded="true">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><ButtonIcon aria-controls="tree0-node4" className={pf('m-right--x-small m-left--xx-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="#" className={pf('truncate')}>Tech Labs</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>1,856</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
      <td className={pf('row-action')}>
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
          symbol="down"
          assistiveText="Show More" />
      </td>
    </tr>
    <tr className={pf('hint-parent')} id="tree0-node4-0" role="row" aria-level="3">
      <th colSpan="2" data-label="account-name" scope="row" className={pf('table--tree__item')}><a href="#" className={pf('truncate')}>Opportunity Resources Inc</a></th>
      <td data-label="employees"><a href="#" className={pf('truncate')}>1,934</a></td>
      <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
      <td data-label="account-owner"><span className={pf('truncate')}>John Doe</span></td>
      <td data-label="billing-city"><span className={pf('truncate')}>Los Angeles, CA</span></td>
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
