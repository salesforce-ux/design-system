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
import { File } from '../../files';
import { DoctypeIcon } from '../../icons/doctype/example';
import createHelpers from '../../../../jest.helpers';

const { matchesMarkup } = createHelpers(__dirname);

describe('Chat container', () => {
  it('renders a chat container', () => matchesMarkup(<Chat />));

  it('renders a past chat container', () => matchesMarkup(<Chat isPast />));
});

describe('Chat list', () => {
  it('renders a chat list', () => matchesMarkup(<ChatList />));

  it('renders a chat list item', () => matchesMarkup(<ChatListItem />));

  it('renders a chat list item for bookends', () =>
    matchesMarkup(<ChatListItem type="bookend" />));

  it('renders a chat list item for events', () =>
    matchesMarkup(<ChatListItem type="event" />));

  it('renders a chat list item for inbound messages', () =>
    matchesMarkup(<ChatListItem type="inbound" />));

  it('renders two consecutive inbound list items for inbound messages', () =>
    matchesMarkup(
      <ChatList>
        <ChatListItem type="inbound" />
        <ChatListItem type="inbound" />
      </ChatList>
    ));

  it('renders a chat list item for outbound messages', () =>
    matchesMarkup(<ChatListItem type="outbound" />));

  it('renders two consecutive outbound list items for outbound messages', () =>
    matchesMarkup(
      <ChatList>
        <ChatListItem type="bound" />
        <ChatListItem type="bound" />
      </ChatList>
    ));
});

describe('Chat avatar', () => {
  it('renders a chat avatar', () =>
    matchesMarkup(<ChatAvatar name="Simon Taggart" initials="ST" />));
  it('renders a chat avatar with aria hidden equals true', () =>
    matchesMarkup(
      <ChatAvatar name="Simon Taggart" initials="ST" ariaHidden="true" />
    ));
});

describe('Chat message', () => {
  it('renders a chat message container', () => matchesMarkup(<ChatMessage />));

  it('renders a chat message container with styles for a faux avatar', () =>
    matchesMarkup(<ChatMessage hasFauxAvatar />));
});

describe('Chat message body', () => {
  it('renders a default chat message body', () =>
    matchesMarkup(<ChatMessageBody>message</ChatMessageBody>));

  it('renders an inbound chat message body', () =>
    matchesMarkup(<ChatMessageBody type="inbound">message</ChatMessageBody>));

  it('renders an outbound chat message body', () =>
    matchesMarkup(<ChatMessageBody type="outbound">message</ChatMessageBody>));

  it('renders an outbound chat message body, by another agent', () =>
    matchesMarkup(
      <ChatMessageBody type="outbound-agent">message</ChatMessageBody>
    ));

  it('renders a default chat message body with name and timestamp meta data', () =>
    matchesMarkup(
      <ChatMessageBody name="Simon Taggart" timeStamp="5:09 PM">
        message
      </ChatMessageBody>
    ));

  it('renders a inbound chat message body with a name and timestamp meta data', () =>
    matchesMarkup(
      <ChatMessageBody type="inbound" name="Simon Taggart" timeStamp="5:09 PM">
        message
      </ChatMessageBody>
    ));

  it('renders a outbound chat message body with a name and timestamp meta data', () =>
    matchesMarkup(
      <ChatMessageBody type="outbound" name="Simon Taggart" timeStamp="5:09 PM">
        message
      </ChatMessageBody>
    ));

  it('renders a outbound chat message body from another agent, with a name and timestamp meta data', () =>
    matchesMarkup(
      <ChatMessageBody
        type="outbound-agent"
        name="Simon Taggart"
        timeStamp="5:09 PM"
      >
        message
      </ChatMessageBody>
    ));

  it('renders a past chat message body, with a name and timestamp meta data', () =>
    matchesMarkup(
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
    matchesMarkup(
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
    matchesMarkup(
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
    return matchesMarkup(
      <ChatMessageBody>{exampleMultiLineText}</ChatMessageBody>
    );
  });

  it('renders an inbound chat message body that shows customer is typing', () =>
    matchesMarkup(<ChatMessageBody type="inbound" isTyping isPaused />));

  it('renders an inbound chat message body that shows sneak peak', () =>
    matchesMarkup(
      <ChatMessageBody type="inbound" hasSneakPeek isTyping isPaused>
        Message
      </ChatMessageBody>
    ));

  it('renders an inbound chat message body with an unsupported message type', () =>
    matchesMarkup(
      <ChatMessageBody
        type="unsupported-type"
        name="Ayesha Mazumdar"
        timeStamp="4:59 PM"
      >
        Message type is not supported
      </ChatMessageBody>
    ));

  it('renders an outbound chat message body with a delivery failure', () =>
    matchesMarkup(
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

describe('Chat Images and Files', () => {
  it('renders an inbound chat message body with an attachment', () =>
    matchesMarkup(
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

  it('renders a loading inbound chat message item with image', () =>
    matchesMarkup(
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
          <ChatMessageBody
            type="inbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
            isLoading
          >
            <File has4x3Crop isLoading noCaption />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders a loading inbound chat message item with file', () =>
    matchesMarkup(
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
          <ChatMessageBody
            type="inbound"
            messageType="file"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
            isLoading
          >
            <File
              has4x3Crop
              hasTitleCard
              sprite="utility"
              symbol="image"
              isLoading
            />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an inbound chat message item with image and actions', () =>
    matchesMarkup(
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
          <ChatMessageBody
            type="inbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File hasActions iconColor="white" noCaption hasImage />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an outbound chat message item with image and actions', () =>
    matchesMarkup(
      <ChatListItem type="outbound">
        <ChatMessage>
          <ChatMessageBody
            type="outbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File hasActions iconColor="white" noCaption hasImage />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an inbound chat message item with portrait image and actions', () =>
    matchesMarkup(
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
          <ChatMessageBody
            type="inbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File hasActions iconColor="white" noCaption hasImagePortrait />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an inbound chat message item with portrait image and title', () =>
    matchesMarkup(
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
          <ChatMessageBody
            type="inbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File
              hasTitleCard
              symbol="image"
              title="Image.jpg"
              hasActions
              hasImage
            />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an outbound chat message item with portrait image and actions', () =>
    matchesMarkup(
      <ChatListItem type="outbound">
        <ChatMessage>
          <ChatMessageBody
            type="outbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File hasActions iconColor="white" noCaption hasImagePortrait />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an outbound chat message item with portrait image and title', () =>
    matchesMarkup(
      <ChatListItem type="outbound">
        <ChatMessage>
          <ChatMessageBody
            type="outbound"
            messageType="image"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File
              hasTitleCard
              symbol="image"
              title="Image.jpg"
              hasActions
              hasImage
            />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an inbound chat message item with file and title', () =>
    matchesMarkup(
      <ChatListItem type="inbound">
        <ChatMessage>
          <ChatAvatar initials="TW" name="Taylor Watson-Rice" />
          <ChatMessageBody
            type="inbound"
            messageType="file"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File
              has4x3Crop
              hasTitleCard
              symbol="pdf"
              title="File.pdf"
              hasActions
              hasImage
            />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));

  it('renders an outbound chat message item with file and title', () =>
    matchesMarkup(
      <ChatListItem type="outbound">
        <ChatMessage>
          <ChatMessageBody
            type="outbound"
            messageType="file"
            name="Taylor Watson-Rice"
            timeStamp="4:59 PM"
          >
            <File
              has4x3Crop
              hasTitleCard
              symbol="pdf"
              title="File.pdf"
              hasActions
              hasImage
            />
          </ChatMessageBody>
        </ChatMessage>
      </ChatListItem>
    ));
});

describe('Chat Icon', () => {
  it('renders a chat icon', () =>
    matchesMarkup(<ChatIcon symbol="priority" />));

  it('renders a chat icon with assistive text', () =>
    matchesMarkup(<ChatIcon symbol="error" iconAssistiveText="warning" />));
});

describe('Chat event', () => {
  it('renders a basic chat event', () =>
    matchesMarkup(
      <ChatEvent symbol="priority">
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a basic chat event with a timestamp', () =>
    matchesMarkup(
      <ChatEvent symbol="priority" timeStamp="5:09 PM">
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a basic chat event with a message from an agent', () =>
    matchesMarkup(
      <ChatEvent
        symbol="priority"
        timeStamp="5:09 PM"
        agentMessage="Agent message"
      >
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a errored chat event with a timestamp', () =>
    matchesMarkup(
      <ChatEvent hasError symbol="priority" timeStamp="5:09 PM">
        <b>Amber Cann</b> did a thing
      </ChatEvent>
    ));

  it('renders a errored chat event with a message from an agent', () =>
    matchesMarkup(
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
    matchesMarkup(<ChatBookend type="start" name="Simon Taggart" />));

  it('renders a chat start bookend with a timestamp', () =>
    matchesMarkup(
      <ChatBookend type="start" name="Simon Taggart" timeStamp="5:08 PM" />
    ));

  it('renders a chat stop bookend', () =>
    matchesMarkup(<ChatBookend type="stop" name="Simon Taggart" />));

  it('renders a chat stop bookend with a timestamp', () =>
    matchesMarkup(
      <ChatBookend type="stop" name="Simon Taggart" timeStamp="5:08 PM" />
    ));
});
