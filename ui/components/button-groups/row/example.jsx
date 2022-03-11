// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../buttons/base/example';
import ButtonIcon from '../../button-icons/';
import { ButtonGroup } from '../base/example';

export const ButtonGroupRow = props => (
  <ul className="slds-button-group-row">{props.children}</ul>
);

ButtonGroupRow.propTypes = {
  children: PropTypes.node
};

export const ButtonGroupItem = props => (
  <li className="slds-button-group-item">{props.children}</li>
);

ButtonGroupItem.propTypes = {
  children: PropTypes.node
};

export default [
  {
    id: 'default',
    label: 'Default',
    element: (
      <ButtonGroupRow>
        <ButtonGroupItem>
          <Button isNeutral>Refresh</Button>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Button isNeutral>Edit</Button>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <Button isBrand>Save</Button>
        </ButtonGroupItem>
      </ButtonGroupRow>
    )
  }
];

export let examples = [
  {
    id: 'buttons-icons',
    label: 'Row of button icons',
    element: (
      <ButtonGroupRow>
        <ButtonGroupItem>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_clicked">
            <ButtonIcon
              hasDropdown
              theme="neutral"
              assistiveText="More options"
              title="More Options"
            />
          </div>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <div className="slds-dropdown-trigger slds-dropdown-trigger_clicked">
            <ButtonIcon
              hasDropdown
              theme="neutral"
              symbol="table"
              assistiveText="More options"
              title="More Options"
            />
          </div>
        </ButtonGroupItem>
        <ButtonGroupItem>
          <ButtonIcon symbol="edit" theme="neutral" />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <ButtonIcon symbol="refresh" theme="neutral" />
        </ButtonGroupItem>
        <ButtonGroupItem>
          <ButtonGroup>
            <ButtonIcon symbol="chart" theme="neutral" />
            <ButtonIcon symbol="filter" theme="neutral" />
          </ButtonGroup>
        </ButtonGroupItem>
      </ButtonGroupRow>
    )
  }
];
