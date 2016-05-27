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
import className from 'classnames';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Table = props =>
  <table className={className(pf('table table--bordered'), props.className)}>
    {props.children}
  </table>;

let Thead = props =>
  <thead {...props}>
    {props.children}
  </thead>;

let Tbody = props =>
  <tbody>
    {props.children}
  </tbody>;

let Tr = props =>
  <tr {...props}>
    {props.children}
  </tr>;

let Th = props =>
  <th className={className(pf(''), props.className)} scope={props.scope} data-label={props.dataLabel}>
    {props.children}
  </th>;

let Td = props =>
  <td className={className(pf(''), props.className)} scope={props.scope} data-label={props.dataLabel}>
    {props.children}
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let HeadRowData = props =>
  <Tr className={pf('text-heading--label')}>
    <Th className={pf('cell-shrink')}><Checkbox label="Select All" checked={props.checked} /></Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Opportunity Name
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Account Name
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Close Date
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Stage
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Confidence
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Amount
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('is-sortable')} scope="col">
      <div className={pf('truncate')}>
        Contact
        <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
      </div>
    </Th>
    <Th className={pf('cell-shrink')}></Th>
  </Tr>;

let RowData = props =>
  <Tr className={className(pf('hint-parent'), props.className)}>
    <Td className={pf('cell-shrink')} dataLabel="Select Row"><Checkbox label="Select Row" checked={props.checked} /></Td>
    <Th className={pf('truncate')} scope="row" dataLabel="Opportunity Name">{props.title}</Th>
    <Td className={pf('truncate')} dataLabel="Account Name">Cloudhub</Td>
    <Td dataLabel="Close Date">4/14/2015</Td>
    <Td className={pf('truncate')} dataLabel="Prospecting">Prospecting</Td>
    <Td dataLabel="Confidence">20%</Td>
    <Td dataLabel="Amount">$25k</Td>
    <Td className={pf('truncate')} dataLabel="Contact"><a href="javascript:void(0);">jrogers@cloudhub.com</a></Td>
    <Td className={pf('cell-shrink')} dataLabel="Actions">
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </Td>
  </Tr>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Overflow = props =>
  <Demo>
    <div className={pf('scrollable--x')}>
      <Table>
        <Thead>
          <HeadRowData />
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </Tbody>
      </Table>
    </div>
  </Demo>;

let Stacked = props =>
  <Demo>
    <Table className={pf('max-medium-table--stacked')}>
      <Thead>
        <HeadRowData />
      </Thead>
      <Tbody>
        <RowData title="Cloudhub" />
        <RowData title="Cloudhub + Anypoint Connectors" />
      </Tbody>
    </Table>
  </Demo>;

let Horizontal = props =>
  <Demo>
    <Table className={pf('max-medium-table--stacked-horizontal')}>
      <Thead>
        <HeadRowData />
      </Thead>
      <Tbody>
        <RowData title="Cloudhub" />
        <RowData title="Cloudhub + Anypoint Connectors" />
      </Tbody>
    </Table>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table-responsive-horizontal',
    label: 'Stacked with Horizontal Cells',
    element: <Horizontal />
  },
  {
    id: 'data-table-responsive-stacked',
    label: 'Stacked',
    element: <Stacked />
  }
  // , @TODO: Hidden until scrolling on S1 works
  // {
  //   id: 'data-table-responsive-overflow',
  //   label: 'Overflow',
  //   element: <Overflow />
  // }
];
