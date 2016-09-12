/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import _ from 'lodash';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Table = props =>
  <table className={className('slds-table slds-table--bordered', props.className)} role="grid">
    {props.children}
  </table>;

let Th = (props) => {
  const rangeLabel = props.children + ' column width';
  let sortDirection;
  if (props['aria-sort']) {
    sortDirection = (props['aria-sort'] === 'ascending' ? 'Sorted ascending' : 'Sorted descending' );
  }
  const uniqueId = _.uniqueId('cell-resize-handle-');

  return(
    <th {...props} aria-label={props.children}>
      <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset">
        <span className="slds-assistive-text">Sort </span>
        <span className="slds-truncate" title={props.children}>{ props.children }</span>
        <div className="slds-icon_container">
          <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" sprite="utility" symbol="arrowdown" />
        </div>
        <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">{sortDirection}</span>
      </a>
      <div className="slds-resizable">
        <label htmlFor={uniqueId} className="slds-assistive-text">{rangeLabel}</label>
        <input className="slds-resizable__input slds-assistive-text" type="range" min="20" max="1000" id={uniqueId} />
        <span className="slds-resizable__handle">
          <span className="slds-resizable__divider"></span>
        </span>
      </div>
    </th>
  );
};

let Td = props =>
  <td role="gridcell" {...props}>
    { props.children }
  </td>;

let Checkbox = props =>
  <label className="slds-checkbox">
    <input type="checkbox" name="options" defaultChecked={props.checked} />
    <span className="slds-checkbox--faux"></span>
    <span className="slds-assistive-text">{props.label}</span>
  </label>;

let RowData = (props) => {
  let checkboxLabel = 'Select row ' + props.title;

  return(
    <tr className={className('slds-hint-parent', props.className)} aria-selected={props.checked}>
      <Td className="slds-cell-shrink" data-label={checkboxLabel}><Checkbox label={checkboxLabel} checked={props.checked} /></Td>
      <th scope="row" data-label="Opportunity Name"><div className="slds-truncate" title={props.title}>{props.title}</div></th>
      <Td data-label="Account Name"><div className="slds-truncate" title="Cloudhub">Cloudhub</div></Td>
      <Td data-label="Close Date"><div className="slds-truncate" title="4/14/2015">4/14/2015</div></Td>
      <Td data-label="Prospecting"><div className="slds-truncate" title="Prospecting">Prospecting</div></Td>
      <Td data-label="Confidence"><div className="slds-truncate" title="20%">20%</div></Td>
      <Td data-label="Amount"><div className="slds-truncate" title="$25k">$25k</div></Td>
      <Td data-label="Contact"><div className="slds-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div></Td>
      <Td className="slds-cell-shrink" data-label="Actions">
        <ButtonIcon
          className="slds-button--icon-border slds-button--icon-x-small"
          iconClassName="slds-button__icon--hint slds-button__icon--small"
          symbol="down"
          assistiveText="Show More" />
      </Td>
    </tr>
  );
};


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table-advanced',
    label: 'Default',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" /></th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Opportunity Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Account Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Close Date</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Stage</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Confidence</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Amount</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Contact</Th>
            <th className="slds-cell-shrink" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-row-selected',
    label: 'Row Selected',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" indeterminate="true" checked /></th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Opportunity Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Account Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Close Date</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Stage</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Confidence</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Amount</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Contact</Th>
            <th className="slds-cell-shrink" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" className="slds-is-selected" checked />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-all-rows-selected',
    label: 'All Rows Selected',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" checked /></th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Opportunity Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Account Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Close Date</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Stage</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Confidence</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Amount</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Contact</Th>
            <th className="slds-cell-shrink" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" className="slds-is-selected" checked />
          <RowData title="Cloudhub + Anypoint Connectors" className="slds-is-selected" checked />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-sorted-column-asc',
    label: 'Sorted Ascending',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" /></th>
            <Th className="slds-is-sortable slds-is-resizable slds-is-sorted slds-is-sorted--asc" scope="col" aria-sort="ascending">Opportunity Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Account Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Close Date</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Stage</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Confidence</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Amount</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Contact</Th>
            <th className="slds-cell-shrink" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Anypoint Connectors" />
          <RowData title="Cloudhub" />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-sorted-column-desc',
    label: 'Sorted Descending',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" /></th>
            <Th className="slds-is-sortable slds-is-resizable slds-is-sorted slds-is-sorted--desc" scope="col" aria-sort="descending">Opportunity Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Account Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Close Date</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Stage</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Confidence</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Amount</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Contact</Th>
            <th className="slds-cell-shrink" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Anypoint Connectors" />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-resized-column',
    label: 'Column resized',
    element:
      <Table className="slds-table--fixed-layout">
        <thead>
          <tr className="slds-text-title--caps">
            <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" /></th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col" style={{ width: '300px' }}>Opportunity Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Account Name</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Close Date</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Stage</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Confidence</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Amount</Th>
            <Th className="slds-is-sortable slds-is-resizable" scope="col">Contact</Th>
            <th className="slds-cell-shrink" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Anypoint Connectors" />
        </tbody>
      </Table>
  }
];
