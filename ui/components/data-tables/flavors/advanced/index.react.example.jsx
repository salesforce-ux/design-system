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
import _ from 'lodash';
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Table = props =>
  <table className={className(pf('table table--bordered'), props.className)} role="grid">
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
      <a href="javascript:void(0);" className={pf('th__action text-link--reset')}>
        <span className={pf('assistive-text')}>Sort </span>
        <span className={pf('truncate')} title={props.children}>{ props.children }</span>
        <div className={pf('icon_container')}>
          <SvgIcon className={pf('icon icon--x-small icon-text-default is-sortable__icon')} sprite="utility" symbol="arrowdown" />
        </div>
        <span className={pf('assistive-text')} aria-live="assertive" aria-atomic="true">{sortDirection}</span>
      </a>
      <div className={pf('resizable')}>
        <label htmlFor={uniqueId} className={pf('assistive-text')}>{rangeLabel}</label>
        <input className={pf('resizable__input assistive-text')} type="range" min="20" max="1000" id={uniqueId} />
        <span className={pf('resizable__handle')}>
          <span className={pf('resizable__divider')}></span>
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
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" defaultChecked={props.checked} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let RowData = (props) => {
  let checkboxLabel = 'Select row ' + props.title;

  return(
    <tr className={className(pf('hint-parent'), props.className)} aria-selected={props.checked}>
      <Td className={pf('cell-shrink')} data-label={checkboxLabel}><Checkbox label={checkboxLabel} checked={props.checked} /></Td>
      <th scope="row" data-label="Opportunity Name"><div className={pf('truncate')} title={props.title}>{props.title}</div></th>
      <Td data-label="Account Name"><div className={pf('truncate')} title="Cloudhub">Cloudhub</div></Td>
      <Td data-label="Close Date"><div className={pf('truncate')} title="4/14/2015">4/14/2015</div></Td>
      <Td data-label="Prospecting"><div className={pf('truncate')} title="Prospecting">Prospecting</div></Td>
      <Td data-label="Confidence"><div className={pf('truncate')} title="20%">20%</div></Td>
      <Td data-label="Amount"><div className={pf('truncate')} title="$25k">$25k</div></Td>
      <Td data-label="Contact"><div className={pf('truncate')} title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div></Td>
      <Td className={pf('cell-shrink')} data-label="Actions">
        <ButtonIcon
          flavor="icon-border-filled,icon-x-small"
          iconFlavor="hint,small"
          sprite="utility"
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
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <tr className={pf('text-title--caps')}>
            <th className={pf('cell-shrink')} scope="col"><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Contact</Th>
            <th className={pf('cell-shrink')}></th>
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
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <tr className={pf('text-title--caps')}>
            <th className={pf('cell-shrink')} scope="col"><Checkbox label="Select All" indeterminate="true" checked /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" className={pf('is-selected')} checked />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-all-rows-selected',
    label: 'All Rows Selected',
    element:
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <tr className={pf('text-title--caps')}>
            <th className={pf('cell-shrink')} scope="col"><Checkbox label="Select All" checked /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" className={pf('is-selected')} checked />
          <RowData title="Cloudhub + Anypoint Connectors" className={pf('is-selected')} checked />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-sorted-column-asc',
    label: 'Sorted Ascending',
    element:
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <tr className={pf('text-title--caps')}>
            <th className={pf('cell-shrink')} scope="col"><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable is-sorted is-sorted--asc')} scope="col" aria-sort="ascending">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Contact</Th>
            <th className={pf('cell-shrink')}></th>
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
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <tr className={pf('text-title--caps')}>
            <th className={pf('cell-shrink')} scope="col"><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable is-sorted is-sorted--desc')} scope="col" aria-sort="descending">Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Contact</Th>
            <th className={pf('cell-shrink')}></th>
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
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <tr className={pf('text-title--caps')}>
            <th className={pf('cell-shrink')} scope="col"><Checkbox label="Select All" /></th>
            <Th className={pf('is-sortable is-resizable')} scope="col" style={{ width: '300px' }}>Opportunity Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Account Name</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Close Date</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Stage</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Confidence</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Amount</Th>
            <Th className={pf('is-sortable is-resizable')} scope="col">Contact</Th>
            <th className={pf('cell-shrink')}></th>
          </tr>
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Anypoint Connectors" />
        </tbody>
      </Table>
  }
];
