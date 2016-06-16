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

let Container = props =>
  <div className={pf('scrollable table--edit_container is-relative')} tabIndex={props.tabindex} id={props.id}>
    {props.children}
  </div>;

let Table = props =>
    <table className={pf('table table--edit table--bordered table--fixed-layout')}>
      {props.children}
    </table>;

let Thead = props =>
  <thead>
    <Tr className={pf('text-heading--label')}>
      { props.rowError ?
        <th className={pf('cell-shrink indicator-header')} scope="col" title="Errors"></th>
      : null }
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
  <td className={className(pf('cell-edit'), props.className)} title={props.title}>
    { props.children }
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} tabIndex={props.tabindex || '-1'} id={props.checkID} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let ButtonEdit = props =>
  <button className={pf('button button--icon cell-edit__button m-left--x-small')} tabIndex={props.tabindex} disabled={props.disabled} id={props.id}>
    <span className={pf('assistive-text')}>{props.alt}</span>
    <SvgIcon className={className(pf('button__icon button__icon--hint'), props.iconClassName)} sprite="utility" symbol={props.symbol || 'edit'} />
  </button>;

let EditPanel = props =>
  <div className={pf('popover popover--edit')} role="dialog" style={{ position: 'absolute', top: '2.1875rem', left: '10.875rem' }}>
    <span id="form-start" tabIndex="0"></span>
    <div className={pf('popover__body')}>
      { props.children }
    </div>
    <span id="form-end" tabIndex="0"></span>
  </div>;

let RowData = props =>
  <Tr  className={pf(props.className)}>
    { props.rowError ?
        <td id={props.cellID} className={pf('cell-shrink indicator-error')} dataLabel="Errors">
          <button className={pf('button button--icon button--icon-error')} tabIndex="0" id="error-01">
            <span className={pf('assistive-text')}>Row has errors</span>
            <SvgIcon className={pf('button__icon')} sprite="utility" symbol="warning" />
          </button>
        </td>
      : null }
    <Td dataLabel="Select Row" className={className(pf('cell-shrink'), props.checkClass)}><Checkbox label="Select Row" tabIndex={props.checkIndex} checkID="checkbox-01" /></Td>
    <th className={className(pf('cell-edit'), props.thClassName)} scope="row" data-label="Name" title="Lei Chan">
      <span className={pf('grid grid--align-spread')}>
        <a href="javascript:void()" className={pf('truncate grow')} tabIndex="-1" id={props.linkId}>Lei Chan</a>
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
  <Tr className={pf(props.className)}>
    { props.rowError ?
      <td id={props.cellID} className={pf('cell-shrink indicator-error-none')} dataLabel="Errors"><span className={pf('assistive-text')}>Row has no errors</span></td>
      : null }
    <Td className={pf('cell-shrink')} dataLabel="Select Row"><Checkbox label="Select Row" /></Td>
    <th className={pf('cell-edit')} scope="row" data-label="Name" title="John Doe">
      <span className={pf('grid grid--align-spread')}>
        <a href="javascript:void()" className={pf('truncate grow')} tabIndex="-1">John Doe</a>
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
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>
  },
  {
    id: 'data-table-inline-edit-checkbox',
    label: 'Cell focused - Checkbox',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises" checkIndex="0" checkClass={pf('has-focus')}>
              <Td dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit id="button-01" iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('checkbox-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-with-link',
    label: 'Cell focused - Link',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises" thClassName={pf('has-focus')} linkId="link-01">
              <Td dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="-1" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('link-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-focused',
    label: 'Cell focused',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('has-focus')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit id="button-01" iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('button-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-selected',
    label: 'Cell selected',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('is-selected')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>
  },
  {
    id: 'data-table-inline-edit-edited',
    label: 'Cell edited',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('was-edited')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>
  },
  {
    id: 'data-table-inline-edit-field-error',
    label: 'Error - Field level',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('has-error')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: {field error} Edited: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>
  },
  {
    id: 'data-table-inline-edit-field-error-focused',
    label: 'Error - Field level focused',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('has-error')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: {field error} Edited: Acme Enterprises" id="button-01" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('button-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-row-error',
    label: 'Error - Row level on save',
    element:
      <Container>
        <Table>
          <Thead rowError />
          <Tbody>
            <RowData rowError title="Acme Enterprises">
              <Td className={pf('has-error')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: {field error} Edited: Acme Enterprises" id="button-01" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic rowError />
          </Tbody>
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
          <Thead rowError />
          <Tbody>
            <RowData rowError cellID="error-01" title="Acme Enterprises">
              <Td className={pf('has-error has-focus')} dataLabel="Company" title="Acme Enterprises" tabIndex="0">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic rowError />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('error-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-row-no-error-focus',
    label: 'No Error indicator - Focused',
    element:
      <Container>
        <Table>
          <Thead rowError />
          <Tbody>
            <RowData rowError title="Acme Enterprises">
              <Td className={pf('has-error has-focus')} dataLabel="Company" title="Acme Enterprises" tabIndex="0">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic rowError cellID="no-error-01" />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('no-error-01').focus()
    `
  },
  {
    id: 'data-table-inline-edit-basic',
    label: 'Cell edit',
    element:
      <Container>
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('is-')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
        <EditPanel>
          <div className={pf('form-element grid')}>
            <label className={pf('form-element__label form-element__label--edit no-flex')} htmlFor="company-01">
              <span className={pf('assistive-text')}>Company</span>
            </label>
            <div className={pf('form-element__control grow')}>
              <input id="company-01" className={pf('input')} type="text" defaultValue="Acme Enterprises" />
            </div>
          </div>
        </EditPanel>
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
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('is-editing')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
        <EditPanel>
          <div className={pf('form-element grid')}>
            <label className={pf('form-element__label form-element__label--edit no-flex')} htmlFor="company-01">
              <abbr className={pf('slds-required')} title="required">*</abbr>
              <span className={pf('assistive-text')}>Company</span>
            </label>
            <div className={pf('form-element__control grow')}>
              <input id="company-01" className={pf('input input--required')} type="text" defaultValue="Acme Enterprises" />
            </div>
          </div>
        </EditPanel>
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
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('is-editing')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
          </Tbody>
        </Table>
        <EditPanel>
          <div className={pf('form-element has-error grid wrap')}>
            <label className={pf('form-element__label form-element__label--edit no-flex')} htmlFor="company-01">
              <abbr className={pf('slds-required')} title="required">*</abbr>
              <span className={pf('assistive-text')}>Company</span>
            </label>
            <div className={pf('form-element__control grow')}>
              <input id="company-01" className={pf('input input--required')} type="text" defaultValue="Acme Enterprises" required aria-describedby="error-message-01" />
            </div>
          <div id="error-message-01" className={pf('form-element__help')}>This field is required</div>
          </div>
        </EditPanel>
      </Container>,
    script: `
      document.getElementById('company-01').focus()
      document.getElementById('company-01').select()
    `
  },
  {
    id: 'data-table-inline-table-matte',
    label: 'Table deselected',
    element:
      <Container tabindex="1" id="table-edit-01">
        <Table>
          <Thead />
          <Tbody>
            <RowData title="Acme Enterprises">
              <Td className={pf('is-selected')} dataLabel="Company" title="Acme Enterprises">
                <span className={pf('grid grid--align-spread')}>
                  <span className={pf('truncate grow')}>Acme Enterprises</span>
                  <ButtonEdit iconClassName="button__icon--edit" tabindex="0" alt="Edit Company: Acme Enterprises" />
                </span>
              </Td>
            </RowData>
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
            <RowDataStatic />
          </Tbody>
        </Table>
      </Container>,
    script: `
      document.getElementById('table-edit-01').focus()
    `
  }
];
