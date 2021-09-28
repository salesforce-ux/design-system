<!-- Release notes authoring guidelines: http://keepachangelog.com/ -->

# Textarea Release Notes

<!-- ## [Unreleased] -->

## 2.17.0

### Added

- Added `slds` as the default namespace with `sds` fallbacks for Styling Hooks.
- Added CSS Custom Property reassignments for variants and states

## 2.14.0

### Added

- Enabled styling hooks for textarea. See textarea's styling hooks overview table for a full listing of the currently available hooks.

## 2.13.1

### Fixed

- Small improvements to the UI text.

## 2.7.0

### Fixed

- Removed `box-shadow` added by Firefox for all required fields.
  - By default, Firefox was adding a `box-shadow` to all fields marked `required`. This has now been normalized to match the styling in all other browsers.
