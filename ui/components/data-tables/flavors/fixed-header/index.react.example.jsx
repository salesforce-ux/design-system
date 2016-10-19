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
import { Table, RowData } from 'ui/components/data-tables/flavors/inline-edit/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import className from 'classnames';
import _ from 'lodash';

const columns = ['Name', 'Account Name', 'Close Date', 'Stage', 'Confidence', 'Amount', 'Contact'];

const rows = [{
  'recordName': 'Acme - 1,200 Widgets',
  'accountName': 'Acme',
  'closeDate': '4/10/15',
  'stage': 'Value Proposition',
  'confidence': '30%',
  'amount': '$25,000,000',
  'contact': 'jrogers@acme.com'
}, {
  'recordName': 'Acme - 200 Widgets',
  'accountName': 'Acme',
  'closeDate': '1/31/15',
  'stage': 'Prospecting',
  'confidence': '60%',
  'amount': '$5,000,000',
  'contact': 'bob@acme.com'
}, {
  'recordName': 'salesforce.com - 1,000 Widgets',
  'accountName': 'salesforce.com',
  'closeDate': '1/31/15 3:45PM',
  'stage': 'Id. Decision Makers',
  'confidence': '70%',
  'amount': '$25,000',
  'contact': 'nathan@salesforce.com'
}];

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

let Th = props => {

  const uniqueId = _.uniqueId('cell-resize-handle-');
  let sortDirection;
  if (props['aria-sort']) {
    sortDirection = (props['aria-sort'] === 'ascending' ? 'Sorted ascending' : 'Sorted descending' );
  }

  return (
    <th {...props} className={className('slds-is-sortable slds-is-resizable', props.className)} aria-label={props.columnName} style={{ width: '8.75rem' }}>
      <div className="slds-cell-fixed" style={{ width: '8.75rem' }}>
        <a href="javascript:void(0);" className="slds-th__action slds-text-link--reset slds-text-title--caps" tabIndex={ !props.focusable ? '-1' : '0' }>
          <span className="slds-assistive-text">Sort </span>
          <span className="slds-truncate" title={props.columnName || 'Column Name'}>{ props.columnName || 'Column Name' }</span>
          <div className="slds-icon_container">
            <SvgIcon className="slds-icon slds-icon--x-small slds-icon-text-default slds-is-sortable__icon" sprite="utility" symbol="arrowdown" />
          </div>
          <span className="slds-assistive-text" aria-live="assertive" aria-atomic="true">{sortDirection}</span>
        </a>
        <div className="slds-resizable">
          <label htmlFor={uniqueId} className="slds-assistive-text">{ props.columnName || 'Column Name' } column width</label>
          <input className="slds-resizable__input slds-assistive-text" type="range" min="20" max="1000" id={uniqueId} tabIndex={ !props.focusable ? '-1' : '0' } />
          <span className="slds-resizable__handle">
            <span className="slds-resizable__divider"></span>
          </span>
        </div>
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


//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <Container>
    <Table className="slds-no-cell-focus slds-table--header-fixed">
      <thead>
        <tr className="slds-line-height--reset">
          <th scope="col" style={{ width: '2.75rem' }}>
            <div style={{ width: '2.75rem' }} className="slds-cell-fixed">
              <span className="slds-assistive-text">Errors</span>
            </div>
          </th>
          <th scope="col" style={{ width: '2rem' }}>
            <div style={{ width: '2rem' }} className="slds-cell-fixed slds-p-around--x-small">
              <Checkbox label="Select All" />
            </div>
          </th>
          { _.times(columns.length, i =>
            <Th columnName={ columns[i] } key={ i } style={{ width: '8.75rem' }} />
          )}
          <th scope="col" style={{ width: '3.25rem' }}>
            <div style={{ width: '2.75rem' }} className="slds-cell-fixed">
              <span className="slds-assistive-text">Actions</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        { _.times(rows.length, i =>
          <RowData key={ i }
            recordName={ rows[i].recordName }
            accountName={ rows[i].accountName }
            closeDate={ rows[i].closeDate }
            stage={ rows[i].stage }
            confidence={ rows[i].confidence }
            amount={ rows[i].amount }
            contact={ rows[i].contact }
            buttonInvisible="slds-hidden"
          />
        )}
      </tbody>
    </Table>
  </Container>
);
