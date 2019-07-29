<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Popovers Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Added
- Added a new 'prompt' variant of popover useful for showing non-blocking messages needing interaction.
- Added `@noflip` annotation to left and right nubbin selectors.

## 2.8.0

### Fixed

- Improved the contrast for focus and hover states on the close button.

### Added

- Added `slds-popover_panel__label` to increase panel label font size to 14px and apply bold font weight.
- Added `slds-popover__footer_form` to center align content and add a background for footers of form popovers.

### Removed

- Removed `slds-text-title_caps` from panel labels.

## 2.7.0

### Added
- Added `slds-nubbin_*-corner` modifier classes to place nubbin elements at the corner of a Popover.

### Fixed

- Fixed a bug where long strings of text would overflow the popover boundary. Popover body, header, and footer now include `word-wrap: break-word`.
- Increased the contrast for focused links and buttons in our inversed popovers, Walkthrough and Feature.
- Fixed a bug that allowed `slds-popover_small` to grow larger than its expected width.
- Buttons with the new BEM syntax used within an inverse themed component no longer have their text color overridden.
