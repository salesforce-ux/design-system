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

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Expanded = props =>
<tr className={pf('hint-parent')} id="tree0-node1-0" role="row" aria-level="2">
  <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (Oakland)</a></th>
  <td data-label="employees">745</td>
  <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
  <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
  <td data-label="billing-city"><span className={pf('truncate')}>New York, NY</span></td>
  <td className={pf('row-action')}>
    <ButtonIcon
      flavor="icon-border-filled,icon-x-small"
      iconFlavor="hint,small"
      sprite="utility"
      symbol="down"
      assistiveText="Show More" />
  </td>
</tr>;

let Default = props =>
<tbody>
  <tr className={pf('hint-parent')} id="tree0-node0" role="row" aria-level="1">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Rewis Inc</a></th>
    <td data-label="employees">3,100</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>Jane Doe</a></td>
    <td data-label="billing-city"><span className={pf('truncate')}>Phoenix, AZ</span></td>
    <td className={pf('row-action')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1" role="row" aria-level="1" aria-owns={props.isExpanded ? 'tree0-node1-0' : null} aria-expanded={props.isExpanded ? true : false}>
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation</a></th>
    <td data-label="employees">10,000</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  {props.additionalItem}
  <tr className={pf('hint-parent')} id="tree0-node2" role="row" aria-level="1" aria-expanded="false">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node2" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Rohde Enterprises</a></th>
    <td data-label="employees">6,000</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node3" role="row" aria-level="1">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Cheese Corp</a></th>
    <td data-label="employees">1,234</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>Jane Doe</a></td>
    <td data-label="billing-city"><span className={pf('truncate')}>Paris, France</span></td>
    <td className={pf('row-action')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
</tbody>;


let DeepNesting = props =>
<tbody>
  <tr className={pf('hint-parent')} id="tree0-node0" role="row" aria-level="1">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Rewis Inc</a></th>
    <td data-label="employees">3,100</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>Jane Doe</a></td>
    <td data-label="billing-city"><span className={pf('truncate')}>Phoenix, AZ</span></td>
    <td className={pf('row-action')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1" role="row" aria-level="1" aria-owns="tree0-node1-0 tree0-node1-1" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation</a></th>
    <td data-label="employees">10,000</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-0" role="row" aria-level="2" aria-owns="tree0-node1-0-0 tree0-node1-0-1" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node1-0" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (Bay Area)</a></th>
    <td data-label="employees">3,000</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-0-0" role="row" aria-level="3">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (Oakland)</a></th>
    <td data-label="employees">745</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-0-1" role="row" aria-level="3">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (San Francisco)</a></th>
    <td data-label="employees">578</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>Jane Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-1" role="row" aria-level="2" aria-owns="tree0-node1-1-0 tree0-node1-1-1" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node1-1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (East)</a></th>
    <td data-label="employees">430</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-1-0" role="row" aria-level="3">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (NY)</a></th>
    <td data-label="employees">1,210</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>Jane Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-1-1" role="row" aria-level="3" aria-owns="tree0-node1-0-1-0" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node1-1-1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Acme Corporation (VA)</a></th>
    <td data-label="employees">410</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-0-1-0" role="row" aria-level="4" aria-owns="tree0-node1-0-1-0-0" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node1-0-1-0" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Allied Technologies</a></th>
    <td data-label="employees">390</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>Jane Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node1-0-1-0-0" role="row" aria-level="5">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Allied Technologies (UV)</a></th>
    <td data-label="employees">270</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node2" role="row" aria-level="1" aria-owns="tree0-node2-0" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node2" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Rohde Enterprises</a></th>
    <td data-label="employees">6,000</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node2-0" role="row" aria-level="2">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Rohde Enterprises (UCA)</a></th>
    <td data-label="employees">2,540</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node3" role="row" aria-level="1" aria-owns="tree0-node3-0" aria-expanded="true">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon aria-controls="tree0-node3" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" /><a href="javascript:void(0);" className={pf('truncate')}>Tech Labs</a></th>
    <td data-label="employees">1,856</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
  <tr className={pf('hint-parent')} id="tree0-node3-0" role="row" aria-level="2">
    <th data-label="account-name" scope="row" className={pf('tree__item')}><ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled /><a href="javascript:void(0);" className={pf('truncate')}>Opportunity Resources Inc</a></th>
    <td data-label="employees">1,934</td>
    <td data-label="phone-number"><span className={pf('truncate')}>837-555-1212</span></td>
    <td data-label="account-owner"><a className={pf('truncate')}>John Doe</a></td>
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
</tbody>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let TreeGrid = props =>
<table className={pf('table table--bordered tree table--tree')} role="treegrid" aria-owns="tree0-node0 tree0-node1 tree0-node2 tree0-node3" aria-readonly="true">
  <thead>
    <tr className={pf('text-heading--label')}>
      <th className={pf('cell-buffer--left cell-shrink')} scope="col"><ButtonIcon flavor="icon-border-filled,icon-x-small" iconFlavor="small" sprite="utility" symbol="chevrondown" assistiveText="Toggle" className={pf('m-right--xx-small table--tree__toggle')} />
        <span className={pf('truncate')}>Account Name</span>
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
  {props.children}
</table>;


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'default',
    label: 'Default',
    element: <TreeGrid><Default /></TreeGrid>
  },
  {
    id: 'expanded',
    label: 'Expanded',
    element: <TreeGrid><Default isExpanded="tree0-node1" additionalItem={<Expanded />} /></TreeGrid>
  },
  {
    id: 'deep-nesting',
    label: 'Deeply nested branches',
    element: <TreeGrid><DeepNesting /></TreeGrid>
  }
];
