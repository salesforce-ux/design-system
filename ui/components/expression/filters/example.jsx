// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { ExpressionOptions } from '../';
import SvgIcon from '../../../shared/svg-icon';
import ButtonIcon from '../../button-icons/';
import { Button } from '../../buttons/base/example';
import {
  FilterObject,
  Filters,
  FilterObjectListItem
} from '../../panels/filtering/example';
import PropTypes from 'prop-types';

let Demo = props => (
  <div className="demo-only" style={{ maxWidth: '320px', overflow: 'hidden' }}>
    {props.children}
  </div>
);

Demo.propTypes = {
  children: PropTypes.node
};

export let ExpressionNarrowFooter = props => (
  <div className="slds-m-top_small">
    <Button isNeutral>
      <SvgIcon
        className="slds-button__icon slds-button__icon_left"
        sprite="utility"
        symbol="add"
      />
      Add Condition
    </Button>
    {props.hasGroup && (
      <Button isNeutral>
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="add"
        />
        Add Group
      </Button>
    )}
  </div>
);

ExpressionNarrowFooter.propTypes = {
  hasGroup: PropTypes.bool
};

export const ExpressionNarrowGroup = props => (
  <div className="slds-filters__group">
    <div className="slds-grid slds-grid_align-spread">
      <span>
        <strong>AND</strong>
      </span>
      <span className="slds-assistive-text">Condition Group 1</span>
      <ButtonIcon
        className="slds-button_icon slds-button_icon-small"
        iconClassName="slds-button__icon_hint"
        symbol="delete"
        assistiveText="Remove Group"
        title="Remove Group"
      />
    </div>
    <ExpressionOptions isInFilter optionSelected={props.optionSelected} />
    <ol>
      <FilterObject type="Amount" removable removeSymbol="delete">
        greater than "1000"
      </FilterObject>
    </ol>
    <ExpressionNarrowFooter />
  </div>
);

ExpressionNarrowGroup.propTypes = {
  optionSelected: PropTypes.string
};

export const ExpressionNarrow = props => (
  <Demo>
    <Filters>
      <h2 className="slds-text-heading_small">Conditions</h2>
      <div className="slds-m-vertical_small">
        <ExpressionOptions isInFilter optionSelected={props.optionSelected} />
      </div>
      <ol className="slds-list_vertical slds-list_vertical-space">
        <FilterObject type="Amount" removable removeSymbol="delete">
          greater than "1000"
        </FilterObject>
        {props.children}
      </ol>
      <ExpressionNarrowFooter hasGroup />
    </Filters>
  </Demo>
);

ExpressionNarrow.propTypes = {
  optionSelected: PropTypes.string,
  children: PropTypes.node
};

export default <ExpressionNarrow />;

export let examples = [
  {
    id: 'with-narrow-expression-group',
    label: 'With Narrow Expression Group',
    element: (
      <ExpressionNarrow>
        <FilterObject operator="AND" type="Status" removable>
          equals Red
        </FilterObject>
        <FilterObjectListItem>
          <ExpressionNarrowGroup />
        </FilterObjectListItem>
      </ExpressionNarrow>
    )
  },
  {
    id: 'with-option-selected',
    label: 'With Option Selected',
    element: (
      <ExpressionNarrow optionSelected="all">
        <FilterObject operator="AND" type="Status" removable>
          equals Red
        </FilterObject>
      </ExpressionNarrow>
    )
  }
];
