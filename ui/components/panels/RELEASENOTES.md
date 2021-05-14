<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Panels Release Notes

<!-- ## [Unreleased] -->

## 2.15.7

### Added

- Added `aria-pressed` attribute to Panel toggle button

## 2.15.0

### Added

- Added a new element, `.slds-panel__header-actions`, within the panel header to hold secondary actions that affect the entire panel. You can find the close button within the new element.
- Added an example of the new secondary actions element that contains an overflow menu with actions.
- Added additional demo elements to the [panels for filtering](/components/panels/#Panels-for-Filtering) example: top bar with accompanying button icon (`filterList`) that toggles the panel with filtering content, two-column content layout, and panel toggling behavior.
- Added `aria-expanded` and `aria-controls` to the button that toggles the panel.

### Changed

- Updated the icon in the [open as a drawer](/components/panels/#Open-as-a-drawer) example from `filterList` to `toggle_panel_left`. The new icon better represents the action evoked by the button icon.
- Updated the icon in [drilled-in state](/components/panels/#Drilled-In-State) example that takes you back to the previous panel from `back` to `chevronleft`. This update makes the icon consistent between drilled-in states.

## 2.7.0

### Changed

- Updated panel headers to have left aligned text by default. To center the header title, use the class `slds-panel__header_align-center`.
- Updated `slds-panel_body` padding to be 0.75rem around instead of 1rem.
- Updated our documentation to reflect that panels always have a close button, but may also have a back button if panel was invoked by drilling in.

### Fixed

- Forced panel buttons to keep their square shape by preventing `flex-shrink`.
