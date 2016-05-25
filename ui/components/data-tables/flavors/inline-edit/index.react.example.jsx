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
  <thead>
    <Tr className={pf('text-heading--label')}>
      <th className={pf('cell-shrink')}><Checkbox label="Select All" /></th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Name">Name</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Company">Company</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Address">Address</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Email">Email</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Phone">Phone</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Status">Status</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" title="Rating">Rating</Th>
      <th className={pf('cell-shrink')} scope="col" title="Actions">Actions</th>
    </Tr>
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
    <a href="#void" className={pf('th__action text-link--reset')}>
      <span className={pf('assistive-text')}>Sort Column</span>
      <span title={props.title}>{ props.children }</span>
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
  <td className={pf('cell-edit')} className={pf(props.className)} data-label={props.dataLabel} title={props.title}>
    { props.children }
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let RowData = props =>
  <Tr>
    <Td className={pf('cell-shrink')} dataLabel="Select Row"><Checkbox label="Select Row" /></Td>
    <th className={pf('cell-edit')} scope="row" data-label="Name" title="Lei Chan"><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>Lei Chan</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></th>
    <Td className={pf('cell-edit')} dataLabel="Company" title={props.title}><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>{props.title}</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></Td>
    <Td className={pf('cell-edit')} dataLabel="Address" title="12 Embarcadero Plaza, San Francisco, CA 94105 United States"><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>12 Embarcadero Plaza, San Francisco, CA 94105</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></Td>
    <Td className={pf('cell-edit')} dataLabel="Email" title="jdoe@acme.com"><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>jdoe@acme.com</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></Td>
    <Td className={pf('cell-edit')} dataLabel="Phone" title="800-555-1212"><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>800-555-1212</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></Td>
    <Td className={pf('cell-edit')} dataLabel="Status" title="Contacted"><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>Contacted</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></Td>
    <Td className={pf('cell-edit')} dataLabel="Rating" title="Premium Yield"><span className={pf('grid grid--align-spread')}><span className={pf('truncate grow')}>Premium Yield</span><span className={pf('cell-edit__icon')}><ButtonIcon
              flavor="icon-bare"
              sprite="utility"
              symbol="edit"
              assistiveText="Edit" /></span></span></Td>
    <Td className={pf('cell-edit')} className={pf('cell-shrink')} dataLabel="Actions">
      <ButtonIcon
        flavor="icon-border-filled,icon-x-small"
        iconFlavor="hint,small"
        sprite="utility"
        symbol="down"
        assistiveText="Show More" />
    </Td>
  </Tr>;

let RowDataStatic = props =>
  <Tr>
    <Td className={pf('cell-edit')} className={pf('cell-shrink')} dataLabel="Select Row"><Checkbox label="Select Row" /></Td>
    <th scope="row" data-label="Name" title="John Doe">John Doe</th>
    <Td className={pf('cell-edit')} dataLabel="Company" title="Rohde Corp">Rohde Corp</Td>
    <Td className={pf('cell-edit')} dataLabel="Address" title="1 Ferry Building San Francisco, CA 94105 United States">1 Ferry Building San Francisco, CA 94105</Td>
    <Td className={pf('cell-edit')} dataLabel="Email" title="lchan@rohdecorp.com">lchan@rohdecorp.com</Td>
    <Td className={pf('cell-edit')} dataLabel="Phone" title="800-555-1212">800-555-1212</Td>
    <Td className={pf('cell-edit')} dataLabel="Status" title="New">New</Td>
    <Td className={pf('cell-edit')} dataLabel="Rating" title="Junk Yield">Junk Yield</Td>
    <Td className={pf('cell-edit')} className={pf('cell-shrink')} dataLabel="Actions">
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
    id: 'data-table-inline-edit',
    label: 'Default',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead />
        <Tbody>
          <RowData title="Acme Enterprises" />
          <RowDataStatic />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-advanced-resized-column',
    label: 'Column resized',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead />
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Anypoint Connectors" />
        </Tbody>
      </Table>
  }
];
