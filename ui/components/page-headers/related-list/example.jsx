// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import BreadCrumbs from '../../breadcrumbs/index.react';
import ButtonIcon from '../../button-icons/';
import { Button } from '../../buttons/base/example';
import {
  ButtonGroupList,
  ButtonGroupListItem
} from '../../button-groups/list/example';
import { Trigger } from '../../menus/dropdown/example';
import {
  PageHeader,
  PageHeaderRow,
  PageHeaderColumn,
  PageHeaderTitle,
  PageHeaderMetaText,
  PageHeaderControls,
  PageHeaderControl
} from '../index';

const { Crumb } = BreadCrumbs;

export const RelatedList = props => (
  <PageHeader isRelatedList>
    <PageHeaderRow>
      <PageHeaderColumn type="title">
        <BreadCrumbs className="slds-m-bottom_xx-small">
          <Crumb href="#" onClick={e => e.preventDefault()}>
            Accounts
          </Crumb>
          <Crumb href="#" onClick={e => e.preventDefault()}>
            Company One
          </Crumb>
        </BreadCrumbs>
        <PageHeaderTitle titleText="Contacts (will truncate)" />
      </PageHeaderColumn>
      <PageHeaderColumn type="actions">
        <PageHeaderControls>
          <PageHeaderControl>
            <ButtonGroupList>
              <ButtonGroupListItem>
                <Button isNeutral>Add Contact</Button>
              </ButtonGroupListItem>
              <ButtonGroupListItem>
                <Trigger
                  triggerIcon={
                    <ButtonIcon
                      className="slds-button_icon-border-filled"
                      symbol="down"
                      aria-haspopup="true"
                      assistiveText="More Actions"
                      title="More Actions"
                    />
                  }
                />
              </ButtonGroupListItem>
            </ButtonGroupList>
          </PageHeaderControl>
        </PageHeaderControls>
      </PageHeaderColumn>
    </PageHeaderRow>
    <PageHeaderRow>
      <PageHeaderColumn type="meta">
        <PageHeaderMetaText>10 items &bull; sorted by name</PageHeaderMetaText>
      </PageHeaderColumn>
      <PageHeaderColumn type="controls">
        <PageHeaderControls>
          <PageHeaderControl>
            <Trigger
              triggerIcon={
                <ButtonIcon
                  className="slds-button_icon-more"
                  symbol="table"
                  hasDropdown
                  assistiveText="Change view"
                  title="Change view"
                />
              }
            />
          </PageHeaderControl>
          <PageHeaderControl>
            <ButtonGroupList>
              <ButtonGroupListItem>
                <ButtonIcon
                  className="slds-button_icon-border"
                  symbol="chart"
                  assistiveText="Chart"
                  title="Chart"
                />
              </ButtonGroupListItem>
              <ButtonGroupListItem>
                <ButtonIcon
                  className="slds-button_icon-border"
                  symbol="filterList"
                  assistiveText="Filter List"
                  title="Filter List"
                />
              </ButtonGroupListItem>
              <ButtonGroupListItem>
                <Trigger
                  triggerIcon={
                    <ButtonIcon
                      className="slds-button_icon-more"
                      symbol="sort"
                      hasDropdown
                      assistiveText="Sort List"
                      title="Sort List"
                    />
                  }
                />
              </ButtonGroupListItem>
            </ButtonGroupList>
          </PageHeaderControl>
        </PageHeaderControls>
      </PageHeaderColumn>
    </PageHeaderRow>
  </PageHeader>
);

export default <RelatedList />;
