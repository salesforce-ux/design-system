// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ButtonIcon } from 'ui/components/button-icons/flavors/base/index.react.example';
import SvgIcon from 'app_modules/ui/svg-icon';
import classNames from 'classnames';

///////////////////////////////////////////
// Partial(s)
///////////////////////////////////////////

let Table = props =>
  <table className={classNames('slds-table slds-table--bordered', props.className)}>
    {props.children}
  </table>;

let Checkbox = props =>
  <label className="slds-checkbox">
    <input type="checkbox" name="options" disabled={props.disabled} defaultChecked={props.checked} />
    <span className="slds-checkbox--faux"></span>
    <span className="slds-assistive-text">{props.label}</span>
  </label>;

let HeadRowData = props =>
  <tr className="slds-text-title--caps">
    <th className="slds-cell-shrink" scope="col"><Checkbox label="Select All" checked={props.checked} /></th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Close Date">
        Opportunity Name
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Account Name">
        Account Name
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Close Date">
        Close Date
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Stage">
        Stage
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Confidence">
        Confidence
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Amount">
        Amount
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-is-sortable" scope="col">
      <div className="slds-truncate" title="Contact">
        Contact
        <ButtonIcon className="slds-button--icon" iconClassName="slds-button__icon--small" symbol="arrowdown" assistiveText="Sort" title="Sort" />
      </div>
    </th>
    <th className="slds-cell-shrink" scope="col"></th>
  </tr>;

let RowData = props =>
  <tr className="slds-hint-parent">
    <td className="slds-cell-shrink" data-label="Select Row"><Checkbox label="Select Row" checked={props.checked} /></td>
    <th scope="row" data-label="Opportunity Name"><div className="slds-truncate" title={props.title}>{props.title}</div></th>
    <td data-label="Account Name"><div className="slds-truncate" title="Cloudhub">Cloudhub</div></td>
    <td data-label="Close Date"><div className="slds-truncate" title="4/14/2015">4/14/2015</div></td>
    <td data-label="Prospecting"><div className="slds-truncate" title="Prospecting">Prospecting</div></td>
    <td data-label="Confidence"><div className="slds-truncate" title="20%">20%</div></td>
    <td data-label="Amount"><div className="slds-truncate" title="$25k">$25k</div></td>
    <td data-label="Contact"><div className="slds-truncate" title="jrogers@cloudhub.com"><a href="javascript:void(0);">jrogers@cloudhub.com</a></div></td>
    <td className="slds-cell-shrink" data-label="Actions">
      <ButtonIcon
        className="slds-button--icon-border-filled slds-button--icon-x-small"
        iconClassName="slds-button__icon--hint slds-button__icon--small"
        symbol="down"
        assistiveText="Show More"
        title="Show More" />
    </td>
  </tr>;

//////////////////////////////////////////////
// State Constructor(s)
//////////////////////////////////////////////

let Overflow = props =>
  <div className="slds-scrollable--x">
    <Table>
      <thead>
        <HeadRowData />
      </thead>
      <tbody>
        <RowData title="Cloudhub" />
        <RowData title="Cloudhub + Anypoint Connectors" />
      </tbody>
    </Table>
  </div>;

let Stacked = props =>
  <Table className="slds-max-medium-table--stacked">
    <thead>
      <HeadRowData />
    </thead>
    <tbody>
      <RowData title="Cloudhub" />
      <RowData title="Cloudhub + Anypoint Connectors" />
    </tbody>
  </Table>;

let Horizontal = props =>
  <Table className="slds-max-medium-table--stacked-horizontal">
    <thead>
      <HeadRowData />
    </thead>
    <tbody>
      <RowData title="Cloudhub" />
      <RowData title="Cloudhub + Anypoint Connectors" />
    </tbody>
  </Table>;

//////////////////////////////////////////////
// Export
//////////////////////////////////////////////

export let states = [
  {
    id: 'data-table-responsive-horizontal',
    label: 'Stacked with Horizontal Cells',
    element: <Horizontal />
  },
  {
    id: 'data-table-responsive-stacked',
    label: 'Stacked',
    element: <Stacked />
  }
  // , @TODO: Hidden until scrolling on S1 works
  // {
  //   id: 'data-table-responsive-overflow',
  //   label: 'Overflow',
  //   element: <Overflow />
  // }
];
