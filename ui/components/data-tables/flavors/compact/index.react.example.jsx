/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import className from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let HeadRowData = props =>
  <tr className="slds-text-title--caps">
    <th scope="col"><div className="slds-truncate" title="Opportunity Name">Opportunity Name</div></th>
    <th scope="col"><div className="slds-truncate" title="Account Name">Account Name</div></th>
    <th scope="col"><div className="slds-truncate" title="Close Date">Close Date</div></th>
    <th scope="col"><div className="slds-truncate" title="Stage">Stage</div></th>
    <th scope="col"><div className="slds-truncate" title="Confidence">Confidence</div></th>
    <th scope="col"><div className="slds-truncate" title="Amount">Amount</div></th>
    <th scope="col"><div className="slds-truncate" title="Contact">Contact</div></th>
  </tr>;

let RowData = props =>
  <tr className={props.className}>
    <th scope="row" data-label="Opportunity Name"><div className="slds-truncate" title={props.title}><a href="javascript:void(0);">{props.title}</a></div></th>
    <td data-label="Account Name"><div className="slds-truncate" title="Cloudhub">Cloudhub</div></td>
    <td data-label="Close Date"><div className="slds-truncate" title="4/14/2015">4/14/2015</div></td>
    <td data-label="Prospecting"><div className="slds-truncate" title="Prospecting">Prospecting</div></td>
    <td data-label="Confidence"><div className="slds-truncate" title="20%">20%</div></td>
    <td data-label="Amount"><div className="slds-truncate" title="$25k">$25k</div></td>
    <td data-label="Contact"><div className="slds-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div></td>
  </tr>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export default (
  <table className="slds-table slds-table--bordered slds-table--cell-buffer slds-table--compact">
    <thead>
      <HeadRowData />
    </thead>
    <tbody>
      <RowData title="Cloudhub" />
      <RowData title="Cloudhub + Anypoint Connectors" />
    </tbody>
  </table>
);
