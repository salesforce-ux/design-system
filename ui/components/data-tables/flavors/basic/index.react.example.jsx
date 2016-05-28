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
  <thead {...props}>
    {props.children}
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
  <th className={props.className} scope={props.scope} data-label={props.dataLabel} title={props.title}>
    {props.children}
  </th>;

let Td = props =>
  <td className={props.className} scope={props.scope} data-label={props.dataLabel} title={props.title}>
    {props.children}
  </td>;

let HeadRowData = props =>
  <Tr className={pf('text-heading--label')}>
    <Th scope="col" title="Opportunity Name"><div className={pf('truncate')}>Opportunity Name</div></Th>
    <Th scope="col" title="Account Name"><div className={pf('truncate')}>Account Name</div></Th>
    <Th scope="col" title="Close Date"><div className={pf('truncate')}>Close Date</div></Th>
    <Th scope="col" title="Stage"><div className={pf('truncate')}>Stage</div></Th>
    <Th scope="col" title="Confidence"><div className={pf('truncate')}>Confidence</div></Th>
    <Th scope="col" title="Amount"><div className={pf('truncate')}>Amount</div></Th>
    <Th scope="col" title="Contact"><div className={pf('truncate')}>Contact</div></Th>
  </Tr>;

let RowData = props =>
  <Tr className={props.className}>
    <Th scope="row" dataLabel="Opportunity Name" title={props.title}><div className={pf('truncate')}><a href="javascript:void(0);">{props.title}</a></div></Th>
    <Td dataLabel="Account Name" title="Cloudhub"><div className={pf('truncate')}>Cloudhub</div></Td>
    <Td dataLabel="Close Date" title="4/14/2015"><div className={pf('truncate')}>4/14/2015</div></Td>
    <Td dataLabel="Prospecting" title="Prospecting"><div className={pf('truncate')}>Prospecting</div></Td>
    <Td dataLabel="Confidence" title="20%">20%</Td>
    <Td dataLabel="Amount" title="$25k">$25k</Td>
    <Td dataLabel="Contact" title="jrogers@cloudhub.com"><div className={pf('truncate')}><a href="javascript:void(0);">jrogers@cloudhub.com</a></div></Td>
  </Tr>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table',
    label: 'Default',
    element:
      <Table>
        <Thead>
          <HeadRowData />
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </Tbody>
      </Table>
  },
  {
    id: 'data-table-no-hover',
    label: 'With no row hovers',
    element:
      <Table className={pf('no-row-hover')}>
        <Thead>
          <HeadRowData />
        </Thead>
        <Tbody>
          <RowData title="Cloudhub" />
          <RowData title="Cloudhub + Anypoint Connectors" />
        </Tbody>
      </Table>
  }
];
