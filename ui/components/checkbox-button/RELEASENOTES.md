<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Checkbox Button Release Notes

<!-- ## [Unreleased] -->

## 2.11.6

### Added

- Added documentation and examples for mobile/touch context

## 2.11.0

### Added

- Introduced new base blueprint for the checkbox button called `.slds-checkbox-button` which improves icon customization, state handling, and blueprint composition.

### Changed

- `.slds-checkbox_add-button` has been deprecated in favor of `.slds-checkbox-button` (see 'Added' above)
- Documentation has been updated to reflect the new `.slds-checkbox-button` blueprint
- Updated the background color of the checkbox button's selected state from `$color-background-success` to `$color-brand-darker` since a checkbox button is meant to communicate a selected state, not success.

## 2.10.0

### Changed

- For touch devices, increase size of checkbox-button to `$square-tappable` (2.75rem) and center children with flex properties

## 2.7.0

### Added

- Added an example of a checked-and-disabled checkbox button.

### Fixed

- Increased the contrast between the plus symbol and background color for the disabled checkbox button.
