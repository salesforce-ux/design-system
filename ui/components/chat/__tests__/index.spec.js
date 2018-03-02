/* eslint-env jest */
import React from 'react';

import {
  Chat,
  ChatList,
  ChatListItem,
  ChatMessage,
  ChatMessageBody,
  ChatAvatar,
  ChatEvent,
  ChatBookend,
  ChatIcon
} from '../';
import { DoctypeIcon } from '../../icons/doctype/example';

import createHelpers from '../../../../jest.helpers';

const { matchesMarkupAndStyle } = createHelpers(__dirname);

describe('Chat container', () => {
  it('renders a chat container', () => matchesMarkupAndStyle(<Chat />));

  it('renders a past chat container', () =>
    matchesMarkupAndStyle(<Chat isPast />));
});

describe('Chat list', () => {
  it('renders a chat list', () => matchesMarkupAndStyle(<ChatList />));

  it('renders a chat list item', () => matchesMarkupAndStyle(<ChatListItem />));

  it('renders a chat list item for bookends', () =>
    matchesMarkupAndStyle(<ChatListItem type="bookend" />));

  it('renders a chat list item for events', () =>
    matchesMarkupAndStyle(<ChatListItem type="event" />));

  it('renders a chat list item for inbound messages', () =>
    matchesMarkupAndStyle(<ChatListItem type="inbound" />));

  it('renders two consecutive inbound list items for inbound messages', () =>
    matchesMarkupAndStyle(
      <ChatList>
        <ChatListItem type="inbound" />
        <ChatListItem type="inbound" />
      </ChatList>
    ));

  it('renders a chat list item for outbound messages', () =>
    matchesMarkupAndStyle(<ChatListItem type="outbound" />));

  it('renders two consecutive outbound list items for outbound messages', () =>
    matchesMarkupAndStyle(
      <ChatList>
        <ChatListItem type="bound" />
        <ChatListItem type="bound" />
      </ChatList>
    ));
});

describe('Chat avatar', () => {
  it('renders a chat avatar', () =>
    matchesMarkupAndStyle(<ChatAvatar name="Simon Taggart" initials="ST" />));
});

describe('Chat message', () => {
  it('renders a chat message container', () =>
    matchesMarkupAndStyle(<ChatMessage />));

  it('renders a chat message container with styles for a faux avatar', () =>
    matchesMarkupAndStyle(<ChatMessage hasFauxAvatar />));
});

describe('Chat message body', () => {
  it('renders a default chat message body', () =>
    matchesMarkupAndStyle(<ChatMessageBody>message</ChatMessageBody>));

  it('renders an inbound chat message body', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="inbound">message</ChatMessageBody>
    ));

  it('renders an outbound chat message body', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="outbound">message</ChatMessageBody>
    ));

  it('renders an outbound chat message body, by another agent', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="outbound-agent">message</ChatMessageBody>
    ));

  it('renders a default chat message body with name and timestamp meta data', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody name="Simon Taggart" timeStamp="5:09 PM">
        message
      </ChatMessageBody>
    ));

  it('renders a inbound chat message body with a name and timestamp meta data', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="inbound" name="Simon Taggart" timeStamp="5:09 PM">
        message
      </ChatMessageBody>
    ));

  it('renders a outbound chat message body with a name and timestamp meta data', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="outbound" name="Simon Taggart" timeStamp="5:09 PM">
        message
      </ChatMessageBody>
    ));

  it('renders a outbound chat message body from another agent, with a name and timestamp meta data', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody
        type="outbound-agent"
        name="Simon Taggart"
        timeStamp="5:09 PM"
      >
        message
      </ChatMessageBody>
    ));

  it('renders a past chat message body, with a name and timestamp meta data', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody
        isPast
        type="outbound-agent"
        name="Simon Taggart"
        timeStamp="5:09 PM"
      >
        message
      </ChatMessageBody>
    ));

  it('renders an inbound chat message body with a link', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody
        isPast
        type="inbound"
        name="Simon Taggart"
        timeStamp="5:09 PM"
      >
        <a href="#">a link</a>
      </ChatMessageBody>
    ));

  it('renders an outbound chat message body with a link', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody
        isPast
        type="outbound"
        name="Simon Taggart"
        timeStamp="5:09 PM"
      >
        <a href="#">a link</a>
      </ChatMessageBody>
    ));

  it('renders a chat message body with multiline text', () => {
    const exampleMultiLineText =
      'So sorry to hear that. Let me transfer you to a more technical support member. Thank you for your patients. \n \n Have you tried visiting our help site?';
    return matchesMarkupAndStyle(
      <ChatMessageBody>{exampleMultiLineText}</ChatMessageBody>
    );
  });

  it('renders an inbound chat message body that shows customer is typing', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="inbound" isTyping isPaused />
    ));

  it('renders an inbound chat message body that shows sneak peak', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody type="inbound" hasSneakPeek isTyping isPaused>
        Message
      </ChatMessageBody>
    ));

  it('renders an inbound chat message body with an attachment', () =>
    matchesMarkupAndStyle(
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
        <a href="#">filename_of_attachment.jpg</a>
      </ChatMessageBody>
    ));

  it('renders an inbound chat message body with an unsupported message type', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody
        type="unsupported-type"
        name="Ayesha Mazumdar"
        timeStamp="4:59 PM"
      >
        Message type is not supported
      </ChatMessageBody>
    ));

  it('renders an outbound chat message body with a delivery failure', () =>
    matchesMarkupAndStyle(
      <ChatMessageBody
        type="delivery-failure"
        deliveryFailureReason="Message was not delivered because Andy stopped receiving messages."
        name="Ayesha Mazumdar"
        timeStamp="4:59 PM"
      >
        It might be the cause of the problem
      </ChatMessageBody>
    ));
});

describe('Chat Icon', () => {
  it('renders a chat icon', () =>
    matchesMarkupAndStyle(<ChatIcon symbol="priority" />));

  it('renders a chat icon with assistive text', () =>
    matchesMarkupAndStyle(
      <ChatIcon symbol="error" iconAssistiveText="warning" />
    ));
});

describe('Chat event', () => {
  it('renders a basic chat event', () =>
    matchesMarkupAndStyle(
      <ChatEvent symbol="priority">
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a basic chat event with a timestamp', () =>
    matchesMarkupAndStyle(
      <ChatEvent symbol="priority" timeStamp="5:09 PM">
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a basic chat event with a message from an agent', () =>
    matchesMarkupAndStyle(
      <ChatEvent
        symbol="priority"
        timeStamp="5:09 PM"
        agentMessage="Agent message"
      >
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a errored chat event with a timestamp', () =>
    matchesMarkupAndStyle(
      <ChatEvent hasError symbol="priority" timeStamp="5:09 PM">
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a errored chat event with a message from an agent', () =>
    matchesMarkupAndStyle(
      <ChatEvent
        hasError
        symbol="priority"
        timeStamp="5:09 PM"
        agentMessage="Agent message"
      >
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));
});

describe('Chat bookend', () => {
  it('renders a chat start bookend', () =>
    matchesMarkupAndStyle(<ChatBookend type="start" name="Simon Taggart" />));

  it('renders a chat start bookend with a timestamp', () =>
    matchesMarkupAndStyle(
      <ChatBookend type="start" name="Simon Taggart" timeStamp="5:08 PM" />
    ));

  it('renders a chat stop bookend', () =>
    matchesMarkupAndStyle(<ChatBookend type="stop" name="Simon Taggart" />));

  it('renders a chat stop bookend with a timestamp', () =>
    matchesMarkupAndStyle(
      <ChatBookend type="stop" name="Simon Taggart" timeStamp="5:08 PM" />
    ));
});
