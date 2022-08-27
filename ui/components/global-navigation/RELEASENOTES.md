<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Global Navigation Release Notes

<!-- ## [Unreleased] -->

## 2.19.0

### Added

- Added `role="img"` to unread indicator dot to comply with accessibility usage rules for `aria-label`


## 2.13.0

### Changed

- Adjusted color of unsaved tab indicator asterisk to comply with accessibility color contrast rules

## 2.8.3

### Fixed

- Fixed issue where a navigation item would lose its background color when active and/or hovered.

## 2.8.0

### Added

- Tabbed Navigation Bar can now show 3 different statuses to alert users - error, success, and warning

### Removed

- Removed `slds-text-title_caps` from menu headers.

## 2.7.1

### Fixed

- Remove `font-weight: 300` from app title to increase legibility

## 2.7.0

### Changed

- Overflow menu on navigation item no longer opens on hover.
- Added the `slds-indicator-container` class to be used whenever tabs and menu items have unread or unsaved indicators.
  - The `slds-indicator_unsaved` abbreviation and/or the `slds-indicator_unsaved` span should always be contained *within* a `<span>` with class `slds-indicator-container`.
  - This class preserves spacing between the indicators and the tab/menu text when no icon is present by adding a margin-right.
  - If the indicator container is empty, no margin-right is added.

### Fixed

- HTML validation error on tabbed navigation indicators, swapped a `div` for a `span`
