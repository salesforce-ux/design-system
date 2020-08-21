// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { Button } from '../../buttons/base/example';
import {
  ButtonGroupList,
  ButtonGroupListItem
} from '../../button-groups/list/example';
import { Trigger } from '../../menus/dropdown/example';
import { StatefulButton } from '../../buttons/stateful/example';
import {
  PageHeader,
  PageHeaderRow,
  PageHeaderColumn,
  PageHeaderTitle,
  PageHeaderControls,
  PageHeaderControl,
  PageHeaderDetailRow,
  PageHeaderDetailItem,
  PageHeaderDetailTitle,
  PageHeaderDetailBody
} from '../index';

export const RecordHome = props => (
  <PageHeader isRecordHome>
    <PageHeaderRow>
      <PageHeaderColumn type="title">
        <PageHeaderTitle
          symbol="opportunity"
          objectName="Opportunity"
          titleText="Acme - 1,200 Widgets"
        />
      </PageHeaderColumn>
      <PageHeaderColumn type="actions">
        <PageHeaderControls>
          <PageHeaderControl>
            <StatefulButton isNotSelected isNeutral />
          </PageHeaderControl>
          <PageHeaderControl>
            <ButtonGroupList>
              <ButtonGroupListItem>
                <Button isNeutral>Edit</Button>
              </ButtonGroupListItem>
              <ButtonGroupListItem>
                <Button isNeutral>Delete</Button>
              </ButtonGroupListItem>
              <ButtonGroupListItem>
                <Button isNeutral>Clone</Button>
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
    <PageHeaderRow hasGutters>
      <PageHeaderColumn type="details">
        <PageHeaderDetailRow>
          <PageHeaderDetailItem>
            <PageHeaderDetailTitle title="Field 1">
              Field 1
            </PageHeaderDetailTitle>
            <PageHeaderDetailBody title="Description that demonstrates truncation with a long text field.">
              Description that demonstrates truncation with a long text field.
            </PageHeaderDetailBody>
          </PageHeaderDetailItem>
          <PageHeaderDetailItem>
            <PageHeaderDetailTitle title="Field 2 (3)">
              Field 2 (3)
              <Trigger
                triggerIcon={
                  <ButtonIcon
                    className="slds-button_icon"
                    iconClassName="slds-button__icon_small"
                    symbol="down"
                    aria-haspopup="true"
                    assistiveText="More Actions"
                    title="More Actions"
                  />
                }
              />
            </PageHeaderDetailTitle>
            <PageHeaderDetailBody title="Multiple Values">
              Multiple Values
            </PageHeaderDetailBody>
          </PageHeaderDetailItem>
          <PageHeaderDetailItem>
            <PageHeaderDetailTitle title="Field 3">
              Field 3
            </PageHeaderDetailTitle>
            <PageHeaderDetailBody title="Hyperlink">
              <a href="#" onClick={e => e.preventDefault()}>
                Hyperlink
              </a>
            </PageHeaderDetailBody>
          </PageHeaderDetailItem>
          <PageHeaderDetailItem>
            <PageHeaderDetailTitle title="Field 4">
              Field 4
            </PageHeaderDetailTitle>
            <PageHeaderDetailBody title="Description (2-line truncation—must use JS to truncate).">
              Description (2-line truncati...
            </PageHeaderDetailBody>
          </PageHeaderDetailItem>
        </PageHeaderDetailRow>
      </PageHeaderColumn>
    </PageHeaderRow>
  </PageHeader>
);

export default <RecordHome />;
