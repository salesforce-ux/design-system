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

let HeadRowData = props =>
  <tr className={pf('text-heading--label')}>
    <th scope="col"><div className={pf('truncate')} title="Opportunity Name">Opportunity Name</div></th>
    <th scope="col"><div className={pf('truncate')} title="Account Name">Account Name</div></th>
    <th scope="col"><div className={pf('truncate')} title="Close Date">Close Date</div></th>
    <th scope="col"><div className={pf('truncate')} title="Stage">Stage</div></th>
    <th scope="col"><div className={pf('truncate')} title="Confidence">Confidence</div></th>
    <th scope="col"><div className={pf('truncate')} title="Amount">Amount</div></th>
    <th scope="col"><div className={pf('truncate')} title="Contact">Contact</div></th>
  </tr>;

let RowData = props =>
  <tr className={props.className}>
    <th scope="row" data-label="Opportunity Name"><div className={pf('truncate')} title={props.title}><a href="javascript:void(0);">{props.title}</a></div></th>
    <td data-label="Account Name"><div className={pf('truncate')} title="Cloudhub">Cloudhub</div></td>
    <td data-label="Close Date"><div className={pf('truncate')} title="4/14/2015">4/14/2015</div></td>
    <td data-label="Prospecting"><div className={pf('truncate')} title="Prospecting">Prospecting</div></td>
    <td data-label="Confidence"><div className={pf('truncate')} title="20%">20%</div></td>
    <td data-label="Amount"><div className={pf('truncate')} title="$25k">$25k</div></td>
    <td data-label="Contact"><div className={pf('truncate')} title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div></td>
  </tr>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table',
    label: 'Default',
    element:
      <Table>
        <thead>
          <HeadRowData />
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-striped-rows',
    label: 'With striped rows',
    element:
      <Table className={pf('table--striped')}>
        <thead>
          <HeadRowData />
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
          <RowData title="Cloudhub" />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-no-hover',
    label: 'With no row hovers',
    element:
      <Table className={pf('no-row-hover')}>
        <thead>
          <HeadRowData />
        </thead>
        <tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </tbody>
      </Table>
  },
  {
    id: 'data-table-fixed-layout',
    label: 'With a fixed layout',
    element:
      <Table className={pf('table--fixed-layout')}>
        <thead>
          <HeadRowData />
        </thead>
        <tbody>
          <RowData title="Short name" />
          <RowData title="Long names get truncated" />
        </tbody>
      </Table>
  }
];
