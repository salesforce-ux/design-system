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

const TESTING = false; //Set this to `true` to test all the possible states of the grid.

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Container = props =>
  <div className="slds-table--header-fixed_container" tabIndex={props.tabIndex} id={props.id}>
    <div className="slds-scrollable" style={{height: '100px', position: 'static'}}>
      <div className="table--header-fixed_container--inner slds-table--edit_container">
        {props.children}
      </div>
    </div>
  </div>;

let Table = props =>
  <table className={className('slds-table slds-table--edit slds-table--bordered slds-table--fixed-layout slds-table--header-fixed', props.className)} role="grid" style={{ width: '65.75rem' }}>
    {props.children}
  </table>;

let Thead = props =>
  <thead>
    <tr className="slds-text-title--caps">
      <th scope="col" style={{ width: '2.75rem' }} className={className(props.testClassName)}><div style={{ width: '2.75rem' }} className="slds-cell-fixed"><div className="slds-th__action"><span className="slds-assistive-text">Errors</span></div></div></th>
      <th scope="col" style={{ width: '2rem' }} className={className(props.testClassName)}><div className="slds-cell-fixed" style={{ width: '2rem' }}><div className="slds-th__action slds-p-around--x-small"><Checkbox label="Select All" /></div></div></th>
      <Th className={className('slds-is-sortable slds-is-resizable',props.thClassName)} scope="col" navigationModeTabIndex={props.navigationModeTabIndex} resizable>Name</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex} resizable>Company Name</Th>
      <Th className={className('slds-is-sortable slds-is-resizable slds-is-sorted slds-is-sorted--asc', props.testClassName)} scope="col" navigationModeTabIndex={props.navigationModeTabIndex} resizable>Address</Th>
      <Th className={className('slds-is-sortable',props.testClassName)} scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Email</Th>
      <Th className={className('slds-is-resizable',props.testClassName)} scope="col" navigationModeTabIndex={props.navigationModeTabIndex} resizable>Phone</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex} resizable>Status</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex} resizable>Confidence</Th>
      <th scope="col" style={{ width: '3.25rem' }} className={className(props.testClassName)}><div style={{ width: '3.25rem' }} className="slds-cell-fixed"><div className="slds-th__action"><span className="slds-assistive-text">Actions</span></div></div></th>
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
    <th {...props} aria-label={props.children} style={{ width: '8.25rem' }} scope="col">
      <div className="slds-cell-fixed" style={{ width: '8.25rem' }}>
        <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset" tabIndex={props.navigationModeTabIndex}>
          <span className="slds-assistive-text">Sort </span>
          <span className="slds-truncate" title={props.children}>{props.children}</span>
          <div className="slds-icon_container">
            <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" sprite="utility" symbol="arrowdown" />
          </div>
          <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">{sortDirection}</span>
        </a>
        {props.resizable ? (
          <div className="slds-resizable">
            <label htmlFor={uniqueId} className="slds-assistive-text">{rangeLabel}</label>
            <input className="slds-resizable__input slds-assistive-text" type="range" min="20" max="1000" id={uniqueId} tabIndex={props.navigationModeTabIndex} />
            <span className="slds-resizable__handle">
              <span className="slds-resizable__divider"></span>
            </span>
          </div>
        ) : ''}
      </div>
    </th>
  );
};

let Checkbox = props =>
  <label className="slds-checkbox">
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} tabIndex={props.tabIndex || '-1'} id={props.checkID} />
    <span className="slds-checkbox--faux"></span>
    <span className="slds-assistive-text">{props.label}</span>
  </label>;

let ButtonEdit = props =>
  <button className="slds-button slds-button--icon slds-cell-edit__button slds-m-left--x-small" tabIndex={props.tabIndex || '-1'} disabled={props.disabled} id={props.id}>
    <span className="slds-assistive-text">{props.alt}</span>
    <SvgIcon className={className('slds-button__icon slds-button__icon--hint', props.iconClassName)} sprite="utility" symbol={props.symbol || 'edit'} />
  </button>;

let ErrorPanel = props =>
  <div className="slds-popover slds-nubbin--bottom-left slds-theme--error" role="dialog" style={{ position: 'absolute', top: '-1rem', left: '0', width: 'auto' }}>
    <div className="slds-popover__body">Email encountered an error.</div>
  </div>;

let Td = props =>
  <td {...props} role="gridcell" className={className('slds-cell-edit', props.className)}>
    { props.children }
  </td>;

let RowData = (props) => {
  let checkboxLabel = 'Select row ' + props.title;

  return(
    <tr className="slds-hint-parent">
      <td id={props.cellID} tabIndex={props.errorindex} aria-selected={props.errorSelected}className={className('slds-cell-edit slds-cell-error', props.editName, props.testClassName)}>
        <button className={className('slds-button slds-button--icon slds-button--icon-error', props.buttonInvisible)} tabIndex={props.navigationModeTabIndex}>
          <span className="slds-assistive-text">Row has errors</span>
          <SvgIcon className="slds-button__icon" sprite="utility" symbol="warning" />
        </button>
        <span className="slds-row-number slds-text-body--small"></span>
      </td>
      <Td aria-selected={props.checkSelected} className={className(props.checkClass, props.testClassName)}>
        <Checkbox label={checkboxLabel} tabIndex={props.navigationModeTabIndex} checkID="checkbox-01" />
      </Td>
      <th tabIndex={props.initialCellTabIndex} aria-selected={props.defaultSelected} scope="row" className={className('slds-cell-edit', props.thClassName, props.testClassName)}>
        <span className="slds-grid slds-grid--align-spread">
          <a href="javascript:void()" className="slds-truncate" tabIndex={props.navigationModeTabIndex} id={props.linkId} title="Lei Chan">Lei Chan</a>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Name: Lei Chan" />
        </span>
      </th>
      { props.children }
      <Td className={className('slds-is-edited', props.testClassName)}>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate" title="12 Embarcadero Plaza, San Francisco, CA 94105 United States">12 Embarcadero Plaza, San Francisco, CA 94105</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Address: 12 Embarcadero Plaza, San Francisco, CA 94105 United States" />
        </span>
      </Td>
      <Td className={className('slds-is-edited slds-has-error', props.testClassName)}>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate" title="jdoe@acme.com">jdoe@acme.com</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Email: jdoe@acme.com" />
        </span>
      </Td>
      <Td aria-readonly="true" className={className(props.testClassName)}>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate" title="800-555-1212">800-555-1212</span>
          <ButtonEdit iconClassName="slds-button__icon--lock slds-button__icon--small" tabIndex={props.navigationModeTabIndex} alt="Edit Phone: 800-555-1212" symbol="lock" disabled />
        </span>
      </Td>
      <Td>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate" title="Contacted">Contacted</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Status: Contacted" />
        </span>
      </Td>
      <Td>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate slds-text-align--right" title="60%">60%</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Confidence: 60%" />
        </span>
      </Td>
      <Td className={className(props.testClassName)}>
        <div className="slds-p-right--large">
          <ButtonIcon
            className="slds-button--icon-border-filled slds-button--icon-x-small"
            iconClassName="slds-button__icon--hint slds-button__icon--small"
            symbol="down"
            assistiveText="Show More"
            tabIndex={props.navigationModeTabIndex} />
        </div>
      </Td>
    </tr>
  );
};


let RowDataStatic = props =>
  <tr className="slds-hint-parent">
    <td id={props.cellID} className={className('slds-cell-edit slds-cell-error', props.editName)}>
      <button className="slds-hidden slds-button slds-button--icon slds-button--icon-error" tabIndex={props.navigationModeTabIndex} aria-hidden="true">
        <span className="slds-assistive-text">Row has no errors</span>
        <SvgIcon className="slds-button__icon" sprite="utility" symbol="warning" />
      </button>
      <span className="slds-row-number slds-text-body--small"></span>
    </td>
    <Td>
      <Checkbox label="Select Row John Doe" tabIndex={props.navigationModeTabIndex} />
    </Td>
    <th scope="row"className="slds-cell-edit">
      <span className="slds-grid slds-grid--align-spread">
        <a href="javascript:void()" className="slds-truncate" tabIndex={props.navigationModeTabIndex} title="John Dodecahedron">John Dodecahedron</a>
        <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Name: John Dodecahedron" />
      </span>
    </th>
    <Td>
      <span className="slds-grid slds-grid--align-spread">
        <span className="slds-truncate" title="Rohde Corp">Rohde Corp</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Company: Rohde Corp" />
      </span>
    </Td>
    <Td>
      <span className="slds-grid slds-grid--align-spread">
        <span className="slds-truncate" title="1 Ferry Building San Francisco, CA 94105">1 Ferry Building San Francisco, CA 94105</span>
        <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Address: 1 Ferry Building San Francisco, CA 94105 United States" />
      </span>
    </Td>
    <Td>
      <span className="slds-grid slds-grid--align-spread">
        <span className="slds-truncate" title="lchan@rohdecorp.com">lchan@rohdecorp.com</span>
        <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Email: lchan@rohdecorp.com" />
      </span>
    </Td>
    <Td aria-readonly="true">
      <span className="slds-grid slds-grid--align-spread">
        <span className="slds-truncate" title="800-555-1212">800-555-1212</span>
        <ButtonEdit iconClassName="slds-button__icon--lock slds-button__icon--small" tabIndex={props.navigationModeTabIndex} alt="Edit Phone: 800-555-1212" symbol="lock" disabled />
      </span>
    </Td>
    <Td>
      <span className="slds-grid slds-grid--align-spread">
        <span className="slds-truncate" title="New">New</span>
        <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Status: New" />
      </span>
    </Td>
    <Td>
      <span className="slds-grid slds-grid--align-spread">
        <span className="slds-truncate slds-text-align--right" title="20%">20%</span>
        <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Confidence: 20%" />
      </span>
    </Td>
    <Td>
      <div className="slds-p-right--large">
        <ButtonIcon
          className="slds-button--icon-border-filled slds-button--icon-x-small"
          iconClassName="slds-button__icon--hint slds-button__icon--small"
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
        <Table className="slds-no-cell-focus">
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Lei Chan" initialCellTabIndex="0" navigationModeTabIndex="0" thClassName="slds-has-focus">
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
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
  },
  {
    id: 'data-table-fixed-header-cell-focus',
    label: 'Default focused',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Lei Chan" initialCellTabIndex="0" navigationModeTabIndex="0" thClassName="slds-has-focus">
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
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
  },
  {
    id: 'data-table-fixed-header-focus',
    label: 'Header focused',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0"  thClassName="slds-has-focus" testClassName={TESTING ? 'slds-has-focus' : ''} />
          <tbody>
            <RowData title="Lei Chan" initialCellTabIndex="0" navigationModeTabIndex="0" testClassName={TESTING ? 'slds-has-focus' : ''}>
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
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
        {TESTING ? <ErrorPanel /> : ''}
      </Container>
  },
  {
    id: 'data-table-fixed-header-mark',
    label: 'Header marked',
    element:
      <Container>
        <Table className="slds-no-cell-focus">
          <Thead navigationModeTabIndex="0" thClassName="slds-has-focus" testClassName={TESTING ? 'slds-has-focus' : ''} />
          <tbody>
            <RowData title="Lei Chan" initialCellTabIndex="0" navigationModeTabIndex="0" testClassName={TESTING ? 'slds-has-focus' : ''}>
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
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
