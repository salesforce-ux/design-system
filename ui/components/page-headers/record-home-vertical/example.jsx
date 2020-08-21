// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import { Avatar } from '../../avatar/base/example';
import { Button } from '../../buttons/base/example';
import { StatefulButton } from '../../buttons/stateful/example';
import {
  ButtonGroupList,
  ButtonGroupListItem
} from '../../button-groups/list/example';
import ButtonIcon from '../../button-icons/';
import { Trigger } from '../../menus/dropdown/example';
import {
  PageHeader,
  PageHeaderTitle,
  PageHeaderControls,
  PageHeaderDetailList,
  PageHeaderDetailListItem,
  PageHeaderDetailTitle,
  PageHeaderDetailBody
} from '../index';

export const RecordHomeVertical = props => (
  <div className="demo-only" style={{ width: '300px' }}>
    <PageHeader isVertical>
      <PageHeaderTitle
        symbol="opportunity"
        titleText="Burlington Textile Weaving Plant Generator"
        isVertical
      />
      <PageHeaderControls>
        <StatefulButton isNeutral isNotSelected />
        <ButtonGroupList>
          <ButtonGroupListItem>
            <Button isNeutral>Edit</Button>
          </ButtonGroupListItem>
          <ButtonGroupListItem>
            <Button isNeutral>Delete</Button>
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
      </PageHeaderControls>
      <PageHeaderDetailList>
        <PageHeaderDetailListItem>
          <PageHeaderDetailTitle title="Field 1">
            Account Name
          </PageHeaderDetailTitle>
          <PageHeaderDetailBody
            title="Burlington Textile Weaving Plant Generator"
            isVertical
          >
            <a href="#" onClick={e => e.preventDefault()}>
              Burlington Textile Weaving Plant Generator
            </a>
          </PageHeaderDetailBody>
        </PageHeaderDetailListItem>
        <PageHeaderDetailListItem>
          <PageHeaderDetailTitle title="Address (2)">
            Address (2)
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
          <PageHeaderDetailBody title="Multiple Values" isVertical>
            <div>1 Market St</div>
            <div>San Francisco, CA 94105</div>
          </PageHeaderDetailBody>
        </PageHeaderDetailListItem>
        <PageHeaderDetailListItem>
          <PageHeaderDetailTitle title="Close Date">
            Close Date
          </PageHeaderDetailTitle>
          <PageHeaderDetailBody title="11/1/2018" isVertical>
            11/1/2018
          </PageHeaderDetailBody>
        </PageHeaderDetailListItem>
        <PageHeaderDetailListItem>
          <PageHeaderDetailTitle title="Opportunity Owner">
            Opportunity Owner
          </PageHeaderDetailTitle>
          <PageHeaderDetailBody title="Hyperlink" isVertical>
            <div className="slds-media slds-media_small">
              <div className="slds-media__figure">
                <Avatar className="slds-avatar_circle slds-avatar_x-small">
                  <img
                    alt="Person name"
                    src="/assets/images/avatar2.jpg"
                    title="User avatar"
                  />
                </Avatar>
              </div>
              <div className="slds-media__body">
                <a href="#" onClick={e => e.preventDefault()}>
                  Jeanette Gomez
                </a>
              </div>
            </div>
          </PageHeaderDetailBody>
        </PageHeaderDetailListItem>
        <PageHeaderDetailListItem>
          <PageHeaderDetailTitle title="Amount">Amount</PageHeaderDetailTitle>
          <PageHeaderDetailBody title="$375,000.00" isVertical>
            $375,000.00
          </PageHeaderDetailBody>
        </PageHeaderDetailListItem>
      </PageHeaderDetailList>
    </PageHeader>
  </div>
);

export default <RecordHomeVertical />;
