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

export default (
  <Chat isPast>
    <ChatList>
      <ChatListItem>
        <ChatMessage>
          <ChatMessageBody isPast name="Taylor Watson-Rice" timeStamp="4:59 PM">
            Hi, my CloudWidget only speaks French
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    </ChatList>
  </Chat>
);

export const states = [
  {
    id: 'outbound-message',
    label: 'Outbound',
    element: (
      <Chat isPast>
        <ChatList>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Jason Dewar" timeStamp="5:02 PM">
                Hi Andy, thank you for contacting Widget Support. Can you please
                tell me what language you are trying to program on your
                CloudWidget?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  }
];

export const examples = [
  {
    id: 'chat-list-past',
    label: 'Past chat list',
    element: (
      <Chat isPast>
        <ChatList>
          <ChatListItem type="bookend">
            <ChatBookend
              type="start"
              name="Andy Martinez"
              timeStamp="4:58 PM"
            />
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody
                isPast
                name="Taylor Watson-Rice"
                timeStamp="4:59 PM"
              >
                Hi, my CloudWidget only speaks French
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Jason Dewar" timeStamp="5:02 PM">
                Hi Andy, thank you for contacting Widget Support. Can you please
                tell me what language you are trying to program on your
                CloudWidget?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Jason Dewar" timeStamp="5:03 PM">
                Have you tried turning it off and on again?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Andy Martinez" timeStamp="5:09 PM">
                yes, of course
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Jason Dewar" timeStamp="5:15 PM">
                Sorry to hear that. Let me transfer you to a more technical
                support member. Thank you for your patients!
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="event">
            <ChatEvent
              agentMessage="Andy needs help changing the language on his CloudWidget"
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
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Amber Cann" timeStamp="5:23 PM">
                Hi Andy, my name is Amber and I can help you solve your issue.
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Andy Martinez" timeStamp="5:29 PM">
                Nevermind, I speak french.
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="bookend">
            <ChatBookend type="stop" name="Andy Martinez" timeStamp="5:30 PM" />
          </ChatListItem>
          <ChatListItem type="bookend">
            <ChatBookend
              type="start"
              name="Andy Martinez"
              timeStamp="4:58 PM"
            />
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Andy Martinez" timeStamp="4:59 PM">
                Hello, me again. I tried following this guide{' '}
                <a href="javascript:void(0)">
                  https://www.somehelpsite.com/CloudWidget-speaks-french
                </a>
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Jason Dewar" timeStamp="5:02 PM">
                Hi Andy, thank you for contacting Widget Support again. What can
                I help you with?
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem>
            <ChatMessage>
              <ChatMessageBody isPast name="Andy Martinez" timeStamp="5:09 PM">
                Nevermind, I figured it out.
              </ChatMessageBody>
            </ChatMessage>
          </ChatListItem>
          <ChatListItem type="bookend">
            <ChatBookend type="stop" name="Andy Martinez" timeStamp="5:09 PM" />
          </ChatListItem>
        </ChatList>
      </Chat>
    )
  }
];
