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
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import Checkbox from 'ui/components/forms/flavors/checkbox/index.react';
import StatefulClass from 'ui/components/lib/stateful.react';

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Expanded = props =>
<tr className="slds-hint-parent" id="tree0-node1-0" role="row" aria-level="2">
  <th data-label="Account Name" scope="row" className="slds-tree__item">
    <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
    <div className="slds-truncate" title="Acme Corporation (Oakland)"><a href="javascript:void(0);">Acme Corporation (Oakland)</a></div>
  </th>
  <td data-label="Employees"><div className="slds-truncate" title="745">745</div></td>
  <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
  <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
  <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
  <td className="slds-cell-shrink">
    <ButtonIcon
      className="slds-button--icon-border-filled slds-button--icon-x-small"
      iconClassName="slds-button__icon--hint slds-button__icon--small"
      symbol="down"
      assistiveText="Show More" />
  </td>
</tr>;

let Default = props =>
<tbody>
  <tr className="slds-hint-parent" id="tree0-node0" role="row" aria-level="1">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Rewis Inc"><a href="javascript:void(0);">Rewis Inc</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="3,100">3,100</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate">Phoenix, AZ</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1" role="row" aria-level="1" aria-owns={props.isExpanded ? 'tree0-node1-0' : null} aria-expanded={props.isExpanded ? true : false}>
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node1" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Acme Corporation"><a href="javascript:void(0);">Acme Corporation</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="10,000">10,000</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="San Francisco, CA">San Francisco, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  {props.additionalItem}
  <tr className="slds-hint-parent" id="tree0-node2" role="row" aria-level="1" aria-expanded="false">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node2" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Rohde Enterprises"><a href="javascript:void(0);">Rohde Enterprises</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="6,000">6,000</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node3" role="row" aria-level="1">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Cheese Corp"><a href="javascript:void(0);">Cheese Corp</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="1,234">1,234</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate">Paris, France</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
</tbody>;


let DeepNesting = props =>
<tbody>
  <tr className="slds-hint-parent" id="tree0-node0" role="row" aria-level="1">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Rewis Inc"><a href="javascript:void(0);">Rewis Inc</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="3,100">3,100</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate">Phoenix, AZ</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1" role="row" aria-level="1" aria-owns="tree0-node1-0 tree0-node1-1" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node1" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Acme Corporation"><a href="javascript:void(0);">Acme Corporation</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="10,000">10,000</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="San Francisco, CA">San Francisco, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-0" role="row" aria-level="2" aria-owns="tree0-node1-0-0 tree0-node1-0-1" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node1-0" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Acme Corporation (Bay Area)"><a href="javascript:void(0);">Acme Corporation (Bay Area)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="3,000">3,000</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-0-0" role="row" aria-level="3">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Acme Corporation (Oakland)"><a href="javascript:void(0);">Acme Corporation (Oakland)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="745">745</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-0-1" role="row" aria-level="3">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      {/*<ButtonIcon className="slds-m-right--x-small slds-is-disabled" flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="chevronright" assistiveText="Toggle" disabled />*/}
      <div className="slds-truncate" title="Acme Corporation (San Francisco)"><a href="javascript:void(0);">Acme Corporation (San Francisco)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="578">578</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="Los Angeles, CA">Los Angeles, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-1" role="row" aria-level="2" aria-owns="tree0-node1-1-0 tree0-node1-1-1" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node1-1" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Acme Corporation (East)"><a href="javascript:void(0);">Acme Corporation (East)</a></div>
  </th>
    <td data-label="Employees"><div className="slds-truncate" title="430">430</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="San Francisco, CA">San Francisco, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-1-0" role="row" aria-level="3">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Acme Corporation (NY)"><a href="javascript:void(0);">Acme Corporation (NY)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="1,210">1,210</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-1-1" role="row" aria-level="3" aria-owns="tree0-node1-0-1-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node1-1-1" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Acme Corporation (VA)"><a href="javascript:void(0);">Acme Corporation (VA)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="410">410</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-0-1-0" role="row" aria-level="4" aria-owns="tree0-node1-0-1-0-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node1-0-1-0" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Allied Technologies"><a href="javascript:void(0);">Allied Technologies</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="390">390</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="Jane Doe"><a href="javascript:void(0);">Jane Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="Los Angeles, CA">Los Angeles, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node1-0-1-0-0" role="row" aria-level="5">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Allied Technologies (UV)"><a href="javascript:void(0);">Allied Technologies (UV)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="270">270</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="San Francisco, CA">San Francisco, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node2" role="row" aria-level="1" aria-owns="tree0-node2-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node2" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <div className="slds-truncate" title="Rohde Enterprises"><a href="javascript:void(0);">Rohde Enterprises</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="6,000">6,000</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node2-0" role="row" aria-level="2">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Rohde Enterprises (UCA)"><a href="javascript:void(0);">Rohde Enterprises (UCA)</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="2,540">2,540</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node3" role="row" aria-level="1" aria-owns="tree0-node3-0" aria-expanded="true">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon aria-controls="tree0-node3" className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small" iconClassName="slds-button__icon--small" symbol="chevronright" assistiveText="Toggle" />
      <a href="javascript:void(0);">Tech Labs</a>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="1,856">1,856</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="New York, NY">New York, NY</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
  <tr className="slds-hint-parent" id="tree0-node3-0" role="row" aria-level="2">
    <th data-label="Account Name" scope="row" className="slds-tree__item">
      <ButtonIcon className="slds-button--icon slds-button--icon-x-small slds-m-right--x-small slds-is-disabled" iconClassName="slds-button__icon--small" symbol="chevrondown" assistiveText="Toggle" disabled />
      <div className="slds-truncate" title="Opportunity Resources Inc"><a href="javascript:void(0);">Opportunity Resources Inc</a></div>
    </th>
    <td data-label="Employees"><div className="slds-truncate" title="1,934">1,934</div></td>
    <td data-label="Phone Number"><div className="slds-truncate" title="837-555-1212">837-555-1212</div></td>
    <td data-label="Account Owner"><div className="slds-truncate" title="John Doe"><a href="javascript:void(0);">John Doe</a></div></td>
    <td data-label="Billing City"><div className="slds-truncate" title="Los Angeles, CA">Los Angeles, CA</div></td>
    <td className="slds-cell-shrink">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More" />
    </td>
  </tr>
</tbody>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let TreeGrid = props =>
<table className="slds-table slds-table--bordered slds-tree slds-table--tree" role="treegrid" aria-owns="tree0-node0 tree0-node1 tree0-node2 tree0-node3" aria-readonly="true">
  <thead>
    <tr className="slds-text-title--caps">
      <th className="slds-cell-buffer--left" scope="col">
        <div className="slds-grid slds-grid--vertical-align-center">
          <ButtonIcon className="slds-button--icon-border-filled slds-button--icon-x-small slds-m-right--x-small slds-shrink-none slds-table--tree__toggle" iconClassName="slds-button__icon--small" symbol="chevrondown" assistiveText="Toggle" />
          <div className="slds-truncate" title="Account Name">Account Name</div>
        </div>
      </th>
      <th scope="col"><div className="slds-truncate" title="Employees">Employees</div></th>
      <th scope="col"><div className="slds-truncate" title="Phone Number">Phone Number</div></th>
      <th scope="col"><div className="slds-truncate" title="Account Owner">Account Owner</div></th>
      <th scope="col"><div className="slds-truncate" title="Billing City">Billing City</div></th>
      <th className="slds-cell-shrink" scope="col">
        <ButtonIcon
          className="slds-button--icon-border-filled slds-button--icon-x-small"
          iconClassName="slds-button__icon--hint slds-button__icon--small"
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
