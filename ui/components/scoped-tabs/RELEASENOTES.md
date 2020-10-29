<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Scoped Tabs Release Notes

<!-- ## [Unreleased] -->
## 2.14.0

### Removed

- Removed variant specific styling hooks for scoped tabs.

## 2.13.3

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-tabs-scoped-color-text` => `--sds-c-tabs-scoped-text-color`.

## 2.13.0

### Added

- Enabled styling hooks for scoped tab. See scoped tab's styling hooks overview table for a full listing of the currently available hooks.

## 2.7.0

### Added

- Added `slds-tabs_medium` and `slds-tabs_large` to modify the `font-size` and spacing of the tab items
- Added `slds-tabs_scoped__overflow-button` to tabs with overflow so the Button Menu component can be slotted inside the tab item

### Changed

- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
- Changed the color of a tab item when a tab is active
- Changed HTML on [Tabs with Overflow](/components/scoped-tabs/?example=overflowing-items&variant=base) example so a Button Menu component is the trigger for the overflow menu
