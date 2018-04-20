// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import SvgIcon from '../../../shared/svg-icon';
import { Checkbox } from '../../checkbox/base/example';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

const checkboxRadioGroupHeaderId = 'check-group-header';

let Table = props => (
  <table
    className={classNames('slds-table slds-table_bordered', props.className)}
  >
    {props.children}
  </table>
);

let HeadRowData = props => (
  <tr className="slds-text-title_caps">
    <th className="slds-cell-shrink" scope="col">
      <span className="slds-assistive-text" id={checkboxRadioGroupHeaderId}>
        Choose a row to select
      </span>
      <Checkbox
        hideLabel
        labelId={'check-button-label-all'}
        id={'checkbox-all'}
        label={'Select all'}
        groupId={checkboxRadioGroupHeaderId}
        checked={props.checked}
      />
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Close Date">
        Opportunity Name
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Account Name">
        Account Name
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Close Date">
        Close Date
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Stage">
        Stage
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Confidence">
        Confidence
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Amount">
        Amount
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th scope="col">
      <div className="slds-truncate" title="Contact">
        Contact
        <ButtonIcon
          className="slds-button_icon"
          iconClassName="slds-button__icon_small"
          symbol="arrowdown"
          assistiveText="Sort"
          title="Sort"
        />
      </div>
    </th>
    <th className="slds-cell-shrink" scope="col" />
  </tr>
);

let RowData = props => (
  <tr className="slds-hint-parent">
    <td className="slds-cell-shrink" data-label="Select Row">
      <Checkbox
        hideLabel
        labelId={`check-button-label-0${props.index}`}
        id={`checkbox-0${props.index}`}
        label={`Select item ${props.index}`}
        groupId={checkboxRadioGroupHeaderId}
        checked={props.checked}
      />
    </td>
    <th scope="row" data-label="Opportunity Name">
      <div className="slds-truncate" title={props.title}>
        {props.title}
      </div>
    </th>
    <td data-label="Account Name">
      <div className="slds-truncate" title="Cloudhub">
        Cloudhub
      </div>
    </td>
    <td data-label="Close Date">
      <div className="slds-truncate" title="4/14/2015">
        4/14/2015
      </div>
    </td>
    <td data-label="Prospecting">
      <div className="slds-truncate" title="Prospecting">
        Prospecting
      </div>
    </td>
    <td data-label="Confidence">
      <div className="slds-truncate" title="20%">
        20%
      </div>
    </td>
    <td data-label="Amount">
      <div className="slds-truncate" title="$25k">
        $25k
      </div>
    </td>
    <td data-label="Contact">
      <div className="slds-truncate" title="jrogers@cloudhub.com">
        <a href="javascript:void(0);">jrogers@cloudhub.com</a>
      </div>
    </td>
    <td className="slds-cell-shrink" data-label="Actions">
      <ButtonIcon
        className="slds-button_icon-border-filled slds-button_icon-x-small"
        iconClassName="slds-button__icon_hint slds-button__icon_small"
        symbol="down"
        assistiveText="Show More"
        title="Show More"
      />
    </td>
  </tr>
);

/// ///////////////////////////////////////////
// State Constructor(s)
/// ///////////////////////////////////////////

let Overflow = props => (
  <div className="slds-scrollable_x">
    <Table>
      <thead>
        <HeadRowData />
      </thead>
      <tbody>
        <RowData index="1" title="Cloudhub" />
        <RowData index="2" title="Cloudhub + Anypoint Connectors" />
      </tbody>
    </Table>
  </div>
);

let Stacked = props => (
  <Table className="slds-max-medium-table_stacked">
    <thead>
      <HeadRowData />
    </thead>
    <tbody>
      <RowData index="1" title="Cloudhub" />
      <RowData index="2" title="Cloudhub + Anypoint Connectors" />
    </tbody>
  </Table>
);

let Horizontal = props => (
  <Table className="slds-max-medium-table_stacked-horizontal">
    <thead>
      <HeadRowData />
    </thead>
    <tbody>
      <RowData index="1" title="Cloudhub" />
      <RowData index="2" title="Cloudhub + Anypoint Connectors" />
    </tbody>
  </Table>
);

/// ///////////////////////////////////////////
// Export
/// ///////////////////////////////////////////

export default <Horizontal />;

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
  // , @TODO - wait for S1 to fix scrolling
  // {
  //   id: 'data-table-responsive-overflow',
  //   label: 'Overflow',
  //   element: <Overflow />
  // }
];
