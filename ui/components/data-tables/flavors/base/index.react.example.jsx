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

let Demo = props =>
  <div className={pf('demo-only')} {...props}>
    {props.children}
  </div>;

let Table = props =>
  <div className={pf('scrollable--x')}>
    <table className={className(pf('table table--bordered'), props.className)}>
      {props.children}
    </table>
  </div>;

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
  <th {...props}>
    {props.children}
  </th>;

let Td = props =>
  <td {...props}>
    {props.children}
  </td>;

let Checkbox = props =>
  <label className={pf('checkbox')}>
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} />
    <span className={pf('checkbox--faux')}></span>
    <span className={pf('assistive-text')}>{props.label}</span>
  </label>;

let Resize = props =>
  <div className={pf('shrink-none resizable resizable--vertical')}>
    <label className={pf('assistive-text')} htmlFor="cell-resize-handle-1">click and drag to resize</label>
    <input className={pf('assistive-text')} type="range" min="20" max="1000" id="cell-resize-handle-1" />
    <span className={pf('resizable__handle')}>
      <span className={pf('resizable__divider')}></span>
    </span>
  </div>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Default = props =>
  <Demo>
    <Table>
      <Thead>
        <Tr className={pf('text-heading--label')}>
          <Th className={pf('cell-shrink')}><Checkbox label="Select All" /></Th>
          <Th className={pf('is-sortable')} scope="col">
            Opportunity Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Account Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Close Date
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Stage
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Confidence
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Amount
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Contact
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('cell-shrink')}></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Acme 25</Th>
          <Td>Acme</Td>
          <Td>4/14/2015</Td>
          <Td>Prospecting</Td>
          <Td>20%</Td>
          <Td>$25k</Td>
          <Td>--</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Cloudhub + Anypoint Connectors</Th>
          <Td>Cloudhub</Td>
          <Td>9/30/2015</Td>
          <Td>Closing</Td>
          <Td>90%%</Td>
          <Td>$40k</Td>
          <Td>jrogers@cloudhub.com</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Demo>;

let NoHover = props =>
  <Demo>
    <Table className={pf('no-row-hover')}>
      <Thead>
        <Tr className={pf('text-heading--label')}>
          <Th className={pf('cell-shrink')}><Checkbox label="Select All" /></Th>
          <Th className={pf('is-sortable')} scope="col">
            Opportunity Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Account Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Close Date
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Stage
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Confidence
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Amount
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Contact
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('cell-shrink')}></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Acme 25</Th>
          <Td>Acme</Td>
          <Td>4/14/2015</Td>
          <Td>Prospecting</Td>
          <Td>20%</Td>
          <Td>$25k</Td>
          <Td>--</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Cloudhub + Anypoint Connectors</Th>
          <Td>Cloudhub</Td>
          <Td>9/30/2015</Td>
          <Td>Closing</Td>
          <Td>90%%</Td>
          <Td>$40k</Td>
          <Td>jrogers@cloudhub.com</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Demo>;

let RowSelected = props =>
  <Demo>
    <Table>
      <Thead>
        <Tr className={pf('text-heading--label')}>
          <Th className={pf('cell-shrink')}><Checkbox label="Select All" /></Th>
          <Th className={pf('is-sortable')} scope="col">
            Opportunity Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Account Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Close Date
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Stage
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Confidence
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Amount
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Contact
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('cell-shrink')}></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className={pf('hint-parent is-selected')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" checked /></Td>
          <Th scope="row">Acme 25</Th>
          <Td>Acme</Td>
          <Td>4/14/2015</Td>
          <Td>Prospecting</Td>
          <Td>20%</Td>
          <Td>$25k</Td>
          <Td>--</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Cloudhub + Anypoint Connectors</Th>
          <Td>Cloudhub</Td>
          <Td>9/30/2015</Td>
          <Td>Closing</Td>
          <Td>90%%</Td>
          <Td>$40k</Td>
          <Td>jrogers@cloudhub.com</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Demo>;

let MassSelected = props =>
  <Demo>
    <Table>
      <Thead>
        <Tr className={pf('text-heading--label')}>
          <Th className={pf('cell-shrink')}><Checkbox label="Select All" checked /></Th>
          <Th className={pf('is-sortable')} scope="col">
            Opportunity Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Account Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Close Date
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Stage
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Confidence
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Amount
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('is-sortable')} scope="col">
            Contact
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
          </Th>
          <Th className={pf('cell-shrink')}></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className={pf('hint-parent is-selected')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" checked /></Td>
          <Th scope="row">Acme 25</Th>
          <Td>Acme</Td>
          <Td>4/14/2015</Td>
          <Td>Prospecting</Td>
          <Td>20%</Td>
          <Td>$25k</Td>
          <Td>--</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
        <Tr className={pf('hint-parent is-selected')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" checked /></Td>
          <Th scope="row">Cloudhub + Anypoint Connectors</Th>
          <Td>Cloudhub</Td>
          <Td>9/30/2015</Td>
          <Td>Closing</Td>
          <Td>90%%</Td>
          <Td>$40k</Td>
          <Td>jrogers@cloudhub.com</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Demo>;

let Resizeable = props =>
  <Demo>
    <Table className={pf('table--resizable')}>
      <Thead>
        <Tr className={pf('text-heading--label')}>
          <Th className={pf('cell-shrink')}><Checkbox label="Select All" /></Th>
          <Th className={pf('is-sortable is-resizable primary')} scope="col">
            Opportunity Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('is-sortable is-resizable')} scope="col">
            Account Name
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('is-sortable is-resizable')} scope="col">
            Close Date
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('is-sortable is-resizable')} scope="col">
            Stage
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('is-sortable is-resizable')} scope="col">
            Confidence
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('is-sortable is-resizable')} scope="col">
            Amount
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('is-sortable is-resizable')} scope="col">
            Contact
            <ButtonIcon flavor="icon-bare" iconFlavor="small" sprite="utility" symbol="arrowdown" assistiveText="Sort" />
            <Resize />
          </Th>
          <Th className={pf('cell-shrink')}></Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Acme 25</Th>
          <Td>Acme</Td>
          <Td>4/14/2015</Td>
          <Td>Prospecting</Td>
          <Td>20%</Td>
          <Td>$25k</Td>
          <Td>--</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
        <Tr className={pf('hint-parent')}>
          <Td className={pf('cell-shrink')}><Checkbox label="Select Row" /></Td>
          <Th scope="row">Cloudhub + Anypoint Connectors</Th>
          <Td>Cloudhub</Td>
          <Td>9/30/2015</Td>
          <Td>Closing</Td>
          <Td>90%%</Td>
          <Td>$40k</Td>
          <Td>jrogers@cloudhub.com</Td>
          <Td className={pf('cell-shrink')}>
            <ButtonIcon
              flavor="icon-border-filled,icon-x-small"
              iconFlavor="hint,small"
              sprite="utility"
              symbol="down"
              assistiveText="Show More" />
          </Td>
        </Tr>
      </Tbody>
    </Table>
  </Demo>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table',
    label: 'Default',
    element: <Default />
  },
  {
    id: 'data-table-no-hover',
    label: 'With no row hovers',
    element: <NoHover />
  },
  {
    id: 'data-table-row-selected',
    label: 'With row selected',
    element: <RowSelected />
  },
  {
    id: 'data-table-all-row-selected',
    label: 'With all rows selected',
    element: <MassSelected />
  },
  {
    id: 'data-table-resizable-columns',
    label: 'With resizeable columns',
    element: <Resizeable />
  }
];
