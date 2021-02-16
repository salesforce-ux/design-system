<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Builder Header Release Notes

<!-- ## [Unreleased] -->

## 2.15.0

### Changed

- Updates to top bar:
  - Changed the color of the border separators to `$color-background-inverse`.
  - On `:hover` and `:focus` for `.slds-builder-header__item-action`:
    - Changed `background-color` to `$color-background-inverse`
    - Changed `color` to `$color-gray-1`
  - "Back" action moved to the left-hand side and visible text was removed
  - "Link" renamed to "Settings" and moved to the right-hand side next to "Help"

### Added

- Additions to toolbar:
  - Icons for canvas settings and toggling a panel
  - Status text and alerts that convey status, warnings, and errors
  - Popovers for alerts
  - Tooltip for the "Back" action
- New examples for "Back" action tooltip, status text, and alerts.
- Added `aria-expanded` to dropdown item

## 2.14.0

### Fixed

- Fixed issue with non-link text color in Builder Header menu dropdowns by adding default text color
  - Added an example with an open menu to demonstrate this pattern

## 2.9.0

### Fixed

- Fixed issue where page type content was not being truncated
  - Added `slds-has-flexi-truncate` to `slds-builder-header__item` element
  - Added `<span class="slds-truncate" title="...">` inside of `<h1 class="slds-builder-header__item-label">`

## 2.7.0

### Added

- Updated design guidelines and design notes.
