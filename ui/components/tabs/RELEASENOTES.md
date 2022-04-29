<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Tabs Release Notes

<!-- ## [Unreleased] -->

## 2.19.0

### Added

- Added `role="img"` to unread indicator dot to comply with accessibility usage rules for `aria-label`

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added reassignment of Styling Hooks for component states.
## 2.15.0

### Added

- Added additional styling hooks. See tab's styling hooks overview table for a full listing of the currently available hooks.

### Changed

- Adjusted color of unsaved tab indicator asterisk to comply with accessibility color contrast rules for active tabs and tabs with notification.
- Removed white `background-color` from `.slds-tabs_default` to expose surface color of the tabs parent container.
- The `back` icon present in tabs on mobile has been replaced by `chevronleft`. This is an inherited change from panels and it makes the icon consistent between the drilled-in states.

## 2.13.3

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-tabs-item-color-text` => `--sds-c-tabs-item-text-color`.

## 2.13.0

### Added

- Enabled styling hooks for tab. See tab's styling hooks overview table for a full listing of the currently available hooks.

## 2.11.0

### Changed

- For touch devices:
  - Removed the focus styling from the button nested within `.slds-tabs-mobile__item` so the text color does not change on press for mobile (background color still changes on press)

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
- Subtabs can now show 3 different statuses to alert users - error, success, and warning

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
- Improved the color contrast of the text of a subtab when it is in focus
- HTML validation error on subtab indicators, swapped a `div` for a `span`
