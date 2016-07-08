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
  <th data-label="Account Name" scope="row" className={pf('tree__item')}>
    <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
    <div className={pf('truncate')} title="Acme Corporation (Oakland)"><a href="javascript:void(0);">Acme Corporation (Oakland)</a></div>
  </th>
  <td data-label="Employees"><div className={pf('truncate')} title="745">745</div></td>
  <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
  <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
  <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
  <td className={pf('cell-shrink')}>
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
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Rewis Inc"><a href="javascript:void(0);">Rewis Inc</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="3,100">3,100</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')}>Phoenix, AZ</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1" role="row" aria-level="1" aria-owns={props.isExpanded ? 'tree0-node1-0' : null} aria-expanded={props.isExpanded ? true : false}>
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Acme Corporation"><a href="javascript:void(0);">Acme Corporation</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="10,000">10,000</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="San Francisco, CA">San Francisco, CA</div></td>
    <td className={pf('cell-shrink')}>
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
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node2" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Rohde Enterprises"><a href="javascript:void(0);">Rohde Enterprises</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="6,000">6,000</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node3" role="row" aria-level="1">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Cheese Corp"><a href="javascript:void(0);">Cheese Corp</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="1,234">1,234</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')}>Paris, France</div></td>
    <td className={pf('cell-shrink')}>
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
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Rewis Inc"><a href="javascript:void(0);">Rewis Inc</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="3,100">3,100</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')}>Phoenix, AZ</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1" role="row" aria-level="1" aria-owns="tree0-node1-0 tree0-node1-1" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Acme Corporation"><a href="javascript:void(0);">Acme Corporation</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="10,000">10,000</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="San Francisco, CA">San Francisco, CA</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-0" role="row" aria-level="2" aria-owns="tree0-node1-0-0 tree0-node1-0-1" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node1-0" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Acme Corporation (Bay Area)"><a href="javascript:void(0);">Acme Corporation (Bay Area)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="3,000">3,000</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-0-0" role="row" aria-level="3">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Acme Corporation (Oakland)"><a href="javascript:void(0);">Acme Corporation (Oakland)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="745">745</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-0-1" role="row" aria-level="3">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Acme Corporation (San Francisco)"><a href="javascript:void(0);">Acme Corporation (San Francisco)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="578">578</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="Los Angeles, CA">Los Angeles, CA</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-1" role="row" aria-level="2" aria-owns="tree0-node1-1-0 tree0-node1-1-1" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node1-1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Acme Corporation (East)"><a href="javascript:void(0);">Acme Corporation (East)</a></div>
  </th>
    <td data-label="Employees"><div className={pf('truncate')} title="430">430</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="San Francisco, CA">San Francisco, CA</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-1-0" role="row" aria-level="3">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Acme Corporation (NY)"><a href="javascript:void(0);">Acme Corporation (NY)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="1,210">1,210</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-1-1" role="row" aria-level="3" aria-owns="tree0-node1-0-1-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node1-1-1" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Acme Corporation (VA)"><a href="javascript:void(0);">Acme Corporation (VA)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="410">410</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-0-1-0" role="row" aria-level="4" aria-owns="tree0-node1-0-1-0-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node1-0-1-0" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Allied Technologies"><a href="javascript:void(0);">Allied Technologies</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="390">390</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="Los Angeles, CA">Los Angeles, CA</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node1-0-1-0-0" role="row" aria-level="5">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Allied Technologies (UV)"><a href="javascript:void(0);">Allied Technologies (UV)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="270">270</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="San Francisco, CA">San Francisco, CA</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node2" role="row" aria-level="1" aria-owns="tree0-node2-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node2" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <div className={pf('truncate')} title="Rohde Enterprises"><a href="javascript:void(0);">Rohde Enterprises</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="6,000">6,000</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node2-0" role="row" aria-level="2">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Rohde Enterprises (UCA)"><a href="javascript:void(0);">Rohde Enterprises (UCA)</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="2,540">2,540</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node3" role="row" aria-level="1" aria-owns="tree0-node3-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon aria-controls="tree0-node3" className={pf('m-right--x-small')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" />
      <a href="javascript:void(0);">Tech Labs</a>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="1,856">1,856</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="New York, NY">New York, NY</div></td>
    <td className={pf('cell-shrink')}>
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className={pf('hint-parent')} id="tree0-node3-0" role="row" aria-level="2">
    <th data-label="Account Name" scope="row" className={pf('tree__item')}>
      <ButtonIcon className={pf('m-right--x-small is-disabled')} flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className={pf('truncate')} title="Opportunity Resources Inc"><a href="javascript:void(0);">Opportunity Resources Inc</a></div>
    </th>
    <td data-label="Employees"><div className={pf('truncate')} title="1,934">1,934</div></td>
    <td data-label="Phone Number"><div className={pf('truncate')} title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className={pf('truncate')} title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className={pf('truncate')} title="Los Angeles, CA">Los Angeles, CA</div></td>
    <td className={pf('cell-shrink')}>
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
    <tr className={pf('text-title--caps')}>
      <th className={pf('cell-buffer--left')} scope="col">
        <div className={pf('grid grid--vertical-align-center')}>
          <ButtonIcon flavor="icon-border-filled,icon-x-small" iconFlavor="small" sprite="utility" symbol="chevrondown" assistiveText="Toggle" className={pf('m-right--x-small shrink-none table--tree__toggle')} />
          <div className={pf('truncate')} title="Account Name">Account Name</div>
        </div>
      </th>
      <th scope="col"><div className={pf('truncate')} title="Employees">Employees</div></th>
      <th scope="col"><div className={pf('truncate')} title="Phone Number">Phone Number</div></th>
      <th scope="col"><div className={pf('truncate')} title="Account Owner">Account Owner</div></th>
      <th scope="col"><div className={pf('truncate')} title="Billing City">Billing City</div></th>
      <th className={pf('cell-shrink')}>
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
