// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';

import {
  Chat,
  ChatList,
  ChatListItem,
  ChatMessage,
  ChatMessageBody,
  ChatAvatar,
  ChatEvent,
  ChatBookend
} from '../.';
import { DoctypeIcon } from '../../icons/doctype/example';

const exampleMultiLineText =
  'So sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patients. \n \n Have you tried visiting our help site?';

export default (
  <Chat>
    <ChatList>
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatMessageBody
            type="inbound"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            Hi, my Alexa only speaks French
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    </ChatList>
  </Chat>
);

export const states = [
  {
    id: 'inbound-with-avatar',
    label: 'Inbound With Avatar',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
              <ChatMessageBody
                type="inbound"
                name="Taylor Watson-Rice"
                timeStamp="4:59 PM"
              >
                Hi, my Alexa only speaks French and I'm having a lot of trouble.
                I've followed this article but it doesn't work{' '}
                <a href="javascript:void(0)">
                  https://www.somehelpsite.com/alexa-speaks-french
                </a>
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'inbound-customer-is-typing',
    label: 'Inbound Customer is Typing',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
              <ChatMessageBody isTyping type="inbound" />
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'inbound-customer-is-typing-with-sneak-peak',
    label: 'Inbound Customer is Typing with Sneak Peak',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
              <ChatMessageBody isTyping hasSneakPeak type="inbound">
                Hi, my Alexa only speaks French and I'm having a lot of trouble
                trying to make i
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'inbound-with-attachment',
    label: 'Inbound With Attachment',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
              <ChatMessageBody
                type="inbound"
                name="Taylor Watson-Rice"
                timeStamp="4:59 PM"
              >
                <DoctypeIcon
                  assistiveText="Attachment"
                  className="slds-icon_small"
                  containerClassName="slds-chat-icon"
                  symbol="attachment"
                  title="Attachment"
                />
                <a href="javascript:void(0)">filename_of_attachment.jpg</a>
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'outbound',
    label: 'Outbound',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody
                type="outbound"
                name="Amber Cann"
                timeStamp="4:59 PM"
              >
                Hi Taylor, thank you for contacting Amazon Support. Can you
                please tell me what language you are trying to program on your
                Amazon Echo?{' '}
                <a href="javascript:void(0)">http://www/amazon.com</a>
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'outbound-agent',
    label: 'Outbound Other Agent',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody
                type="outbound-agent"
                name="Jason Dewar"
                timeStamp="4:59 PM"
              >
                {exampleMultiLineText}
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'event',
    label: 'Event',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="event">
            <ChatEvent symbol="priority" timeStamp="5:09 PM">
              <b>Jason Dewar</b> raised a flag
            </ChatEvent>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'event-agent-message',
    label: 'Event - With agent message',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="event">
            <ChatEvent
              agentMessage="Andy needs help changing the language on his Amazon Echo"
              symbol="change_owner"
              timeStamp="5:19 PM"
            >
              <b>Jason Dewar</b> sent a transfer request to <b>Amber Cann</b>
            </ChatEvent>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'event-error',
    label: 'Event - Error',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="event">
            <ChatEvent
              hasError
              symbol="error"
              iconAssistiveText="warning"
              timeStamp="5:06 PM"
            >
              The file sent by <b>Andy Martinez</b> is too large
            </ChatEvent>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'bookend',
    label: 'Bookend Start Chat',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="bookend">
            <ChatBookend
              type="start"
              name="Taylor Watson-Rice"
              timeStamp="4:59 PM"
            />
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'bookend-stop',
    label: 'Bookend Stop Chat',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="bookend">
            <ChatBookend
              type="stop"
              name="Taylor Watson-Rice"
              timeStamp="4:59 PM"
            />
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  }
];

export const examples = [
  {
    id: 'consecutive-inbound',
    label: 'Consecutive Inbound',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
              <ChatMessageBody type="inbound">
                Hi, my Alexa only speaks French
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="inbound">
            <ChatMessage hasFauxAvatar>
              <ChatMessageBody
                type="inbound"
                name="Taylor Watson-Rice"
                timeStamp="4:59 PM"
              >
                I'm having trouble changing that.
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'consecutive-outbound',
    label: 'Consecutive Outbound',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody type="outbound">
                Hi Andy, thank you for contacting Amazon Support. Can you please
                tell me what language you are trying to program on your Amazon
                Echo?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody
                type="outbound"
                name="Taylor Watson-Rice"
                timeStamp="4:59 PM"
              >
                It might be the cause of the problem
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  },
  {
    id: 'chat-list',
    label: 'Chat List',
    element: (
      <Chat>
        <ChatList>
          <ChatListItem type="bookend">
            <ChatBookend
              type="start"
              name="Andy Martinez"
              timeStamp="4:58 PM"
            />
          </ChatListItem>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="AM" name="Andy Martinez" />
              <ChatMessageBody
                type="inbound"
                name="Andy Martinez"
                timeStamp="4:59 PM"
              >
                Hi, my Alexa only speaks French
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody type="outbound-agent">
                Hi Andy, thank you for contacting Amazon Support. Can you please
                tell me what language you are trying to program on your Amazon
                Echo?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody
                type="outbound-agent"
                name="Jason Dewar"
                timeStamp="5:02 PM"
              >
                Have you tried turning it off and on again?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="AM" name="Andy Martinez" />
              <ChatMessageBody
                type="inbound"
                name="Andy Martinez"
                timeStamp="5:09 PM"
              >
                yes, of course
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody
                type="outbound-agent"
                name="Jason Dewar"
                timeStamp="5:15 PM"
              >
                Sorry ot hear that. Let me transfer you to a more technical
                support member. Thank you for your patients!
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="event">
            <ChatEvent
              agentMessage="Andy needs help changing the language on his Amazon Echo"
              symbol="change_owner"
              timeStamp="5:19 PM"
            >
              <b>Jason Dewar</b> sent a transfer request to{' '}
              <b>Technical Support Team</b>
            </ChatEvent>
          </ChatListItem>
          <ChatListItem type="event">
            <ChatEvent symbol="change_owner" timeStamp="5:20 PM">
              <b>Technical Support Team</b> accepted the transfer request
            </ChatEvent>
          </ChatListItem>
          <ChatListItem type="event">
            <ChatEvent symbol="change_owner" timeStamp="5:22 PM">
              <b>Amber Cann</b> accepted this chat
            </ChatEvent>
          </ChatListItem>
          <ChatListItem type="outbound">
            <ChatMessage>
              <ChatMessageBody
                type="outbound"
                name="Amber Cann"
                timeStamp="5:23 PM"
              >
                Hi Andy, my name is Amber and I can help you solve your issue.
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="inbound">
            <ChatMessage>
              <ChatAvatar initials="AM" name="Andy Martinez" />
              <ChatMessageBody
                type="inbound"
                name="Andy Martinez"
                timeStamp="5:29 PM"
              >
                Nevermind, I speak french.
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="bookend">
            <ChatBookend type="stop" name="Andy Martinez" timeStamp="5:30 PM" />
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  }
];
