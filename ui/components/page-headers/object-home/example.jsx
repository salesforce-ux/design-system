// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import { Button } from '../../buttons/base/example';
import ButtonIcon from '../../button-icons/';
import {
  ButtonGroupList,
  ButtonGroupListItem
} from '../../button-groups/list/example';
import Card from '../../cards/';
import { Trigger } from '../../menus/dropdown/example';
import {
  PageHeader,
  PageHeaderTitle,
  PageHeaderMetaText,
  PageHeaderRow,
  PageHeaderColumn,
  PageHeaderControls,
  PageHeaderControl
} from '../index';

export const ObjectHome = props => (
  <PageHeader>
    <PageHeaderRow>
      <PageHeaderColumn type="title">
        <PageHeaderTitle
          symbol="opportunity"
          objectName="Opportunities"
          titleText="Recently Viewed"
          hasSwitcher
        />
      </PageHeaderColumn>
      <PageHeaderColumn type="actions">
        <PageHeaderControls>
          <PageHeaderControl>
            <ButtonGroupList>
              <ButtonGroupListItem>
                <Button isNeutral>New</Button>
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
        <PageHeaderMetaText>
          10 items &bull; Updated 13 minutes ago
        </PageHeaderMetaText>
      </PageHeaderColumn>
      <PageHeaderColumn type="controls">
        <PageHeaderControls>
          <PageHeaderControl>
            <Trigger
              triggerIcon={
                <ButtonIcon
                  className="slds-button_icon-more"
                  symbol="settings"
                  hasDropdown
                  assistiveText="List View Controls"
                  title="List View Controls"
                />
              }
            />
          </PageHeaderControl>
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
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="edit"
              assistiveText="Edit List"
              title="Edit List"
            />
          </PageHeaderControl>
          <PageHeaderControl>
            <ButtonIcon
              className="slds-button_icon-border-filled"
              symbol="refresh"
              assistiveText="Refresh List"
              title="Refresh List"
            />
          </PageHeaderControl>
          <PageHeaderControl>
            <ButtonGroupList>
              <ButtonGroupListItem>
                <ButtonIcon
                  className="slds-button_icon-border-filled"
                  symbol="chart"
                  assistiveText="Charts"
                  title="Charts"
                />
              </ButtonGroupListItem>
              <ButtonGroupListItem>
                <ButtonIcon
                  className="slds-button_icon-border-filled"
                  symbol="filterList"
                  assistiveText="Filters"
                  title="Filters"
                />
              </ButtonGroupListItem>
            </ButtonGroupList>
          </PageHeaderControl>
        </PageHeaderControls>
      </PageHeaderColumn>
    </PageHeaderRow>
  </PageHeader>
);

export default <ObjectHome />;

export let examples = [
  {
    id: 'base-extra-long',
    label: 'Base with extra long name',
    element: (
      <PageHeader>
        <PageHeaderRow>
          <PageHeaderColumn type="title">
            <PageHeaderTitle
              symbol="opportunity"
              objectName="Opportunities"
              titleText="Recently Viewed listssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
              hasSwitcher
            />
          </PageHeaderColumn>
          <PageHeaderColumn type="actions">
            <PageHeaderControls>
              <PageHeaderControl>
                <ButtonGroupList>
                  <ButtonGroupListItem>
                    <Button isNeutral>New</Button>
                  </ButtonGroupListItem>
                  <ButtonGroupListItem>
                    <ButtonIcon
                      className="slds-button_icon-border-filled"
                      symbol="down"
                      aria-haspopup="true"
                      assistiveText="More Actions"
                      title="More Actions"
                    />
                  </ButtonGroupListItem>
                </ButtonGroupList>
              </PageHeaderControl>
            </PageHeaderControls>
          </PageHeaderColumn>
        </PageHeaderRow>
        <PageHeaderRow>
          <PageHeaderColumn type="meta">
            <PageHeaderMetaText>
              10 items &bull; Updated 13 minutes ago
            </PageHeaderMetaText>
          </PageHeaderColumn>
          <PageHeaderColumn type="controls">
            <PageHeaderControls>
              <PageHeaderControl>
                <Trigger
                  triggerIcon={
                    <ButtonIcon
                      className="slds-button_icon-more"
                      symbol="settings"
                      hasDropdown
                      assistiveText="List View Controls"
                      title="List View Controls"
                    />
                  }
                />
              </PageHeaderControl>
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
                <ButtonIcon
                  className="slds-button_icon-border-filled"
                  symbol="edit"
                  assistiveText="Edit List"
                  title="Edit List"
                />
              </PageHeaderControl>
              <PageHeaderControl>
                <ButtonIcon
                  className="slds-button_icon-border-filled"
                  symbol="refresh"
                  assistiveText="Refresh List"
                  title="Refresh List"
                />
              </PageHeaderControl>
              <PageHeaderControl>
                <ButtonGroupList>
                  <ButtonGroupListItem>
                    <ButtonIcon
                      className="slds-button_icon-border-filled"
                      symbol="chart"
                      assistiveText="Charts"
                      title="Charts"
                    />
                  </ButtonGroupListItem>
                  <ButtonGroupListItem>
                    <ButtonIcon
                      className="slds-button_icon-border-filled"
                      symbol="filterList"
                      assistiveText="Filters"
                      title="Filters"
                    />
                  </ButtonGroupListItem>
                </ButtonGroupList>
              </PageHeaderControl>
            </PageHeaderControls>
          </PageHeaderColumn>
        </PageHeaderRow>
      </PageHeader>
    )
  },
  {
    id: 'card',
    label: 'Inside a card',
    element: (
      <Card>
        <ObjectHome />
      </Card>
    )
  },
  {
    id: 'tab-card',
    label: 'Inside a tabs card',
    element: (
      <div className="slds-tabs_card">
        <ObjectHome />
      </div>
    )
  }
];
