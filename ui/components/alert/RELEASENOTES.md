<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Alert Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added reassignment of Styling Hooks for component states.

## 2.14.0

### Fixed

- Fix incorrect Styling Hook name for `--sds-c-alert-text-color-warning`.

### Removed

- Removed component level styling hooks for status states.

## 2.13.3

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-alert-color-text` => `--sds-c-alert-text-color`.

## 2.14.0

### Changed

Refactored the component markup to function with or without theme utility classes.

## 2.13.0

### Added

- Enabled styling hooks for alert. See alert's styling hooks overview table for a full listing of the currently available hooks.

## 2.8.0

### Fixed

- Added `slds-button_icon-small` to the close button on alerts to fix the sizing of the click target.
- Improved the contrast for focus and hover states on links and buttons in alerts

## 2.7.0

### Changed

- Changed HTML so the button icon can be slotted into the `slds-notify__close` element

### Fixed

- Buttons with the new BEM syntax used within an inverse themed component no longer have their text color overridden
