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
      <th className={pf('cell-shrink')} scope="col" title="Actions"><span className={pf('assistive-text')}>Actions</span></th>
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
  <td className={pf('cell-edit')} data-label={props.dataLabel} title={props.title}>
    { props.children }
  </td>;

let TdDemo = props =>
  <td className={className(pf('cell-edit'), props.className)} data-label={props.dataLabel} title={props.title}>
    { props.children }
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let ButtonEdit = props =>
  <button className={pf('button button--icon cell-edit__button m-left--x-small')} tabIndex={props.tabindex} disabled={props.disabled}>
    <span className={pf('assistive-text')}>{props.alt}</span>
    <SvgIcon className={className(pf('button__icon button__icon--hint'), props.iconClassName)} sprite="utility" symbol={props.symbol || 'edit'} />
  </button>;

let RowData = props =>
  <Tr>
    <Td dataLabel="Select Row"><Checkbox label="Select Row" /></Td>
    <th className={pf('cell-edit')} scope="row" data-label="Name" title="Lei Chan">
      <span className={pf('grid grid--align-spread')}>
        <a href="javascript:void()" className={pf('truncate grow')} tabindex="-1">Lei Chan</a>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Name: Lei Chan" />
      </span>
    </th>
    { props.children }
    <Td dataLabel="Address" title="12 Embarcadero Plaza, San Francisco, CA 94105 United States">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>12 Embarcadero Plaza, San Francisco, CA 94105</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Address: 12 Embarcadero Plaza, San Francisco, CA 94105 United States" />
      </span>
    </Td>
    <Td dataLabel="Email" title="jdoe@acme.com">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>jdoe@acme.com</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Email: jdoe@acme.com" />
      </span>
    </Td>
    <Td dataLabel="Phone" title="800-555-1212">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>800-555-1212</span>
        <ButtonEdit iconClassName="button__icon--lock button__icon--small" tabindex="-1" alt="Edit Phone: 800-555-1212" symbol="lock" disabled />
      </span>
    </Td>
    <Td dataLabel="Status" title="Contacted">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>Contacted</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Status: Contacted" />
      </span>
    </Td>
    <Td dataLabel="Rating" title="Premium Yield">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>Premium Yield</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Rating: Premium Yield" />
      </span>
    </Td>
    <Td className={pf('cell-shrink')} dataLabel="Actions">
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
    <Td className={pf('cell-shrink')} dataLabel="Select Row"><Checkbox label="Select Row" /></Td>
    <th className={pf('cell-edit')} scope="row" data-label="Name" title="John Doe">
      <span className={pf('grid grid--align-spread')}>
        <a href="javascript:void()" className={pf('truncate grow')} tabindex="-1">John Doe</a>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Name: John Doe" />
      </span>
    </th>
    <Td dataLabel="Company" title="Rohde Corp"><span className={pf('grid grid--align-spread')}>
      <span className={pf('truncate grow')}>Rohde Corp</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Company: Rohde Corp" />
      </span>
    </Td>
    <Td dataLabel="Address" title="1 Ferry Building San Francisco, CA 94105 United States">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>1 Ferry Building San Francisco, CA 94105</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Address: 1 Ferry Building San Francisco, CA 94105 United States" />
      </span>
    </Td>
    <Td dataLabel="Email" title="lchan@rohdecorp.com">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>lchan@rohdecorp.com</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Email: lchan@rohdecorp.com" />
      </span>
    </Td>
    <Td dataLabel="Phone" title="800-555-1212">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>800-555-1212</span>
        <ButtonEdit iconClassName="button__icon--lock button__icon--small" tabindex="-1" alt="Edit Phone: 800-555-1212" symbol="lock" disabled />
      </span>
    </Td>
    <Td dataLabel="Status" title="New">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>New</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Status: New" />
      </span>
    </Td>
    <Td dataLabel="Rating" title="Junk Yield">
      <span className={pf('grid grid--align-spread')}>
        <span className={pf('truncate grow')}>Junk Yield</span>
        <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Rating: Junk Yield" />
      </span>
    </Td>
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
    id: 'data-table-inline-edit',
    label: 'Default',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead />
        <Tbody>
          <RowData title="Acme Enterprises">
            <TdDemo dataLabel="Company" title="Acme Enterprises">
              <span className={pf('grid grid--align-spread')}>
                <span className={pf('truncate grow')}>Acme Enterprises</span>
                <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Company: Acme Enterprises" />
              </span>
            </TdDemo>
          </RowData>
          <RowDataStatic />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-inline-edit-selected',
    label: 'Cell focused',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead />
        <Tbody>
          <RowData title="Acme Enterprises">
            <TdDemo className={pf('is-selected')} dataLabel="Company" title="Acme Enterprises">
              <span className={pf('grid grid--align-spread')}>
                <span className={pf('truncate grow')}>Acme Enterprises</span>
                <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
              </span>
            </TdDemo>
          </RowData>
          <RowDataStatic />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-inline-edit-focus',
    label: 'Cell selected',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead />
        <Tbody>
          <RowData title="Acme Enterprises">
            <TdDemo className={pf('is-active')} dataLabel="Company" title="Acme Enterprises">
              <span className={pf('grid grid--align-spread')}>
                <span className={pf('truncate grow')}>Acme Enterprises</span>
                <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
              </span>
            </TdDemo>
          </RowData>
          <RowDataStatic />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-inline-edit-no-edit',
    label: 'Cell - Edit mode',
    element:
      <Table className={pf('table--fixed-layout')}>
        <Thead />
        <Tbody>
          <RowData title="Acme Enterprises">
            <TdDemo className={pf('is-active')} dataLabel="Company" title="Acme Enterprises">
              <span className={pf('grid grid--align-spread')}>
                <span className={pf('truncate grow')}>Acme Enterprises</span>
                <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
              </span>
            </TdDemo>
          </RowData>
          <RowDataStatic />
        </Tbody>
      </Table>
  }
];
