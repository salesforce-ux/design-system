<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Badges Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added CSS Custom Property reassignments for variants and states (e.g., focus, active, hover).

## 2.13.3

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-badge-color-text` => `--sds-c-badge-text-color`.

## 2.13.0

### Added

- Enabled styling hooks for badge. See badge's styling hooks overview table for a full listing of the currently available hooks.

### Fixed

- Fixed inconsistent heights between variants when border isn't present.

## 2.11.5

- Added examples for communicating Success, Warning and Error states.

## 2.11.0

### Changed

- Added `display: inline-flex` and `align-items: center` to badge to center content vertically

## 2.8.0

### Added

- Examples for all color variants with left and right aligned placement.
- Wrapping `slds-badge__icon` element to position and color icons.

### Changed

- Increased font size to 12px, applied bold font weight, and removed uppercase styling in `.slds-badge`.

## 2.7.0

### Fixed

- Nested `inline` and `inline-block` elements now receive the proper vertical alignment.
