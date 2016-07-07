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

let Table = props =>
  <table className={className(pf('table table--bordered table--cell-buffer'), props.className)}>
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
  <th className={pf(props.className)} scope={props.scope} style={props.style} aria-sort={props.ariaSort}>
    <a href="javascript:void(0);" className={pf('th__action text-link--reset')}>
      <span className={pf('assistive-text')}>Sort Column</span>
      <span className={pf('truncate')} title={props.title}>{ props.children }</span>
      <div className={pf('icon_container')} title="Sort Column">
        <SvgIcon className={pf('icon icon--x-small icon-text-default is-sortable__icon')} sprite="utility" symbol="arrowdown" />
      </div>
    </a>
    <div className={pf('resizable')}>
      <label className={pf('assistive-text')} htmlFor="cell-resize-handle-1">click and drag to resize</label>
      <input className={pf('resizable__input assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-1" />
      <span className={pf('resizable__handle')}>
        <span className={pf('resizable__divider')}></span>
      </span>
    </div>
  </th>;

let Td = props =>
  <td className={pf(props.className)} scope={props.scope} data-label={props.dataLabel} title={props.title}>
    { props.children }
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let RowData = props =>
  <Tr className={className(pf('hint-parent'), props.className)}>
    <Td className={pf('cell-shrink')} dataLabel="Select Row"><Checkbox label="Select Row" checked={props.checked} /></Td>
    <th className={pf('truncate')} scope="row" data-label="Opportunity Name" title={props.title}>{props.title}</th>
    <Td className={pf('truncate')} dataLabel="Account Name" title="Cloudhub">Cloudhub</Td>
    <Td dataLabel="Close Date" title="4/14/2015">4/14/2015</Td>
    <Td className={pf('truncate')} dataLabel="Prospecting" title="Prospecting">Prospecting</Td>
    <Td dataLabel="Confidence" title="20%">20%</Td>
    <Td dataLabel="Amount" title="$25k">$25k</Td>
    <Td className={pf('truncate')} dataLabel="Contact" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></Td>
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
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table-advanced',
    label: 'Default',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead>
          <Tr className={pf('text-heading--label')}>
            <th className={pf('cell-shrink')}><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Opportunity Name">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Account Name">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Close Date">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Stage">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Confidence">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Amount">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Contact">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </Tr>
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-row-selected',
    label: 'Row Selected',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead>
          <Tr className={pf('text-heading--label')}>
            <th className={pf('cell-shrink')}><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Opportunity Name">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Account Name">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Close Date">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Stage">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Confidence">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Amount">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Contact">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </Tr>
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" className={pf('is-selected')} checked />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-all-rows-selected',
    label: 'All Rows Selected',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead>
          <Tr className={pf('text-heading--label')}>
            <th className={pf('cell-shrink')}><Checkbox label="Select All" checked /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Opportunity Name">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Account Name">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Close Date">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Stage">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Confidence">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Amount">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Contact">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </Tr>
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" className={pf('is-selected')} checked />
          <RowData title="Cloudhub + Anypoint Connectors" className={pf('is-selected')} checked />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-sorted-column-asc',
    label: 'Sorted Ascending',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead>
          <Tr className={pf('text-heading--label')}>
            <th className={pf('cell-shrink')}><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable is-sorted is-sorted--asc')} scope="col" ariaSort="ascending" title="Opportunity Name">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Account Name">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Close Date">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Stage">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Confidence">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Amount">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Contact">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </Tr>
        </Thead>
        <Tbody>
          <RowData title="Anypoint Connectors" />
          <RowData title="Cloudhub" />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-sorted-column-desc',
    label: 'Sorted Descending',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead>
          <Tr className={pf('text-heading--label')}>
            <th className={pf('cell-shrink')}><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable is-sorted is-sorted--desc')} scope="col" ariaSort="descending" title="Opportunity Name">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Account Name">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Close Date">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Stage">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Confidence">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Amount">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Contact">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </Tr>
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Anypoint Connectors" />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-resized-column',
    label: 'Column resized',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead>
          <Tr className={pf('text-heading--label')}>
            <th className={pf('cell-shrink')}><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col" style={{ width: '300px' }} title="Opportunity Name">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Account Name">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Close Date">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Stage">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Confidence">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Amount">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col" title="Contact">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </Tr>
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Anypoint Connectors" />
        </Tbody>
      </Table>
  }
];
