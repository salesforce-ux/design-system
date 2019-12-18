<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Chat Release Notes

<!-- ## [Unreleased] -->

## 2.11.0

### Fixed

- Fixed an issue where some message text containers would have a width equal to the message meta even though the container contained less text and should have had a smaller width.

## 2.10.0

### Changed

- Horizontal rules have been removed from event messages for an improved chat experience, `.slds-chat-event__rule` is no longer used and marked as deprecated
- Bookends now span full width which allows the bookend borders to be visually flush with their container `.slds-chat-list`
- Horizontal padding added to `.slds-chat-bookend` to compensate for the negative margins used to make the bookend span full width

## 2.8.0

### Changed

- Added `aria-hidden="true"` to the Avatar for inbound chat messages to avoid duplication of the user's name for screen reader users

## 2.7.0

### Added

- File component (image and file content types) is now natively supported within an inbound and outbound message.

### Fixed

- Outbound messages that contain a string of text shorter than the `max-width` no longer has unnecessary white space.
- Removed unnecessary whitespace when sending messages with a small amount of text (.e.g, "Hi there.").
