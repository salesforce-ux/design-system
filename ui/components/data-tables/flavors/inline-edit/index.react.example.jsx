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

let Container = props =>
  <div className="slds-table--edit_container slds-is-relative" tabIndex={props.tabIndex} id={props.id}>
    {props.children}
  </div>;

let Table = props =>
  <table className={className('slds-table slds-table--edit slds-table--bordered slds-table--fixed-layout', props.className)} role="grid">
    {props.children}
  </table>;

let Thead = props =>
  <thead>
    <tr className="slds-text-title--caps">
      <th scope="col" style={{ width: '2.75rem' }}><span className="slds-assistive-text">Errors</span></th>
      <th role="gridcell" scope="col" style={{ width: '2.2rem' }}><Checkbox label="Select All" /></th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Name</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Company</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Address</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Email</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Phone</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Status</Th>
      <Th className="slds-is-sortable slds-is-resizable" scope="col" navigationModeTabIndex={props.navigationModeTabIndex}>Confidence</Th>
      <th scope="col" style={{ width: '3.25rem' }}>
        <span className="slds-truncate slds-assistive-text slds-p-right--large" title="Actions">Actions</span></th>
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
    <th {...props} aria-label={props.children}>
      <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset" tabIndex={props.navigationModeTabIndex}>
        <span className="slds-assistive-text">Sort </span>
        <span className="slds-truncate" title={props.children}>{props.children}</span>
        <div className="slds-icon_container">
          <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" sprite="utility" symbol="arrowdown" />
        </div>
        <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">{sortDirection}</span>
      </a>
      <div className="slds-resizable">
        <label htmlFor={uniqueId} className="slds-assistive-text">{rangeLabel}</label>
        <input className="slds-resizable__input slds-assistive-text" type="range" min="20" max="1000" id={uniqueId} tabIndex={props.navigationModeTabIndex} />
        <span className="slds-resizable__handle">
          <span className="slds-resizable__divider"></span>
        </span>
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

let EditPanel = props =>
  <div className="slds-popover slds-popover--edit" role="dialog" style={{ position: 'absolute', top: '0', left: '0.0625rem' }}>
    <span id="form-start" tabIndex="0"></span>
    <div className="slds-popover__body">
      { props.children }
    </div>
    <span id="form-end" tabIndex="0"></span>
  </div>;

let TableFocusInfo = props =>
  <div className="slds-box slds-table--edit_container-message">
    <p>To access the list, press Enter.</p>
    <p>To exit the list, press Esc.</p>
  </div>;

let ErrorPanel = props =>
  <div className="slds-popover slds-nubbin--bottom-left slds-theme--error" role="dialog" style={{ position: 'absolute', top: '-1rem', left: '0', width: 'auto' }}>
    <div className="slds-popover__body">Company encountered an error.</div>
</div>;

let Td = props =>
  <td {...props} role="gridcell" className={className('slds-cell-edit', props.className)}>
    { props.children }
  </td>;

let RowData = (props) => {
  let checkboxLabel = 'Select row ' + props.title;

  return(
    <tr className="slds-hint-parent">
      <td id={props.cellID} tabIndex={props.errorindex} aria-selected={props.errorSelected}className={className('slds-cell-edit slds-cell-error', props.editName)}>
        <button className={className('slds-button slds-button--icon slds-button--icon-error', props.buttonInvisible)} tabIndex={props.navigationModeTabIndex}>
          <span className="slds-assistive-text">Row has errors</span>
          <SvgIcon className="slds-button__icon" sprite="utility" symbol="warning" />
        </button>
        <span className="slds-row-number slds-text-body--small"></span>
      </td>
      <Td tabIndex={props.initialCellTabIndex} aria-selected={props.checkSelected} className={className('', props.checkClass)}>
        <Checkbox label={checkboxLabel} tabIndex={props.navigationModeTabIndex} checkID="checkbox-01" />
      </Td>
      <th aria-selected={props.defaultSelected} scope="row" className={className('slds-cell-edit', props.thClassName)}>
        <span className="slds-grid slds-grid--align-spread">
          <a href="javascript:void()" className="slds-truncate" tabIndex={props.navigationModeTabIndex} id={props.linkId} title="Lei Chan">Lei Chan</a>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Name: Lei Chan" />
        </span>
      </th>
      { props.children }
      <Td>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate" title="12 Embarcadero Plaza, San Francisco, CA 94105 United States">12 Embarcadero Plaza, San Francisco, CA 94105</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Address: 12 Embarcadero Plaza, San Francisco, CA 94105 United States" />
        </span>
      </Td>
      <Td>
        <span className="slds-grid slds-grid--align-spread">
          <span className="slds-truncate" title="jdoe@acme.com">jdoe@acme.com</span>
          <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex={props.navigationModeTabIndex} alt="Edit Email: jdoe@acme.com" />
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
    id: 'data-table-inline-edit',
    label: 'Default',
    element:
      <Container>
        <Table className="slds-no-cell-focus">
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Lei Chan" initialCellTabIndex="0" navigationModeTabIndex="0" buttonInvisible="slds-hidden" thClassName="slds-cell-marker">
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>
  },
  {
    id: 'data-table-inline-table-matte',
    label: 'Table container focused',
    element:
      <Container tabIndex="1" id="table-edit-01">
        <Table className="slds-no-cell-focus">
          <Thead navigationModeTabIndex="-1" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" navigationModeTabIndex="-1">
              <Td className="slds-has-focus">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="-1" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
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
        <TableFocusInfo />
      </Container>,
    script: `
      document.getElementById('table-edit-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-with-link',
    label: 'Cell focused - Link',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" thClassName="slds-has-focus" linkId="link-01" navigationModeTabIndex="0" defaultSelected="true">
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('link-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-checkbox',
    label: 'Cell focused - Checkbox',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" checkClass="slds-has-focus" checkSelected="true" navigationModeTabIndex="0" defaultSelected="true">
              <Td>
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit id="button-01" iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('checkbox-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-focused',
    label: 'Cell focused',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" navigationModeTabIndex="0">
              <Td aria-selected="true" className="slds-has-focus">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit id="button-01" iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('button-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-basic',
    label: 'Cell edit',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" navigationModeTabIndex="0">
              <Td aria-selected="true">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
                <EditPanel>
                  <div className="slds-form-element slds-grid">
                    <label className="slds-form-element__label slds-form-element__label--edit slds-no-flex" htmlFor="company-01">
                      <span className="slds-assistive-text">Company</span>
                    </label>
                    <div className="slds-form-element__control">
                      <input id="company-01" className="slds-input" type="text" defaultValue="Acme Enterprises" />
                    </div>
                  </div>
                </EditPanel>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'data-table-inline-edit-required',
    label: 'Cell edit — Required',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" navigationModeTabIndex="0">
              <Td aria-selected="true">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
                <EditPanel>
                  <div className="slds-form-element slds-grid">
                    <label className="slds-form-element__label slds-form-element__label--edit slds-no-flex" htmlFor="company-01">
                      <abbr className="slds-required" title="required">*</abbr>
                      <span className="slds-assistive-text">Company</span>
                    </label>
                    <div className="slds-form-element__control">
                      <input id="company-01" className="slds-input input--required" type="text" defaultValue="Acme Enterprises" required />
                    </div>
                  </div>
                </EditPanel>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'data-table-inline-edit-error',
    label: 'Cell edit — Error',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" navigationModeTabIndex="0">
              <Td aria-selected="true">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
                <EditPanel>
                  <div className="slds-form-element slds-has-error slds-grid slds-wrap">
                    <label className="slds-form-element__label slds-form-element__label--edit slds-no-flex" htmlFor="company-01">
                      <abbr className="slds-required" title="required">*</abbr>
                      <span className="slds-assistive-text">Company</span>
                    </label>
                    <div className="slds-form-element__control">
                      <input id="company-01" className="slds-input input--required" type="text" defaultValue="Acme Enterprises" required aria-describedby="error-message-01" />
                    </div>
                  <div id="error-message-01" className="slds-form-element__help">This field is required</div>
                  </div>
                </EditPanel>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'data-table-inline-edit-edited',
    label: 'Cell edited',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" buttonInvisible="slds-hidden" navigationModeTabIndex="0">
              <Td className="slds-is-edited">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>
  },
  {
    id: 'data-table-inline-edit-row-error',
    label: 'Error - Row level on save',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData title="Acme Enterprises" navigationModeTabIndex="0">
              <Td aria-selected="true" className="slds-has-error">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: {field error} Edited: Acme Enterprises" id="button-01" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('button-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-row-error-focus',
    label: 'Error indicator - Focused',
    element:
      <Container>
        <Table>
          <Thead navigationModeTabIndex="0" />
          <tbody>
            <RowData editName="slds-has-focus" errorindex="0" title="Acme Enterprises" navigationModeTabIndex="0">
              <Td className="slds-has-error">
                <span className="slds-grid slds-grid--align-spread">
                  <span className="slds-truncate" title="Acme Enterprises">Acme Enterprises</span>
                  <ButtonEdit iconClassName="slds-button__icon--edit" tabIndex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic navigationModeTabIndex="0" />
          </tbody>
        </Table>
        <ErrorPanel />
      </Container>
  }
];
