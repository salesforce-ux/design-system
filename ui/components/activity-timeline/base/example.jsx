// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import ButtonIcon from '../../button-icons/';
import { Checkbox } from '../../checkbox/base/example';
import SvgIcon from '../../../shared/svg-icon';
import { UtilityIcon } from '../../icons/base/example';
import { Button } from '../../buttons/base/example';
import classNames from 'classnames';

const emailItemId = 'email-item';
const callItemId = 'call-item';
const eventItemId = 'event-item';
const taskItemId = 'task-item';

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
const taskIcons = [
  <UtilityIcon
    key="rotate"
    className="slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
    symbol="rotate"
    title="Recurring Task"
    assistiveText="Recurring Task"
  />
];
const eventIcons = [
  <UtilityIcon
    key="world"
    className="slds-icon_xx-small slds-icon-text-default slds-m-left_x-small"
    symbol="world"
    title="Public sharing"
    assistiveText="Public sharing"
  />
];

/// ///////////////////////////////////////////
// Partial(s)
/// ///////////////////////////////////////////

/* Timeline Components */
export const TimelineIcon = props => (
  <div
    className={classNames(
      'slds-icon_container',
      props.symbol == 'log_a_call'
        ? 'slds-icon-standard-log-a-call'
        : 'slds-icon-standard-' + props.symbol,
      props.className
    )}
    title={props.symbol == 'log_a_call' ? 'call' : props.symbol}
  >
    <SvgIcon
      className="slds-icon slds-icon_small"
      sprite="standard"
      symbol={props.symbol}
    />
  </div>
);

export const TimelineActions = props => (
  <div
    className={classNames('slds-timeline__actions', {
      'slds-timeline__actions_inline': props.inline
    })}
  >
    <p className="slds-timeline__date">{props.date || 'Feb 24'}</p>
    <ButtonIcon
      className="slds-button_icon-border-filled slds-button_icon-x-small"
      symbol="down"
      assistiveText={props.assistiveText || 'More Options'}
      aria-haspopup="true"
      title={props.title || 'More Options'}
    />
  </div>
);

export const TimelineMediaFigure = props => (
  <div className="slds-media__figure">
    <ButtonIcon
      iconClassName="slds-timeline__details-action-icon"
      symbol="switch"
      title={`Toggle details for ${props.title}`}
      assistiveText={`Toggle details for ${props.title}`}
      aria-controls={props.id}
      aria-expanded={props.isExpanded}
    />
    <TimelineIcon symbol={props.type} className="slds-timeline__icon" />
  </div>
);

export const TimelineMediaBody = props => (
  <div className="slds-media__body">{props.children}</div>
);

export const TimelineTrigger = props => (
  <div className="slds-grid slds-grid_align-spread slds-timeline__trigger">
    <div className="slds-grid slds-grid_vertical-align-center slds-truncate_container_75 slds-no-space">
      {props.type === 'task' && (
        <Checkbox hideLabel label={`Mark ${props.title} complete`} />
      )}
      <h3 className="slds-truncate" title={props.title}>
        <a href="javascript:void(0);">
          <strong>{props.title}</strong>
        </a>
      </h3>
      {props.iconSet && <div className="slds-no-flex">{props.iconSet}</div>}
    </div>
    <TimelineActions
      inline
      date={props.date}
      title="More Options for this item"
      assistiveText="More Options for this item"
    />
  </div>
);

export const TimelineSubtext = props => (
  <p className="slds-m-horizontal_xx-small">
    <a href="javascript:void(0);">{props.subtext.you}</a> {props.subtext.action}{' '}
    <a href="javascript:void(0);">{props.subtext.to}</a> {props.subtext.extra}
  </p>
);

export const TimelineError = props => (
  <div
    className="slds-grid slds-text-color_error slds-m-top_x-small slds-m-horizontal_xx-small"
    id={props.id}
  >
    <UtilityIcon
      key="attach"
      className="slds-icon-text-error slds-icon_x-small slds-m-right_xx-small"
      symbol="error"
      title="Error Occurred"
      assistiveText="Error Occurred"
    />
    <p>There was an error loading the details</p>
  </div>
);

export const TimelineItem = props => (
  <div
    className={classNames(
      'slds-timeline__item_expandable',
      `${props.type === 'log_a_call'
        ? 'slds-timeline__item_call'
        : 'slds-timeline__item_' + props.type}`,
      { 'slds-is-open': props.isExpanded === 'true' },
      props.className
    )}
  >
    <span className="slds-assistive-text">{props.type}</span>
    <div className={classNames('slds-media')}>
      <TimelineMediaFigure {...props} />
      <TimelineMediaBody>
        <TimelineTrigger {...props} />
        <TimelineSubtext {...props} />
        {props.hasError ? (
          <TimelineError {...props} />
        ) : (
          <DescriptionCard
            id={props.id}
            isExpanded={props.isExpanded}
            fields={props.fields}
            bodyLabel={props.bodyLabel}
            footerButtons={props.footerButtons}
          >
            {props.children}
          </DescriptionCard>
        )}
      </TimelineMediaBody>
    </div>
  </div>
);

export let FieldInfoListItem = props => (
  <li className="slds-grid slds-grid--vertical slds-size_1-of-2 slds-p-bottom_small">
    <span className="slds-text-title slds-p-bottom_x-small">{props.label}</span>
    <span className="slds-text-body_medium slds-truncate" title={props.content}>
      <a href="javascript:void(0);">{props.content}</a>
    </span>
  </li>
);

/* Description Card Component */
export let FieldInfoList = props => (
  <ul className="slds-list_horizontal slds-wrap">
    {props.fields.map((field, i) => (
      <FieldInfoListItem key={i} label={field.label} content={field.content} />
    ))}
  </ul>
);

export const DescriptionCard = props => (
  <article
    className={classNames(
      'slds-box',
      'slds-timeline__item_details',
      'slds-theme_shade',
      'slds-m-top_x-small',
      'slds-m-horizontal_xx-small',
      { 'slds-p-around_medium': props.isExpanded === 'true' },
      props.className
    )}
    id={props.id}
    aria-hidden={props.isExpanded === 'false'}
  >
    {props.fields && <FieldInfoList {...props} />}
    {props.children && (
      <div>
        <span className="slds-text-title">{props.bodyLabel}</span>
        <p className="slds-p-top_x-small">{props.children}</p>
      </div>
    )}
    {props.footerButtons && (
      <Button isNeutral className="slds-m-top_small">
        <SvgIcon
          className="slds-button__icon slds-button__icon_left"
          sprite="utility"
          symbol="world"
        />
        Public Sharing
      </Button>
    )}
  </article>
);

export const NarrowContext = props => (
  <div className="demo-only" style={{ width: '400px' }}>
    {props.children}
  </div>
);

export let BaseExample = props => (
  <ul className="slds-timeline">
    <li>
      <TimelineItem
        id={`${taskItemId + '-' + props.id}`}
        type="task"
        title="Review proposals for EBC deck with larger team and have marketing review this"
        date="9:00am | 3/20/17"
        subtext={{
          you: 'You',
          action: 'created a task with',
          to: 'Charlie Gomez'
        }}
        iconSet={taskIcons}
        fields={[
          { label: 'Name', content: 'Charlie Gomez' },
          {
            label: 'Related To',
            content: 'Tesla Cloudhub + Anypoint Connectors'
          }
        ]}
        bodyLabel="Description"
        isExpanded={props.isExpanded}
        isNarrow={props.isNarrow}
        hasError={props.hasError}
      >
        Need to finalize proposals and brand details before the meeting
      </TimelineItem>
    </li>
    <li>
      <TimelineItem
        id={`${callItemId + '-' + props.id}`}
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
        isExpanded={props.isExpanded}
        isNarrow={props.isNarrow}
      >
        Adam seemed interested in closing this deal quickly! Let’s move.
      </TimelineItem>
    </li>
    <li>
      <TimelineItem
        id={`${emailItemId + '-' + props.id}`}
        type="email"
        title="Re: Mobile conversation on Monday with the new global team"
        date="10:00am | 3/24/17"
        subtext={{
          you: 'You',
          action: 'emailed',
          to: 'Lea Chan'
        }}
        iconSet={emailIcons}
        fields={[
          { label: 'From Address', content: 'Jackie Dewar' },
          {
            label: 'To Address',
            content: 'Lea Chan'
          }
        ]}
        bodyLabel="Text Body"
        isExpanded={props.isExpanded}
        isNarrow={props.isNarrow}
        footerButtons={props.footerButtons}
      >
        Hi everyone, Thanks for meeting with the team today and going through
        the proposals we saw. This goes on and wraps if needed.
      </TimelineItem>
    </li>
    <li>
      <TimelineItem
        id={`${eventItemId + '-' + props.id}`}
        type="event"
        title="EBC Follow up call"
        date="10:30am | 3/24/17"
        subtext={{
          you: 'You',
          action: 'created an event with',
          to: 'Aida Lee',
          extra: 'and 5 others'
        }}
        iconSet={eventIcons}
        fields={[
          {
            label: 'Location',
            content: 'Westen St. Francis, San Francisco, CA, 94622'
          },
          {
            label: 'Attendees',
            content: 'Jason Dewar (Organizer) + 5 others'
          },
          {
            label: 'When',
            content: 'March 26, 10:00 AM - 11:00 AM'
          }
        ]}
        bodyLabel="Description"
        isExpanded={props.isExpanded}
        isNarrow={props.isNarrow}
        footerButtons={props.footerButtons}
      >
        Let's discuss the 2017 product roadmap and address any questions
      </TimelineItem>
    </li>
  </ul>
);

export default <BaseExample id="base" isExpanded="false" />;

export let examples = [
  {
    id: 'narrow',
    label: 'Narrow',
    element: (
      <NarrowContext>
        <BaseExample id="narrow" isExpanded="true" isNarrow footerButtons />
      </NarrowContext>
    )
  }
];

export let states = [
  {
    id: 'expanded',
    label: 'Expanded',
    element: <BaseExample id="expanded" isExpanded="true" footerButtons />
  },

  {
    id: 'error',
    label: 'Error',
    element: <BaseExample id="error" isExpanded="true" hasError footerButtons />
  }
];
