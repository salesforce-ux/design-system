<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Chat Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Added

- Component-level `RELEASENOTES.md` file.
- File component (image and file content types) is now natively supported within an inbound and outbound message.

### Fixed

- Outbound messages that contain a string of text shorter than the `max-width` no longer has unnecessary white space.
- Removed unnecessary whitespace when sending messages with a small amount of text (.e.g, "Hi there.").
