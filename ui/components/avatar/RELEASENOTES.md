<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Avatar Release Notes

## 2.19

### Fixed

- Fixed base group image, group image medium and group image small hardcoded image paths

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks
- Added CSS Custom Property reassignments for variants

<!-- ## [Unreleased] -->

## 2.13.3

### Changed

- Treat Styling Hooks targeting text color as an element, previously referred to as a property. e.g. `--sds-c-avatar-initials-color-text` => `--sds-c-avatar-initials-text-color`.

## 2.13.0

### Added

- Enabled styling hooks for avatar. See avatar's styling hooks overview table for a full listing of the currently available hooks.

## 2.7.0

### Changed

- Changed HTML so the Avatar component can be slotted inside of an `href` vs being the `href` element
