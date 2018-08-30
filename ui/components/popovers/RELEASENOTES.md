<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Popovers Release Notes

<!-- ## [Unreleased] -->

## 2.7.0

### Added
- Added `slds-nubbin_*-corner` modifier classes to place nubbin elements at the corner of a Popover.

### Fixed

- Fixed a bug where long strings of text would overflow the popover boundary. Popover body, header, and footer now include `word-wrap: break-word`.
- Increased the contrast for focused links and buttons in our inversed popovers, Walkthrough and Feature.
- Fixed a bug that allowed `slds-popover_small` to grow larger than its expected width.
- Buttons with the new BEM syntax used within an inverse themed component no longer have their text color overridden
