<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Tabs Release Notes

<!-- ## [Unreleased] -->

## 2.10.0

### Changed

- For touch devices:
  - Changed the text color of `.slds-tabs-mobile__item` to Gray Color 12
  - Removed the active color from the button nested within `.slds-tabs-mobile__item` so the text color does not change on press (background color still changes on press)

## 2.8.3

### Changed

- Removed animation when invoking an active tab

## 2.8.0

### Added

- Added examples of icon use in default tabs
- Sub Tabs can now show 3 different statuses to alert users - error, success, and warning

### Removed

- Removed `slds-text-title_caps` from scrolling tab items.

## 2.7.0

### Added
- Added `slds-tabs_medium` and `slds-tabs_large` to modify the `font-size` and spacing of the tab items
- Added animation when activating a tab item
- Added `slds-tabs_default__overflow-button` to tabs with overflow so the Button Menu component can be slotted inside the tab item
- Extended the documentation for mobile tabs to include panels
  - When drilling into a mobile tab, a panel slides in displaying that tab's content
  - Check out the [Tabs On Mobile](https://lightningdesignsystem.com/components/tabs/#On-Mobile) section for more details
- Animations and transitions for `:hover` and `slds-is-active` states.

### Changed
- Replaced spacing tokens with variable spacing tokens to respond to a user's densification setting
- Removed title caps from tab items
- Removed letter spacing from tab items
- Increased height of bar when a tab is active
- Changed HTML on [Tabs with Overflow](/components/scoped-tabs/?example=overflowing-items&variant=base) example so a Button Menu component is the trigger for the overflow menu

### Fixed
- Updated `slds-tabs-mobile` to have a white background by default, instead of a transparent background.
- Improved the color contrast of the text of a sub tab when it is in focus
- HTML validation error on sub tab indicators, swapped a `div` for a `span`
