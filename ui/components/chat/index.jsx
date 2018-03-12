// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import _ from '../../shared/helpers';
import { Avatar } from '../avatar/base/example';
import { UtilityIcon } from '../icons/base/example';
import { TypingIcon } from '../dynamic-icons/typing/example';

export const Chat = props => (
  <section
    role="log"
    className={classNames('slds-chat', {
      'slds-chat_past': props.isPast
    })}
  >
    {props.children}
  </section>
);

export const ChatList = props => (
  <ul className="slds-chat-list">{props.children}</ul>
);

export const ChatListItem = props => (
  <li
    className={classNames('slds-chat-listitem', {
      'slds-chat-listitem_bookend': props.type === 'bookend',
      'slds-chat-listitem_event': props.type === 'event',
      'slds-chat-listitem_inbound': props.type === 'inbound',
      'slds-chat-listitem_outbound': props.type === 'outbound'
    })}
  >
    {props.children}
  </li>
);

export const ChatMessage = props => (
  <div
    className={classNames('slds-chat-message', {
      'slds-chat-message_faux-avatar': props.hasFauxAvatar
    })}
  >
    {props.children}
  </div>
);

export const ChatMessageBody = props => (
  <div className="slds-chat-message__body">
    {props.name &&
      props.timeStamp &&
      props.isPast && (
        <ChatMessageTimeStamp
          isPast
          name={props.name}
          timeStamp={props.timeStamp}
        />
      )}
    <div
      className={classNames('slds-chat-message__text', {
        'slds-chat-message__text_inbound': props.type === 'inbound',
        'slds-chat-message__text_outbound': props.type === 'outbound',
        'slds-chat-message__text_outbound-agent':
          props.type === 'outbound-agent',
        'slds-chat-message__text_unsupported-type':
          props.type === 'unsupported-type',
        'slds-chat-message__text_delivery-failure':
          props.type === 'delivery-failure',
        'slds-chat-message__text_sneak-peek': props.hasSneakPeek
      })}
    >
      {props.isTyping && (
        <TypingIcon
          isAnimated
          isPaused={props.isPaused}
          assistiveText="Customer is typing"
          title="Customer is typing"
        />
      )}
      {props.type === 'unsupported-type' && (
        <ChatIcon symbol="warning" assistiveText="Warning" />
      )}
      {props.children && (
        <span aria-hidden={props.hasSneakPeek ? 'true' : null}>
          {props.children}
        </span>
      )}
      {props.type === 'delivery-failure' && (
        <ChatMessageDeliveryFailure>
          {props.deliveryFailureReason}
        </ChatMessageDeliveryFailure>
      )}
    </div>
    {props.type === 'delivery-failure' ? (
      <div className="slds-grid slds-grid_align-spread slds-grid_vertical-align-start">
        {props.name &&
          props.timeStamp &&
          !props.isPast && (
            <ChatMessageTimeStamp
              name={props.name}
              timeStamp={props.timeStamp}
            />
          )}
        {props.type === 'delivery-failure' && (
          <ChatMessageAction symbol="redo" actionTitle="Resend" />
        )}
      </div>
    ) : (
      props.name &&
      props.timeStamp &&
      !props.isPast && (
        <ChatMessageTimeStamp name={props.name} timeStamp={props.timeStamp} />
      )
    )}
  </div>
);

const ChatMessageTimeStamp = props => (
  <div
    className="slds-chat-message__meta"
    aria-label={`said ${props.name} at ${props.timeStamp}`}
  >
    {props.isPast ? <b>{props.name}</b> : props.name} &bull; {props.timeStamp}
  </div>
);

const ChatMessageDeliveryFailure = props => (
  <div className="slds-chat-message__text_delivery-failure-reason" role="alert">
    <ChatIcon symbol="error" />
    <span>{props.children}</span>
  </div>
);

const ChatMessageAction = props => (
  <button className="slds-button slds-chat-message__action slds-m-top_xxx-small">
    <UtilityIcon
      assistiveText={false}
      title={false}
      className="slds-icon_xx-small"
      containerClassName="slds-chat-icon"
      symbol={props.symbol}
    />
    <span>{props.actionTitle}</span>
  </button>
);

export const ChatAvatar = props => (
  <Avatar className="slds-avatar_circle slds-chat-avatar">
    <abbr
      className="slds-avatar__initials slds-avatar__initials_inverse"
      title={props.name}
    >
      {props.initials}
    </abbr>
  </Avatar>
);

export const ChatEvent = props => (
  <div
    className={classNames('slds-chat-event', {
      'slds-has-error': props.hasError
    })}
    role={props.hasError && 'alert'}
  >
    <div className="slds-chat-event__rule" />
    <div className="slds-chat-event__body">
      <ChatIcon symbol={props.symbol} assistiveText={props.iconAssistiveText} />
      <p>
        {props.children} &bull; {props.timeStamp}
      </p>
    </div>
    <div className="slds-chat-event__rule" />
    {props.agentMessage && (
      <div className="slds-chat-event__agent-message">{props.agentMessage}</div>
    )}
  </div>
);

export const ChatBookend = props => (
  <div
    className={classNames('slds-chat-bookend', {
      'slds-chat-bookend_stop': props.type === 'stop'
    })}
  >
    <ChatIcon symbol={props.type === 'start' ? 'chat' : 'end_chat'} />
    <p>
      Chat {props.type === 'stop' ? 'ended' : 'started'} by <b>{props.name}</b>{' '}
      &bull; {props.timeStamp}
    </p>
  </div>
);

export const ChatIcon = props => (
  <UtilityIcon
    assistiveText={props.assistiveText || false}
    className="slds-icon_x-small"
    containerClassName="slds-chat-icon"
    symbol={props.symbol}
    title={props.assistiveText || false}
  />
);
