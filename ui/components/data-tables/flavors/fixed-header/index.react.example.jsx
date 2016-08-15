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
import { prefix as pf } from 'app_modules/ui/util/component';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Container = props =>
  <div className={pf('table--header-fixed_container')} tabIndex={props.tabIndex} id={props.id}>
    <div className={pf('table--header-fixed_container--inner')}>
      {props.children}
    </div>
  </div>;

let Table = props =>
  <table className={className(pf('table table--edit table--bordered table--fixed-layout table--header-fixed'), props.className)} role="grid">
    {props.children}
  </table>;

let Thead = props =>
  <thead>
    <tr className={pf('text-title--caps')}>
      <th scope="col" style={{ width: '2.75rem' }}><div style={{ width: '2.75rem' }} className={pf('cell-fixed')}><span className={pf('slds-assistive-text')}>Errors</span></div></th>
      <th role="gridcell" style={{ width: '2.125rem' }}><div className={pf('cell-fixed')} style={{ width: '2.125rem' }}><div className={pf('p-around--x-small')}><Checkbox label="Select All" /></div></div></th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Name</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Company</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Address</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Email</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Phone</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Status</Th>
      <Th className={pf('is-sortable is-resizable')} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Confidence</Th>
      <th scope="col" style={{ width: '6.25rem' }}><div className={pf('cell-fixed')}><div className={pf('p-around--x-small')}><span className={pf('truncate p-right--large')} title="Actions">Actions</span></div></div></th>
    </tr>
  </thead>;

let Th = (props) => {
  const rangeLabel = props.children + ' column width';
  let sortDirection;
  if(props['aria-sort']) {
    sortDirection = (props['aria-sort'] === 'ascending' ? 'Sorted ascending' : 'Sorted descending' );
  }
  const uniqueId = _.uniqueId('cell-resize-handle-');

  return(
    <th {...props} aria-label={props.children} style={{ width: '8.25rem' }} scope="row">
      <div className={pf('cell-fixed')} style={{ width: '8.25rem' }}>
        <a href="javascript:void(0);" className={pf('th__action text-link--reset')} tabIndex={props.navigationModeTabIndex}>
          <span className={pf('assistive-text')}>Sort </span>
          <span className={pf('truncate')} title={props.children}>{props.children}</span>
          <div className={pf('icon_container')}>
            <SvgIcon className={pf('icon icon--x-small icon-text-default is-sortable__icon')} sprite="utility" symbol="arrowdown" />
          </div>
          <span className={pf('assistive-text')} aria-live="assertive" aria-atomic="true">{sortDirection}</span>
        </a>
        <div className={pf('resizable')}>
          <label htmlFor={uniqueId} className={pf('assistive-text')}>{rangeLabel}</label>
          <input className={pf('resizable__input assistive-text')} type="range" min="20" max="1000" id={uniqueId} tabIndex={props.navigationModeTabIndex} />
          <span className={pf('resizable__handle')}>
            <span className={pf('resizable__divider')}></span>
          </span>
        </div>
      </div>
    </th>
  );
};

let Td = props =>
  <td {...props} role="gridcell">
    { props.children }
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} tabIndex={props.tabIndex || '-1'} id={props.checkID} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let ButtonEdit = props =>
  <button className={pf('button button--icon cell-edit__button m-left--x-small')} tabIndex={props.tabIndex || '-1'} disabled={props.disabled} id={props.id}>
    <span className={pf('assistive-text')}>{props.alt}</span>
    <SvgIcon className={className(pf('button__icon button__icon--hint'), props.iconClassName)} sprite="utility" symbol={props.symbol || 'edit'} />
  </button>;

let RowData = (props) => {
  let checkboxLabel = 'Select row ' + props.title;

  return(
    <tr className={pf('hint-parent')}>
      <td tabIndex={props.errorindex} aria-selected={props.errorSelected}>
        <div id={props.cellID} className={className(pf('cell-edit cell-error'), props.editName)}>
          <button className={className(pf('button button--icon button--icon-error'), props.buttonInvisible)} tabIndex={props.navigationModeTabIndex}>
            <span className={pf('assistive-text')}>Row has errors</span>
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="warning" />
          </button>
          <span className={pf('row-number text-body--small')}></span>
        </div>
      </td>
      <Td tabIndex={props.initialCellTabIndex} aria-selected={props.checkSelected}>
        <div className={className(pf('cell-edit'), props.checkClass)}>
          <Checkbox label={checkboxLabel} tabIndex={props.navigationModeTabIndex} checkID="checkbox-01" />
        </div>
      </Td>
      <th aria-selected={props.defaultSelected}>
        <span className={className(pf('grid grid--align-spread cell-edit'), props.thClassName)}>
          <a href="javascript:void()" className={pf('truncate grow')} tabIndex={props.navigationModeTabIndex} id={props.linkId} title="Lei Chan">Lei Chan</a>
          <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Name: Lei Chan" />
        </span>
      </th>
      { props.children }
      <Td>
        <span className={pf('grid grid--align-spread cell-edit')}>
          <span className={pf('truncate grow')} title="12 Embarcadero Plaza, San Francisco, CA 94105 United States">12 Embarcadero Plaza, San Francisco, CA 94105</span>
          <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Address: 12 Embarcadero Plaza, San Francisco, CA 94105 United States" />
        </span>
      </Td>
      <Td>
        <span className={pf('grid grid--align-spread cell-edit')}>
          <span className={pf('truncate grow')} title="jdoe@acme.com">jdoe@acme.com</span>
          <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Email: jdoe@acme.com" />
        </span>
      </Td>
      <Td aria-readonly="true">
        <span className={pf('grid grid--align-spread cell-edit')}>
          <span className={pf('truncate grow')} title="800-555-1212">800-555-1212</span>
          <ButtonEdit iconClassName="button__icon--lock button__icon--small" tabIndex={props.navigationModeTabIndex} alt="Edit Phone: 800-555-1212" symbol="lock" disabled />
        </span>
      </Td>
      <Td>
        <span className={pf('grid grid--align-spread cell-edit')}>
          <span className={pf('truncate grow')} title="Contacted">Contacted</span>
          <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Status: Contacted" />
        </span>
      </Td>
      <Td>
        <span className={pf('grid grid--align-spread cell-edit')}>
          <span className={pf('truncate grow text-align--right')} title="60%">60%</span>
          <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Confidence: 60%" />
        </span>
      </Td>
      <Td>
        <div className={pf('cell-edit text-align--right p-right--large')}>
          <ButtonIcon
            className={pf('button--icon-border-filled button--icon-x-small')}
            iconClassName={pf('button__icon--hint button__icon--small')}
            symbol="down"
            assistiveText="Show More"
            tabIndex={props.navigationModeTabIndex} />
        </div>
      </Td>
    </tr>
  );
};

let RowDataStatic = props =>
  <tr className={pf('hint-parent')}>
    <td>
      <div id={props.cellID} className={className(pf('cell-edit cell-error'), props.editName)}>
        <button className={pf('hidden button button--icon button--icon-error')} tabIndex={props.navigationModeTabIndex} aria-hidden="true">
          <span className={pf('assistive-text')}>Row has no errors</span>
          <SvgIcon className={pf('button__icon')} sprite="utility" symbol="warning" />
        </button>
        <span className={pf('row-number text-body--small')}></span>
      </div>
    </td>
    <Td>
      <div className={pf('cell-edit')}>
        <Checkbox label="Select Row John Doe" tabIndex={props.navigationModeTabIndex} />
      </div>
    </Td>
    <th>
      <span className={pf('grid grid--align-spread cell-edit')}>
        <a href="javascript:void()" className={pf('truncate grow')} tabIndex={props.navigationModeTabIndex} title="John Doe">John Doe</a>
        <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Name: John Doe" />
      </span>
    </th>
    <Td>
      <span className={pf('grid grid--align-spread cell-edit')}>
        <span className={pf('truncate grow')} title="Rohde Corp">Rohde Corp</span>
            <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Company: Rohde Corp" />
      </span>
    </Td>
    <Td>
      <span className={pf('grid grid--align-spread cell-edit')}>
        <span className={pf('truncate grow')} title="1 Ferry Building San Francisco, CA 94105">1 Ferry Building San Francisco, CA 94105</span>
        <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Address: 1 Ferry Building San Francisco, CA 94105 United States" />
      </span>
    </Td>
    <Td>
      <span className={pf('grid grid--align-spread cell-edit')}>
        <span className={pf('truncate grow')} title="lchan@rohdecorp.com">lchan@rohdecorp.com</span>
        <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Email: lchan@rohdecorp.com" />
      </span>
    </Td>
    <Td aria-readonly="true">
      <span className={pf('grid grid--align-spread cell-edit')}>
        <span className={pf('truncate grow')} title="800-555-1212">800-555-1212</span>
        <ButtonEdit iconClassName="button__icon--lock button__icon--small" tabIndex={props.navigationModeTabIndex} alt="Edit Phone: 800-555-1212" symbol="lock" disabled />
      </span>
    </Td>
    <Td>
      <span className={pf('grid grid--align-spread cell-edit')}>
        <span className={pf('truncate grow')} title="New">New</span>
        <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Status: New" />
      </span>
    </Td>
    <Td>
      <span className={pf('grid grid--align-spread cell-edit')}>
        <span className={pf('truncate grow text-align--right')} title="20%">20%</span>
        <ButtonEdit iconClassName="button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Confidence: 20%" />
      </span>
    </Td>
    <Td>
      <div className={pf('cell-edit text-align--right p-right--large')}>
        <ButtonIcon
          className={pf('button--icon-border-filled button--icon-x-small')}
          iconClassName={pf('button__icon--hint button__icon--small')}
          symbol="down"
          assistiveText="Show More"
          tabIndex={props.navigationModeTabIndex} />
      </div>
    </Td>
  </tr>;


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table-fixed-header',
    label: 'Default',
    element:
      <Container>
        <Table className={pf('no-cell-focus')}>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Lei Chan" initialCellTabIndex="0" navigationModeTabIndex="0" buttonInvisible={pf('hidden')} thClassName={pf('has-focus')}>
              <Td>
                <span className={pf('grid grid--align-spread cell-edit')}>
                  <span className={pf('truncate grow')} title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
            <RowDataStatic navigationModeTabIndex="-1" />
          </tbody>
        </Table>
      </Container>
  }
];
