// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license
/* eslint-env jest */

import React from 'react';
import createHelpers from '../../../../jest.helpers';
import { mount } from 'enzyme';
import { UtilityIcon } from '../../icons/base/example';
import {
  TimelineIcon,
  TimelineActions,
  TimelineMediaFigure,
  TimelineMediaBody,
  TimelineError,
  TimelineTrigger,
  TimelineSubtext,
  TimelineItem,
  DescriptionCard
} from '../base/example';
import { BaseExample as StaticExample } from '../deprecated/example';

const { matchesMarkup } = createHelpers(__dirname);

const emailIcons = [
  <UtilityIcon
    key="groups"
    className="slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
    symbol="groups"
    title="Group email"
    assistiveText="Group email"
  />,
  <UtilityIcon
    key="attach"
    className="slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
    symbol="attach"
    title="Has attachments"
    assistiveText="Has attachments"
  />
];

describe('Activity Timeline Expandable', () => {
  it('renders a hover state', () => {
    const wrapper = mount(
      <TimelineItem
        id="call-item"
        type="log_a_call"
        title="Mobile conversation on Monday"
        date="10:00am | 3/23/17"
        subtext={{
          you: 'You',
          action: 'logged a call with',
          to: 'Adam Chan'
        }}
      />
    );
    return matchesMarkup(
      wrapper
        .find('.slds-timeline__trigger')
        .at(0)
        .simulate('mouseEnter')
        .html()
    );
  });

  it('renders a timeline icon', () =>
    matchesMarkup(<TimelineIcon symbol="email" />));

  it('renders a collapsed timeline media figure', () =>
    matchesMarkup(
      <TimelineMediaFigure id="event-figure" type="event" isExpanded="false" />
    ));

  it('renders an expanded timeline media figure', () =>
    matchesMarkup(
      <TimelineMediaFigure id="event-figure" type="event" isExpanded="true" />
    ));

  it('renders a timeline media body', () =>
    matchesMarkup(
      <TimelineMediaBody>
        <TimelineTrigger type="email" title="EBC Follow Up Details" />
        <TimelineSubtext
          subtext={{
            you: 'You',
            action: 'created a task with',
            to: 'Charlie Gomez'
          }}
        />
      </TimelineMediaBody>
    ));

  it('renders a timeline item trigger with no icons', () =>
    matchesMarkup(
      <TimelineTrigger type="email" title="EBC Follow Up Details" />
    ));

  it('renders a timeline item trigger with icons', () =>
    matchesMarkup(
      <TimelineTrigger
        type="email"
        title="EBC Follow Up Details"
        iconSet={emailIcons}
      />
    ));

  it('renders a timeline item trigger with a task checkbox', () =>
    matchesMarkup(
      <TimelineTrigger type="task" title="Send EBC Follow Up Details" />
    ));

  it('renders simple timeline subtext', () =>
    matchesMarkup(
      <TimelineSubtext
        subtext={{
          you: 'You',
          action: 'created a task with',
          to: 'Charlie Gomez'
        }}
      />
    ));

  it('renders timeline subtext with extra text at the end', () =>
    matchesMarkup(
      <TimelineSubtext
        subtext={{
          you: 'You',
          action: 'created a task with',
          to: 'Charlie Gomez',
          extra: 'and 4 others'
        }}
      />
    ));

  it('renders a timeline item error', () => matchesMarkup(<TimelineError />));

  it('renders timeline actions', () =>
    matchesMarkup(
      <TimelineActions
        date="9:00am | 2/24/2017"
        title="More Options for Call, Mobile conversation"
        assistiveText="More Options for Call, Mobile conversation"
      />
    ));

  it('renders a timeline item', () =>
    matchesMarkup(
      <TimelineItem
        id="call-item"
        type="log_a_call"
        title="Mobile conversation on Monday"
        date="10:00am | 3/23/17"
        subtext={{
          you: 'You',
          action: 'logged a call with',
          to: 'Adam Chan'
        }}
        fields={[
          { label: 'Name', content: 'Adam Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
      >
        Adam seemed interested in closing this deal quickly! Let’s move.
      </TimelineItem>
    ));

  it('renders a task timeline item', () =>
    matchesMarkup(
      <TimelineItem
        id="call-item"
        type="task"
        title="Mobile conversation on Monday"
        date="10:00am | 3/23/17"
        subtext={{
          you: 'You',
          action: 'created a task with',
          to: 'Adam Chan'
        }}
        fields={[
          { label: 'Name', content: 'Adam Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
      >
        Adam seemed interested in closing this deal quickly! Let’s move.
      </TimelineItem>
    ));

  it('renders a timeline item with icons', () =>
    matchesMarkup(
      <TimelineItem
        id="call-item"
        type="task"
        title="Mobile conversation on Monday"
        date="10:00am | 3/23/17"
        subtext={{
          you: 'You',
          action: 'created a task with',
          to: 'Adam Chan'
        }}
        iconSet={emailIcons}
        fields={[
          { label: 'Name', content: 'Adam Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
      >
        Adam seemed interested in closing this deal quickly! Let’s move.
      </TimelineItem>
    ));

  it('renders a narrow timeline item', () =>
    matchesMarkup(
      <TimelineItem
        id="call-item"
        type="log_a_call"
        title="Mobile conversation on Monday"
        date="10:00am | 3/23/17"
        subtext={{
          you: 'You',
          action: 'logged a call with',
          to: 'Adam Chan'
        }}
        fields={[
          { label: 'Name', content: 'Adam Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
        isNarrow
      >
        Adam seemed interested in closing this deal quickly! Let’s move.
      </TimelineItem>
    ));

  it('renders an expanded timeline item', () =>
    matchesMarkup(
      <TimelineItem
        id="call-item"
        type="log_a_call"
        title="Mobile conversation on Monday"
        date="10:00am | 3/23/17"
        subtext={{
          you: 'You',
          action: 'logged a call with',
          to: 'Adam Chan'
        }}
        fields={[
          { label: 'Name', content: 'Adam Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
        isExpanded="true"
      >
        Adam seemed interested in closing this deal quickly! Let’s move.
      </TimelineItem>
    ));

  it('renders an empty details section', () =>
    matchesMarkup(<DescriptionCard id="test1" />));

  it('renders an expanded empty details section', () =>
    matchesMarkup(<DescriptionCard id="test1" isExpanded="true" />));

  it('renders a full expanded details section without footer buttons', () =>
    matchesMarkup(
      <DescriptionCard
        id="test-id"
        isExpanded="true"
        fields={[
          { label: 'Name', content: 'Lei Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
      >
        Hi folks, Thanks for meeting with the team today and going through the
        proposals we saw. This goes on until it is truncated.
      </DescriptionCard>
    ));

  it('renders a full expanded details section with footer buttons', () =>
    matchesMarkup(
      <DescriptionCard
        id="test-id"
        isExpanded="true"
        fields={[
          { label: 'Name', content: 'Lei Chan' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
        footerButtons
      >
        Hi folks, Thanks for meeting with the team today and going through the
        proposals we saw. This goes on until it is truncated.
      </DescriptionCard>
    ));

  it('renders the deprecated combined timeline', () =>
    matchesMarkup(<StaticExample />));
});
